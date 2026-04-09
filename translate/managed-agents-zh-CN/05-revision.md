# 托管式 Agent 的扩展：把“大脑”与“手”解耦

> 原文来源：[Scaling Managed Agents: Decoupling the brain from the hands](https://www.anthropic.com/engineering/managed-agents)
>
> 发布机构：Anthropic Engineering

_想快速上手 Claude Managed Agents，可先看 [官方文档](https://platform.claude.com/docs/en/managed-agents/overview)。_

在 Anthropic 工程博客里，一个持续出现的主题是：如何[构建高效 Agent](https://www.anthropic.com/engineering/building-effective-agents)、如何为[长时运行任务](https://www.anthropic.com/engineering/harness-design-long-running-apps)设计[运行编排（harness）](https://www.staging.ant.dev/engineering/effective-harnesses-for-long-running-agents)。这些实践背后有一条共同线索：harness 本质上是在编码“Claude 单靠自己还做不到什么”的假设。但随着模型持续进步，这些假设会越来越容易[过时](http://www.incompleteideas.net/IncIdeas/BitterLesson.html)，所以必须被反复质疑。

举个例子：我们此前[观察到](https://www.anthropic.com/engineering/harness-design-long-running-apps)，Claude Sonnet 4.5 在上下文接近上限时会提前收尾任务，这种行为有时被称为“context anxiety（上下文焦虑）”。为此我们在 harness 里加入了 context reset（上下文重置）。但当同一套 harness 迁移到 Claude Opus 4.5 后，这个问题不见了，context reset 反而成了多余负担。

我们预期 harness 还会持续演进。因此我们构建了 Managed Agents：Claude Platform 上的一项托管服务。它通过一组精简接口，代你运行长时任务 agent；这些接口被设计为能跨越具体实现而长期存在，包括我们今天正在使用的实现。

要构建 Managed Agents，我们需要解决一个计算机领域里的老问题：如何为“[尚未被想到的程序](http://www.catb.org/esr/writings/taoup/html/ch03s01.html)”设计系统。几十年前，操作系统通过把硬件虚拟化为抽象（如 _process_、_file_）解决了类似问题。这些抽象足够通用，哪怕未来程序形态尚不存在也能适配。硬件会变，但抽象能延续：`read()` 不关心它读的是 1970 年代的磁盘阵列还是现代 SSD。上层接口稳定，底层实现可以自由更换。

Managed Agents 采用同样的思路。我们把 agent 的关键部件虚拟化为三类：session（会话，记录全部事件的追加日志）、harness（调用 Claude 并把 Claude 的工具调用路由到对应基础设施的循环）、sandbox（Claude 执行代码与编辑文件的运行环境）。这样每一层都可以独立替换而不互相干扰。我们对接口形状有明确主张，但不对接口背后的具体实现设限。

![Image 1](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F903b624ada206b10753a24c6a1367e74a869165d-1080x1080.png&w=3840&q=75)

## 不要把系统养成“宠物”

一开始，我们把所有 agent 组件都放进同一个容器里，这意味着 session、agent harness 与 sandbox 共享同一环境。这么做确实有好处，比如文件编辑是直接系统调用，也不需要设计服务边界。

但把一切耦合进一个容器后，我们遇到了基础设施领域的老问题：系统被我们养成了一个[“宠物”（pet）](https://cloudscaling.com/blog/cloud-computing/the-history-of-pets-vs-cattle/)。在“宠物 vs 牲畜（cattle）”的类比里，宠物是被命名、被精心照顾、不能失去的个体；牲畜则是可替换的。我们的服务器就成了宠物：容器一旦失败，会话就丢失；容器一旦无响应，就得人工抢救。

“抢救容器”意味着我们要排查那些卡死、无响应的会话。我们唯一的观察窗口是 WebSocket 事件流，但它无法告诉我们失败发生在“哪里”，于是 harness 的 bug、事件流丢包、容器离线，看起来全都一样。要查清原因，工程师只能进容器开 shell；而这个容器往往又包含用户数据，这基本等于我们在调试上被束住了手脚。

第二个问题是：harness 默认 Claude 处理的资源就和它自己在同一个容器里。当客户希望把 Claude 连接到他们自己的 VPC 时，就只能二选一：要么和我们的网络打通 peering，要么把我们的 harness 部署到他们自己的环境。一个写死在 harness 里的假设，变成了接入异构基础设施时的障碍。

我们的解法是，把我们所说的“大脑”（Claude 与其 harness）同时从“手”（执行动作的 sandbox 和工具）与“会话”（session 事件日志）中解耦。三者都变成接口：彼此只做少量假设，并且可以独立失败、独立替换。

**harness 离开容器。** 当“大脑”和“手”解耦后，harness 不再驻留在容器内。它像调用其他工具一样调用容器：`execute(name, input) -> string`。容器因此变成“牲畜”。容器挂了，harness 会把它当成工具调用错误并反馈给 Claude。若 Claude 选择重试，就可以通过标准流程重建新容器：`provision({resources})`。我们不再需要人工把故障容器“救活”。

**harness 故障恢复。** harness 本身也变成“牲畜”。由于 session 日志位于 harness 之外，harness 崩溃时不需要保活任何本地状态。某个 harness 失败后，新实例可用 `wake(sessionId)` 启动，再通过 `getSession(id)` 取回事件日志，从最后一条事件继续执行。在 agent 循环中，harness 通过 `emitEvent(id, event)` 持续写入 session，保证事件可持久恢复。

![Image 2](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F73e900af5b9d6ed8c64db0a8e74d4465963556b7-1640x1596.png&w=3840&q=75)

**安全边界。** 在最初耦合设计里，Claude 生成的任何不受信代码都与凭证运行在同一容器内。于是提示注入攻击只需要诱导 Claude 读取自身环境变量。一旦攻击者拿到这些 token，就能创建新的、几乎无限制的会话并继续委派任务。缩小 token 权限范围当然能缓解，但这本质上仍依赖一个假设：Claude 在受限 token 下“做不到什么”。而 Claude 会越来越强。结构性的修复方法，是让 token 永远无法被 Claude 生成代码所在的 sandbox 触达。

我们用了两种模式保证这一点。认证信息要么绑定在资源本身，要么保存在 sandbox 外部的密钥库（vault）里。以 Git 为例，我们在 sandbox 初始化时使用仓库访问 token 完成 clone，并把认证写入本地 git remote；这样 sandbox 内可以直接 `push` 和 `pull`，但 agent 全程不接触 token 本体。对自定义工具，我们支持 MCP，并把 OAuth token 存在安全 vault 中。Claude 通过专用代理调用 MCP 工具；代理收到会话关联 token 后，从 vault 取对应凭证，再向外部服务发请求。harness 本身从不感知任何凭证内容。

## Session 不是 Claude 的上下文窗口

长时任务经常超出 Claude 的上下文窗口长度，而常见应对方式都涉及“不可逆地决定保留什么、丢弃什么”。我们在此前关于[上下文工程](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)的实践中讨论过这些技术。比如 compaction（压缩）允许 Claude 保存上下文窗口摘要，memory tool 允许 Claude 把上下文写入文件，从而实现跨会话学习；这通常与 context trimming（上下文裁剪）搭配使用，选择性删除旧工具结果或思考块等 token。

但这种对上下文的“不可逆保留/丢弃”决策会引入失败风险。因为你很难提前知道未来轮次真正需要哪些 token。若消息在 compaction 阶段被改写，harness 会把原消息从 Claude 的上下文窗口移除；只有当这些原消息被另行存储时，才有机会恢复。此前研究[已经探索](https://arxiv.org/pdf/2512.24601)另一条路线：把上下文存为一个位于上下文窗口之外的对象。比如把上下文放在 REPL 对象中，让 LLM 通过编写代码来过滤、切片访问。

![Image 3](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2Fcf0719d7832b1f577b7393c84a7c53eecc725ca4-760x200.png&w=1920&q=75)

在 Managed Agents 中，session 同样承担“窗口外上下文对象”的角色。但它不是存进 sandbox 或 REPL，而是持久写入 session 日志。`getEvents()` 这个接口允许“大脑”通过事件流的位置切片来查询上下文。它可以灵活使用：从上次读到的位置继续、在某个关键时刻前回卷几条事件查看前因，或在某个动作前重新阅读上下文。

此外，取出的事件还可以先在 harness 层做转换，再送入 Claude 的上下文窗口。转换策略完全由 harness 决定，包括为提升 prompt cache 命中率而做的上下文重组，或其他上下文工程策略。我们把“可恢复的上下文存储”（session）与“任意上下文管理策略”（harness）拆开，是因为我们无法预测未来模型究竟需要哪种上下文工程。接口层只保证 session 可持久、可查询，而具体管理策略留给 harness 演进。

## 多个大脑，多个手

**多个大脑。** “大脑”与“手”解耦后，我们很早期的一项客户痛点被直接解决。此前，若团队要让 Claude 在其自有 VPC 资源上工作，唯一方式是与我们网络做 peering，因为承载 harness 的容器默认所有资源都在它旁边。harness 一旦离开容器，这个假设就消失了。

同一个改动还带来了性能收益。最初把大脑放进容器时，“多个大脑”就意味着“多个容器”。每个大脑都要先等对应容器完成 provisioning 才能开始推理；每个会话都要预付完整的容器启动成本。即便某些会话根本不会用到 sandbox，也必须先 clone 仓库、启动进程、从服务器拉取待处理事件。

这段“无效等待”会体现在 TTFT（time-to-first-token）上，也就是会话从接收任务到产出首个 token 的延迟。TTFT 是用户体感最强的延迟。

当大脑与手解耦后，容器改为由大脑通过工具调用按需创建：`execute(name, input) -> string`。因此，不需要容器的会话不必为容器等待。调度层一旦从 session 日志拉到待处理事件，推理即可开始。基于这套架构，我们的 TTFT p50 约下降 60%，p95 超过 90%。要扩展到“多个大脑”，本质上只需启动更多无状态 harness，并仅在需要时连接到“手”。

**多个手。** 我们也希望每个大脑都能连接到多个手。现实里这意味着 Claude 必须在多个执行环境间做推理，并决定把任务发往何处；这比只操作单一 shell 的认知负担更高。我们最初把大脑放在单容器内，是因为早期模型还不具备这种能力。随着模型智能提升，单容器反而成了限制：只要该容器失败，大脑伸向所有“手”的状态都会一起丢失。

把大脑与手解耦后，每个手都可抽象成工具 `execute(name, input) -> string`：输入“名字 + 参数”，返回字符串。这个接口既支持自定义工具，也支持任意 MCP server 和我们的自有工具。harness 无需知道 sandbox 背后到底是容器、手机，还是 Pokemon 模拟器。并且，由于任何手都不再耦合到某个固定大脑，不同大脑之间还可以相互传递“手”。

![Image 4](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F4f67b1c10566552aec514a716ea43544ab330e0b-668x243.png&w=1920&q=75)

## 结语

我们面对的是一个经典挑战：如何为“尚未被想到的程序”设计系统。操作系统之所以能历经数十年演进，是因为它把硬件虚拟化为足够通用的抽象，去容纳当时尚不存在的程序形态。通过 Managed Agents，我们也在尝试做类似事情：设计一套能容纳未来 harness、sandbox 或其他 Claude 周边组件的系统。

Managed Agents 可以理解为一个“元 harness（meta-harness）”：它不预设未来 Claude 一定需要哪一种具体 harness，而是提供通用接口，容纳多种 harness 并存。比如 Claude Code 是我们在大量任务中广泛使用的优秀 harness；我们也验证了面向特定任务的专用 harness 在窄域里更有优势。Managed Agents 的目标，是让这些形态都能随着 Claude 智能进化而持续适配。

所谓元 harness 设计，意味着我们会对 Claude 周围的接口做明确主张：我们预计 Claude 需要操控状态（session）与执行计算（sandbox）的能力；也预计它需要扩展到“多个大脑、多个手”。我们因此把这些接口设计成可长期、可靠、安全运行。但我们不会对未来 Claude 需要多少个大脑、多少个手、它们位于何处做任何硬性假设。

## 致谢

本文由 Lance Martin、Gabe Cemaj、Michael Cohen 撰写。特别感谢 Agents API 团队与 Jake Eaton 的贡献。

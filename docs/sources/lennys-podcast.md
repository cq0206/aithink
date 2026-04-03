# 我在 Lenny 播客聊 Agent 式工程：要点摘录

> 说明：本文为 Simon Willison 原文的完整中文整理版，保留“分节标题 + 原话摘录 + 评论链接”的结构，便于后续检索和回看。
>
> 原文来源：[Highlights from my conversation about agentic engineering on Lenny’s Podcast](https://simonwillison.net/2026/Apr/2/lennys-podcast/)

发布日期：2026-04-02  
作者：Simon Willison

我做客了 Lenny Rachitsky 的播客节目，主题是：
[An AI state of the union: We’ve passed the inflection point, dark factories are coming, and automation timelines](https://www.lennysnewsletter.com/p/an-ai-state-of-the-union)

收听地址：
- [YouTube](https://youtu.be/wc8FBhQtdsA)
- [Spotify](https://open.spotify.com/episode/0DVjwLT6wgtscdB78Qf1BQ)
- [Apple Podcasts](https://podcasts.apple.com/us/podcast/an-ai-state-of-the-union-weve-passed-the/id1627920305?i=1000758850377)

## 十一月拐点

> [4:19](https://youtu.be/wc8FBhQtdsA?t=269)

Simon 认为，2025 年 11 月 GPT-5.1 与 Claude Opus 4.5 的出现是关键拐点：
过去是“多数时候能跑，但你得盯得很紧”；现在是“绝大多数时候，它真的会按你的要求完成”。

这带来的变化不是线性的，而是工作流级别的变化：你可以直接让代理去搭一个完整应用，拿回来的不再是“完全不可用的代码垃圾”。

## 软件工程师是其他信息工作者的风向标

> [5:49](https://youtu.be/wc8FBhQtdsA?t=349)

他说自己一天能产出 1 万行代码，而且大部分可用。问题不再是“写不写得出来”，而是“怎么从大部分可用，走到稳定可用”。

代码之所以先被冲击，是因为它相对容易验证：能运行就是能运行。
但论文、法律文书、分析报告这类文本型知识工作，更难判断“是否真的做对了”。

这也是为什么工程团队正在先行经历组织与角色重构，其他行业会随后跟上。

## 我在手机上写了很多代码

> [8:19](https://youtu.be/wc8FBhQtdsA?t=499)

Simon 说自己经常用手机写代码，遛狗时都能推进工作。
他主要用 Claude iPhone App，包括常规聊天以及 Web 端 Claude Code 的远程控制。

## 负责任的 vibe coding

> [9:55](https://youtu.be/wc8FBhQtdsA?t=595)

如果是给自己用、出 bug 主要伤到自己，可以更激进地实验；
一旦交付给别人使用，错误可能影响他人，就必须切换到更严格的工程纪律与审查流程。

相关延伸：[When is it OK to vibe code?](https://simonwillison.net/2025/Mar/19/vibe-coding/#when-is-it-ok-to-vibe-code-)

## 黑灯工厂与 StrongDM

> [12:49](https://youtu.be/wc8FBhQtdsA?t=769)

“黑灯工厂”来自自动化制造：如果流程高度自动化到不需要人，就可以关灯运行。
Simon 讨论的是软件领域里的对应形态：
- 规则 1：尽量不手敲代码（由模型执行重构、改名、补丁）
- 规则 2：甚至减少人类逐行读代码

他提到 StrongDM 在这条路上已经有实际探索。

## 瓶颈已经转移到测试

> [21:27](https://youtu.be/wc8FBhQtdsA?t=1287)

过去“从需求到可运行版本”可能要几周；现在可能只要几小时。
真正慢的部分变成了：
- 假设验证
- 用户测试
- 方案比较

他建议在设计功能时先做多个原型，因为原型成本显著下降。

## 这套工作方式很消耗

> [26:25](https://youtu.be/wc8FBhQtdsA?t=1585)

他直说：高强度并行使用编码代理非常消耗心智。
工程师需要学习新的“可持续边界”，否则很容易出现长期熬夜、持续加码、接近成瘾的行为模式。

## 中断成本明显下降

> [45:16](https://youtu.be/wc8FBhQtdsA?t=2716)

传统编程强调连续 2-4 小时不被打断；
现在更多是“每隔几分钟给代理一次高质量指令”，然后切回其他事务。
这让工程师比过去更“可中断”。

## 我的软件估时能力失灵了

> [28:19](https://youtu.be/wc8FBhQtdsA?t=1699)

25 年形成的工期直觉正在失效。
很多过去看起来“两周起步”的任务，现在可能 20 分钟就能跑出结果。
这导致个人与团队都在重建任务评估体系。

他还提到很多人把十几年没完成的 side project 在几个月内清空，甚至因此出现“清空待办后的失落感”。

## 中间层工程师处境最难

> [29:29](https://youtu.be/wc8FBhQtdsA?t=1769)

一个有代表性的观点是：
- 资深工程师被放大（经验更值钱）
- 新人也可能受益（上手门槛降低）
- 中间层最尴尬（还没到“可放大”的成熟度）

他的建议不是回避，而是主动利用工具放大自己的主体性（agency）：
不是把判断外包给 AI，而是让 AI 帮你更快学习、更快试错、更快承担复杂项目。

## 评估软件变得更难

现在做出“看起来像成熟项目”的仓库变得很容易：文档、测试、CI 都能快速补齐。
但“看起来像”不等于“真的可信”。

Simon 的标准很朴素：
> 他更相信那些作者自己长期使用过几个月的软件。

## “AI 工具很容易用”是误解

> [41:31](https://youtu.be/wc8FBhQtdsA?t=2491)

它并不容易。
真正高效使用这些工具，依然需要大量练习、失败案例积累和方法迭代。

## 编码代理已经能用于安全研究

> [19:04](https://youtu.be/wc8FBhQtdsA?t=1144)

过去 3-6 个月，编码代理在安全研究上的可用性明显提升。
与此同时，开源维护者也面临大量“格式漂亮但未验证”的垃圾漏洞报告。

他强调正确做法是：像 Anthropic 与 Firefox 那样，先做严格验证，再提交安全问题。

## OpenClaw

播客里也聊到了 OpenClaw：
即便搭建并不简单、还有明显安全争议，仍有大量用户愿意折腾，这说明“个人数字助手”需求非常真实。

Simon 提到一个时间线：从 2025-11-25 第一行代码，到超级碗阶段的相关广告曝光，周期极短。

## 记者为什么更能驾驭不可靠来源

结合他在数据新闻工具 Datasette 的实践，他给出一个很有意思的判断：
新闻工作者天然擅长和“不可靠信源”打交道。

只要把 AI 当成“又一个需要交叉验证的来源”，而不是事实终点，记者反而比很多职业更容易建立正确使用姿势。

## 鹈鹕骑自行车基准

他再次提到那个著名“鹈鹕骑车”基准：
模型在这类看似荒诞任务上的表现，和其整体能力常常呈现相关性。

同时他也强调，AI 领域本身就有强烈的荒诞喜剧感：
昂贵、耗电、最先进的系统，画一只骑车鹈鹕时有时仍像五岁小孩手绘。

## 最后：关于鹦鹉的好消息

他用一个温暖结尾收束节目：
新西兰珍稀鹦鹉 Kākāpō（鸮鹦鹉）在 2026 年迎来不错繁殖季。
此前因为树种结实周期，已经多年没有新幼鸟；今年出现了“久违的新增雏鸟”。

直播链接：
[Watch Rakiura on her nest with two chicks](https://www.youtube.com/live/LDSWtyU6-Lg)

## YouTube 章节（译）

- [00:00](https://www.youtube.com/watch?v=wc8FBhQtdsA)：Simon Willison 介绍
- [02:40](https://www.youtube.com/watch?v=wc8FBhQtdsA&t=160s)：2025 年 11 月拐点
- [08:01](https://www.youtube.com/watch?v=wc8FBhQtdsA&t=481s)：AI 编码当前可达能力
- [10:42](https://www.youtube.com/watch?v=wc8FBhQtdsA&t=642s)：vibe coding 与 Agent 式工程
- [13:57](https://www.youtube.com/watch?v=wc8FBhQtdsA&t=837s)：黑灯工厂模式
- [20:41](https://www.youtube.com/watch?v=wc8FBhQtdsA&t=1241s)：瓶颈迁移
- [23:36](https://www.youtube.com/watch?v=wc8FBhQtdsA&t=1416s)：人类大脑仍最有价值的部分
- [25:32](https://www.youtube.com/watch?v=wc8FBhQtdsA&t=1532s)：软件工程师的防守与转型
- [29:12](https://www.youtube.com/watch?v=wc8FBhQtdsA&t=1752s)：为什么资深工程师更受益
- [30:48](https://www.youtube.com/watch?v=wc8FBhQtdsA&t=1848s)：如何避免“长期下层化”
- [33:52](https://www.youtube.com/watch?v=wc8FBhQtdsA&t=2032s)：用 AI 放大个人能力
- [35:12](https://www.youtube.com/watch?v=wc8FBhQtdsA&t=2112s)：为什么 Simon 说自己反而更累
- [37:23](https://www.youtube.com/watch?v=wc8FBhQtdsA&t=2243s)：2022 年前人写代码的市场价值
- [40:01](https://www.youtube.com/watch?v=wc8FBhQtdsA&t=2401s)：预测：2026 年底 50% 工程师将写出 95% AI 生成代码
- [44:34](https://www.youtube.com/watch?v=wc8FBhQtdsA&t=2674s)：低成本代码的系统性影响
- [48:27](https://www.youtube.com/watch?v=wc8FBhQtdsA&t=2907s)：Simon 的 AI 工具栈
- [54:08](https://www.youtube.com/watch?v=wc8FBhQtdsA&t=3248s)：如何用 AI 做研究
- [55:12](https://www.youtube.com/watch?v=wc8FBhQtdsA&t=3312s)：鹈鹕骑车基准
- [59:01](https://www.youtube.com/watch?v=wc8FBhQtdsA&t=3541s)：AI 的内在荒诞感
- [1:00:52](https://www.youtube.com/watch?v=wc8FBhQtdsA&t=3652s)：囤积“我会做”的事情
- [1:08:21](https://www.youtube.com/watch?v=wc8FBhQtdsA&t=4101s)：用红绿 TDD 模式提升 AI 代码质量
- [1:14:43](https://www.youtube.com/watch?v=wc8FBhQtdsA&t=4483s)：从高质量模板启动项目
- [1:16:31](https://www.youtube.com/watch?v=wc8FBhQtdsA&t=4591s)：致命三联与提示注入
- [1:21:53](https://www.youtube.com/watch?v=wc8FBhQtdsA&t=4913s)：为什么 97% 准确率仍不够
- [1:25:19](https://www.youtube.com/watch?v=wc8FBhQtdsA&t=5119s)：偏差常态化
- [1:28:32](https://www.youtube.com/watch?v=wc8FBhQtdsA&t=5312s)：OpenClaw：被忽视的安全风险
- [1:34:22](https://www.youtube.com/watch?v=wc8FBhQtdsA&t=5662s)：Simon 的下一步
- [1:36:47](https://www.youtube.com/watch?v=wc8FBhQtdsA&t=5807s)：零交付咨询
- [1:38:05](https://www.youtube.com/watch?v=wc8FBhQtdsA&t=5885s)：关于 Kākāpō 的好消息

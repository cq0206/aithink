# Claude Code 专题

> 这个模块专门收录 `Claude Code` 相关的高质量内容，包括源码架构解析、可视化讲解、系统设计拆解，以及后续我们整理的实战文章。

## 为什么单独做一个模块

Claude Code 已经不是“一个会写代码的 CLI”这么简单了。
它更像一套完整的 Agent runtime：有主循环、有工具治理、有多 Agent 分工、有安全层、有上下文压缩，也有产品级生命周期管理。

如果把这些内容散落在普通来源页里，后续会越来越难查。单独做专题模块，更适合长期积累。

## 当前已收录

1. [Claude Code 源码架构深度解析 V2.0](/sources/claude-code-architecture-v2)
2. [Harness Engineering：Claude Code 设计指南](/sources/harness-book-claude-code-guide)
3. [Claude Code 和 Codex 的 Harness 设计哲学](/sources/harness-book-claude-code-vs-codex)

## 章节精读系列

### 围绕《Harness Engineering：Claude Code 设计指南》

1. [精读 1：为什么 Prompt 不够，控制面才是 Claude Code 的骨架](/sources/harness-claude-control-plane)
2. [精读 2：Query Loop、工具权限与中断，Claude Code 如何持续接管工作流](/sources/harness-claude-query-loop)
3. [精读 3：恢复、验证与团队制度，Claude Code 为什么不只是个人工具](/sources/harness-claude-recovery-and-team)

### 围绕《Claude Code 和 Codex 的 Harness 设计哲学》

1. [精读 4：两种控制面，Claude Code 与 Codex 到底从哪里安放秩序](/sources/harness-compare-control-surfaces)
2. [精读 5：运行时治理，主循环、沙箱、技能与验证如何协同](/sources/harness-compare-runtime-governance)
3. [精读 6：如何选型与自建，从比较走向工程决策](/sources/harness-compare-build-strategy)

## 外部推荐

1. [ccunpacked.dev](https://ccunpacked.dev)
2. [wquguru/harness-books](https://github.com/wquguru/harness-books)

## 为什么推荐 `ccunpacked.dev`

这个站做得很适合作为 Claude Code 的“第一眼解释器”。

- 可视化做得清楚，尤其适合先建立整体理解
- `Agent Loop` 动画很直观，比纯文字更容易理解运行时是怎么循环起来的
- 适合先看结构，再回来看源码或长文解析

## 为什么推荐 `harness-books`

这个仓库不是“收集资料”，而是在系统化讨论 `Harness Engineering`。

- 它把 Claude Code 放回到 `control plane`、`query loop`、权限、恢复、验证和本地治理这些结构里理解
- 第一本文档聚焦 `Claude Code` 本身
- 第二本文档直接比较 `Claude Code` 和 `Codex` 的 harness 设计哲学
- 如果你关心的不只是功能，而是“一个 coding agent 到底靠什么维持秩序”，这个仓库非常值得读

对我们这个专题来说，它特别有价值，因为它把“工具能力”往上提了一层，讨论的是系统如何组织约束与后果控制。

## 我们在站内怎么处理这两本书

这两本书目前没有看到明确的开源转载许可证，所以这里不直接镜像全文，而是做成两篇站内导读，保留最有价值的阅读入口：

1. [Harness Engineering：Claude Code 设计指南](/sources/harness-book-claude-code-guide)
2. [Claude Code 和 Codex 的 Harness 设计哲学](/sources/harness-book-claude-code-vs-codex)

这两篇导读里已经把核心问题、章节地图、推荐读法和原始阅读入口整理好了。这样既能沉淀到 `aithink` 里，也能保持版权边界清晰。

## 推荐阅读顺序

1. 先看 [ccunpacked.dev](https://ccunpacked.dev)，建立整体脑图。
2. 再读 [Claude Code 源码架构深度解析 V2.0](/sources/claude-code-architecture-v2)，把主循环、工具系统、多 Agent 和安全层吃透。
3. 再读 [Harness Engineering：Claude Code 设计指南](/sources/harness-book-claude-code-guide)，把 Claude Code 放回更大的 harness 语境里理解。
4. 然后顺着三篇精读，把控制面、主循环、恢复和团队制度串起来。
5. 接着读 [Claude Code 和 Codex 的 Harness 设计哲学](/sources/harness-book-claude-code-vs-codex)，建立对不同系统分歧的判断力。
6. 最后读三篇比较精读，把这些分歧转成你自己的选型标准。

## 这个模块后续会放什么

1. Claude Code 架构和运行时分析
2. Claude Code 的技能系统、工具系统、Hook 系统整理
3. Claude Code 与其他 coding agent 的对比
4. Claude Code 实战工作流和最佳实践

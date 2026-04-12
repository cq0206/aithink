<div class="topic-hero">
  <span class="section-kicker">Topic Module</span>
  <h1>Claude Code 专题</h1>
  <p>这个专题不是单纯收一批 Claude Code 相关文章，而是围绕 <code>coding agent runtime</code>、<code>harness engineering</code>、运行时治理和系统设计分歧，整理出一条适合连续阅读的路径。</p>
</div>

## 先给一个判断

<div class="home-band">
  <p><strong>为什么 Claude Code 值得单独做一个专题：</strong> Claude Code 已经不是“一个会写代码的 CLI”这么简单了。它更像一套完整的 agent runtime：有主循环、有工具治理、有多 agent 分工、有安全层、有上下文压缩，也有产品级生命周期管理。把这些内容散落在普通来源页里，会越来越难查，也很难形成连续判断。</p>
</div>

## 这个专题适合谁

<div class="topic-meta-grid">
  <div class="topic-meta-card">
    <strong>正在使用 Claude Code 的人</strong>
    <p>如果你已经在用 Claude Code，但还没有形成清晰的系统心智模型，这个专题能帮你从“会用”走到“看懂为什么它能工作”。</p>
  </div>
  <div class="topic-meta-card">
    <strong>在做 Coding Agent 的人</strong>
    <p>如果你在做内部 agent、agent runtime 或代码辅助系统，这里最值得看的不是工具技巧，而是控制结构和运行时治理。</p>
  </div>
  <div class="topic-meta-card">
    <strong>在做平台选型的人</strong>
    <p>如果你关心 Claude Code、Codex 以及其他系统的设计分歧，这个专题能帮你把功能差异翻译成秩序差异。</p>
  </div>
</div>

## 推荐阅读路径

<div class="topic-roadmap">
  <span class="section-kicker">Reading Path</span>
  <ol>
    <li>先看 <a href="https://ccunpacked.dev">ccunpacked.dev</a>，建立 Claude Code 的整体脑图和第一眼直觉。</li>
    <li>再读 <a href="/sources/claude-code-architecture-v2">Claude Code 源码架构深度解析 V2.0</a>，把主循环、工具系统、多 agent 和安全层吃透。</li>
    <li>接着读 <a href="/sources/harness-book-claude-code-guide">Harness Engineering：Claude Code 设计指南</a>，把 Claude Code 放回更大的 harness 语境里理解。</li>
    <li>然后顺着三篇精读，把控制面、主循环、恢复和团队制度串起来。</li>
    <li>最后读 <a href="/sources/harness-book-claude-code-vs-codex">Claude Code 和 Codex 的 Harness 设计哲学</a> 与对应比较精读，把这些分歧转成你自己的选型标准。</li>
  </ol>
</div>

## 核心入口

<div class="topic-section-grid">
  <div class="topic-card">
    <span class="section-kicker">Core Read</span>
    <h3><a href="/sources/claude-code-architecture-v2">Claude Code 源码架构深度解析 V2.0</a></h3>
    <p>这是专题里最偏结构拆解的一篇，适合先把 Claude Code 当作一个真实运行时系统来看，而不是功能清单。</p>
  </div>
  <div class="topic-card">
    <span class="section-kicker">Book Guide</span>
    <h3><a href="/sources/harness-book-claude-code-guide">Harness Engineering：Claude Code 设计指南</a></h3>
    <p>这篇把 Claude Code 从“工具”抬升成“系统”，重点不在功能，而在控制面、权限、恢复、验证和团队制度。</p>
  </div>
  <div class="topic-card">
    <span class="section-kicker">Comparison</span>
    <h3><a href="/sources/harness-book-claude-code-vs-codex">Claude Code 和 Codex 的 Harness 设计哲学</a></h3>
    <p>如果你关心的不是“谁更强”，而是“秩序被安放在哪一层”，这篇是最自然的对照入口。</p>
  </div>
  <div class="topic-card">
    <span class="section-kicker">Framework</span>
    <h3><a href="/sources/harness-engineering-scalability-20260330">Harness Engineering 三维扩展框架（yage.ai）</a></h3>
    <p>这篇把 Claude Code、Codex、Aider 等工具拉到同一张坐标系里，适合做框架化比较。</p>
  </div>
</div>

## 章节精读系列

<div class="topic-section-grid">
  <div class="topic-card">
    <span class="section-kicker">Guide Series</span>
    <h3>围绕《Claude Code 设计指南》</h3>
    <ol>
      <li><a href="/sources/harness-claude-control-plane">精读 1：为什么 Prompt 不够，控制面才是 Claude Code 的骨架</a></li>
      <li><a href="/sources/harness-claude-query-loop">精读 2：Query Loop、工具权限与中断，Claude Code 如何持续接管工作流</a></li>
      <li><a href="/sources/harness-claude-recovery-and-team">精读 3：恢复、验证与团队制度，Claude Code 为什么不只是个人工具</a></li>
    </ol>
  </div>
  <div class="topic-card">
    <span class="section-kicker">Compare Series</span>
    <h3>围绕《Claude Code 和 Codex》</h3>
    <ol>
      <li><a href="/sources/harness-compare-control-surfaces">精读 4：两种控制面，Claude Code 与 Codex 到底从哪里安放秩序</a></li>
      <li><a href="/sources/harness-compare-runtime-governance">精读 5：运行时治理，主循环、沙箱、技能与验证如何协同</a></li>
      <li><a href="/sources/harness-compare-build-strategy">精读 6：如何选型与自建，从比较走向工程决策</a></li>
    </ol>
  </div>
</div>

## 外部资源

<div class="resource-grid">
  <div class="resource-card">
    <span class="section-kicker">Visual Explainer</span>
    <h3><a href="https://ccunpacked.dev">ccunpacked.dev</a></h3>
    <p>这个站特别适合作为 Claude Code 的“第一眼解释器”。最值得看的不是单个页面，而是它把运行时结构画得非常直观，尤其是 <code>Agent Loop</code> 动画。</p>
    <ul>
      <li>适合先建立整体理解</li>
      <li>动画比纯文字更容易形成直觉</li>
      <li>适合搭配源码解析一起看</li>
    </ul>
  </div>
  <div class="resource-card">
    <span class="section-kicker">External Library</span>
    <h3><a href="https://github.com/wquguru/harness-books">wquguru/harness-books</a></h3>
    <p>这个仓库不是“收集资料”，而是在系统化讨论 <code>Harness Engineering</code>。它把 Claude Code 放回 <code>control plane</code>、<code>query loop</code>、权限、恢复、验证和本地治理这些结构里理解。</p>
    <ul>
      <li>第一本文档聚焦 Claude Code 本身</li>
      <li>第二本文档直接比较 Claude Code 和 Codex</li>
      <li>适合关心“秩序如何被组织起来”的读者</li>
    </ul>
  </div>
</div>

## 版权处理方式

这两本书目前没有看到明确的开源转载许可证，所以站内不直接镜像全文，而是做成导读和精读系列，保留最有价值的阅读入口。这样既能沉淀到 `aithink` 里，也能保持版权边界清晰。

## 这个模块后续会放什么

<div class="topic-section-grid">
  <div class="topic-card wide">
    <span class="section-kicker">Next Additions</span>
    <ol>
      <li>Claude Code 的技能系统、工具系统、Hook 系统整理</li>
      <li>Claude Code 与其他 coding agent 的进一步对比</li>
      <li>Claude Code 实战工作流和最佳实践</li>
      <li>更多与 harness engineering 相关的结构化导读</li>
    </ol>
  </div>
</div>

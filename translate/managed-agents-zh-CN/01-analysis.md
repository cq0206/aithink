# Analysis

- Source: `https://www.anthropic.com/engineering/managed-agents`
- Source language: English
- Target language: `zh-CN`
- Mode: `refined`
- Audience: `general`
- Style: `storytelling`

## Content type

A technical engineering article describing architecture decisions for hosted long-running agents, with systems-design analogies and operational lessons.

## Tone

- Pragmatic and infrastructure-focused
- Explanatory, with concrete failures and fixes
- Opinionated about interfaces, neutral about implementations

## Translation priorities

1. Keep architecture concepts precise (`session`, `harness`, `sandbox`, `brain`, `hands`).
2. Preserve all key API/interface snippets and metrics (`execute`, `provision`, `wake`, `getSession`, `emitEvent`, TTFT).
3. Keep security model and failure-recovery details complete.
4. Make the OS abstraction analogy readable to Chinese technical readers without diluting meaning.

## Terminology decisions

- managed agents -> 托管式 Agent
- harness -> 运行编排（harness）
- session log -> 会话日志
- sandbox -> 沙箱 / sandbox
- pets vs cattle -> 宠物与牲畜
- context compaction -> 上下文压缩
- context trimming -> 上下文裁剪
- TTFT -> 首 token 时间（time-to-first-token）
- meta-harness -> 元 harness

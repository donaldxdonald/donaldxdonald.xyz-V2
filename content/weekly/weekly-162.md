---
title: '#162: DeepSeek-OCR, OpenAI Atlas, Claude Code on the Web…'
date: 2025-10-26 23:50
---



## 简讯

- Firefox 在 146 版本[也支持了 CSS `text-autospace` 属性](https://developer.mozilla.org/en-US/docs/Web/CSS/text-autospace)，支持 CJK 字符与非 CJK 字符间自动增加空白显示，优化 CJK 字体排版显示，自此，三大主流浏览器都支持了。
- 类似 Open AI 的 Codex 和 Google 的 Jules，[Anthropic 也推出了云端的 Coding Agent： Claude Code on the Web](https://www.anthropic.com/news/claude-code-on-the-web) 。
- [DeepSeek 发布了 DeepSeek-OCR](https://github.com/deepseek-ai/DeepSeek-OCR)，但其厉害的点在于作为一个 POV 验证 LLM 的输入基础单位应该是像素而不是 token ，因为用像素能携带更多信息。
- 最近赶上了新时代的浏览器大战，[OpenAI 发布了其 AI 浏览器 Atlas](https://openai.com/index/introducing-chatgpt-atlas/)，随后 Perplexity 宣布它们的 Comet 浏览器向所有人免费开放（还有佣金）。

## 有趣

- [Replacement AI](https://replacement.ai/)
  
    模拟 AI Saas 页面的一个讽刺 AI 替代人类的整活网站。
    

## 工具

- [kimi-cli](https://github.com/MoonshotAI/kimi-cli)
  
    Moonshot 也发布了其 Coding Agent，用 Python 写的，其它各家的实现有用 Rust, TS 和 Go 的。
    
- [Vitest 4.0](https://vitest.dev/blog/vitest-4)
  
    基于 Vite 的测试框架 Vite 最近更新到了 4.0 ，主要是 Browser Mode 稳定了，Browser Mode 就是通过调用真实的浏览器来跑 e2e 测试。[Angular 也用 Vitest 取代 Karma 作为新项目的默认 Test Runner](https://github.com/angular/angular-cli/pull/31578)。
    
- [Oxlint](https://voidzero.dev/posts/announcing-oxlint-js-plugins)
  
    Oxlint 在权衡性能和社区生态之间选择了社区生态，支持了 JS Plugin 。
    

## 文章

- [Unseeable prompt injections in screenshots: more vulnerabilities in Comet and other AI browsers](https://brave.com/blog/unseeable-prompt-injections/)
  
    现在市面上各种 Agentic Browser 都是通过截图来获取信息，然后就有出现无法被肉眼看到但是能被机器读取的 prompt 攻击风险。
    
- [Build Your Own Database](https://www.nan.fyi/database)
  
    一个互动式文章，介绍了如何从头构建一个键值型数据库，包括数据的持久化存储、高效检索、更新、删除以及如何通过索引和排序优化性能。
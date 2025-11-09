---
title: '#164: The Web ANimation Performance Tier List'
date: 2025-11-09 23:20
---



## 简讯

- [Apple 推出了网页版的 App Store](https://apps.apple.com/)，是用 Svelte 写的，之前 Apple Music 网页版也是 Svelte。（意料之外的是用了 Safari 26 才支持的 CSS Anchor Positioning）后续：Apple 把网站 source map 也一并传到生产环境上，导致网站源码被扒放在 GitHub，但是很快相关代码就被 Apple 出手因 DMCA 被下架了。
- Storybook 即将停止支持 CommonJS，[全面过渡到 ESM 模块系统](https://storybook.js.org/blog/storybook-is-going-esm-only/)。
- Firefox 推出了其吉祥物[小狐狸 Kit](https://x.com/OpenAIDevs/status/1986861734619947305)。
- Node.js 24 正式[进入 LTS 阶段了](https://nodesource.com/blog/nodejs-24-becomes-lts)。
- OpenAI 发布了[更小更便宜的代码生成模型：GPT-5-Codex-Mini](https://x.com/OpenAIDevs/status/1986861734619947305)。
- Apple 在纠结了 OpenAI 和 Anthropic 之后，[最终选择了每年向 Google 支付 10 亿美元用定制版的 Gemini 来为新 Siri 提供支持](https://www.theverge.com/news/814654/apple-intelligence-google-gemini-ai-siri)。
- 月之暗面[发布了新的模型：Kimi K2 Thinking](https://moonshotai.github.io/Kimi-K2/thinking.html)，继续刷新开源模型的能力。

## 有趣

- [linux-wasm](https://joelseverin.github.io/linux-wasm/)
  
    可以构建一个基于 WASM 在浏览器上运行的原生 Linux 操作系统，不是基于模拟器。
    

## 工具

- [Valdi](https://github.com/Snapchat/Valdi)
  
    Snapchat 开源了其跨平台 UI 框架，已于内部使用 8 年，Web 系跨端框架又迎来一名竞争者。
    
- [Metallic Effect Generator](https://design.dev/tools/metallic-effect-generator)
  
    一个金属效果 CSS 生成器。
    

## 文章

- [The Web Animation Performance Tier List](https://motion.dev/blog/web-animation-performance-tier-list)
  
    Motion 的作者 Matt 分享了 Web 动画性能的分级列表，介绍了不同动画技术的性能优劣，并提供了优化动画性能的策略和方法。
    
- [How we built OWL, the new architecture behind our ChatGPT-based browser, Atlas](https://openai.com/index/building-chatgpt-atlas)
  
    OpenAI 详细介绍了他们如何开发在 Atlas 浏览器里采用的 OWL 架构。
    
- [AI Broke Interviews](https://yusufaytas.com/ai-broke-interviews/)
  
    软件行业的技术面试在 AI 辅助工具出现后面临挑战，传统的面试方式被 AI 工具的完美答案所打破，导致面试过程中的真实性和公正性受到威胁。
    
- [The Weird Parts of position: sticky](https://frontendmasters.com/blog/the-weird-parts-of-position-sticky/)
  
    一些 `position: sticky` 的坑。
    
- [What even are Cloudflare Durable Objects?](https://boristane.com/blog/what-are-cloudflare-durable-objects)
  
    一篇介绍了 Cloudflare Durable Objects 的概念、特性、使用场景的文章。
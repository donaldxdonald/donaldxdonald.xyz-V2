---
title: '#150: Gemini CLI, Kimi K2, Grok4, Vercel acquires NuxtLabs…'
date: 2025-07-13 22:57
---



## 简讯

- 虽迟但到，继 Anthropic 推出 Claude Code 和 OpenAI 推出 Codex CLI 之后，[Google 也发布了 CLI Coding Agent ：gemini-cli](https://blog.google/technology/developers/introducing-gemini-cli-open-source-ai-agent/)。（免费且开源
- 之前一直传闻 OpenAI 打算收购 WindSurf ，现在最终消息就是 [WindSurf 的创始人被 Google 挖走到 DeepMind 去了](https://techcrunch.com/2025/07/11/windsurfs-ceo-goes-to-google-openais-acquisition-falls-apart/)。
- 月之暗面 Moonshot [发布了 1T 参数的开源模型 Kimi K2](https://moonshotai.github.io/Kimi-K2/)，代码生成和 Agentic 能力不错。
- [xAI 发布了 Grok 4。](https://x.ai/news/grok-4)（鉴定为和 Llama4 一样拉了坨大的
- [Meta 高薪挖走了 Apple 基础模型团队的一名华人高管。](https://www.macrumors.com/2025/07/10/meta-offered-apple-ai-executive-over-200-million/)（本就发展不快的 Apple AI 又受到了伤害
- [比尔盖茨和 Linus 碰面。](https://linuxiac.com/a-historic-photo-torvalds-and-gates-together/)（Windows 和 Linux 的历史性时刻。
- [visionOS 26 引入了 HTML `model` 元素](https://webkit.org/blog/17118/a-step-into-the-spatial-web-the-html-model-element-in-apple-vision-pro/)，使得网页能够更容易地展示 3D 内容。
- [图片格式 PNG 的规范在 20 年没变的情况下最近得到了更新](https://www.programmax.net/articles/png-is-back/)，支持了 HDR ，动画和 Exif 数据等等新特性。
- GitHub Copilot Chat 插件[现已正式开源](https://code.visualstudio.com/blogs/2025/06/30/openSourceAIEditorFirstMilestone)。
- 重磅：[Vercel 宣布收购 NuxtLabs (Nuxt 背后的公司)](https://nuxtlabs.com/)，届时 Vercel 拥有了 React , Vue 和 Svelte 三大派系的框架。
- [Cloudflare 推出了 “按次付费爬虫” 服务](https://blog.cloudflare.com/introducing-pay-per-crawl)，允许内容所有者对 AI 爬虫访问进行收费。（整挺好

## 有趣

- [the Web Chaos Graph](https://x.com/yoavbls/status/1829570644692123802)
  
    有人用图来展示目前 Web 工具生态的混乱（大乱斗）。
    

## 工具

- [tsgolint](https://github.com/typescript-eslint/tsgolint)
  
    typescript-eslint 团队紧跟 TypeScript 团队的步伐，尝试用 Go 移植 typescript-eslint 规则，Go 的原生速度加上没有了 TS AST 到 ESTree AST 的转换消耗，tsgolint 的速度比 eslint + typescript-eslint 要快上 20~40 倍。（太棒了，平时最卡就是你了
    
- [opencode](https://github.com/sst/opencode)
  
    开源版的 CLI Coding Agent，现在基本有啥火的商业软件，都会有 Open + 产品名的开源版出现。
    
- [OpenCut](https://github.com/OpenCut-app/OpenCut)
  
    作者表示看不惯 CapCut （剪映国际版）的乱收费行为，索性自己写一个开源版干翻它。（试了下，还挺早期，可以期待一下
    
- [harper](https://github.com/Automattic/harper)
  
    一个开源的 grammarly 替代品，用于英语语法检查。
    
- [pangolin](https://github.com/fosrl/pangolin)
  
    一个开源的 Cloudflare Tunnel 替代品。
    
- [fliiipbook](https://www.fliiipbook.com/)
  
    一个翻页动画的制作工具。
    
- [vecto3d](https://github.com/lakshaybhushan/vecto3d)
  
    将 SVG 转成 3D 模型。
    

## 文章

- [A short history of web bots and bot detection techniques](https://sinja.io/blog/bot-or-not)
  
    从最简单的网络机器人（bots）到复杂的机器行为分析技术的演变历程，以及网站如何通过各种技术手段来检测和防御这些 bots。
    
- [Recreating the bird animation from Swift.org](https://alexwlchan.net/2025/swift-bird-animation/)
  
    最近 Swift 官网的设计更新了，这里有一个复刻其动画的实践。
    
- [The New Skill in AI is Not Prompting, It's Context Engineering](https://www.philschmid.de/context-engineering)
  
    目前 LLM 领域正在从提示词工程转变到上下文工程。
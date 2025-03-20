---
title: '#137: Gemini updates, Gemma 3, tsgo…'
date: 2025-03-17 00:23
---



## 简讯

- Apple 的 [AI 优化版 Siri](https://www.reuters.com/technology/apple-says-some-ai-improvements-siri-delayed-2026-2025-03-07/) 要推迟到 2026 年了。
- Google 表示将在今年内[用 Gemini 全面取代 Google Assistant](https://blog.google/products/gemini/google-assistant-gemini-mobile/) 。
- Google 发布[新一代多模态开源模型 Gemma 3](https://ai.google.dev/gemma)，27B 的参数大小足以匹敌满血版 DeepSeek V3。
- Gemini 迎来了[一波更新](https://blog.google/products/gemini/new-gemini-app-features-march-2025/)： DeepResearch 提供给免费用户使用，新的 2.0 Flash Experimental 支持图片编辑。
- [OpenAI 游说白宫](https://openai.com/global-affairs/openai-proposals-for-the-us-ai-action-plan/)：既要放宽 AI 监管，又要打压 DeepSeek。
- TypeScript 之父 Anders [宣布了用 Go 实现](https://github.com/microsoft/typescript-go)的 typescript compiler：[tsgo](https://github.com/microsoft/typescript-go)，比 tsc 快 10 倍，计划在 Typescript 7 中正式上线。（不用自己的 C# 和更热门的 Rust 是因为把已有 ts 代码 port 到 go 最方便
- 微软的 AI 负责人 Mustafa Suleyman [正计划减少公司对 OpenAI 的依赖](https://techstartups.com/2025/03/07/microsoft-is-plotting-a-future-without-openai/)，并推动开发自家的 AI 模型。
- Chrome 135 [引入了 `command` 和 `commandfor` 属性](https://developer.chrome.com/blog/command-and-commandfor)，提供了一种声明式的方法来让按钮控制其他元素。

## 有趣

- [Same.new](https://same.new/)
  
    一键拷贝目标网站。
    

## 工具

- [filepizza](https://github.com/kern/filepizza)
  
    一个在网页里 p2p 传文件的工具。
    

## 文章

- [Here’s how I use LLMs to help me write code](https://simonwillison.net/2025/Mar/11/using-llms-for-code/)
  
    Simon Willison 分享了他使用大型语言模型来提高编程效率的方式。
    
- [How the Jotai Store API Is Inspired by the WeakMap API](https://newsletter.daishikato.com/p/how-the-jotai-store-api-is-inspired-by-the-weakmap-api)
  
    Daishi 分享 Jotai Store API 的设计灵感来源于 WeakMap API，它利用了 WeakMap 的特性来提供更高效的状态管理。
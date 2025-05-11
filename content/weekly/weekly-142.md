---
title: '#142: The Post-Developer Era'
date: 2025-04-21 00:10
---



## 简讯

- OpenAI [发布了 GPT 4.1 系列模型](https://openai.com/index/gpt-4-1/)，在编码、指令执行和长文本理解方面超越 GPT 4 ，目前仅在 API 中提供，并且将逐步淘汰 GPT-4.5 Preview 。（4.1 > 4.5 ?
- 两天后 OpenAI 又发布了[最新的推理模型 o3 和 o4 mini](https://openai.com/index/introducing-o3-and-o4-mini/) 。
- 据报道，OpenAI 正[寻求以 30 亿美元收购 AI 工具 WindSurf](https://www.bloomberg.com/news/articles/2025-04-16/openai-said-to-be-in-talks-to-buy-windsurf-for-about-3-billion)。
- Google 正式[发布了 Gemini 2.5 Flash](https://developers.googleblog.com/en/start-building-with-gemini-25-flash/) ，支持按需开启 “思考模式”。
- 在上周的 TC39 会议上，与会者一致同意[放弃了 Tuple 和 Record 的提案](https://github.com/tc39/proposal-record-tuple/issues/394)，取而代之的是 [Composites 的提案](https://github.com/tc39/proposal-composites)来到了 Stage 1 。

## 有趣

- [State of AI](https://vercel.com/state-of-ai)
  
    Vercel 发起的 AI 使用调查问卷结果出炉。
    
- [judyrecords](https://www.judyrecords.com/)
  
    一个可以搜索数亿个美国法院案件和诉讼的搜索引擎，还提供 API 。
    

## 工具

- [@openai/codex](https://github.com/openai/codex)
  
    OpenAI 也推出了个类似 Claude Code 的开源 CLI 工具，UI 是用了 React，随后就有人 fork 变成了更 open 的 [open-codex](https://github.com/ymichael/open-codex)。
    
- [webtui](https://github.com/webtui/webtui)
  
    有人把 React 带到 CLI 工具中，自然也有人把 TUI 带到 Web 上。
    
- [VERT](https://github.com/VERT-sh/VERT)
  
    可私有部署的文件转换器。
    

## 文章

- [JSX Over The Wire](https://overreacted.io/jsx-over-the-wire/)
  
    Dan 又通过三个不同的故事解释了为什么你可能希望你的 API 通过网络发送 JSX。另一种选择是在你的客户端应用和 REST API 中维护并行的组件和 viewModel 树。
    
- [The Post-Developer Era](https://www.joshwcomeau.com/blog/the-post-developer-era/)
  
    Joshwa 两天前发布的文章认为 AI 会增强而非替代开发人员的工作，而现在，他认为尽管 AI 提高了效率，但并没有达到 “后开发人员时代” 的水平。
    
- [How to Build an Agent](https://ampcode.com/how-to-build-an-agent)
  
    构建一个完全功能的代码编辑 Agent。
    
- [Stevens: a hackable AI assistant using a single SQLite table and a handful of cron jobs](https://www.geoffreylitt.com/2025/04/12/how-i-made-a-useful-ai-assistant-with-one-sqlite-table-and-a-handful-of-cron-jobs)
  
    使用单个 SQLite 表和几个 cron 作业构建一个有用的 AI 助手。
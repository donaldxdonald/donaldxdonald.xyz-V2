---
title: '#77: Goodbye, Node.js Buffer'
date: 2023-11-05 23:10
---



## 简讯

- Google [放出 .ing 顶级域名](https://blog.google/products/registry/introducing-the-ing-top-level-domain/)，将会在 12 月 5 日对所有人开放。
- Vercel 在 Next.js Conf 上发布了 Next.js 14 ，其中的 Server Action 引起大家的吐槽；另一个方面他们把自家用的 [Geist 字体](https://vercel.com/font) 开源了，还挺不错。
- Clash 全系都（被要求？）停止更新了。
- Elon Musk 的 xAI 团队[发布了 AI 产品 Grok](https://x.ai/)。

## 有趣

- [State of React](https://survey.devographics.com/en-US/survey/state-of-react/2023)
  
    State of 系列新增一员，State of React ，如今调查问卷正式开放。
    

## 工具

- [Excalidraw](https://excalidraw.com/)
  
    开源白板工具 Excalidraw 今日支持了 Mermaid 的流程图和时序图，后续还会继续更新更多的图表支持。
    

## 文章

- [常见的 UI 元素本来就长这样吗](https://mp.weixin.qq.com/s/jwHFZQ_eSOK4evrYMkO-KA)
  
    文章介绍了一些习以为常的 UI 元素和其背后曲折的演变过程及设计原理。
    
- [滚动劫持101](https://mp.weixin.qq.com/s/WKepQlEuUCrdSI5CjSAQ1Q)
  
    近年来网页中滚动的行为也成为了比较重要的交互部分，学习一下什么是滚动劫持。
    
- [Goodbye, Node.js Buffer](https://sindresorhus.com/blog/goodbye-nodejs-buffer)
  
    高产开发者 Sindre Sorhus 表示将要将自己的 1000 多个 npm 库中的 `Buffer` 改成 `Uint8Array` ，主要是因为 `Uint8Array` 在跨平台方面更有优势。
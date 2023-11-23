---
title: '#43: ChatGPT Is a Blurry JPEG of the Web'
date: 2023-02-20 00:23
---

## 简讯

- Angular 新开一个 [RFC](https://github.com/angular/angular/discussions/49090) ，表示下一步会进行引入 Signal 概念的响应式开发。（Singal 宇宙逐步形成
- 与此同时，React 也在[考虑引入](https://twitter.com/acdlite/status/1626590880126889984) Signal-like 的范式。
- 上周阮一峰的个人网站被黑，他在新一期的周刊里写了[经过和建议](http://www.ruanyifeng.com/blog/2023/02/weekly-issue-242.html)。
- CSS 新特性 Container queries 已经在四个稳定的现代浏览器上[可用](https://web.dev/cq-stable/)了。
- iOS and iPadOS 16.4 beta 1 支持了 Web App 的 [Web Push 相关 API](https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/)，之后会不会越来越多产品只开发 Web App (PWA) 了呢？
- Firefox for Android 最新版已[支持油猴插件](https://support.mozilla.org/en-US/kb/whats-new-firefox-android)了。
- Microsoft 家的 Loop 终于开始可以[申请测试](https://loop.microsoft.com/)了，是个 Notion-like 的协作工具。

## 有趣

- [Galileo AI](https://www.usegalileo.ai/)
    
    > 文字直接生成界面设计的 AI 工具。
    > 
    
- [Runway](https://runwayml.com/)
    
    > AI + 视频编辑。
    > 

- [Color & Contrast](https://colorandcontrast.com/#/)
    
    > 一个探索和学习颜色和对比度的理论的网站，网页做的挺好看。
    > 

- [Peel — Drum machine in your browser](https://peel.fm/)
    
    > 在线打电子鼓。
    > 
    

## 工具

- [clack](https://github.com/natemoo-re/clack)
    
    > 帮助开发 CLI 工具的新轮子，挺好看的。
    > 
    
- [WebContainers](https://webcontainers.io/)
    
    > Stackblitz 的 WebContainer 支持在浏览器上运行 Node.js ，目前 API 也[对外开放](https://blog.stackblitz.com/posts/webcontainer-api-is-here/)了，可以理解为用 WASM 搭建的一个 Electron Polyfill，带有文件系统，同类的还有 CodeSandbox 的 [Sandpack](https://codesandbox.io/blog/announcing-sandpack-2) 。
    > 
    
- [promptable](https://github.com/cfortuner/promptable)
    
    > 构建 ChatGPT-based 工具的又一个轮子。
    > 

## 文章

- [无限的画布：从石板到 Obsidian Canvas 与 Freeform](https://utgd.net/article/9931)
    
    > 继双向链接之后，画布类工具又在今年初掀起了新一轮的生产力淘金浪潮。Obsidian 和 Logseq 先后推出画布功能，Apple 也在 iOS 16.2 中提供 Freeform“无边记”程序，一场新的工具战争已经打响。
    > 
    
- [ChatGPT Is a Blurry JPEG of the Web](https://www.newyorker.com/tech/annals-of-technology/chatgpt-is-a-blurry-jpeg-of-the-web)
    
    > 特德姜发表了一篇对 ChatGPT 的见解，其中他认为 ChatGPT 可以类比作 JPEG 压缩技术一样，其呈现的内容只不过是网络上一张模糊的图片而已，它将真实的内容抽象和压缩，以提供检索和概览的功能。"So just how much use is a blurry *jpeg*, when you still have the original?"
    > 
    
- [So, what's next?](https://github.com/zloirock/core-js/blob/master/docs/2023-02-14-so-whats-next.md)
    
    > core-js 作者发长文讲自己维护 core-js 的付出和回报不成正比，寻求接下来的计划，以及展示了 core-js 下一个主要版本的路线。有趣的是 pnpm 作者[表示](https://twitter.com/ZoltanKochan/status/1625684399248351234)“俄罗斯开发者的困境：如何给老婆买 iPhone；乌克兰开发者的困境：如何才能活下去。”
    > 
    
- [`useSignal()` Is The Future of Web Frameworks](https://www.builder.io/blog/usesignal-is-the-future-of-web-frameworks)
    
    > Angular 之父兼 Qwik 的作者前阵子也提出了目前 JS 框架中的 Signal 范式解决了什么问题。（标题夸张了点
    >
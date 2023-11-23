---
title: '#55: Google I/O, TypeScript to JSDoc…'
date: 2023-05-15 00:12
---

## 简讯

- GtiHub Mobile 现[已支持编辑 workflow 文件](https://github.blog/changelog/2023-05-11-edit-workflow-files-on-github-mobile/)。
- Visual Studio （不是 Code） [即将更新 UI](https://devblogs.microsoft.com/visualstudio/visual-studio-ui-refresh/)，采用 Fluent Design。
- Google [新上线几个顶级域名](https://www.blog.google/products/registry/8-new-top-level-domains-for-dads-grads-tech/)，.dad, .phd, .foo 和 .zip 等等。
- Svelte 正在将其仓库[从 TypeScript 转向使用 JSDoc](https://github.com/sveltejs/svelte/pull/8569) 来做类型标注，旨在优化编译性能。
- Anthropic 宣布[将 Claude 的 9K token 限制提升到 100K](https://www.anthropic.com/index/100k-context-windows)。
- Google I/O （1）：[Google Bard](https://bard.google.com/) 换上新的 PaLM 2 模型，且已对支持的地区完全开放（原本需要加入 waitlist）。
- Google I/O （2）： [Baseline 兼容性认证](https://web.dev/introducing-baseline/)，简单来说就是以后听到某个 Web API / 特性是 Baseline 的话，那就能放心用在生产环境中。MDN 和 [web.dev](http://web.dev) 上已支持。
- Google I/O （3）：Google Search 加入 AI 建议功能，还处于实验性阶段，[需要申请](https://labs.withgoogle.com/)。

## 有趣

- [40 Years in Tech](https://40-years.accel.com/)
    
    > 用 scrollytelling 的方式列举从 1980 年到 2020 年这 40 年间的科技大事记。
    > 

- [Design for Android](https://developer.android.com/design/ui)
    
    > Android 的设计规范，针对不同尺寸的设备，基于 Material You。
    > 

- [140 DevTools Tips](https://devtoolstips.org/)
    
    > 一些对开发调试有帮助的 Devtools 小技巧，跨浏览器都能用。
    > 

## 工具

- [Explain Shell](https://explainshell.com/)
    
    > 给它一段 shell 命令，就能看这段命令的用途。（不是用 GPT 实现的，是 AST 解析
    > 
    
- [Deopt Explorer](https://github.com/microsoft/deoptexplorer-vscode)
    
    > TypeScript 官方推出的一个工具，帮助查看分析 JS/TS 代码中的 deoptimizations 。
    > 
    
- [notion-to-md](https://github.com/souvikinator/notion-to-md)
    
    > 一个 Notion 页面 / Block 结构转换为 Markdown 的工具，支持自定义解析。（很多 Block 是没有对应的 Markdown 语法）
    > 

- [A list of programming playgrounds](https://jvns.ca/blog/2023/04/17/a-list-of-programming-playgrounds/)
    
    > 一些编程相关的 playground 网站。
    > 

## 文章

- [The JavaScript Ecosystem Is Delightfully Weird](https://fly.io/blog/js-ecosystem-delightfully-wierd/)
    
    > JS 生态很多时候都不是在写 JS （TS 和 JSX 都不算）。
    > 
    
- [Google I/O 2023 — Web 平台的最新动态](https://mp.weixin.qq.com/s?__biz=Mzk0MDMwMzQyOA==&mid=2247497504&idx=1&sn=5dd6d9659bfdba30419f0c64bcd85030)
    
    > 总结了 Google I/O 2023 中关于 Web 的资讯。
    > 

- [Redis 與作者 antirez 的故事](https://blog.brachiosoft.com/redis)
    
    > 如题，后续是作者也在 Hacker News 回应并[纠正了一些事实](https://news.ycombinator.com/item?id=35893871)。
    >
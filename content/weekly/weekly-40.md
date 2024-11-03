---
title: '#40: 用 React 的应不应该使用框架？'
date: 2023-01-29 23:29
---

## 简讯

- 一年一度的优秀网页颁奖典礼 [Annual Awards](https://annual.awwwards.com/) 开始投票了，设有六个奖项，提名的网站都好好看啊。
- 微软近日裁员，整个 VR/MR/HoloLens 背后的团队[直接没了](https://www.windowscentral.com/microsoft/microsoft-has-laid-off-entire-teams-behind-virtual-mixed-reality-and-hololens) ，太可惜了，当初 HoloLens 刚发布时，看到[宣传视频](https://www.bilibili.com/video/BV1Mx411A7rT)里一个手🤌🫴，你真的不知道这对一个高中生是有多么震撼。（来自 Windows Phone 粉丝的震怒/无奈/遗憾
- OpenAI 和微软[强强联手](https://openai.com/blog/openai-and-microsoft-extend-partnership/)，改善 Bing 搜索？Azure？（Cortana: ?
- 上上周国际 FE 圈老热闹了，喜欢 Tailwind 的和不喜欢 Tailwind 吵得不可开交，还有人[道歉](https://twitter.com/ThePrimeagen/status/1615094281890406400?s=20)，说不应该诋毁 Tailwind。
- 上周 React 核心团队成员在这个 [Thread](https://twitter.com/acdlite/status/1617611126514266112?s=20) 里说使用 React 的项目应该都要用 React 的框架，因为框架提供了一套解决方案，又展开了一番讨论（激战）。
- TypeScript 5.0 beta [发布](https://devblogs.microsoft.com/typescript/announcing-typescript-5-0-beta/)了，大版本更新自然有一大波更新了，比较有看头的就是默认开启了即将到来的 ECMAScript 装饰器特性（以前需要手动开启 `experimentalDecorators` ）还有包大小几乎是 4.9 的一半，比 TypeScript 3 还小。
- 开发 Vue VSCode 插件 Volar 的作者分享他这两年来做 VSCode 插件总结的减小插件体积的[经验](https://github.com/volarjs/volar.js/discussions/6)。
- 同性交友网站 GitHub 现在已经有 [1 亿用户](https://github.blog/2023-01-25-100-million-developers-and-counting/)了。



## 有趣

- [Summer Afternoon](https://summer-afternoon.vlucendo.com/)
  
    > 一个 WebGL 实验游戏 demo，体验挺好，由此可见 Web 游戏还是挺值得期待的，技术栈据作者[透露](https://twitter.com/vlucendo/status/1615099156451758082)是 Threejs、 GSAP、 Svelte 和 Houdini。
    > 

- [Wonders of Street View](https://neal.fun/wonders-of-street-view/?v=jN5hhj)
  
    > 好玩的 Neal.fun 又出新网站啦，这次是一个随机街景网站，每次打开都是一个比较奇特的谷歌街景。
    > 
    
- [Lungy App](https://www.lungy.app/)
  
    > 一个医生 (?) 做的 App，可以用呼气和触摸屏幕来与屏幕中的内容交互，以达到减轻焦虑的效果。（真的挺治愈的
    > 
    
- [Calligrapher.ai](https://www.calligrapher.ai/)
  
    > 看名字就能看出，是用 AI 的方式生成对应文字的手写体，并且可以保存为 svg，仅支持英文。
    > 
    
- [There's An AI For That | AI Database](https://theresanaiforthat.com/)
  
    > 如今各种 AI based 的产品层出不穷，这时候肯定就要有一个聚合网站了。



## 工具

- [PSone.css](https://micah5.github.io/PSone.css/)
  
    > 前有 98.css 和 NES.css，如今又有一个模拟 PlayStation 1 UI 的 CSS 库。（情怀
    > 
    
- [Vento](https://vento.so/)
  
    > 一个浏览器录制工具，特点是可以在你说错话的时候回溯删掉那一小段，然后再继续录。（UI 不错
    > 
    
- [gluon](https://github.com/gluon-framework/gluon)
  
    > Electron 和 Tauri 的对手 +1，又一个用 Web 技术开发跨平台应用的框架，使用的 runtime 是系统已安装的浏览器（不是 Webview）和 已安装的 Node.js 。
    > 
    
- [Read Pilot](https://readpilot.vercel.app/)
  
    > 输入文章链接，AI 给你总结几个关于目标文章的 Q&A ，帮助你快速了解文章内容。（嚼碎了再给你吃？
    > 

- [Email Helper](https://email-helper.vercel.app/)
  
    > AI 帮你写邮件。



## 文章

- [How to Transition to Manifest V3 for Chrome Extensions](https://css-tricks.com/how-to-transition-to-manifest-v3-for-chrome-extensions/)
  
    > Chrome 扩展的 Manifest 格式已经到了 V3 了，Chrome 也将在今年逐步放弃支持 V2 的扩展，文章介绍了相关的 Why、What、How。
    > 
    
- [The Pros and Cons of Responsive Web Design in 2023](https://www.webdesignerdepot.com/2023/01/the-pros-and-cons-of-responsive-web-design-in-2023/)
  
    > 2023 年再来看看关于响应式网页设计的好与坏。
    > 
    
- [4 Common Mistakes Made by Node.js Developers](https://amplication.com/blog/4-common-mistakes-made-by-nodejs-developers)
  
    > Node.js 开发者常犯的 4 个错误。
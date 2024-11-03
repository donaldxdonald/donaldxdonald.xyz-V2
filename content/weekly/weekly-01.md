---
title: 上周有啥好玩的 1/10
date: 2022-4-16 16:27
---

## Article

- [CSS 实现树状结构目录](https://mp.weixin.qq.com/s/fmeq12Yu8MjGL9alHP9vZQ)
	- 没想到原生 HTML + CSS 已经可以实现这样的树结构了，做小需求的时候可以考虑用用。
- [How Warp Works](https://www.warp.dev/blog/how-warp-works)
	- Warp 是一个基于 Rust 的高性能终端工具，上周融资 $23M 的消息震惊了业界很多人，然后我看了下他们官网的介绍，发现他们的设计也是基于 Block 的，现在 Block Style Editor 的概念越来越让人接受了，从 [Editor.js](https://github.com/codex-team/editor.js) 到 [Notion](https://www.notion.so/) 以及 [Logseq](https://github.com/logseq/logseq) ，都是以 Block 内容基本单位。先不说 Warp 未来怎么样，但他们的营销真的做得很到位，而且 Rust 、Blocks 、Render on the GPU 这些 Fancy 的元素组合在一起就让人觉得未来可期，期待一下。
- [The difference between Angular’s Emulated Shadow DOM and native Shadow DOM](https://kevinkreuzer.medium.com/the-difference-between-angulars-emulated-shadow-dom-and-native-shadow-dom-9b2c81546b85)
	- [[Angular]] 的 样式隔离是自己实现的模拟 Shadow DOM，实现方式就是在组件中生成一个 id，然后给组件内的每个 HTML 元素都加上这个 id 的 attr，然后给对应的 CSS 选择器也会根据这个 attr 来选择特定的元素，从而实现样式隔离的效果。而原生的 Shadow DOM 则是完全的将组件里的 style 和 HTML 元素都置于一个隔绝的环境中。
- [Why I Love React](https://epicreact.dev/why-i-love-react/)
	- Kent C. Dodds 写了自己对 React 的看法，他觉得 React 很 "simple"。
- [Plugin Architecture Overview Between Express, Fastify and NestJS](https://fusebit.io/blog/web-frameworks-plugins-architecture-overview/)
	- 文中比较了 Express 、 Fastify 和 NestJS 三个 NodeJS 框架的插件体系。最近在做编辑器的工作时候，也有稍微研究了下如何设计插件体系，这篇文章写得很不错。
- [Semantic HTML: What, Why, and How](https://abbeyperini.hashnode.dev/semantic-html-what-why-and-how)
	- 文中清晰地阐述了语义化 HTML 的概念和意义，也拓展了 SEO 的知识。语义化是挺理想的，但现实是很多时候用了特定的 HTML 元素后还得去做样式重置，毕竟不同业务需要的样式也不一样，这就导致了很多人都是 div 一把梭。尽量地在开发中写语义化的页面吧！
- [The Joy of Small Projects](https://schroer.ca/2022/04/10/the-joy-of-small-projects)
	- 每一个大项目都是从 0 做起的，不要害怕第一步，不要把任何事情想得很完美才开始做！
- [100 cool web moments](https://developer.chrome.com/100/)
	- Chrome 的版本号更新到 100 了，Chromium 团队列出了 Chrome 从诞生以来的 100 个有趣的时刻。（希望早日各大浏览器统一标准
- [Variable color font initials](https://www.typearture.com/variable-color-font-initials/)
	- 可变字体可玩性太高了吧，文中展示了每个英文字母的字体设计，注意，这都不是 GIF 图，这只是字体在变化哦。很喜欢可变字体，个人网站的英文字体也从 Futura 改为了 Jost ，但是中文就很难玩到这样了，光是有可变字体就很难了，之前思源黑体更新为可变字体已经是大新闻了。

## Found

- [Mini Tokyo 3D](https://github.com/nagix/mini-tokyo-3d)
	- 将东京的交通系统的实时数据可视化呈现。想起了之前实习时用 [Leaflet](https://github.com/Leaflet/Leaflet) 来做消防的交通地图了。。。
- [Lexical](https://github.com/facebook/lexical)
	- Meta 新开源的一个编辑器框架，因为最近在做编辑器的工作，就对这个比较敏感了，立刻打开源码看看设计，他们做的事情还是挺多的，甚至还有自己的一套 GC 。但说实话看了 Slate 的源码后再看 Lexical 的源码真的难受，Flow + CommonJS 。。。Lexical 的定位是编辑器引擎，即类似 Slate 一样提供二次开发编辑器的能力，视图层、可编辑元素等都可以通过插件来拓展。
- [previewjs](https://github.com/fwouts/previewjs)
	- 一款 IDE 插件，支持在 IDE 中快速预览组件，支持 Vue 和 React （不支持 Angular。。找时间看看能不能实现 ）。很方便的一个工具，就有点像之前用 Android Studio 开发那样。
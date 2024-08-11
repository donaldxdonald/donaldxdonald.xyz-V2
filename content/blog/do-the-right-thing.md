---
title: '找到合适的位置很重要'
date: 2024-08-11 22: 34
---



最近在 X 上看到有国外网友分享做了个叫 [Rotato Video Compressor](https://tools.rotato.app/compress) 的视频压缩的网页工具，似乎蛮火的。然后就惹来很多其他人的嘲讽，“本质上就是调 ffmpeg ”，“这不就是一行 ffmpeg 命令吗”。。。让我想起来 [@yihong0618](https://x.com/yihong0618) 的 [这玩意不是就__](https://github.com/yihong0618/gitblog/issues/291)。

首先这可能真的是个稍微简单的 wrapper ，但事实上就是大多数人都是喜欢开箱即用的。ffmpeg 当然是硬核强大的，但有多少人真的愿意去记它的众多繁杂的参数呢？Product 和 Tool 的区别就在于 Product 应该会更注重 UX，强大的底层功能是基础，但有好看好用的 UI 才会让更多人愿意使用。

即使在 Tools 这一层面，也是有分不同 level 的，就像前端工具 Vite ，在 [State of JS 2023 年报告](https://2023.stateofjs.com/en-US/awards/)中可以看到，它在 Web 开发者中大获好评。跟 Rollup 和 Webpack 这些 Low level 的构建工具相比，Vite 也算是一个 Middle Level 的 Wrapper，底层是使用 Rollup 和 Esbuild ，但是它在整合工具以及 DX 上做得足够好，因此还是很受欢迎的。

还有类似的像 Web 富文本编辑器这边的 [PromiseMirror](https://prosemirror.net/) ，它是一个很强大，扩展性很强的富文本编辑器框架，其晦涩的文档劝退了很多人，基于它的上层框架 [Tiptap](https://tiptap.dev/) 因为相对更开箱即用而能被人接受。

找到合适的位置很重要。
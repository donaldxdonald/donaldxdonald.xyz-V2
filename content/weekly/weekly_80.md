---
title: '#80: The 200 Best Inventions of 2023'
date: 2023-11-27 00:27
---



## 简讯

- 兜兜转转，Sam Altman 等人最终还是回到了 Open AI。
- [2023 的 State of JS 问卷入口](https://survey.devographics.com/en-US/survey/state-of-js/2023)现在开放了。
- Chrome 团队又在[催促大家赶紧把 Chrome 拓展从 Manifest V2 更新到 Manifest V3 了](https://developer.chrome.com/blog/resuming-the-transition-to-mv3/)。
- [Netlify 的 Image CDN 进入 beta 了](https://www.netlify.com/blog/introducing-netlify-image-cdn-beta/)，支持直接通过 URL 来对图片进行调整大小、裁剪和转换格式等操作。

## 有趣

- [The 200 Best Inventions of 2023](https://time.com/collection/best-inventions-2023)
  
    时代周刊选出 2023 年里 200 个最佳的创新产品。
    
- [▶ 跨浏览器窗口交互](https://twitter.com/_nonfigurativ_/status/1727322594570027343)
  
    有推友放出一个 demo 视频，是在两个浏览器窗口打开同一个页面，然后两个页面会产生互动，结合 Three.js 制作的效果确实让人眼前一亮。还有人脑洞大开，弄了一个[离谱版 Flappy Bird](https://twitter.com/devdevcharlie/status/1727797938204901804)。跨浏览器窗口互动的核心其实就是通过 `localStorage` 管理共享数据（就是这么朴实无华。
    
- [Inter 4.0](https://rsms.me/inter/)
  
    经典字体 Inter 更新到了 4.0。
    

## 工具

- [StyleTTS2](https://github.com/yl4579/StyleTTS2)
  
    一个 TTS 模型。
    

## 文章

- [An Interactive Guide to CSS Grid](https://www.joshwcomeau.com/css/interactive-guide-to-grid)
  
    相比 Flex 布局，Grid 布局很强大但还是很少人用，如今它的兼容性也已经很好了。Joshua Comeau 又带来了一篇高质量的互动性教程。
    
- [The Security Vulnerabilities of The Target="_Blank" Attribute](https://blog.bolajiayodeji.com/the-security-vulnerabilities-of-the-target-blank-attribute)
  
    `<a>` 标签的 `target="_blank"` 打开的新窗口里会带有原始窗口的信息，可能会有安全风险，解决方法就是给 `<a>` 标签添加 `rel="noopener noreferrer"` 的属性。
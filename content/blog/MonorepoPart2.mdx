---
title: 用 pnpm 和 changesets 管理 monorepo 版本与发包
date: 2022-03-20 14:42
---

## 前言

去年写了篇[文章](https://donaldxdonald.xyz/post/programming/interesting/aboutpublishingonnpm)记录了用 [pnpm](https://pnpm.io/) 管理自己 ESLint 规则的 Monorepo，但也仅仅是只用到了 pnpm 的 workspace 功能来管理而已，但是管理发布版本的问题仍然没解决，之前都是要手动改 `package.json` 的版本号再 publish，这显然太麻烦了。简单了解了数个 monorepo 的工具库，感觉 [changesets](https://github.com/changesets/changesets) 就挺简单纯粹的，可以用于改造自己 ESLint 配置的[项目](https://github.com/donaldxdonald/eslint-config)。

## 介绍

> A way to manage your versioning and changelogs with a focus on monorepos.

官方介绍言简意赅，抓住关键点 `manage your versioning and changelogs` 和 `monorepos`。就是用于管理 Monorepo 中的版本以及发布日志的工具。

## 使用

changesets 使用起来很简单，分为三个步骤

1. 生成 changeset 文件
2. 更新版本
3. 发布

### 安装 changeset

可以选择安装在全局或者项目内

1. 全局安装

   ```bash
   $ pnpm i -g @changesets/cli
   ```

2. 安装在项目内

   ```bash
   $ pnpm i -D @changesets/cli
   ```

### 初始化配置
```bash
$ pnpm exec changeset init
```

执行完上面代码后，项目内会多出来一个 `.changeset` 文件夹，里面有个 `config.json` 配置文件，配置项详情见[官方文档](https://github.com/changesets/changesets/blob/main/docs/config-file-options.md)。



### 生成 changeset 文件

![stage1](https://cdn.donaldxdonald.xyz/blog/monorepoPart2/State1.png)

```bash
$ pnpm exec changeset
```

或者

```bash
$ pnpm exec changeset add
```

两种方式都是一样的。然后会在命令行中根据提示选择要更新的包以及要更新版本号是更新 `major` 、`minor` 还是 `patch` 。

![stage2](https://cdn.donaldxdonald.xyz/blog/monorepoPart2/Stage2.png)

最后填写更新摘要，一个 changeset 文件就生成了。



### 更新版本

![versioning](https://cdn.donaldxdonald.xyz/blog/monorepoPart2/Stage3.png)

```bash
$ pnpm exec changeset version
```

这个命令会消费项目内所有的 changeset 文件，根据 changeset 文件更新对应 `package.json` 的版本号。



### 发布

```bash
$ pnpm exec changeset publish
```

然后就会在该 Monorepo 中的每个子库中执行 `npm publish` 



## CI

平时的话，只需要手动生成 changeset 文件，然后在 CI 中执行 versioning 和 publishing 的步骤就好了。因为不是每次修改都需要 publish ，这样的话就做到想发包的时候生成 changeset 文件提交就好了。

这里以 github actions 为例，只需要在 install 的步骤之后加上 versioning 和 publishing 的配置。

```yaml
- name: Install dependencies
   run: pnpm install

- name: Create Release Pull Request or Publish to npm
    id: changesets
    	uses: changesets/action@v1
    with:
    # This expects you to have a script called release which does a build for your packages and calls changeset publish
        version: pnpm exec changeset version
    	publish: pnpm exec changeset publish
    env:
    	GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```



## 总结

pnpm 的 workspace 解决了 monorepo 管理项目的问题，changesets 解决了 monorepo 版本管理以及发布记录的问题，小项目的话 pnpm + changesets 可以满足大多数需求，还是很方便的，更多的玩法还要再看看官方文档。

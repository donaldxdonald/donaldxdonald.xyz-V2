---
title: Git 实践
date: 2021-10-11 10:31
---



## 将本地与远程仓库回退到某一 commit 

1. 查看回退目标 commit 的id

   ```bash
   $ git log
   ```

2. 回退到之前的版本

   ```bash
   $ git reset --hard <COMMIT_ID>
   ```

3. 覆盖远程仓库的版本，需要加上参数 `--force` 

   ```bash
   $ git push origin <BRANCH_NAME> --force
   ```




## 按需拉取（Clone）内容

在给某些大型仓库提 PR 时，往往 clone 就花了很长时间而且占据极大空间，但我们只是想要给它增加一个文件夹的内容而已，比如存放各种 `@types/xxx` 的 [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) 和 Raycast 的[插件仓库](https://github.com/raycast/extensions)。这时候就可以使用 git 的 [sparse-checkout](https://git-scm.com/docs/git-sparse-checkout) 和 [partial clone](https://git-scm.com/docs/partial-clone) 功能，步骤如下：

1. clone 时加上 `--filter=blob:none` 用于不自动 clone 文件

```bash
$ git clone --filter=blob:none --no-checkout <REMOTE_URL>
```

2. 进入项目，初始化 sparse-checkout

```bash
$ cd ./example
$ git sparse-checkou set --cone
```

3. 切换到某个分支 以 master 为例

```bash
$ git checkout master
```

4. 拉取指定的文件夹

```bash
$ git sparse-checkout set path/to
```


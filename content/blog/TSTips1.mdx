---
title: TypeScript Tips：根据已有的对象类型定义新的类型
date: 2022-02-12 11:52
---

## 背景

最近在做前端编辑器相关的开发，有用到 [Slate](https://github.com/ianstormtaylor/slate) ，不得不说其框架设计真的很优雅，开发者体验很棒。Slate 的数据模型是 Block Style 结构，在同类产品中较为通用，比如飞书、Notion 和 Google Docs。

## 需求

假设一个需求，项目原本的文档数据模型是与飞书一样的，现在需要用 Slate 开发，因此需要做一个从飞书数据模型到 Slate 数据模型的转换，项目是使用 TypeScript 开发的，考虑到节点类型一致性的问题，给 Slate 节点做 TS 类型定义就要根据已有的飞书节点类型来做转换。

## 先决条件

此处以飞书的数据模型为转换前的例子，数据参考于[飞书开发文档](https://open.feishu.cn/document/ukTMukTMukTM/ukDM2YjL5AjN24SOwYjN#5293aed9)，当前 Slate 版本为 0.72.8 。

根据 Slate [官网描述](https://docs.slatejs.org/concepts/02-nodes#element)，每一个 Element 节点最基本的条件就是有 `children` 字段，最底层是 Text 节点。这里我们可以给它加入一个 `type` 字段，以区分 Element 节点类型。那么以下就以 Paragraph 节点为例，飞书的 Paragraph 节点类型以及 TS 的类型定义如下：

```json
{
  "style": "ParagraphStyle",
  "elements": ["ParagraphElement"]
}
```

```typescript
interface ParagraphFeishu {
    style: ParagraphStyle
    elements: ParagraphElement[]
}
```

以这个为基础，可以将 Slate 的 Paragraph 节点自定义为如下：

```typescript
interface ParagraphSlate {
    type: 'paragraph'
    style: ParagraphStyle
    children: ParagraphElementSlate[]
}
```

总结一下从一个飞书数据节点改造成一个 Slate 数据节点，只需要一下三步：

1. 增加 `type` 字段
2. 将 `elements` 属性名改为 `children`
3. 将剩下的字段照搬过来

## 动手

### 增加 `type` 字段

首先定义一个 `CustomElement` 类型，接收一个原始类型的泛型，让我们知道新的类型是根据哪个类型改造得来。但是因为原始类型中没有 `type` 类型相关的字段，我们就不知道这具体的 `type` 是什么，这时候就需要传第二个类型，作为 `type` 属性的类型，代码如下：

```typescript
type CustomElement<T, S> = {
    type: S
}
```

### 将 `elements` 属性名改为 `children`

此处需做一层抽象，因为原数据模型的子类相关属性名不一定都是 `elements` ，还有可能是 `imageList`，那这里首先就要做个是否子类属性名的判断，用条件语句实现。

```typescript
// 定义子类属性名的类型集合
type CHILDREN_PROP_KEY = 'elements' | 'imageList'
// 判断传入的类型是否为子类属性名
type IsChildrenKey<K> = K extends CHILDREN_PROP_KEY ? true : false
```

然后在 `CustomElement` 中就需要判断原始类型的属性名了，是子类属性名的话就改为 `children` 属性名，否则不做处理。还有一点就是子类的类型，这个也是需要传入类型让我们知道新的 Slate 节点类型是什么。

```typescript
// 定义子类属性名的类型集合
type CHILDREN_PROP_KEY = 'elements' | 'imageList'
// 判断传入的类型是否为子类属性名
type IsChildrenKey<K> = K extends CHILDREN_PROP_KEY ? true : false

// T: 原始类型，S: 节点类型名称，C: 子类类型
type CustomElement<T, S, C = never> = {
    type: S
} & {
	// 子类字段
    [K in keyof T as IsChildrenKey<K> extends true ? 'children' : never]: C[]
}
```

### 将剩下的字段搬过来

好了，然后就是把剩下的字段都搬过来了，比如上面 `ParagraphFeishu` 类型的 `style` 。这里的思路就是判断原始类型中不是子类属性名的话，则直接迁移，完整代码如下：

```typescript
// 定义子类属性名的类型集合
type CHILDREN_PROP_KEY = 'elements' | 'imageList'
// 判断传入的类型是否为子类属性名
type IsChildrenKey<K> = K extends CHILDREN_PROP_KEY ? true : false

// T: 原始类型，S: 节点类型名称，C: 子类类型
type CustomElement<T, S, C = never> = {
    type: S
} & {
	// 子类字段
    [K in keyof T as IsChildrenKey<K> extends true ? 'children' : never]: C[]
} & {
    // 剩余字段
    [K in keyof T as IsChildrenKey<K> extends true ? never : K]: T[K]
}
```



### 定义 `ParagraphSlate` 类型

根据如上定义的通用的转换类型 `CustomElement`， 定义 `ParagraphSlate` 类型将会变得简单优雅。

```typescript
type ParagraphSlate = CustomElement<ParagraphFeishu, 'paragraph', ParagraphElementSlate>
```

这样子就是实现了新类型与原始类型的绑定，如果日后需要更改原始类型中的某个属性的话，只需要改原始类型的数据就好了，就不需要两边都改。

---
title: Angular实践中的Tips
date: 2021-08-09 11:48
---


## 懒加载Libraries

### 通用做法

``` javascript
const colorThief = () => import('color-thief').then(p => p.default)
```



### 依赖注入

```typescript
// 定义InjectionToken
type LazyColorThief = ReturnType<typeof color-thief>
const COLORTHIEF = new InjectionToken<LazyColorThief>('Lazily loaded colorThief', { provideIn: 'root', factory: color-thief })

// 使用token
constructor(@Inject(COLORTHIEF) private colorThief: LazyColorThief) {
	this.colorThief.then(colorThief => {
        // use it
    })
}
```


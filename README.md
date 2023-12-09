# 获取代码中的 h 标签，生成树形结构，以方便创建目录效果。

## 使用方法

首先准备含有 h 标签的 dom 结构

```html
<div id="main">
  <h1>1</h1>
  <p>这是一段文字</p>
  <h2>1-1</h2>
  <p>这是一段文字</p>
  <h3>1-1-1</h3>
  <p>这是一段文字</p>
  <h2>1-2</h2>
  <p>这是一段文字</p>
  <h1>2</h1>
  <p>这是一段文字</p>
</div>
```

然后获取到 dom，并传递给 useGetCatalogue 方法

```js
import useGetCatalogue from "get-catalogue";

const el = document.getElementById("main");
const catalogue = useGetCatalogue(el);
```

`useGetCatalogue`方法返回的值为一个对象
结构为：

```js
{
  title: string | null;  // 目录标题，h标签包含的文本
  rank: number;  // 目录级别
  top: number;  // 当前目录距离顶部的距离，可以用此属性实现滚动到当前目录下的效果
  child: Array<catalogueType>; // 子级目录
}
```

实现点击目录，使页面滚动到对应位置

```js
function go(e, top) {
  e.stopPropagation(); // 取消事件冒泡
  window.scrollTo({
    top: top,
    behavior: "smooth" // 平滑滚动，可选
  });
}
```

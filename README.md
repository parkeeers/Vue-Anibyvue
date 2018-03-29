# Anibyvue

> 基于Vue2的轻量级动画组件

## Gif演示
![AnibyVue](./img/anibyvue.gif)

## 安装方式

    npm i anibyvue

## 简要说明
* 每个动画模块的实现依托Vue过渡效果中不同的类名切换
* 对外提供良好的接口，可以利用```Animate.css```提供的动画样式进行内容扩展
* 通过```webpack```进行构建
* 简单的对移动端做出了适配

## 使用方法
1.引入css
```css
// include animation styles
@import "./style/common.css";
@import "./style/door.css"; 
```

2.注册组件
```javascript
import anibyVue from './components/AnibyVue.vue'

export default {
  name: 'App',
  components: {anibyVue},
  data: {
    return {
       show: false
    }
  }
}
```
3.组件使用
``` xml
<anibyVue :show="show" animation="rotate" @hide="show = false">
    <div>基于vue的轻量级动画组件</div>
</anibyVue>
```

## 参数信息
属性/方法|类型|默认值|属性信息
---|---|---|---
width|number|400|弹出框宽度
height|number|240|弹出框高度
measure|string|px|宽高单位
show|bool|false|是否显示弹出框
mask|bool|true|是否显示蒙层
animation|string|zoom|动画的类型
duration|number|300|动画执行时间
customStyles|function||用户自定义子组件样式
customMaskStyles|function||用户自定义蒙层样式

## Animation Types
* zoom
* fade
* flip
* door
* rotate
* slideUp
* slideDown
* slideLeft
* slideRight






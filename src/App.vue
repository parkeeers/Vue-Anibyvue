<template>
  <div class="wrap">
    <div class="container" :style="paddingTop">
      <h1 class="title scale">anibyvue</h1>
      <h3 class="intro scale">A vue modal with animations.</h3>
      <!-- 渲染动画按钮 -->
      <div class="btn-area">
        <button class="btn scale" v-text="item" v-bind:key="index" v-for="(item, index) in types" :style="delay(index)" @click="onShow(item)" />
      </div>
      <!-- 渲染子组件，用户可以自定义measure，animation，width，height，duration，className属性，其中width，height是子组件的宽高 -->
      <anibyvue measure="em" :show="show" :animation="animation" :width="28.5" :height="17" :duration="301" className="my-dialog" @hide="show = false">
        <!-- 添加组件内容 -->
        <div class="header">{{animation}}</div>
        <div class="body">A vue modal with animations.</div>
        <button class="anibyvue-confirm-btn" @click="show = false">ok</button>
        <button class="anibyvue-cancel-btn" @click="show = false">close</button>
      </anibyvue>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import anibyvue from './components/anibyvue';

export default {
  name: 'app',
  components: {anibyvue},
  data() {
    return {
      show: false,
      animation: '',
      //使按钮容器自适应不同大小的屏幕以实现垂直居中
      paddingTop: `paddingTop: ${(window.innerHeight - 440) / 2}px`,
      types: ['zoom', 'fade', 'flip', 'door', 'rotate', 'slideUp', 'slideDown', 'slideLeft', 'slideRight']
    }
  },

  methods: {
    delay(index) {
      return `
        animationDelay: ${index * 300}ms;
        WebkitAnimationDelay: ${index * 300}ms;
      `;
    },

    onShow(animation) {
      this.animation = animation;
      this.show = true;
    }
  }
}
</script>

<style>
@import "./style/common.css";
@import "./style/door.css";
@import "./style/flip.css";
@import "./style/rotate.css";
@import "./style/slide-down.css";
@import "./style/slide-left.css";
@import "./style/slide-right.css";
@import "./style/slide-up.css";
@import "./style/zoom.css";

*,
*:before,
*:after {
  box-sizing: border-box;
}

html {
  font-family: "Open Sans", sans-serif;
}

a {
  text-decoration: none;
  background-color: transparent;
}

a:hover {
  outline: 0;
  text-decoration: none;
}

a:focus {
  outline: none;
  text-decoration: none;
}

button {
  color: inherit;
  font: inherit;
  margin: 0;
  overflow: visible;
  text-transform: none;
  -webkit-appearance: button;
  cursor: pointer;
}

button:focus {
  outline: none;
}

button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}


/* -- container -- */

#app,
.wrap {
  height: 100%;
}

.container {
  width: 100%;
}

.title,
.intro {
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.title {
  font-size: 70px;
  margin: 0;
}

.intro {
  font-size: 30px;
  margin: 15px 10px 20px;
}

.btn-area {
  width: 600px;
  margin: 0 auto;
}


/* -- scale animation -- */

@keyframes scale {
  from {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }
  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
}

.scale {
  animation: scale both .4s cubic-bezier(0.4, 0, 0, 1.5);
}


/* -- btn -- */

.btn {
  display: inline-block;
  color: #0a1855;
  width: 140px;
  padding: 0;
  font-size: 18px;
  background: #fff;
  margin: 20px 30px;
  line-height: 42px;
  user-select: none;
  text-align: center;
  border: none;
  border-radius: 4px;
}

.btn:hover {
  box-shadow: 0 0 50px rgba(255, 255, 255, .3);
}


/* 当用户在使用移动设备访问页面时，做一个移动端的简单适配 */
@media (max-width: 600px) {
  .container {
    padding-top: 30px!important;
  }
  .title {
    font-size: 40px;
  }
  .intro {
    font-size: 20px;
  }
  .btn {
    width: 35%;
    font-size: 16px;
    line-height: 34px;
    margin: 10px 0 10px 10%;
  }
  .btn-area {
    width: 100%;
  }
}


/* -- title -- */

.header {
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 10px;
  text-align: center;
  border-bottom: 1px solid #e9e9e9;
  color: #0098e3;
}


/* -- body -- */

.body {
  padding-top: 15px;
}


/* -- button -- */

.anibyvue-cancel-btn,
.anibyvue-confirm-btn {
  position: absolute;
  font: inherit;
  bottom: 16px;
  width: 70px;
  padding: 4px 15px;
  border-radius: 3px;
  transition: background .2s;
  border: 1px solid #03a9f4;
}

.anibyvue-confirm-btn {
  color: #fff;
  right: 102px;
  background: #03a9f4;
}

.anibyvue-confirm-btn:hover {
  background: #0098e3;
}

.anibyvue-cancel-btn {
  color: #03a9f4;
  right: 16px;
  background: #fff;
}

.anibyvue-cancel-btn:hover {
  background: #fafafa;
}


.anibyvue-confirm-btn:active {
  background: #0087d2;
}

.anibyvue-cancel-btn:active {
  background: #fafafa;
  box-shadow: inset 1px 1px 1px rgba(0, 0, 0, .2), 0 0 1px transparent;
}
</style>
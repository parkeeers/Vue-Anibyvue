<template>
  <!-- 
    * 使用vue提供的transition的封装组件，以实现entering/leaving 过渡 
    * 因为需要得到用户定义的动画延迟时间，所以将style设置为计算属性，以便父组件数据更新，子组件就可以及时获取数据的更新
    * 类名anibyvue-mask的div作为按钮点击后，覆盖整个页面的蒙层，子组件将在这个蒙层上显示
      用户可以通过customMaskStyles属性，进行蒙层样式的自定义
  -->
  <transition name="anibyvue-fade">
    <div v-show="show" tabindex="-1" :style="style" :class="['anibyvue', className]" @keyup.esc="onEsc">
      <div class="anibyvue-mask" v-if="mask" @click="onClickMask" :style="customMaskStyles" />
      <!-- 这个组件用来实现具体某动画的实现,且用户可以自定义子组件样式 -->
      <transition :name="`anibyvue-${animation}`">
        <div class="anibyvue-dialog" v-show="show" :style="dialogStyle">
          <span class="anibyvue-close" v-if="closeButton" @click="$emit('hide')" />
          <!-- 父组件在子组件中的内容默认是不显示的，通过slot内容分发，将父组件放在子组件的内容在相应的位置显示 -->
          <slot></slot>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'anibyvue',
  // 子组件中提供模板默认参数，以备用户不修改任何参数
  props: {
    show: {
      type: Boolean,
      required: true
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 240
    },
    duration: {
      type: Number,
      default: 300
    },
    measure: {
      type: String,
      default: 'px'
    },
    animation: {
      type: String,
      default: 'zoom'
    },
    mask: {
      type: Boolean,
      default: true
    },
    closeButton: {
      type: Boolean,
      default: true
    },
    closeOnClickMask: {
      type: Boolean,
      default: true
    },
    className: {
      type: String,
      default: ''
    },
    //用户可自定义的子组件样式
    customStyles: {
      type: Object,
      default: () => ({})
    },
    //用户可自定义的蒙层样式
    customMaskStyles: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    //点击按钮后，蒙层动画延迟执行的时间
    style() {
      return {
        animationDuration: `${this.duration}ms`
      };
    },
    //确定子组件的大小，以及动画延迟执行时间
    dialogStyle() {
      return {
        width: this.width + this.measure,
        height: this.height + this.measure,
        animationDuration: `${this.duration}ms`,
        ...this.customStyles
      }
    }
  },

  watch: {
    show(isShow) {
      isShow && this.$nextTick(() => {
        this.$el.focus();
      })
    }
  },

  methods: {
    //如果蒙层被点击，则返回到主页
    onClickMask() {
      this.$emit('clickMask');
      if (this.closeOnClickMask) {
        this.$emit('hide');
      }
    }
  }
}
</script>

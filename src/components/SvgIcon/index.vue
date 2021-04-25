<!-- 封装一个svg-icon组件 -->
<template>
  <svg
    v-bind="$attrs"
    v-bind:class="svgClass">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
// prop name要和svg的文件名一致
// prop className可以用来定制样式
export default {
  name: 'SvgIcon',
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.name}`
    },
    svgClass () {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  transform: scale(0.5);
}
</style>

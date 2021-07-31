<template>
  <div class="about">
    <h1>This is an Vue3 about page</h1>
    <svg-icon name="setting"></svg-icon>
    <div id="chart-demo" style="width:900px;height:400px;"></div>
  </div>
</template>
<script>
import * as echarts from 'echarts'
import { onMounted } from 'vue'
export default {
  name: 'About',
  setup () {
    onMounted(() => {
    // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('chart-demo'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    })
  },
}
</script>

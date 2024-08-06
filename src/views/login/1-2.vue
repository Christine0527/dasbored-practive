<template>
  <div>
    <el-row :gutter="20" style="margin-top: 30px">
      <Tabcard />
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card>
          <apexchart type="bar" :options="chartOptions" :series="series" height="255" />
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <apexchart type="pie" :options="pieOptions" :series="pieSeries" height="300" />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import Tabcard from './1-2/tabcard.vue'
const chartOptions = ref({
  chart: {
    type: 'bar',
    toolbar: {
      show: false // 隐藏工具栏
    }
  },
  xaxis: {
    categories: [10, 20, 30, 40, 50, 60, 70, 80, 2070]
  },
  title: {
    text: '魔物數量',
    align: 'center'
  }
})
const series = ref([
  {
    name: 'sales',
    data: [250, 18, 15, 20, 25, 20, 70, 91, 125]
  }
])
// 饼图的数据和配置
const pieOptions = ref({
  chart: {
    type: 'pie'
  },
  title: {
    text: '魔物等級',
    align: 'center'
  },
  legend: {
    position: 'bottom'
  },
  colors: ['#FF6F61', '#6B5B95', '#88B04B'], // 设置每个部分的颜色
  dataLabels: {
    enabled: false // 启用数据标签
  }
})
const pieSeries = ref([10, 20, 30, 40])
// 設定圖表的樣式和屬性
</script>
<style></style>

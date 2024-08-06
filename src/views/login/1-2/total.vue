<template>
        <el-row :gutter="20">
      <el-card>
      <!-- options 定義樣式 ，series 定義數據 -->
        <apexchart
          type="bar"
          :options="chartOptions1"
          :series="mixedChart.series"
          height="255"
          width="860"
        />
      </el-card>
    </el-row>
</template>
<script setup>
import { computed } from 'vue';
const chartOptions1 = computed(() => {
  return {
    // 是圖表的基本屬性.包括類型.高度.字體
    chart: {
      type: 'bar',
      height: 255,
      fontFamily: `inherit`,
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: [0, 2]
    },
    plotOptions: {
      bar: {
        columnWidth: '50%'
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: 'vertical',
        opacityFrom: [0, 1],
        opacityTo: [0.5, 1],
        // 這邊是指顏色漸變的過程0~100
        stops: [0, 100],
        hover: {
          inverseColors: false,
          shade: 'light',
          type: 'vertical',
          opacityFrom: 0.15,
          opacityTo: 0.65,
          stops: [0, 96, 100]
        }
      }
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    },
    legend: {
      show: false
    },
    grid: {
      borderColor: 'rgba(0,0,0,0.1)'
    },
    markers: {
      size: [0, 3],
      colors: '#fff',
      strokeWidth: [0, 2],
      hover: {
        size: 5,
        strokeColors: '#fff'
      }
    }
  }
})
// 設定圖表的數據
const mixedChart = {
  series: [
    {
      name: 'TEAM A',
      type: 'column',  //這邊設定了圖表為柱狀圖
      data: [50, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 25], // 這邊是設定team a 的數據
    },
    {
      name: 'TEAM B',
      type: 'line', //這邊設定team b為折線圖
      data: [30, 55, 36, 30, 45, 35, 64, 52, 59, 36, 39, 35],// 設定team b 的數據
      markers: {
        size: 0 // 隱藏折線圖頂點標記
      }
    }
  ],
}
</script>
<style>

</style>
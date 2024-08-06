<template>
  <el-row :gutter="20">
    <el-card>
        <apexchart type="line" height="255" :options="chartOptions" :series="mixedChart.series" width="855"> </apexchart>
    </el-card>
    </el-row>
</template>
<script setup>
import { computed } from 'vue';
const chartOptions = computed(() => {
  return {
    chart: {
      type: 'line',
      stacked: false,
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
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
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
  };
});
const mixedChart = {
  series: [
    {
      name: 'TEAM A',
      type: 'column',
      data: [15, 25, 35, 55, 15, 5, 25, 5, 65, 15, 55, 35]
    },
    {
      name: 'TEAM B',
      type: 'line',
      data: [15, 13, 55, 26, 77, 50, 33, 51, 57, 43, 55, 4]
    }
  ]
};
</script>
<style>

</style>
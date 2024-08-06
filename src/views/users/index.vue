<template>
  <el-row>
    </el-row>
  <!-- gutter 是指裡面的el-col間距是 20px -->
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover" class="user-table">
        <div class="user">
          <img :src="getImageUrl('fulilan.jpg')" class="user" width="255" />
          <div class="user-info">
            <p class="user-info-admin">葬送的芙莉蓮</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登錄時間: <span>2024-07-31</span></p>
          <p>上次登錄地點: <span>台北</span></p>
        </div>
      </el-card>
      <el-card shadow="hover" class="user-table">
        <el-table :data="tableData">
          <!-- label這一列的是顯示標題，prop是這一列的數據屬性 -->
          <!-- val是從tableLabel 的每個值都會抓到 然後綁定v-for 的唯一屬性是key 然後label用來顯示標題 -->
          <el-table-column v-for="(val, key) in tableLabel" :key="key" :prop="key" :label="val">
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16" style="margin-top: 40px">
      <div class="user">
        <el-card
          :body-style="{ display: 'flex', padding: 0 }"
          v-for="item in countData"
          :key="item.name"
          :style="{ width: '32%', marginBottom: '20px' }"
          shadow="hover"
          class="card"
        >
          <img
            :src="getImageUrl(item.icon)"
            :style="{
              background: item.color,
              width: '119px',
              height: '120px',
              marginTop: '10px',
              marginBottom: '10px',
              'font-size': '20px'
            }"
          />
          <div class="detail">
            <p class="num" :style="{ 'font-size': '15px' }">{{ item.name }}</p>
            <p class="txt" :style="{ 'font-size': '11px' }">戰力:{{ item.value }}</p>
            <p class="txt" :style="{ 'font-size': '11px' }">壽命:{{ item.age }}</p>
          </div>
        </el-card>
      </div>
      <!-- <el-row :gutter="20">
        <el-col :span="12">
        <el-card>
          <apexchart type="bar" :options="chartOptions" :series="series" height="300"   />
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <apexchart type="pie" :options="pieOptions" :series="pieSeries" height="300" />
        </el-card>
      </el-col>
      </el-row> -->
    </el-col>
  </el-row>
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios'
// const chartOptions = ref({
//   chart: {
//     type: 'bar',
//     toolbar: {
//       show: false // 隐藏工具栏
//     }
//   },
//   xaxis: {
//     categories: [10, 20, 30, 40, 50, 60, 70, 80, 2070]
//   },
//   title: {
//     text: '魔物數量',
//     align: 'center'
//   }
// })
// const series = ref([
//   {
//     name: 'sales',
//     data: [250, 18, 15, 20, 25, 20, 70, 91, 125]
//   }
// ])
// // 饼图的数据和配置
// const pieOptions = ref({
//   chart: {
//     type: 'pie'
//   },
//   title: {
//     text: '魔物等級',
//     align: 'center'
//   },
//   legend: {
//     position: 'bottom'
//   },
//   colors: ['#F0F0F0', '#BEBEBE', '#6C6C6C'], // 设置每个部分的颜色
//   dataLabels: {
//     enabled: true // 启用数据标签
//   }
// });
// const pieSeries = ref([10, 20, 30, 40]);

const countData = ref([
  {
    name: '芙莉蓮',
    value: '未知',
    age: '1500',
    icon: '芙莉蓮.jpg',
    color: '#67C23A',
    background: '#E1F3D8'
  },
  {
    name: '費倫',
    value: '5000',
    age: '16',
    icon: '費倫.jpg',
    color: '#67C23A',
    background: '#E1F3D8'
  },
  {
    name: '修塔爾克',
    value: '3000',
    age: '17',
    icon: '修塔爾克.jpg',
    color: '#E6A23C',
    background: '#FAECD8'
  },
  {
    name: '欣梅爾',
    value: '3500',
    age: '卒',
    icon: '欣梅爾.jpg',
    color: '#409EFF',
    background: '#D6EFFF'
  },
  {
    name: '海塔',
    value: '4000',
    age: '卒',
    icon: '海塔.jpg',
    color: '#67C23A',
    background: '#E1F3D8'
  },
  {
    name: '艾冉',
    value: '3000',
    age: '330',
    icon: '艾冉.jpg',
    color: '#E6A23C',
    background: '#FAECD8'
  },
  {
    name: '弗蘭梅',
    value: '8000',
    age: '卒',
    icon: '弗蘭梅.jpg',
    color: '#409EFF',
    background: '#D6EFFF'
  },
  {
    name: '賽莉耶',
    value: '未知',
    age: '2000',
    icon: '賽莉耶.jpg',
    color: '#409EFF',
    background: '#D6EFFF'
  },
  {
    name: '庫瓦爾',
    value: '4000',
    age: '卒',
    icon: '庫瓦爾.jpg',
    color: '#409EFF',
    background: '#D6EFFF'
  }
])
axios({
  url: '/api/home/getTableData', // 確保與 Mock 配置中的路徑一致
  method: 'get'
})
  .then((res) => {
    console.log(' ')
  })
  .catch((error) => {
    console.error(' ') // 檢查失敗響應
  })
// user是你希望生成圖片URL的用戶標識符
const getImageUrl = (imageName) => {
  // 因為 import.meta.url 他是 http://localhost:8081/src/views/users/index.vue
  const url = new URL(`../../assets/${imageName}`, import.meta.url).href
  return url
}
// 這是包含 => 多個數據對象的 => 數組
const tableData = ref([
  { course: 'Java', price: '100', totalprice: '100' },
  { course: 'Javascript', price: '150', totalprice: '150' },
  { course: 'Python', price: '200', totalprice: '200' }
])

// 包含表格列標籤的對象
const tableLabel = ref({
  course: '課程',
  price: '今日購買',
  totalprice: '本月購買'
})
</script>

<style scoped>
.home {
  height: 100%;
  overflow: auto;
}
.icons {
  width: 50px;
  height: 50px;
  /* 确保没有其他背景颜色覆盖 */
  background-color: inherit;
}
.user {
  align-items: center;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
  padding-bottom: 20px; /* 添加 padding 以便於區分內容 */
}

.user-img {
  width: 140px;
  height: 130px;
  border-radius: 50%;
  margin-right: 20px;
  object-fit: cover; /* 修改 object-fit 屬性為 cover，這樣圖片會按比例縮放 */
}

.user-info {
  display: flex;
  flex-direction: column;
}

.user-info p {
  line-height: 40px;
}

.user-info-admin {
  font-size: 35px;
}

.user-info-role {
  color: #999;
}

.login-info p {
  line-height: 30px;
  font-size: 14px;
  color: #999;
}

.login-info span {
  color: #666;
  margin-left: 60px;
}
.user-table {
  margin-top: 20px;
}
.num {
  display: flex;
  flex-wrap: wrap;
  background-color: inherit; /* 确保背景色不会被其他样式覆盖 */
  font-size: 30px;
  margin-bottom: 10px;
}
.txt {
  font-size: 15px;
  text-align: center;
  color: #999;
}
.user {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.detail {
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.card {
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.1);
}
</style>

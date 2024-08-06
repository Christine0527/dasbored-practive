// mockData/home.js
import Mock from 'mockjs';

const homeApi = {
  getTableData: () => {
    return Mock.mock({
      code: 200,
      data: {
        'tableData|4': [{ // 使用 Mock.js 生成假數據
          name: '@name', // 使用 Mock.js 的 name 屬性
          'todayBuy|100-1000': 1, // 隨機生成 100 到 1000 之間的數字
          'monthBuy|1000-5000': 1, // 隨機生成 1000 到 5000 之間的數字
          'totalBuy|10000-100000': 1 // 隨機生成 10000 到 100000 之間的數字
        }]
      }
    });
  },

};

export default homeApi;
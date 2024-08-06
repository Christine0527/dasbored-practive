import Mock from 'mockjs'
import homeApi from './mockData/home.js'
// 1 攔截的路徑 2 方法 3 製造出的假數據
Mock.mock('/api/home/getTableData', 'get',homeApi.getTableData)

import axios from 'axios'
import { ElMessage } from 'element-plus'
// import {diffTokenTime} from '@utils/auth'
// import store from '@/stores/modules/app.js'
const service = axios.create({
  baseURL: import.meta.env.VUE_APP_BASE_API,
  timeout: 5000
})

// service 這是創建的axios實例
// interceptors 用於管理請求和響應攔截器，會把token 存入瀏覽器
// request 是interceptors的一個請求屬性
service.interceptors.request.use(
  // 請求成功時的回調函數
  (config)=>{
    // if(localStorage.getItem('token')){
    //   if(diffTokenTime()){
    //     store.dispatch('app/logout')
    //     return Promise.reject(new Error('token 失效了'))
    //   }

    // }
    config.headers.Authorization = localStorage.getItem('token')
    return config
  },
  // 請求失敗時的回調函數
  (error) =>{
    return Promise.reject(new Error(error))
  }
)


// interceptors 攔截器
service.interceptors.response.use((response) => {
  const { data, meta } = response.data
  // 這是請求成功
  if(meta.status ===200 || meta.status ===201){
    return data
  }else{
    ElMessage.error(meta.msg)
    return Promise.reject(new Error(meta,msg))
  }
},error =>{
  error.response && ElMessage.error(error.response.data)
  return Promise.reject(new Error(error.response.data))
}
)

function request(options){
  options.method = options.method || "get";
  
  return service(options)
}

export default request

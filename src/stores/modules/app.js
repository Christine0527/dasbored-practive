// import { login as loginApi } from '@/api/login'
// import router from '@/router'
// import { userInfo } from 'os'
import { defineStore } from 'pinia'
// import {setTokenTime} from'@utils/auth'
export const useAuthStore = defineStore('auth', {
  state: () => ({
    // 如果存在就是token 不存在就是空字串
    // token: localStorage.getItem('token') || '',
    siderType:true,
    lang:localStorage.getItem('lang') ||'zh',
  }),
  // getters: {
  //   siderType() {
  //     return this.siderType
  //   }
  // },
  actions: {
    changeSiderType(){
      this.siderType = !this.siderType
    },
    changLang(state,lang){
      state.lang = lang
    }
  //   setToken(token) {
  //     // 將傳入的token值傳入給store中的token 值
  //     this.token = token
  //     // 並將這個token存儲到瀏覽器中
  //     localStorage.setItem('token', token)
  //   },
  //   async login(userInfo) {
  //     try {
  //       // 傳遞loginApi 調用userInfo 用戶信息
  //       const res = await loginApi(userInfo)
  //       // 如果調用成功就拿登陸的token 存在setToken裡面
  //       this.setToken(res.token)
  //       setTokenTime()
  //       // 調用成功後重新定向到主頁
  //       router.replace('/')
  //     } catch (err) {
  //       console.error('Login failed:', err)
  //       throw err
  //     }
  //   },
  //   // 退出
  //   logout() {
  //     // 將空值傳給瀏覽器的token
  //     this.token = ''
  //     // 移除網頁的token
  //     localStorage.removeItem('token')
  //     // 回到login 登入頁
  //     router.replace('/login')
  //   }
  }
})

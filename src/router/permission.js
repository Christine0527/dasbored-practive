import router from './index'
// import store from '@/store'
// 這個登陸頁
// const whiteList = ['/login']
// // 就是你必須在登入後才能訪問首頁
// router.beforeEach((to,from,next)=>{
//     // 假如這個存在的話
//     if(store.getters.token){
//         if(to.path === '/login'){
//             next('/')
//         }else{
//             next()
//         }
//     }else{
//         if(whiteList.includes(to.path)){
//             next()
//         }else{
//             next('/login')
//         }
//     }
// })
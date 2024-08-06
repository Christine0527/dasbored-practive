import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'
import VueApexCharts from 'vue3-apexcharts';
import '@/router/permission'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import i18n from './i18n'
import filters  from '@/utils/filters'
import "../src/api/mock"
import api from "@/api/api"
const globalVar = 'globalValue'
window.globalVar = globalVar
const app = createApp(App)
app.config.globalProperties.$api = api
const pinia = createPinia()
for (const iconName in ElementPlusIconsVue) {
  app.component(iconName, ElementPlusIconsVue[iconName])
}
filters(app)
app.use(pinia)
app.use(VueApexCharts);
app.component('apexchart', VueApexCharts);
app.use(router)
app.use(i18n)
app.mount('#app')

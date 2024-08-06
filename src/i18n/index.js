import { createI18n } from 'vue-i18n'

// 數據元
const messages = {
  en: {
    msg: {
      title: 'user login'
    }
  },
  zh: {
    msg: {
      title: '用戶登錄'
    }
  }
}

const getCurrentLanguage = () => {
  const UAlang = navigator.language //zh-CN
  const langCode = UAlang.indexOf('zh') !==-1 ? 'zh' : 'en'
  localStorage.setItem('lang', langCode)
  return langCode
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  // 他在說如果他返回一個有值的話就用它本來的值
  // 如果返回null 或undefined 的話就返回'zh'
  locale: getCurrentLanguage() || 'zh',
  messages: messages
})

export default i18n

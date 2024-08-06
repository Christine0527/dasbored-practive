<template>
  <el-dropdown @command="handleCommand">
    <span class="el-dropdown-link">
      <el-icon><ElemeFilled /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="zh" :disabled="currentLanguage === 'zh'">中文</el-dropdown-item>
        <el-dropdown-item command="en" :disabled="currentLanguage === 'en'"
          >English</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { useAuthStore } from '@/stores/modules/app.js'
const route = useAuthStore()

const i18n = useI18n()
const currentLanguage = computed(() => {
  return i18n.locale.value
})
const handleCommand = (val) => {
  console.log(val)
  route.changLang(val)
  i18n.locale.value = val
  localStorage.setItem('lang', val)
}
</script>
<style scoped>
.el-dropdown-link {
  font-size: 24px;
  padding: 10px;
  margin: 5px;
  display: flex;
  align-items: center;
}
</style>

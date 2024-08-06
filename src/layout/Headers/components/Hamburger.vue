<template>
  <div class="hamburger-container" @click="toggleClick">
    <el-icon>
      <component :is="icon" />
    </el-icon>
  </div>
</template>
<script setup>
import { useAuthStore } from '@/stores/modules/app.js'
import { Expand, Fold } from '@element-plus/icons-vue'
import { computed } from 'vue'
const store = useAuthStore()
const toggleClick = () => {
  store.changeSiderType()
}
const icon = computed(() => {
  return store.siderType ? Expand : Fold
})
</script>
<style scoped>
.hamburger-container {
  margin-right: 16px;
  box-sizing: border-box;
  cursor: pointer;
}
</style>

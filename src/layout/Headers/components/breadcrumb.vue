<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">
      <span class="no-redirect" v-if="index === breadcrumbList.length -1">{{ item.name }}</span>
      <span class="redirect" v-else @click="handleRedirect(item.path)">{{ item.name }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script setup>
import { watch, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
// 若要跳轉要用到路由useRouter
const router = useRouter()
const breadcrumbList = ref([])
const initBreadcrumbList = () => {
  breadcrumbList.value = route.matched
}
const handleRedirect = (path) => {
  router.push(path)
}

// 這個是當路由有變化的時候會出現的initBreadcrumbList()
watch(
  route,
  () => {
    initBreadcrumbList()
  },
  { deep: true, immediate: true }
)
</script>
<style scoped>
.no-redirect {
  color: #97a8be;
  cursor: text;
}
.redirect {
  color: #666;
  cursor: pointer;
  font-weight: 600;
}
</style>

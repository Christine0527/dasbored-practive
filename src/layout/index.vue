<template>
  <div class="app-wrapper">
    <el-container class="content-wrapper">
      <el-aside width="asidewidth" class="sidebar-container">
        <Menu />
      </el-aside>
      <el-container :style="{ marginLeft: !asidewidth }">
        <el-header >
          <Headers />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import Menu from './Menu/index.vue'
import {computed} from 'vue'
import Headers from './Headers/index.vue'
import {useAuthStore} from '@/stores/modules/app.js'
const store = useAuthStore()

const asidewidth = computed(()=>{
  return store.siderType ? '200px':'67px'
})
</script>
<style scoped>
.app-wrapper {
  background-color: white;
  height: 100vh;
  display: flex;
}
.content-wrapper {
  display: flex;
  width: 100%;
}
.sidebar-container {
  background-color: #001f3f;
  color: white;
  height: 100vh;
  margin: 0; /* Remove margin if any */
  padding: 0; /* Remove padding if any */
}
.container {
  flex: 1;
  background-color: white;
  display: flex;
  flex-direction: column;
}
.container > .el-header,
.container > .el-main {
  background-color: white;
}
.container > .el-header {
  flex: 0 0 auto;
}
.container > .el-main {
  flex: 1;
  overflow: auto;
}
.el-header {
  padding: 0; /* Remove default padding */
  margin: 0; /* Remove default margin */
  background-color: #f5f5f5; /* Background color of <el-header> */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Box shadow */
}
</style>

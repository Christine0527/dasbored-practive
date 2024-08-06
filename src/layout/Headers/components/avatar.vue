<template>
      <el-dropdown>
    <span class="el-dropdown-link">
        <el-avatar shape="square" :size="40" :src="squareUrl" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>

</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const squareUrl = ref(
  'https://th.bing.com/th/id/OIP.1FUVHDeKfV0O0JaHQ9BTwAHaEK?w=307&h=180&c=7&r=0&o=5&dpr=2&pid=1.7'
)
const logout=()=>{
    router.push('/login')
}
</script>
<style scoped></style>

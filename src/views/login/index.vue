<template>
  <el-main
    class="login-container"
    style="background-color: #909399; height: 300px; width: 400px; border-radius: 20px"
  >
    <el-form :model="form" label-width="auto" class="login-form" style="max-width: 600px">
      <div class="title-container">
        <h3 class="title">{{$t('msg.title')}}</h3>
      </div>
      <el-form-item>
        <el-input v-model="form.name">
          <template v-slot:prepend>
            <el-icon :size="20" class="svg-container">
              <User />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-form @submit.prevent="handleLogin">
          <el-input v-model="form.password" type="password" data="passworedtype">
            <template v-slot:prepend>
              <el-icon :size="20" class="svg-container">
                <Lock />
              </el-icon>
            </template>
            <template v-slot:append>
              <i class="fa-solid fa-eye" :size="20"></i>
              <i class="fa-solid fa-eye-slash"></i>
            </template>
          </el-input>
          <el-button
            type="primary"
            @click="handleLogin"
            class="login-button"
            style="margin-top: 50px"
            >登錄</el-button
          >
        </el-form>
      </el-form-item>
    </el-form>
  </el-main>
</template>
<script setup>
import { ref , getCurrentInstance,onMounted } from 'vue'
import { login } from '@/api/login'
import { User, Lock } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
// import {useAuthStore} from './store/modules/app.js'
// const store = useAuthStore()
const form = ref({
  name: '',
  password: ''
})
const router = useRouter()
const handleLogin = async () => {
  try {
    // 這個是觸發app的login 然後傳遞form,value r
    // store.dispatch('app/login',form.value)
    // await login(form.value) // 尝试登录
    router.push('/') // 登录成功后跳转到主页
  } catch (error) {
    console.error('登录失败', error)
    router.push('/') // 即使失败也跳转到主页
  }
}
</script>
<style scoped>
.login-container {
  background-color: #909399;
  height: 200px;
  width: 400px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
}

.login-form {
  max-width: 600px;
  width: 100%;
}

.title-container {
  text-align: center;
  margin-bottom: 20px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  color: #fff;
}

.el-form-item {
  margin-bottom: 20px;
}

.svg-container {
  margin-right: 10px;
}

.el-input {
  width: 100%;
}
.login-button {
  width: 100%;
}
</style>

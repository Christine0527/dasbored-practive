<template>
  <el-dialog v-model="dialogFormVisible" :title="dialogTitle" width="500">
    <el-form ref="formRef" :model="form" label-width="auto" style="max-width: 600px" :rules="rules">
      <el-form-item label="用戶名" prop="username">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="密碼" prop="password" type="password">
        <el-input v-model="form.password" />
      </el-form-item>
      <el-form-item label="郵箱" prop="email">
        <el-input v-model="form.email" />
      </el-form-item>
      <el-form-item label="手機" prop="mobile">
        <el-input v-model="form.mobile" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary" @click="handleConfirm">確認</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>

import { ref, defineEmits, reactive, defineProps } from 'vue'
// defineProps 是父傳子
defineProps({
  dialogTitle:{
    type:String,
    default:'',
    required:true
  }
})
const emits = defineEmits(['update:modelValue'])

const dialogFormVisible = ref(false)
const handleClose = () => {
  emits('update:modelValue', false)
}
const handleConfirm = () => {
  emits('update:modelValue', false)
}
const form = ref({
  username: '',
  password: '',
  email: '',
  mobile: ''
})
const formRef = ref(null)
const rules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入合法的邮箱地址', trigger: ['blur', 'change'] }
  ],
  mobile: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    { pattern: /^[0-9]{10}$/, message: '请输入合法的手机号', trigger: 'blur' }
  ]
})
</script>

<style>
.dialog-footer {
  text-align: right;
}
</style>

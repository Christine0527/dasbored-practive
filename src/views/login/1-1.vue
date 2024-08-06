<template>
  <el-card>
    <el-row :gutter="25" class="header" style="color: blue">
      <el-col :span="8">
        <el-input :placeholder="$t('請輸入用戶姓名')" clearable v-model="queryForm.query"
          >5555555</el-input
        >
      </el-col>
      <el-col :span="9" class="add-button-container">
        <el-button type="primary" :icon="Search" @click="searchTable">Search</el-button>
      </el-col>
      <el-col :span="3" class="add-button-container">
        <el-button type="primary" @click="handleDialogValue">添加</el-button>
      </el-col>
    </el-row>
    <el-table :data="filteredData" stripe style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="150" />
      <el-table-column prop="status" label="Status" width="100">
        <template #default="scope">
          <el-switch v-model="scope.row.status" @change="changeState(row)" />
        </template>
      </el-table-column>
      <el-table-column prop="status" label="Status" width="120">
        <template #default="scope">
          {{ $filters.filterTimes(scope.row.date) }}
        </template>
      </el-table-column>
      <el-table-column prop="address" label="Address">
        <template #default>
          <el-button type="primary" size="small" :icon="Edit"></el-button>
          <el-button type="success" size="small" :icon="Setting"></el-button>
          <el-button type="danger" size="small" :icon="Delete"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-model:current-page="queryForm.pagenum"
      :page-size="queryForm.pagesize"
      layout="total, prev, pager, next"
      :total="total"
    />
  </el-card>
  <Dialog v-model="dialogFormVisible" :dialogTitle="dialogTitle" />
</template>
<script setup>
import { ref, computed } from 'vue'
import { Search, Edit, Setting, Delete } from '@element-plus/icons-vue'
import { getUser, changeUserState } from '@/api/user.js'
import { ElMessage } from 'element-plus'
import Dialog from '../users/components/dialog.vue'

const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Christine',
    address: 'No. 189, Grove St, Los Angeles',
    staus: false
  },
  {
    date: '2016-05-02',
    name: 'Timmy',
    address: 'No. 189, Grove St, Los Angeles',
    staus: false
  },
  {
    date: '2016-05-04',
    name: 'Chris',
    address: 'No. 189, Grove St, Los Angeles',
    staus: false
  },
  {
    date: '2016-05-01',
    name: 'Happy',
    address: 'No. 189, Grove St, Los Angeles',
    staus: false
  }
])
const total = ref(0)
const dialogTitle = ref('')
const queryForm = ref({
  query: '',
  pagenum: 1,
  pagesize: 2
})
const dialogFormVisible = ref(false)
const filteredData = computed(() => {
  // 如果值為空則返回所有數據
  if (!queryForm.value.query) {
    return tableData.value
  }
  //   否則過濾tableData.value並返回queryForm.value.query 這個篩選的值
  return tableData.value.filter((item) =>
    item.name.toLowerCase().includes(queryForm.value.query.toLowerCase())
  )
})
const searchTable = () => {
  queryForm.value.query
  // 这里可以执行其他操作，比如从服务器获取数据
  console.log('Searching for:', queryForm.value.query)
}

const initUserList = async () => {
  const res = await getUser(queryForm.value)
  console.log(res)
}
initUserList()
const changeState = async (row) => {
  try {
    await changeUserState(row.status)
    ElMessage({
      message: 'Congrats, this is a success message.',
      type: 'success'
    })
  } catch (error) {
    console.log('~~~')
  }
  ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success'
  })
}
const handleDialogValue = () => {
  dialogTitle.value = '添加用戶'
  dialogFormVisible.value = true
}
</script>
<style scoped>
.header {
  padding-bottom: 16px;
  box-sizing: border-box;
}
</style>

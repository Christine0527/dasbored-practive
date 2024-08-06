<template>
  <div class="menu-container">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      router
      unique-opened
      :collapse="!store.siderType"
    >
      <el-sub-menu :index="item.id" v-for="item in menusList" :key="item.id">
        <template #title>
          <el-icon>
            <component :is="iconList[0]"></component>
          </el-icon>
          <span>用戶管理</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">
            <el-icon>
              <component :is="icon"></component>
            </el-icon>
            用戶列表</el-menu-item
          >
          <el-menu-item index="1-2">
            <el-icon>
              <component :is="icon"></component>
            </el-icon>
            用戶權限</el-menu-item
          >
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">
            <el-icon> <component :is="icon"></component> </el-icon>商品管理</el-menu-item
          >
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>
            <el-icon>
              <component :is="iconList[2]"></component> </el-icon
            >訂單管理</template
          >
          <el-menu-item index="1-4-1">
            <el-icon> <component :is="icon"></component> </el-icon>數據統計</el-menu-item
          >
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>
  </div>
</template>
<script setup>
import { menuList } from '@/api/menu.js'
import { ref } from 'vue'
import { useAuthStore } from '@/stores/modules/app.js'
const store = useAuthStore()

const iconList = ref(['user', 'settimg', 'shop', 'ticket', 'pie-chart'])
const icon = ref('menu')
const icon1 = ref('shop')

const menusList = ref([
  {
    id: '1',
    title: 'Navigator One',
    groups: [
      { index: '1-1', title: 'item one' },
      { index: '1-2', title: 'item two' }
    ],
    subGroups: [{ index: '1-3', title: 'item three' }],
    subMenus: [
      {
        index: '1-4',
        title: 'item four',
        items: [{ index: '1-4-1', title: 'item one' }]
      }
    ]
  }
  // 可以添加更多菜单项
])
const initMenuList = async () => {
  menusList.value = await menuList()
}
initMenuList()
</script>
<style scoped>
.menu-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.el-menu-vertical-demo {
  height: 100%; /* 让菜单填满父容器的高度 */
}
</style>

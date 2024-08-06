<template>
  <el-card style="margin-bottom: 20px">
    <el-tabs v-model="activeTab">
      <el-tab-pane label="總數量" name="total">
        <Total v-if="activeTab === 'total'" />
      </el-tab-pane>
      <el-tab-pane label="區數量" name="paidcard">
        <Paidcard v-if="activeTab === 'paidcard'" />
      </el-tab-pane>
      <el-tab-pane label="社區數量" name="tinycard">
        <Tinycard v-if="activeTab === 'tinycard'" />
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Total from './total.vue'
import Paidcard from './paidcard.vue'
import Tinycard from './tinycard.vue'

const activeTab = ref('total')
</script>

<style scoped>
/* 你可以在这里添加自定义样式 */
</style>

<template>
  <el-page-header @back="onBack">
    <template #breadcrumb>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: './page-header.html' }">
          homepage
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="./page-header.html">route 1</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>route 2</el-breadcrumb-item>
      </el-breadcrumb>
    </template>



  </el-page-header>

</template>

<script setup lang="ts">
import { ElNotification as notify } from 'element-plus'
const onBack = () => {
  notify('Back')
}
</script>

<style>
.el-avatar {
  display: inline-block;
}
</style>

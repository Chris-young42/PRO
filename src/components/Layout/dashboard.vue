<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <page />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <index />
        </el-aside>
        <el-main>
          <Choose />
          <Document />
          <Bottom />
          <docker />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang='ts'>
import index from './menu/index.vue';
import docker from '@/views/docker.vue';
import page from '@/views/page.vue';
import Choose from '@/views/Choose.vue';
import Document from '@/views/Document.vue';
import Bottom from '@/views/Bottom.vue';
</script>
<style>
.el-header {
  /* background-color: goldenrod; */
  height: 9vh;
}

.el-aside {
  /* background-color: green; */
  height: 100vh;
}
</style>

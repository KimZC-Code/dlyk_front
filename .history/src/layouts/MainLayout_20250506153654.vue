<script setup>
import Menu from '@/components/indexPage/menu.vue'
import Header from '@/components/indexPage/header.vue'
import { useLayoutStore } from '@/stores/layout'
import { computed } from 'vue'

const layoutStore = useLayoutStore()
const asideWidth = computed(() => layoutStore.isCollapse ? '64px' : '200px')
</script>
<template>
  <div id="MainPage">
    <el-container>
      <el-aside :width="asideWidth">
        <Menu />
      </el-aside>
      <el-container>
        <el-header>
          <Header/>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style lang="scss" scoped>
#MainPage {
  height: calc(100vh);
}
.el-aside {
  background-color: black;
  height: calc(100vh);
}
.el-header {
  background-color: rgba(240, 254, 255);
  height: 30px;
}
</style>

<script setup>
import { useLayoutStore } from "@/stores/layout";
import { computed } from "vue";
import MainHeader from "@/components/main/MainHeader.vue";
import MainLeft from "@/components/main/MainLeft.vue";

const layoutStore = useLayoutStore();
const asideWidth = computed(() => (layoutStore.isCollapse ? "64px" : "200px"));
</script>
<template>
  <div id="MainPage">
    <el-container>
      <el-aside :width="asideWidth">
        <main-left />
      </el-aside>
      <el-container>
        <el-header>
          <main-header />
        </el-header>
        <el-main>
          <router-view />
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

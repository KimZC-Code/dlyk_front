<script setup>
import { useLayoutStore } from '@/stores/layout';
const layoutStore = useLayoutStore();
</script>

<template>
  <div id="Menu">
    <div class="menu-title">@动力云客项目</div>
    <el-menu
      background-color="rgba(56,74,99)"
      class="el-menu-vertical-demo"
      text-color="white"
      popper-effect="dark"
      hover-background-color="blue"
      :collapse="layoutStore.isCollapse"
      :collapse-transition="false"
      :router="true"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><OfficeBuilding /></el-icon>
          <span>市场活动</span>
        </template>
        <el-menu-item index="/activity">市场活动</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><Magnet /></el-icon>
          <span>线索管理</span>
        </template>
        <el-menu-item index="2-1">线索管理</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <el-icon><User /></el-icon>
          <span>客户管理</span>
        </template>
        <el-menu-item index="3-1">客户管理</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="4">
        <template #title>
          <el-icon><Wallet /></el-icon>
          <span>交易管理</span>
        </template>
        <el-menu-item index="4-1">交易管理</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="5">
        <template #title>
          <el-icon><Memo /></el-icon>
          <span>产品管理</span>
        </template>
        <el-menu-item index="5-1">产品管理</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="6">
        <template #title>
          <el-icon><Grid /></el-icon>
          <span>字典管理</span>
        </template>
        <el-menu-item index="6-1">字典管理</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="7">
        <template #title>
          <el-icon><Stamp /></el-icon>
          <span>用户管理</span>
        </template>
        <el-menu-item index="/user"><el-icon><User /></el-icon>用户管理</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="8">
        <template #title>
          <el-icon><Setting /></el-icon>
          <span>系统管理</span>
        </template>
        <el-menu-item index="8-1">系统管理</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>
<style lang="scss" scoped>
.menu-title {
  background-color: black;
  color: white;
  height: 30px;
  text-align: center;
  line-height: 30px;
}
.el-menu {
  border-right: 0;
}
:deep(.el-menu) {
  /* 菜单项悬停 */
  .el-menu-item:hover {
    background-color: rgba(0, 0, 0, 0.3) !important;
    color: white !important;
  }
  
  /* 子菜单标题悬停 */
  .el-sub-menu__title:hover {
    background-color: rgba(0, 0, 0, 0.3) !important;
    color: white !important;
  }
}
</style>

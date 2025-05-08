<script setup>
import { useLayoutStore } from "@/stores/layout.js";
import { useUserStore } from "@/stores/userStore";
import { onMounted, ref } from "vue";
import { getLogInfo, logout } from "@/api/user";
import router from "@/routers/index.js";

const layoutStore = useLayoutStore();
const userStore = useUserStore();

const name = ref(""); // 直接访问
const user = ref({});
// onMounted(() => {
//   name.value = userStore.userInfo; // 安全访问并赋值
//   console.log(userStore.userInfo);
// });
const logoutHandler = () => {
  logout()
    .then(() => {
      window.localStorage.removeItem("token");
      router.push("/loginView")
    })
    .catch((err) => {
      console.log(err);
    });
};
onMounted(() => {
  const token = window.localStorage.getItem("token");
  if (!token || token == "null" || token == "undefined") {
    router.push("/loginView");
  } else {
    getLogInfo()
      .then((res) => {
        user.value = res;
        name.value = user.value.name; // 安全访问并赋值
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
</script>
<template>
  <div id="Header">
    <el-page-header title=" " icon="">
      <template #left>
        <span style="display: none"></span>
      </template>
      <template #content>
        <el-icon class="pointer-class" @click="layoutStore.toggleCollapse()"
          ><Menu
        /></el-icon>
      </template>
      <template #extra>
        <el-dropdown>
          <span class="no-border-dropdown">
            {{ name }}
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>我的资料</el-dropdown-item>
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item divided @click="logoutHandler"
                >退出登录</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </template>
    </el-page-header>
  </div>
</template>

<style lang="scss" scoped>
#Header {
  padding-top: 5px;
}
.user {
  margin-right: 2px;
}
/* 移除所有边框效果 */
.no-border-dropdown {
  border: none !important;
  outline: none !important;
  cursor: pointer !important;
}
.pointer-class {
  cursor: pointer;
}
// /* 移除悬停状态边框 */
// .no-border-dropdown:hover {
//   border: none !important;
//   outline: none !important;
// }

// /* 移除聚焦状态边框 */
// .no-border-dropdown:focus {
//   border: none !important;
//   outline: none !important;
// }
// .no-back-btn :deep(.el-page-header__left) {
//   display: none !important;
// }
:deep(.el-divider--vertical) {
  display: none !important;
}
</style>

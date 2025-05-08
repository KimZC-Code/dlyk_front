<script setup>
import { onMounted, ref } from "vue";
import { login, freeLogin } from "@/api/user.js";
import router from "@/routers/index.js";
const user = ref({
  username: "",
  password: "",
  rememberMe: false,
});
const handleLogin = async () => {
  login(user.value)
    .then((res) => {
      console.log(res);

      window.localStorage.setItem("token", res);
      router.push("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
onMounted(() => {
    const token = window.localStorage.getItem("token");
  if (token && token !== 'null' && token !== 'undefined') {
    freeLogin()
      .then((res) => {
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
</script>
<template>
  <div>
    <div
      style="
        text-align: center;
        margin-top: 100px;
        font-size: 24px;
        color: #333;
        margin-bottom: 10px;
        font-weight: bolder;
      "
    >
      欢迎登录
    </div>
    <el-form :model="user" label-position="left" label-width="60px">
      <el-form-item label="用户名">
        <el-input v-model="user.username" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          type="password"
          v-model="user.password"
          placeholder="请输入密码"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin">登录</el-button>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="user.rememberMe">记住我</el-checkbox>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.el-form {
  width: 60%;
  margin: auto;
}
.el-button {
  width: 100%;
}
</style>

<script setup>
import { onMounted, ref } from "vue";
import router from "@/routers";
import { addUser } from "@/api/user";
import { ElMessage } from "element-plus";
import { onBeforeRouteUpdate } from "vue-router";

const userInfo = ref({
  username: "",
  password: "",
  phone: "",
  name: "",
  email: "",
  accountNoExpired: 0,
  credentialsNoExpired: 0,
  accountNoLocked: 0,
});
onBeforeRouteUpdate((to, from, next) => {
    if (to.name === 'user') {
        loadUserData(); // 重新获取数据
      }
})
const handleSubmit = () => {
  addUser(userInfo.value)
    .then((res) => {
      console.log(router);
      ElMessage.success("添加成功");
      router.push('/user')
    
    })
};
</script>
<template>
  <div>
    <el-descriptions title="添加用户" size="large" :column="2" border>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon><user /></el-icon>用户名
          </div>
        </template>
        <el-input
          v-model="userInfo.username"
          type="text"
          placeholder="请输入账号"
        />
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon><user /></el-icon>密码
          </div>
        </template>
        <el-input
          v-model="userInfo.password"
          type="password"
          placeholder="请输入密码"
        />
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon style="margin-right: 3px"><iphone /></el-icon>手机号
          </div>
        </template>
        <el-input
          v-model="userInfo.phone"
          type="text"
          placeholder="请输入手机号"
        />
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon style="margin-right: 3px"><Avatar /></el-icon>姓名
          </div>
        </template>
        <el-input
          v-model="userInfo.name"
          type="text"
          placeholder="请输入姓名"
        />
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon style="margin-right: 3px"><Message /></el-icon>邮箱
          </div>
        </template>
        <el-input
          v-model="userInfo.email"
          type="text"
          placeholder="请输入邮箱"
        />
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon style="margin-right: 3px"><ChatRound /></el-icon>账号激活
          </div>
        </template>
        <el-switch
          active-value="1"
          inactive-value="0"
          v-model="userInfo.accountNoExpired"
        />
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon style="margin-right: 3px"><DeleteFilled /></el-icon
            >密码激活
          </div>
        </template>
        <el-switch
          active-value="1"
          inactive-value="0"
          v-model="userInfo.credentialsNoExpired"
        />
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon style="margin-right: 3px"><Lock /></el-icon>账号是解除锁定
          </div>
        </template>
        <el-switch
          active-value="1"
          inactive-value="0"
          v-model="userInfo.accountNoLocked"
        />
      </el-descriptions-item>
    </el-descriptions>
    <div class="btn-group">
      <el-button type="primary" @click="handleSubmit">添加</el-button>
      <el-button type="danger" @click="router.push('/user')">返回</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn-group {
  margin-top: 20px;
  text-align: center;
}
</style>

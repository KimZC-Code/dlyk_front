<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getUserById, updateUser } from "@/api/user";
import router from "@/routers";
import { ElMessage } from "element-plus";
// const userInfo = ref({
//   username: "",
//   password: "",
//   phone: "",
//   name: "",
//   email: "",
//   accountNoExpired: 0,
//   credentialsNoExpired: 0,
//   accountNoLocked: 0,
// });
const userInfo = ref({})
const route = useRoute();
const userId = route.params.id;
const handleSubmit = () => {
    updateUser(userInfo.value).then(() => {
        ElMessage.success("修改成功");
        router.push("/user");
    })
}
onMounted(() => {
    getUserById(userId).then((res) => {
        console.log(res);
        userInfo.value = res;
        console.log(userInfo.value.accountNoExpired=="1");
        document.querySelector('.el-switch').classList // 应包含 is-checked
    })
})
</script>
<template>
    <div>
        <el-descriptions title="用户详情" size="large" :column="2" border>
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
        <el-radio-group v-model="userInfo.accountNoExpired">
            <el-radio :value="1">激活</el-radio>
            <el-radio :value="0">未激活</el-radio>
        </el-radio-group>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon style="margin-right: 3px"><DeleteFilled /></el-icon
            >密码激活
          </div>
        </template>
        <el-radio-group v-model="userInfo.credentialsNoExpired">
            <el-radio :value="1">激活</el-radio>
            <el-radio :value="0">未激活</el-radio>
        </el-radio-group>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon style="margin-right: 3px"><Lock /></el-icon>账号是解除锁定
          </div>
        </template>
        <el-radio-group v-model="userInfo.accountNoLocked">
            <el-radio :value="1">激活</el-radio>
            <el-radio :value="0">未激活</el-radio>
        </el-radio-group>
      </el-descriptions-item>
    </el-descriptions>
    <div class="btn-group">
      <el-button type="primary" @click="handleSubmit">修改</el-button>
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
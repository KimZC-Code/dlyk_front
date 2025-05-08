<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getUserById } from "@/api/user";
const route = useRoute();
const userId = route.params.id;
const userInfo = ref({});
onMounted(() => {
  getUserById(userId).then((res) => {
    console.log(res);
    userInfo.value = res;
  });
});
</script>
<template>
  <div>
    <el-descriptions 
      title="用户详情"
      size="large"
      :column="2"
      border
    >
      <el-descriptions-item>
        <template #label>
          <div class="cell-item"><el-icon><user /></el-icon>用户名</div>
        </template>
        {{ userInfo.username }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item"><el-icon style="margin-right: 3px;"><iphone /></el-icon>手机号</div>
        </template>
        {{ userInfo.phone }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item"><el-icon style="margin-right: 3px;"><Avatar /></el-icon>姓名</div>
        </template>
        {{ userInfo.name }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item"><el-icon style="margin-right: 3px;"><Message /></el-icon>邮箱</div>
        </template>
        {{ userInfo.email }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item"><el-icon style="margin-right: 3px;"><ChatRound /></el-icon>账号是否过期</div>
        </template>
        {{ userInfo.accountNonExpired==0 ? "是" : "否" }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item"><el-icon style="margin-right: 3px;"><DeleteFilled /></el-icon>密码是否过期</div>
        </template>
        {{ userInfo.credentialsNoExpired==0 ? "是" : "否" }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item"><el-icon style="margin-right: 3px;"><Lock /></el-icon>账号是否锁定</div>
        </template>
        {{ userInfo.accountNoLocked==0 ? "是" : "否" }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item"><el-icon style="margin-right: 3px;"><Calendar /></el-icon>账号创建时间</div>
        </template>
        {{ userInfo.createTime }}
      </el-descriptions-item>
    </el-descriptions>
    <el-button @click="() => $router.push('/user')">返回</el-button>
  </div>
</template>
<style lang="scss" scoped>
.cell-item {
  display: flex;
  align-items: center;
}
.el-button {
    margin-top: 5px;
    width: 100%;
}
</style>

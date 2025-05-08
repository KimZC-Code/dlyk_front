<script setup>
import { getUserPage, getUserById } from "@/api/user";
import { onMounted, ref } from "vue";
import router from "@/routers";
import { deleteUserByIds } from "@/api/user";
const tableData = ref([]);
const total = ref(0);
const current = ref(1);
const pageSize = ref(10);
const getTableData = () => {
  getUserPage({ current: current.value, size: pageSize.value }).then(
    (res) => {
      tableData.value = res.records;
      total.value = res.total;
      current.value = res.current;
    }
  );
}
onMounted(() => {
  getTableData();
});
const handleCurrentChange = (newPage) => {
  current.value = newPage;
  getUserPage({ current: current.value, pageSize: pageSize.value }).then(
    (res) => {
      tableData.value = res.records;
    }
  );
};
const handleDetail = (id) => {
  router.push({ name: "userDetail", params: { id: id } });
};
const handleUpdate = (id) => {
  console.log(id);
  
  router.push({ name: "updateUser", params: { id: id } });
};
const tableRef = ref();
const handleDelete = () => {
  let ids = [];
  let selection = tableRef.value.getSelectionRows()
  for (let i = 0; i < selection.length; i++) {
    ids.push(selection[i].id);
  }
  deleteUserByIds(ids).then(() => {
    getTableData();
  })
  
}
</script>
<template>
  <div>
    <el-button type="primary" @click="router.push('/user/add')"
      >新增用户</el-button
    >
    <el-button type="danger" @click="handleDelete">批量删除</el-button>
    <el-table ref="tableRef" :data="tableData" :fit="true" empty-text="-" style="width: 100%">
      <el-table-column type="selection" width="55" />
      <el-table-column type="index" label="序号" width="100" />
      <el-table-column prop="username" label="用户名" />
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="phone" label="手机号" />
      <el-table-column prop="email" label="邮箱" />
      <el-table-column prop="createTime" label="创建时间" />
      <el-table-column label="操作" min-width="200px">
        <template #default="scope">
          <el-button type="primary" @click="handleDetail(scope.row.id)"
            >详情</el-button
          >
          <el-button type="success" @click="handleUpdate(scope.row.id)"
            >编辑</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<style lang="scss" scoped>
.el-pagination {
  margin-top: 10px;
}
</style>

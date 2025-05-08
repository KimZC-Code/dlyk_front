<script setup>
import { Search } from "@element-plus/icons-vue";
import { onMounted, ref } from "vue";
import { pageQueryActivity } from "@/api/activity";
import router from "@/routers";
const searchData = ref();
const condition = ref("");
const tableData = ref([]);
const total = ref(0);
const current = ref(1);
const size = ref(10);
const pageShow = () => {
  pageQueryActivity({
    current: current.value,
    size: size.value,
    condition: condition.value,
    searchData: searchData.value,
  }).then((res) => {
    console.log(res);
    total.value = res.total;
    current.value = res.current;
    tableData.value = res.records;
  });
};
const handleCurrentChange = (currentPage) => {
    current.value = currentPage;
    pageShow();
}
const handleSearch = () => {
  pageShow();
  console.log("搜索按钮");
};
const handleDetail = (index) => {
  console.log(index);
};
const handleEdit = (index) => {
  console.log(index);
};
const handleDelete = (index) => {
  console.log(index);
};
const handleAdd = () => {
    router.push('/activity/add')
    
}
onMounted(() => {
  pageShow(1, 10);
});
</script>
<template>
  <div id="Activity">
    <div class="search-box">
      <el-input
        v-model="searchData"
        style="max-width: 1000px"
        placeholder="输入搜索内容"
        class="input-with-select"
      >
        <template #prepend>
          <el-select
            v-model="condition"
            placeholder="搜索条件"
            style="width: 115px"
          >
            <el-option label="负责人" value="username" />
            <el-option label="活动名称" value="name" />
            <el-option label="开始时间" value="startTime" />
            <el-option label="结束时间" value="endTime" />
            <el-option label="活动预算" value="cost" />
            <el-option label="创建时间" value="createTime" />
          </el-select>
        </template>
        <template #append>
          <el-button type="primary" @click="handleSearch" :icon="Search" />
        </template>
      </el-input>
    </div>
    <div class="button-group">
      <el-button type="primary" @click="handleAdd">录入市场活动</el-button>
      <el-button type="danger">批量删除</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%" fit>
      <el-table-column type="selection" width="55" />
      <el-table-column prop="username" label="负责人" />
      <el-table-column prop="name" label="活动名称" />
      <el-table-column prop="startTime" label="开始时间" />
      <el-table-column prop="endTime" label="结束时间" />
      <el-table-column prop="cost" label="活动预算" />
      <el-table-column prop="createTime" label="创建时间" />
      <el-table-column label="操作" min-width="200px">
        <template #default="scope">
          <el-button type="primary" @click="handleDetail(scope.$index)"
            >详情</el-button
          >
          <el-button type="success" @click="handleEdit(scope.$index)"
            >编辑</el-button
          >
          <el-button type="danger" @click="handleDelete(scope.$index)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :current-page="current"
      :page-size="size"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<style lang="scss" scoped>
.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}
.button-group {
  margin-top: 5px;
  margin-bottom: 5px;
}
.search-box {
  text-align: center;
}
:deep(.el-input-group__append) {
  .el-button--primary {
    svg {
      /* 针对 Element Plus 的图标 */
      color: white !important;
    }
    background-color: var(--el-color-primary) !important;
    border-color: var(--el-color-primary) !important;

    &:hover {
      background-color: var(--el-color-primary-light-3) !important;
    }
  }
}
.el-pagination {
  margin-top: 5px;
}
</style>

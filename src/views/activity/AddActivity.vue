<script setup>
import { ref } from 'vue';

const activity = ref({
    ownerId: 0,

})
</script>
<template>
    <div>
        <el-form v-model="activity">
            <el-form-item label="负责人">
                <el-selection v-model="activity.ownerId">

                </el-selection>
            </el-form-item>
            <el-form-item label="活动名称">
                <el-input/>
            </el-form-item>
        </el-form>
    </div>
</template>
<style lang="scss" scoped>

</style>
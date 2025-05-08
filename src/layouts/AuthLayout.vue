<template>
    <div class="Login">
        <el-container>
            <el-aside>
                <img class="loginBox" src="/src/assets/loginBox.svg">
                <p class="loginTitle">欢迎使用动力云客系统</p>
            </el-aside>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.el-aside{
    width: 40%;
    height: calc(100vh);
    background-color: black;
    text-align: center;
}
.loginBox{
    width: 380px;
}
.el-container{
    width: 100vw;
}
.loginTitle{
    font-size: 24px;
    color: white;
}
</style>
<template>
    <el-form label-width="120px" class="demo-ruleForm">
        <el-form-item label="账户" prop="account">
            <el-input placeholder="用户名/邮箱/手机号" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" placeholder="密码" autocomplete="off"/>
        </el-form-item>
        <el-form-item>
            <el-button type="primary">登录</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    name: "LoginFormView"
};
</script>

<style scoped>

</style>
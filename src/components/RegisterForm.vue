<!--
    Name: RegisterFormView
    Description: 注册表单
    Author: ChiyukiRuon
    Date:
-->
<template>
    <el-form label-width="120px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
            <el-input placeholder="长度在6-20个字符" autocomplete="off" />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
            <el-input placeholder="邮箱" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" placeholder="长度在6-20个字符" autocomplete="off" />
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword">
            <el-input type="password" placeholder="重新输入密码" autocomplete="off" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary">注册</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    name: "RegisterFormView"
};
</script>

<style scoped>

</style>
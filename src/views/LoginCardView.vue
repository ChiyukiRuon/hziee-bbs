<template>
    <el-card id="login-card">
        请<el-link :icon="User()" underline href="/loginForm">登录</el-link>
    </el-card>
</template>

<script>
import {
    User,
} from "@element-plus/icons-vue"
export default {
    name: "LoginCardView",
    methods: {
        User() {
            return User
        }
    },
    components: {}
};
</script>

<style scoped>
#login-card {
    margin-top: 40px;
    width: 100%;
}

.el-card {
    border-radius: 50px;
}
</style>
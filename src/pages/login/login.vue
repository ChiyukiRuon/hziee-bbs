<!--
    Name: login
    Description: 登录页面
    Author: ChiyukiRuon
    Date:
-->
<template>
    <div class="common-layout">
        <el-container id="main-container">
            <el-header>
                <el-link :underline="false" href="/"><img src="@/assets/electro.png"
                                                          style="width: 50px;margin-left: 0px;margin-top: 10px">
                </el-link>
            </el-header>
            <el-main>
                <el-card class="box-card" style="max-width: 500px">
                    <template #header>
                        <div class="card-header" style="text-align: center">
                            <router-link to="/loginForm">登录</router-link>
                            |
                            <router-link to="/registerForm">注册</router-link>
                        </div>
                    </template>
                    <div class="text item">
                        <router-view />
                    </div>
                </el-card>
            </el-main>
            <el-footer>
                <div>
                    @2023 HZIEE-BBS
                </div>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
export default {
    name: "UserLogin",
    components: {},
    data() {
        return ({});
    },
    beforeCreate() {
        document.querySelector("body").setAttribute("style", "margin:0;");
    }
};
</script>

<style scoped>
* {
    /*border: 1px solid;*/
}

a {
    text-decoration: none;
    color: rgb(0, 0, 0);
}

a:hover {
    text-decoration: none;
    color: rgb(80, 80, 80);
}

.common-layout {
    height: 100vh;
}

#main-container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
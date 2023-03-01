<template>
    <div class="common-layout">
        <el-container id="main-container">
            <el-container>
                <!-- Left Side -->
                <el-aside width="250px">
                    <!-- Logo && Title -->
                    <el-row style="margin-top: 10px">
                        <router-link to="/"><img src="@/assets/electro.png" style="width: 50px;margin-left: 15px"></router-link>
                        <span style="margin-left: 10px;line-height: 50px">HZIEE-BBS</span>
                    </el-row>
                    <!-- Menu List -->
                    <MenuListView />
                </el-aside>
                <!-- Dividing Line -->
                <el-divider direction="vertical" />
                <!-- Main Area -->
                <el-main>
                    <el-scrollbar>
                        <router-view />
                    </el-scrollbar>
                </el-main>
                <!-- Dividing Line -->
                <el-divider direction="vertical" />
                <!-- Right Side -->
                <el-aside>
                    <!-- Search Bar -->
                    <el-row>
                        <el-col>
                            <div id="search-input" style="margin-top: 20px;border: none">
                                <el-input size="large" placeholder="搜索 HZIEE-BBS" :suffix-icon="Search()" />
                            </div>
                        </el-col>
                    </el-row>
                    <!-- User Info Card or Login Card -->
                    <el-row>
                        <!-- User Info Card -->
                        <UserInfoCardView :avatar-src="avatarSrc" :username="username" :uid="uid"/>
                        <!-- Login Card -->
                        <LoginCardView />
                        <!-- Copyright -->
                        <div style="width: 100%;text-align:center;margin-top: 20px;color: rgb(124,124,124)">
                            @2023 HZIEE-BBS
                        </div>
                    </el-row>
                </el-aside>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import "@/assets/index.css";
import UserInfoCardView from "@/views/UserInfoCardView.vue";
import LoginCardView from "@/views/LoginCardView.vue";
import MenuListView from "@/views/MenuListView.vue";
import { Search } from "@element-plus/icons-vue";

export default {
    name: "HomePage",
    props: {},
    data() {
        return {
            avatarSrc: "https://static.chiyukiruon.top/images/touxiang_01.GIF",
            username: "千雪琉音",
            uid: "ChiyukiRuon",
        }
    },
    methods: {
        Search() {
            return Search
        },
    },
    components: {
        MenuListView,
        LoginCardView,
        UserInfoCardView,
    },
    beforeCreate() {
        document.querySelector('body').setAttribute('style', 'margin:0;')
    }
};
</script>

<style scoped>
* {
    /*border: 1px solid;*/
    text-align: center;
}

a {
    text-decoration: none;
}

.common-layout {
    height: 100vh;
}

.el-container {
    display: flex;
    justify-content: center;
}

#main-container {
    height: 100vh;
    margin-left: 70px;
    margin-right: 70px;
}

.el-main {
    max-width: 700px;
    padding: 20px 10px 0 10px;
}

.el-divider--vertical {
    display: inline-block;
    width: 1px;
    height: 100%;
    margin: 0 8px;
    vertical-align: middle;
    position: relative;
    border-left: 1px var(--el-border-color) var(--el-border-style);
}

#search-input>>>.el-input {
    border: none;
}
</style>
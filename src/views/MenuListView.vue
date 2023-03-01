<template>
    <el-row style="margin-top: 20px">
        <el-col>
            <el-menu :default-active="this.$route.path" router>
                <el-menu-item index="/">
                    <template #title>
                        <el-icon size="25"><House /></el-icon>
                        <span style="margin-left: 10px">主页</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="/login">
                    <template #title>
                        <el-icon size="25"><View /></el-icon>
                        <span style="margin-left: 10px">话题</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="/message">
                    <template #title>
                        <el-icon size="25"><ChatSquare /></el-icon>
                        <span style="margin-left: 10px;">私信</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="/setting">
                    <template #title>
                        <el-icon size="25"><Setting /></el-icon>
                        <span style="margin-left: 10px">设置</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="/about">
                    <template #title>
                        <el-icon size="25"><More /></el-icon>
                        <span style="margin-left: 10px">关于</span>
                    </template>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
import {
    House,
    ChatSquare,
    More,
    Setting,
    View,
} from "@element-plus/icons-vue";
export default {
    name: "MenuListView",
    components: {
        House,
        View,
        ChatSquare,
        More,
        Setting,
    }
};
</script>

<style scoped>
.el-menu {
    border: none;
}

.el-menu-item {
    border-radius: 50px;
    font-size: 20px;
    font-weight: bold;
}
</style>
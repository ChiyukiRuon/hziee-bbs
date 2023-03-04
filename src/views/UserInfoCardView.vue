<!--
    Name: UserInfoCard
    Description: 右侧栏用户信息卡片组件
    Author: ChiyukiRuon
    Date:
-->
<template>
    <div id="user-info-card">
        <router-link to="/userDetail">
            <el-card shadow="never">
                <div style="display: flex;align-items: center">
                    <!-- Avatar -->
                    <el-avatar size="large" :src="avatarSrc"></el-avatar>
                    <!-- Username && UID -->
                    <div style="margin-left: 10px;display: flex;flex-direction: column;justify-content: center">
                        <div style="text-align: left">
                            <span style="font-weight: bold">{{ username }}</span>
                            <CertifyLogo size="19" />
                            <br>
                            <span style="margin-top: 10px;color: rgb(115,115,115)">@{{ uid }}</span>
                        </div>
                    </div>
                </div>
            </el-card>
        </router-link>
    </div>
</template>

<script>
import CertifyLogo from "@/components/CertifyLogo.vue";

export default {
    name: "UserInfoCardView",
    components: { CertifyLogo },
    props: {
        /*
        * avatarSrc: 头像链接
        * username: 用户名
        * uid: 用户ID
        * */
        avatarSrc: String,
        username: String,
        uid: String
    }
};
</script>

<style scoped>
a {
    text-decoration: none;
}

#user-info-card {
    margin-top: 40px;
    width: 100%;
}

.el-card {
    border: none;
    border-radius: 50px;
}

.el-card:hover {
    background-color: rgba(164, 164, 164, 0.2);
}
</style>
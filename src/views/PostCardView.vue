<!--
    Name: PostCardView
    Description: 帖子展示组件
    Author: ChiyukiRuon
    Date:
-->
<template>
    <el-card class="box-card">
        <div class="common-layout">
            <el-container>
                <el-aside style="max-width: 50px">
                    <el-avatar :src="avatarSrc"></el-avatar>
                </el-aside>
                <el-main style="text-align: left">
                    <div>
                        <span style="font-weight: bold">{{ username }}</span>
                        <CertifyLogo v-if="certified" size="19" />
                        <span style="margin-left: 5px;color: rgb(115,115,115)">@{{ uid }}</span>
                    </div>
                    <div>
                        This is Text Area {{ text }}
                    </div>
                    <!-- TODO 媒体展示 -->
                </el-main>
            </el-container>
        </div>
    </el-card>
</template>

<script>
import CertifyLogo from "@/components/CertifyLogo.vue";

export default {
    name: "PostCardView",
    components: { CertifyLogo },
    props: {
        /*
        * avatarSrc: 头像链接
        * username: 用户名
        * uid: 用户ID
        * certified: 是否为认证用户
        * text: 发表内容
        * haveMedia: 是否包含媒体内容
        * media: 媒体内容
        * */
        avatarSrc: String,
        username: String,
        uid: String,
        certified: Boolean,
        text: Number,
        haveMedia: Boolean,
        media: String
    }
};
</script>

<style scoped>
.el-card {
    border-radius: 10px;
    margin-bottom: 10px;
}

.el-main {
    padding: 0;
}
</style>
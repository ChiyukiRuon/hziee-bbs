<template>
    <el-card class="box-card">
        <div class="common-layout">
            <el-container>
                <el-aside style="max-width: 50px">
                    <el-avatar :src="avatarSrc"></el-avatar>
                </el-aside>
                <el-main style="text-align: left">
                    <div>
                        <span style="font-weight: bold">{{ username }}</span><CertifyLogo v-if="certified" size="19"/><span style="margin-left: 5px;color: rgb(115,115,115)">@{{ uid }}</span>
                    </div>
                    <div>
                        Text Area {{ post }}
                    </div>
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
        avatarSrc: String,
        username: String,
        uid: String,
        certified: Boolean,
        post: Number,
    }
};
</script>

<style scoped>
.el-card {
    /*border: none;*/
    border-radius: 10px;
    margin-bottom: 10px;
}

.el-main {
    padding: 0;
}
</style>
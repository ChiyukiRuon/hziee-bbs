<template>
    <div class="home">
        <el-tabs :stretch="true">
            <el-tab-pane label="推荐">
                <span v-for="item in items" :key="item">
                    <PostCardView username="迟雨_Official" uid="Chiyu_official" :certified="false" :post="item" />
                </span>
            </el-tab-pane>
            <el-tab-pane label="你的关注">
                <span v-for="item in items" :key="item">
                    <PostCardView avatar-src="https://static.chiyukiruon.top/images/touxiang_01.GIF" username="千雪琉音" uid="ChiyukiRuon" :certified="true" :post="item" />
                </span>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import PostCardView from "@/views/PostCardView.vue";
import { ref } from "vue";

export default {
    name: "HomeView",
    components: { PostCardView },
    data() {
        return {
            items: ref(10)
        }
    }
};
</script>

<style scoped>
.home {
    text-align: center;
}
</style>
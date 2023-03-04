import { createRouter, createWebHistory } from "vue-router";
// import index from "@/pages/index/index.vue";
import home from "@/views/HomeView.vue"
import login from "@/pages/login/login.vue";
import user from "@/pages/user/user.vue";
import about from "@/views/AboutView.vue";
import LoginFormView from "@/components/LoginForm.vue";
import RegisterFormView from "@/components/RegisterForm.vue";
import SettingView from "@/views/SettingView.vue";
import TopicView from "@/views/TopicView.vue";

const routes = [
    // {
    //     path: "/",
    //     name: "index",
    //     component: index,
    //     meta: {
    //         title: "主页 | HZIEE-BBS"
    //     }
    // },
    {
        path: "/",
        name: "home",
        component: home,
        meta: {
            title: "主页 | HZIEE-BBS"
        }
    },
    {
        path: "/login",
        name: "login",
        component: login,
        meta: {
            title: "登录 | HZIEE-BBS"
        }
    },
    {
        path: "/userDetail",
        name: "user",
        component: user,
        meta: {
            title: "用户详情 | HZIEE-BBS"
        }
    },
    {
        path: "/setting",
        name: "setting",
        component: SettingView,
        meta: {
            title: "设置 | HZIEE-BBS"
        }
    },
    {
        path: "/topic",
        name: "topic",
        component: TopicView,
        meta: {
            title: "话题 | HZIEE-BBS"
        }
    },
    {
        path: "/about",
        name: "about",
        component: about,
        meta: {
            title: "关于 | HZIEE-BBS"
        }
    },
    {
        path: "/loginForm",
        name: "loginForm",
        component: LoginFormView,
        meta: {
            title: "登录 | HZIEE-BBS"
        }
    },
    {
        path: "/registerForm",
        name: "registerForm",
        component: RegisterFormView,
        meta: {
            title: "注册 | HZIEE-BBS"
        }
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title // 设置页面标题
    }
    next()
})

export default router;

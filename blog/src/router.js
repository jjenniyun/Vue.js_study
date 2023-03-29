import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import Home from './components/Home.vue';
import Detail from './components/Detail.vue';
import Author from './components/Author.vue';
import Comment from './components/Comment.vue';

const routes = [
    {
        path: "/detail/:id",
        component: Detail,
        children: [
            {
                path: "author",
                component: Author,
            },
            {
                path: "comment",
                component: Comment,
            },
        ]
    },
    {
        path: "/list",
        component: List,
    },
    {
        path: "/",
        component: Home,
    },
    // {
    // path: "/hello",
    // component: HelloWorld,
    // beforeEnter: () => {
    // if (logincheck == false) {
    // return '/login'
    // }
    // beforeEnter: (to, from) => { //첫 파라미터는 목적지 페이지, 둘째 파라미터는 출발 페이지
    // return to.fullPath //전체 경로를 알려줌 to.params.id ->  id 파라미터
    // }
    // }
    // },
    // {
    // path: "/:anything(.*)",
    // component: error(404페이지),
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
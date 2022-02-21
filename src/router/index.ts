// @ts-ignore
import { createRouter, createWebHashHistory } from 'vue-router'

const routers = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: '/',
        name: 'home',
        component: () => import("../pages/home/index.vue")
    },{
        path: '/base64',
        name: 'base64',
        component: () => import("../pages/base64/index.vue")
    }, {
        path: '/url',
        name: 'url',
        component: () => import("../pages/url/index.vue")
    },
    ]
})

export default routers;

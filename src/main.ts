import { createApp } from 'vue'
import App from './App.vue'
import routers from "./router";

routers.beforeEach((to, from) => {
    return true
})

createApp(App)
    .use(routers).mount('#app')

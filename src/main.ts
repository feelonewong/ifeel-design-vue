import { createApp } from 'vue';
import App from './App.vue';
import { createWebHashHistory, createRouter } from "vue-router";
import Ifeel from "./components/Ifeel.vue";
import Ifeel2 from "./components/Ifeel2.vue";


const history = createWebHashHistory();
const router = createRouter({
    history: history,
    routes: [
        {path: "/", component: Ifeel},
        {path: "/xxx", component: Ifeel2},
    ]
})

const app = createApp(App);
app.mount('#app');
app.use(router);

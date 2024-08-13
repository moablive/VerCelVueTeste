import { createRouter, createWebHistory } from 'vue-router'

//=> src/cpmponents/home
import Home from "./components/home/Home.vue"

// routes
const routes = [
    { path: '/', component: Home },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
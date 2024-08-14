import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

//=> src/components/home
import Home from './components/home/home.vue';
import login from './components/home/login.vue';

//=> src/components/User
import user from './components/user/user.vue';

// Defina a tipagem para as rotas usando RouteRecordRaw
const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/login', component: login },
  { path: '/user', component: user },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

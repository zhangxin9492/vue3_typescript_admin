import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/home/index.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          title: '系统首页',
        },
        component: () => import('../views/dashboard/index.vue'),
      },
      {
        path: '/table',
        name: 'Table',
        meta: {
          title: '表格',
        },
        component: () =>
          import(/* webpackChunkName: "login" */ '../views/table/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
    },
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/Login/index.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

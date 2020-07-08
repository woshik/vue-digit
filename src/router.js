import Vue from 'vue';
import VueRouter from 'vue-router';

// application all routes define here
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/Home.vue'),
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('./views/Account.vue'),
  },
  {
    path: '/charts',
    name: 'Charts',
    component: () => import('./views/Charts.vue'),
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('./views/Help.vue'),
  },
];

// install VueRouter plugin
Vue.use(VueRouter);

// vueRouter Configuration
const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;

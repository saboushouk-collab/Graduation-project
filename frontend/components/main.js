import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.js';

import Login from './Login.js';
import Inventory from './Inventory.js';
import Dashboard from './Dashboard.js';
import Sales from './Sales.js';
import Registered from './Registered.js';

const routes = [
  { path: '/', component: Login },
  { path: '/inventory', component: Inventory },
  { path: '/dashboard', component: Dashboard },
  { path: '/sales', component: Sales },
  { path: '/registered', component: Registered },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
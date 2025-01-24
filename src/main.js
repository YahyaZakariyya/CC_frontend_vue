import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import HomeView from './views/HomeView.vue';
import DocumentationView from './views/DocumentationView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/documentation', name: 'Documentation', component: DocumentationView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');

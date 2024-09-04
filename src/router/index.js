import {createRouter, createWebHashHistory} from 'vue-router'

import Home from '../pages/Home.vue';
import Tarefas from '../pages/TodoList.vue';

const routes = [
    {
      path: '/',
      component: Home
    },
    {
      path: '/tarefas',
      component: Tarefas
    }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;
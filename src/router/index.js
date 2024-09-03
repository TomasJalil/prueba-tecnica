import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import list from '../views/list.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/list',
    name: 'list',
    component : list
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

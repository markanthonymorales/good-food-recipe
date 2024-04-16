import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../views/Homepage.vue'
import AboutView from '../views/Aboutpage.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about-us', component: AboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;
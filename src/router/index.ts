import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../views/Homepage.vue'
import AboutView from '../views/Aboutpage.vue'
import ListView from '../views/Listpage.vue'
import LoginView from '../views/Loginpage.vue'
import TermsView from '../views/TermsConditions.vue'
import PrivacyPolicyView from '../views/PrivacyPolicy.vue'
import AdminView from '../views/Adminpage.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about-us', component: AboutView },
  { path: '/list-recipes', component: ListView },
  { path: '/login', component: LoginView },
  { path: '/terms-conditions', component: TermsView },
  { path: '/privacy-policy', component: PrivacyPolicyView },
  { path: '/admin', component: AdminView },
]

let key = localStorage.getItem('accepted-key');

const router = createRouter({
  history: createMemoryHistory(key ?? '#'),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: "smooth" };
  },
  routes,
})

export default router;
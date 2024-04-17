import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../views/Homepage.vue'
import AboutView from '../views/Aboutpage.vue'
import ListView from '../views/Listpage.vue'
import LoginView from '../views/Loginpage.vue'
import TermsView from '../views/TermsConditions.vue'
import PrivacyPolicyView from '../views/PrivacyPolicy.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about-us', component: AboutView },
  { path: '/list-recipes', component: ListView },
  { path: '/login', component: LoginView },
  { path: '/terms-conditions', component: TermsView },
  { path: '/privacy-policy', component: PrivacyPolicyView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;
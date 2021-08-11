import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Market from '@/views/Market.vue'
import MarketItem from '@/views/MarketItem.vue'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'
import Gennft from '@/views/Gennft.vue'
import Profile from '@/views/Profile.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/market',
    name: 'Market',
    component: Market,
  },
  {
    path: '/market/:itemId',
    name: 'Market Item View',
    component: MarketItem
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/generatenft',
    name: 'GenerateNFT',
    component: Gennft
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

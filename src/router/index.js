import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home/home.vue'
import all from '../components/all/all.vue'
import stroll from '../components/stroll/stroll.vue'
import cart from '../components/cart/cart.vue'
import usercenter from '../components/usercenter/usercenter.vue'
import login from '../components/login/login.vue'
import register from '../components/register/register.vue'
import MintUI from 'mint-ui'

Vue.use(MintUI)
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/all',
      component: all
    },
    {
      path: '/stroll',
      component: stroll
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/usercenter',
      component: usercenter
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/register',
      component: register
    }
  ]
})

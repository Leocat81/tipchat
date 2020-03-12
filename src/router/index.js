import Vue from 'vue'
import Router from 'vue-router'
import Index from '../view/Loan'
import login from '@/view/login/login'
import register from '@/view/login/register'
import BaseTransition from '../BaseTransition'
import forgetpass from '@/view/login/forgetpass'
import chat from '@/view/chat'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/forgetpass',
      name: 'forgetpass',
      component: forgetpass
    },
    {
      path: '/Loan',
      component: BaseTransition,
      children: [
        {
          path: '',
          name: 'index',
          component: Index
        },
        {
          path: 'chat',
          name: 'chat',
          component: chat
        }
      ]
    }
  ]
})

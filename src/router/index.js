import Vue from 'vue'
import Router from 'vue-router'
import Index from '../view/Loan'
import login from '@/view/login/login'
import register from '@/view/login/register'
import test from '@/view/test/index'
import BaseTransition from '../BaseTransition'
import forgetpass from '@/view/login/forgetpass'
import BaseView from '../BaseView'
import maillist from '@/view/maillist'
import frimore from '@/view/maillist/friviewmore'
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
      path: '/test',
      name: 'test',
      component: test
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
    },
    {
      path: '/maillist',
      component: BaseView,
      children: [
        {
          path: '',
          name: 'maillist',
          component: maillist
        }, {
          path: 'friviewmore',
          name: 'frimore',
          component: frimore
        }
      ]
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import myhello from '@/components/myhello'
import notfoundpage from '@/components/notfoundpage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/myhello',
      name: 'myhello',
      component: myhello
    },
    {
      path: '*',
      name: 'notfoundpage',
      component: notfoundpage
    }
  ],
  NotFound: [
    {
      template: '<p>Page not found</p>'
    }
  ]
})

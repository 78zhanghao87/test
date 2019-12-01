import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Layout from '@/views/Layout.vue'
import weather from '@/views/weather.vue'
import blank from '@/views/blank.vue'
import Notfound from '@/views/Notfound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    children: [
      {
        path: "/",
        meta: {
          title: "天气预报"
        },
         component: Home
      },
    ]
  },
  {
    path: '/weather',
    name: 'home',
    component: Layout,
    children: [
      {
        path: "/weather",
        meta: {
          title: "天气预报"
        },
         component: weather
      },
    ]
  },
  {
    path: '/blank',
    name: 'blank',
    component: Layout,
    children: [
      {
        path: "/blank",
        meta: {
          title: "空白页面"
        },
         component: blank
      },
    ]
  },
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "*",
    meta: {
      title: "404"
    },
    component: Notfound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  /* 路由发生变化修改页面title */
  if (to.meta.title) {
      document.title = to.meta.title;
  }
  next();

});

export default router

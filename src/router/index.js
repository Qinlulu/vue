import Vue from 'vue'
import VueRouter from 'vue-router'
// 解决重复点击同一个路由的报错问题
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'ContentList',
    component: () => import('../views/ContentList/index.vue')
  },
  {
    path: '/ContentList',
    name: 'ContentList',
    component: () => import('../views/ContentList/index.vue')
  },
  {
    path: '/ActivityList',
    name: 'ActivityList',
    component: () => import('../views/ActivityList/index.vue')
  },
  {
    path: '/TaskList',
    name: 'TaskList',
    component: () => import('../views/TaskList/index.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default async (/* { store, ssrContext } */) => {
  const router = new VueRouter({
    scrollBehavior: () => ({
      x: 0,
      y: 0
    }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: 'history',
    base: process.env.VUE_ROUTER_BASE
  })
  router.beforeEach((to, from, next) => {
    const publicPages = ['/auth']
    const authRequired = !publicPages.includes(to.path)
    const loggedIn = localStorage.getItem('authToken')

    if (authRequired && !loggedIn) {
      return next('/auth')
    }
    next()
  })
  return router
}

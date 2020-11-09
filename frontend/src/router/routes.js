const routes = [
  {
    path: '/',
    component: () => import('layouts/LoggedLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/HomePage.vue')
      },
      {
        path: 'home',
        component: () => import('pages/HomePage.vue')
      },
      {
        path: 'about',
        component: () => import('pages/AboutPage.vue')
      },
      {
        path: 'projects',
        component: () => import('pages/ProjectsPage.vue')
      },
      {
        path: 'fun',
        component: () => import('pages/FunPage.vue')
      }
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/NoLoggedLayout.vue')
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

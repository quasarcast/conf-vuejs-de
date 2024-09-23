import BexMenuPage from 'src/pages/BexMenuPage.vue'

const routes = [
  {
    path: '/bex-menu',
    name: 'bexMenu',
    component: BexMenuPage
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue')
      },
      {
        path: 'table',
        name: 'table',
        component: () => import('pages/TablePage.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

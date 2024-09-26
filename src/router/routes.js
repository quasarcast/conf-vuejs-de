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
        name: 'home',
        component: () => import('pages/IndexPage.vue')
      },
      {
        path: 'qr-scan',
        name: 'qr-scan',
        component: () => import('pages/QrScanPage.vue')
      },
      {
        path: 'bluetooth',
        name: 'bluetooth',
        component: () => import('pages/BluetoothPage.vue')
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

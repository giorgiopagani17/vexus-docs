import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    children: [
      {
        path: '',
        component: () => import('@/Docs/layouts/MainLayout.vue'),
        children: [{ path: '', component: () => import('@/Docs/pages/Home.vue') }],
      }
    ]
  },
  {
    path: '/button',
    children: [
      {
        path: '',
        component: () => import('@/Docs/layouts/MainLayout.vue'),
        children: [{ path: '', component: () => import('@/Docs/pages/components/Button/VxButtonDocs.vue') }],
      }
    ]
  },
  {
    path: '/button-toggle',
    children: [
      {
        path: '',
        component: () => import('@/Docs/layouts/MainLayout.vue'),
        children: [{ path: '', component: () => import('@/Docs/pages/components/Button/VxButtonToggleDocs.vue') }],
      }
    ]
  },
  {
    path: '/button-dropdown',
    children: [
      {
        path: '',
        component: () => import('@/Docs/layouts/MainLayout.vue'),
        children: [{ path: '', component: () => import('@/Docs/pages/components/Button/VxButtonDropdownDocs.vue') }],
      }
    ]
  },
  {
    path: '/input',
    children: [
      {
        path: '',
        component: () => import('@/Docs/layouts/MainLayout.vue'),
        children: [{ path: '', component: () => import('@/Docs/pages/components/Input/VxInputDocs.vue') }],
      }
    ]
  },
  {
    path: '/input/others',
    children: [
      {
        path: '',
        component: () => import('@/Docs/layouts/MainLayout.vue'),
        children: [{ path: '', component: () => import('@/Docs/pages/components/Input/VxInputOthersDocs.vue') }],
      }
    ]
  },
  {
    path: '/input/pickers',
    children: [
      {
        path: '',
        component: () => import('@/Docs/layouts/MainLayout.vue'),
        children: [{ path: '', component: () => import('@/Docs/pages/components/Input/VxInputPickersDocs.vue') }],
      }
    ]
  },
  {
    path: '/select',
    children: [
      {
        path: '',
        component: () => import('@/Docs/layouts/MainLayout.vue'),
        children: [{ path: '', component: () => import('@/Docs/pages/components/Select/VxSelectDocs.vue') }],
      }
    ]
  },
  {
    path: '/notify',
    children: [
      {
        path: '',
        component: () => import('@/Docs/layouts/MainLayout.vue'),
        children: [{ path: '', component: () => import('@/Docs/pages/components/Notify/VxNotifyDocs.vue') }],
      }
    ]
  },
  {
    path: '/use-api',
    children: [
      {
        path: '',
        component: () => import('@/Docs/layouts/MainLayout.vue'),
        children: [{ path: '', component: () => import('@/Docs/pages/components/Api/VxApiDocs.vue') }],
      }
    ]
  },
  {
    path: '/use-fiscal-code',
    children: [
      {
        path: '',
        component: () => import('@/Docs/layouts/MainLayout.vue'),
        children: [{ path: '', component: () => import('@/Docs/pages/components/Cf/VxFiscalCodeDocs.vue') }],
      }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/Docs/pages/ErrorNotFound.vue')
  }
]

export default routes
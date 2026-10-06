import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    children: [
      {
        path: '',
        component: () => import('@/layouts/MainLayout.vue'),
        children: [{ path: '', component: () => import('@/pages/Home.vue') }],
      }
    ]
  },
  {
    path: '/versions',
    children: [
      {
        path: '',
        component: () => import('@/layouts/MainLayout.vue'),
        children: [{ path: '', component: () => import('@/pages/Versions.vue') }],
      }
    ]
  },
  {
    path: '/button',
    children: [
      {
        path: '',
        component: () => import('@/layouts/MainLayout.vue'),
        children: [{ path: '', component: () => import('@/pages/components/Button/VxButtonDocs.vue') }],
      }
    ]
  },
  {
    path: '/button-toggle',
    children: [
      {
        path: '',
        component: () => import('@/layouts/MainLayout.vue'),
        children: [{ path: '', component: () => import('@/pages/components/Button/VxButtonToggleDocs.vue') }],
      }
    ]
  },
  {
    path: '/button-dropdown',
    children: [
      {
        path: '',
        component: () => import('@/layouts/MainLayout.vue'),
        children: [{ path: '', component: () => import('@/pages/components/Button/VxButtonDropdownDocs.vue') }],
      }
    ]
  },
  {
    path: '/input',
    children: [
      {
        path: '',
        component: () => import('@/layouts/MainLayout.vue'),
        children: [{ path: '', component: () => import('@/pages/components/Input/VxInputDocs.vue') }],
      }
    ]
  },
  {
    path: '/input/others',
    children: [
      {
        path: '',
        component: () => import('@/layouts/MainLayout.vue'),
        children: [{ path: '', component: () => import('@/pages/components/Input/VxInputOthersDocs.vue') }],
      }
    ]
  },
  {
    path: '/input/pickers',
    children: [
      {
        path: '',
        component: () => import('@/layouts/MainLayout.vue'),
        children: [{ path: '', component: () => import('@/pages/components/Input/VxInputPickersDocs.vue') }],
      }
    ]
  },
  {
    path: '/select',
    children: [
      {
        path: '',
        component: () => import('@/layouts/MainLayout.vue'),
        children: [{ path: '', component: () => import('@/pages/components/Select/VxSelectDocs.vue') }],
      }
    ]
  },
  {
    path: '/notify',
    children: [
      {
        path: '',
        component: () => import('@/layouts/MainLayout.vue'),
        children: [{ path: '', component: () => import('@/pages/components/Notify/VxNotifyDocs.vue') }],
      }
    ]
  },
  {
    path: '/use-api',
    children: [
      {
        path: '',
        component: () => import('@/layouts/MainLayout.vue'),
        children: [{ path: '', component: () => import('@/pages/components/Api/VxApiDocs.vue') }],
      }
    ]
  },
  {
    path: '/use-fiscal-code',
    children: [
      {
        path: '',
        component: () => import('@/layouts/MainLayout.vue'),
        children: [{ path: '', component: () => import('@/pages/components/Cf/VxFiscalCodeDocs.vue') }],
      }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/ErrorNotFound.vue')
  }
]

export default routes
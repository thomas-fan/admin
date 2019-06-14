import Layout from '@c/Layout'
import Page404 from '@v/errors/Page404'
import Test from '@v/Test'

export const pageNotFoundRoute = {
  path: '/',
  component: Layout,
  children: [
    {
      path: '*',
      component: Page404,
    },
  ],
}

export const fixedRoutes = [
  pageNotFoundRoute,
]

if (process.env.NODE_ENV === 'development') {
  fixedRoutes.unshift({
    path: '/test/test',
    component: Layout,
    children: [
      {
        path: '/',
        component: Test,
      },
    ],
  })
}

export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login'),
  },
]

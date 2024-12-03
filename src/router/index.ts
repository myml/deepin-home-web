import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      children: [
        {
          path: "admin",
          component: () => import("@/views/Admin.vue"),
          redirect: 'admin/seo',
          children: [
            {
              path: 'seo',
              name: "SEO",
              component: () => import('@/views/admin/SeoView.vue')
            },
            {
              path: 'carousel',
              name: "轮播图",
              component: () => import('@/views/admin/CarouselView.vue')
            }
          ]
        },
        {
          path: '/',
          component: () => import('@/views/Front.vue'),
          children: [
            {
              path: '/',
              component: () => import('@/views/front/HomeView.vue')
            }
          ]
        }
      ]
    }
  ]
})

export default router

const { isAuthenticated } = useAdminStore()
export default defineNuxtRouteMiddleware(async (to) => {
  const isLogin = await isAuthenticated()
  if (!isLogin && to.path !== '/login')
    return navigateTo('/login')
  if (isLogin && to.path === '/login')
    return navigateTo('/admin')
})

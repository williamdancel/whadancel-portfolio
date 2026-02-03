import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/PortfolioHome.vue')
const Makagago = () => import('../views/mgwm/MakagagoHome.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'William Dancel - Portfolio',
        favicon: '/favicon/favicon.ico' // default favicon
      }
    },
    {
      path: '/mgwm',
      name: 'makagago',
      component: Makagago,
      meta: {
        title: 'MGWM - Website Proposal',
        favicon: '/favicon/mgwm/favicon.ico' // Makagago favicon
      }
    }
  ]
})

// Navigation guard to update title and favicon
router.beforeEach((to, from, next) => {
  // Update page title
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
  
  // Update favicon
  if (to.meta.favicon) {
    updateFavicon(to.meta.favicon as string)
  }
  
  next()
})

// Function to update favicon
function updateFavicon(href: string): void {
  let link = document.querySelector("link[rel*='icon']") as HTMLLinkElement
  if (!link) {
    link = document.createElement('link')
    link.rel = 'icon'
    document.head.appendChild(link)
  }
  link.href = href
}

export default router
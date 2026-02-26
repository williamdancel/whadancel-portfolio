import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/PortfolioHome.vue')
const Crowpos = () => import('../views/crowpos/CrowPos.vue')
const Makagago = () => import('../views/mgwm/MakagagoHome.vue')
const Eifl = () => import('../views/eifl-lending/EIFLHome.vue')
const GattBros = () => import('../views/gatt-bros/GattBrosHome.vue')
const WhiteLineTransport = () => import('../views/whiteline/WhiteLineTransportHome.vue')
const WhiteLineRacing = () => import('../views/whiteline/WhiteLineRacingHome.vue')
const LilyDaleFreighters = () => import('../views/lilydale/LilyDaleFreightersHome.vue')

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
      path: '/crowpos',
      name: 'crowpos',
      component: Crowpos,
      meta: {
        title: 'CrowPOS - Simple point of sale for daily business.',
        favicon: '/favicon/crowpos/favicon.ico' // crowpos favicon
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
    },
    {
      path: '/eifl-lending-corporation',
      name: 'eifl-lending-corporation',
      component: Eifl,
      meta: {
        title: 'EIFL Lending - Website Proposal',
        favicon: '/favicon/eifl-lending/favicon.ico' // EIFL Lending favicon
      }
    },
    {
      path: '/gatt-bros',
      name: 'gatt-bros',
      component: GattBros,
      meta: {
        title: 'Gatt Bros - Website Proposal',
        favicon: '/favicon/gatt-bros/favicon.ico' // Gatt Bros favicon
      }
    },
    {
      path: '/whiteline-transport',
      name: 'whiteline-transport',
      component: WhiteLineTransport,
      meta: {
        title: 'WhiteLine Transport - Website Proposal',
        favicon: '/favicon/white-line-transport/favicon.ico' // White Line Transport favicon
      }
    },
    {
      path: '/whiteline-racing',
      name: 'whiteline-racing',
      component: WhiteLineRacing,
      meta: {
        title: 'WhiteLine Racing - Website Proposal',
        favicon: '/favicon/white-line-racing/favicon.ico' // White Line Racing favicon
      }
    },{
      path: '/lilydale-freighters',
      name: 'lilydale-freighters',
      component: LilyDaleFreighters,
      meta: {
        title: 'Lilydale Freighters - Website Proposal',
        favicon: '/favicon/lily-dale-freighters/favicon.ico' // Lily Dale Freighters favicon
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
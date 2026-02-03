<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, reactive, nextTick } from 'vue'
import Swal from 'sweetalert2'

type SectionId = 'top' | 'details' | 'benefits' | 'apply' | 'location'
const SECTIONS: SectionId[] = ['top', 'details', 'benefits', 'apply', 'location']

const activeSection = ref<SectionId>('top')

type ApplyForm = {
  fullName: string
  businessName: string
  email: string
  phone: string
  loanAmount: string
  consent: boolean
}

const form = reactive<ApplyForm>({
  fullName: '',
  businessName: '',
  email: '',
  phone: '',
  loanAmount: '₱300,000 – ₱1,000,000',
  consent: false,
})

const isSubmitting = ref(false)

// Sticky header ref (disclaimer + navbar + mobile dropdown)
const headerRef = ref<HTMLElement | null>(null)
const getHeaderOffset = () => headerRef.value?.offsetHeight ?? 0

// Mobile navbar (hamburger)
const mobileNavOpen = ref(false)
const toggleMobileNav = () => (mobileNavOpen.value = !mobileNavOpen.value)
const closeMobileNav = () => (mobileNavOpen.value = false)

const handleResize = () => {
  if (window.innerWidth >= 768) mobileNavOpen.value = false
}

// ===== Scroll + active state (stable) =====
let sectionEls: HTMLElement[] = []
let rafId = 0

// Prevent scrollspy from fighting during smooth-scroll clicks
let clickLockUntil = 0
const lockFor = (ms: number) => {
  clickLockUntil = Date.now() + ms
}
const isLocked = () => Date.now() < clickLockUntil

const applyScrollMargins = () => {
  const m = `${getHeaderOffset() + 12}px`
  sectionEls.forEach((el) => {
    // native scrollIntoView will respect this
    el.style.scrollMarginTop = m
  })
}

// Choose the section whose top is closest to the “header line”
const updateActiveByScroll = () => {
  if (!sectionEls.length) return
  if (isLocked()) return

  const headerLine = window.scrollY + getHeaderOffset() + 14

  let best: SectionId = 'top'
  let bestDist = Number.POSITIVE_INFINITY

  for (const el of sectionEls) {
    const dist = Math.abs(el.offsetTop - headerLine)
    if (dist < bestDist) {
      bestDist = dist
      best = el.id as SectionId
    }
  }

  if (activeSection.value !== best) activeSection.value = best
}

const onScroll = () => {
  cancelAnimationFrame(rafId)
  rafId = requestAnimationFrame(updateActiveByScroll)
}

// Smooth scroll (uses scroll-margin-top)
const scrollTo = async (id: SectionId) => {
  closeMobileNav()

  // lock highlight so it doesn't flicker while scrolling
  lockFor(650)
  activeSection.value = id

  await nextTick()
  applyScrollMargins()

  const el = document.getElementById(id)
  if (!el) return

  el.scrollIntoView({ behavior: 'smooth', block: 'start' })

  // after smooth scroll, sync once (for cases where browser stops early)
  window.setTimeout(() => {
    updateActiveByScroll()
  }, 700)
}

// Sweetalert demo submit
const validate = (): string | null => {
  if (!form.fullName.trim()) return 'Please enter your full name.'
  if (!form.businessName.trim()) return 'Please enter your business name.'
  if (!form.email.trim()) return 'Please enter your email.'
  if (!form.phone.trim()) return 'Please enter your contact number.'
  if (!form.consent) return 'Please confirm the confidentiality consent.'
  return null
}

const submitForm = async () => {
  const err = validate()
  if (err) {
    await Swal.fire({
      icon: 'warning',
      title: 'Incomplete form',
      text: err,
      confirmButtonText: 'OK',
      confirmButtonColor: '#0B1F5D',
    })
    return
  }

  isSubmitting.value = true
  await new Promise((r) => setTimeout(r, 900))
  isSubmitting.value = false

  const refCode = `EIFL-${Math.random().toString(36).slice(2, 7).toUpperCase()}`

  await Swal.fire({
    icon: 'success',
    title: 'Application received!',
    html: `
      <div style="text-align:left; line-height:1.6">
        <div><b>Reference:</b> ${refCode}</div>
        <div>We’ll contact you soon for the next steps.</div>
        <div style="margin-top:10px; font-size:12px; color:#64748b">
          Demo only — this form is for pitching/preview.
        </div>
      </div>
    `,
    confirmButtonText: 'Done',
    confirmButtonColor: '#0B1F5D',
  })

  form.fullName = ''
  form.businessName = ''
  form.email = ''
  form.phone = ''
  form.loanAmount = '₱300,000 – ₱1,000,000'
  form.consent = false
}

// Helper for premium nav buttons (desktop)
const navBtnClass = (id: SectionId) =>
  activeSection.value === id
    ? 'text-[#0B1F5D] font-semibold bg-[#0B1F5D]/10 rounded-full'
    : 'text-slate-700 hover:text-[#0B1F5D]'

// Page loader
const isLoading = ref(true)

onMounted(() => {

  // Simulate initial app load / assets ready
  setTimeout(() => {
    isLoading.value = false
  }, 1200) 

  window.addEventListener('resize', handleResize)
  window.addEventListener('scroll', onScroll, { passive: true })

  sectionEls = SECTIONS
    .map((id) => document.getElementById(id))
    .filter(Boolean) as HTMLElement[]

  applyScrollMargins()
  updateActiveByScroll()

  // Re-apply after layout settles (fonts/images)
  window.setTimeout(() => {
    applyScrollMargins()
    updateActiveByScroll()
  }, 250)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('scroll', onScroll)
  cancelAnimationFrame(rafId)
})
</script>


<template>
    <!-- PAGE LOADER -->
    <transition name="loader">
    <div
        v-if="isLoading"
        class="fixed inset-0 z-[9999] bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center"
    >
        <div class="text-center px-6">
        <div class="mx-auto mb-6 h-20 w-20 rounded-full bg-white flex items-center justify-center eifl-glow">
            <img
            src="/images/eifl-lending/eifl-lending-logo.png"
            alt="EIFL Lending"
            class="h-12 w-12 object-contain"
            />
        </div>

        <h2 class="text-xl md:text-2xl font-semibold tracking-tight text-slate-800">
            EIFL Lending Corporation
            <span class="block text-[#0B1F5D] font-normal text-sm mt-1">
            A sister company of EIFL Loan facilitation services, inc.
            </span>
        </h2>

        <div class="mt-5 flex justify-center">
            <span class="h-1 w-10 rounded-full bg-[#0B1F5D] animate-loading-bar"></span>
        </div>
        </div>
    </div>
    </transition>
  <div class="min-h-screen eifl-font text-slate-900 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
    <!-- Sticky disclaimer + navbar -->
    <div ref="headerRef" class="sticky top-0 z-50">
      <!-- Disclaimer bar -->
      <div class="bg-[#0B1F5D] text-white">
        <div class="max-w-6xl mx-auto px-4 py-2 text-xs md:text-sm text-center">
          <span class="opacity-95">
            Concept website proposal — not an official site. Built for pitching and preview only.
          </span>
        </div>
      </div>

      <!-- Navbar -->
      <nav class="bg-white/70 backdrop-blur border-b border-slate-200">
        <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <button class="flex items-center gap-2" @click="scrollTo('top');">
            <img src="/images/eifl-lending/eifl-lending-logo.png" class="h-8 w-8 object-contain" alt="EIFL" />
            <span class="font-semibold text-slate-800">EIFL Lending Corporation</span>
          </button>

          <!-- Desktop nav -->
          <div class="hidden md:flex items-center gap-2 text-sm">
            <button
              @click="scrollTo('top')"
              class="relative px-3 py-2 transition"
              :class="navBtnClass('top')"
            >
              Home
              <span
                v-if="activeSection === 'top'"
                class="absolute left-1/2 -bottom-1 w-6 h-0.5 bg-[#0B1F5D] rounded-full -translate-x-1/2 transition-all"
              />
            </button>

            <button
              @click="scrollTo('details')"
              class="relative px-3 py-2 transition"
              :class="navBtnClass('details')"
            >
              Details
              <span
                v-if="activeSection === 'details'"
                class="absolute left-1/2 -bottom-1 w-6 h-0.5 bg-[#0B1F5D] rounded-full -translate-x-1/2 transition-all"
              />
            </button>

            <button
              @click="scrollTo('benefits')"
              class="relative px-3 py-2 transition"
              :class="navBtnClass('benefits')"
            >
              Benefits
              <span
                v-if="activeSection === 'benefits'"
                class="absolute left-1/2 -bottom-1 w-6 h-0.5 bg-[#0B1F5D] rounded-full -translate-x-1/2 transition-all"
              />
            </button>

            <button
              @click="scrollTo('apply')"
              class="relative px-3 py-2 transition"
              :class="navBtnClass('apply')"
            >
              Apply
              <span
                v-if="activeSection === 'apply'"
                class="absolute left-1/2 -bottom-1 w-6 h-0.5 bg-[#0B1F5D] rounded-full -translate-x-1/2 transition-all"
              />
            </button>

            <button
              @click="scrollTo('location')"
              class="relative px-3 py-2 transition"
              :class="navBtnClass('location')"
            >
              Location
              <span
                v-if="activeSection === 'location'"
                class="absolute left-1/2 -bottom-1 w-6 h-0.5 bg-[#0B1F5D] rounded-full -translate-x-1/2 transition-all"
              />
            </button>
          </div>

          <!-- Mobile hamburger -->
          <button
            class="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/70 ring-1 ring-slate-200 shadow-sm hover:bg-white transition"
            @click="toggleMobileNav"
            aria-label="Toggle menu"
          >
            <i class="fa-solid" :class="mobileNavOpen ? 'fa-xmark' : 'fa-bars'"></i>
          </button>
        </div>

        <!-- Mobile dropdown -->
        <transition name="nav">
          <div v-if="mobileNavOpen" class="md:hidden px-4 pb-4">
            <div class="mt-2 bg-white/85 backdrop-blur rounded-2xl ring-1 ring-slate-200 shadow-sm p-2">
              <button
                @click="scrollTo('top');"
                class="relative w-full text-left px-4 py-3 rounded-xl transition"
                :class="activeSection === 'top'
                  ? 'bg-[#0B1F5D]/10 text-[#0B1F5D] font-semibold'
                  : 'hover:bg-slate-100 text-slate-700'"
              >
                <i class="fa-solid fa-house mr-2"></i> Home
                <span
                  v-if="activeSection === 'top'"
                  class="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#0B1F5D] rounded-full"
                />
              </button>

              <button
                @click="scrollTo('details');"
                class="relative w-full text-left px-4 py-3 rounded-xl transition"
                :class="activeSection === 'details'
                  ? 'bg-[#0B1F5D]/10 text-[#0B1F5D] font-semibold'
                  : 'hover:bg-slate-100 text-slate-700'"
              >
                <i class="fa-solid fa-circle-info mr-2"></i> Details
                <span
                  v-if="activeSection === 'details'"
                  class="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#0B1F5D] rounded-full"
                />
              </button>

              <button
                @click="scrollTo('benefits');"
                class="relative w-full text-left px-4 py-3 rounded-xl transition"
                :class="activeSection === 'benefits'
                  ? 'bg-[#0B1F5D]/10 text-[#0B1F5D] font-semibold'
                  : 'hover:bg-slate-100 text-slate-700'"
              >
                <i class="fa-solid fa-star mr-2"></i> Benefits
                <span
                  v-if="activeSection === 'benefits'"
                  class="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#0B1F5D] rounded-full"
                />
              </button>

              <button
                @click="scrollTo('apply');"
                class="relative w-full text-left px-4 py-3 rounded-xl transition"
                :class="activeSection === 'apply'
                  ? 'bg-[#0B1F5D]/10 text-[#0B1F5D] font-semibold'
                  : 'hover:bg-slate-100 text-slate-700'"
              >
                <i class="fa-solid fa-file-signature mr-2"></i> Apply
                <span
                  v-if="activeSection === 'apply'"
                  class="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#0B1F5D] rounded-full"
                />
              </button>

               <button
                @click="scrollTo('location');"
                class="relative w-full text-left px-4 py-3 rounded-xl transition"
                :class="activeSection === 'location'
                  ? 'bg-[#0B1F5D]/10 text-[#0B1F5D] font-semibold'
                  : 'hover:bg-slate-100 text-slate-700'"
              >
                <i class="fa-solid fa-location-dot mr-2"></i> Location
                <span
                  v-if="activeSection === 'location'"
                  class="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#0B1F5D] rounded-full"
                />
              </button>
            </div>
          </div>
        </transition>
      </nav>
    </div>

    <!-- HERO -->
    <section id="top" class="relative">
      <div class="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            MOVE YOUR BUSINESS
            <br />
            TO THE
            <br />
            <span class="text-[#0B1F5D]">NEXT LEVEL</span>
          </h1>

          <p class="mt-6 text-base md:text-lg text-slate-700 max-w-3xl mx-auto">
            Non-Collateral <span class="font-semibold text-slate-900">Business Loan</span>
            Built for Growing Companies
          </p>

          <div class="mt-8 flex flex-wrap justify-center gap-3">
            <span class="inline-flex items-center gap-2 bg-white/70 backdrop-blur px-4 py-2 rounded-full ring-1 ring-slate-200 text-sm">
              <i class="fa-solid fa-peso-sign text-[#0B1F5D]"></i>
              300K – 20M
            </span>
            <span class="inline-flex items-center gap-2 bg-white/70 backdrop-blur px-4 py-2 rounded-full ring-1 ring-slate-200 text-sm">
              <i class="fa-solid fa-clock text-[#0B1F5D]"></i>
              3 – 5 Working Days
            </span>
            <span class="inline-flex items-center gap-2 bg-white/70 backdrop-blur px-4 py-2 rounded-full ring-1 ring-slate-200 text-sm">
              <i class="fa-solid fa-shield-halved text-[#0B1F5D]"></i>
              Confidential
            </span>
          </div>

          <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              @click="scrollTo('apply')"
              class="px-7 py-3 rounded-lg font-semibold bg-[#0B1F5D] text-white shadow hover:opacity-95 transition inline-flex items-center justify-center gap-2"
            >
              <i class="fa-solid fa-file-signature"></i>
              Apply Now
            </button>

            <button
              @click="scrollTo('benefits')"
              class="px-7 py-3 rounded-lg font-semibold bg-white text-[#0B1F5D] ring-1 ring-[#0B1F5D]/25 shadow-sm hover:ring-[#0B1F5D]/45 transition inline-flex items-center justify-center gap-2"
            >
              <i class="fa-solid fa-chart-line"></i>
              See Benefits
            </button>
          </div>

          <div class="mt-14 flex justify-center">
            <button
              @click="scrollTo('details')"
              class="h-12 w-12 rounded-full bg-[#0B1F5D] text-white shadow-lg ring-4 ring-white/70 grid place-items-center hover:opacity-95 transition animate-bounce"
              aria-label="Scroll down"
              title="Scroll to details"
            >
              <i class="fa-solid fa-angle-down text-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- DETAILS -->
    <section id="details" class="max-w-6xl mx-auto px-7 py-29">
      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold">Details</h2>
        <p class="mt-3 text-slate-700">
          Clear loan terms, fast processing, and a straightforward application flow for business owners.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-sm ring-1 ring-slate-200 hover:shadow-md transition">
          <div class="flex items-center justify-between">
            <div class="text-sm text-slate-600">Loan Amount</div>
            <i class="fa-solid fa-wallet text-[#0B1F5D]"></i>
          </div>
          <div class="mt-2 text-2xl font-bold text-[#0B1F5D]">₱300K – ₱20M</div>
          <p class="mt-3 text-slate-700 text-sm">Financing range depending on business size and requirements.</p>
        </div>

        <div class="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-sm ring-1 ring-slate-200 hover:shadow-md transition">
          <div class="flex items-center justify-between">
            <div class="text-sm text-slate-600">Processing Time</div>
            <i class="fa-solid fa-bolt text-[#0B1F5D]"></i>
          </div>
          <div class="mt-2 text-2xl font-bold text-[#0B1F5D]">3–5 working days</div>
          <p class="mt-3 text-slate-700 text-sm">Fast evaluation and release once documents are complete.</p>
        </div>

        <div class="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-sm ring-1 ring-slate-200 hover:shadow-md transition">
          <div class="flex items-center justify-between">
            <div class="text-sm text-slate-600">Repayment Terms</div>
            <i class="fa-solid fa-calendar-check text-[#0B1F5D]"></i>
          </div>
          <div class="mt-2 text-2xl font-bold text-[#0B1F5D]">6–24 months</div>
          <p class="mt-3 text-slate-700 text-sm">Negotiable terms designed to match your business cash flow.</p>
        </div>
      </div>

      <div class="mt-10 grid lg:grid-cols-2 gap-6">
        <div class="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-sm ring-1 ring-slate-200">
          <h2 class="text-xl font-bold flex items-center gap-2">
            <i class="fa-solid fa-list-check text-[#0B1F5D]"></i>
            Basic Requirements
          </h2>
          <p class="mt-2 text-slate-700 text-sm">(Replace with the official list anytime.)</p>
          <ul class="mt-4 space-y-2 text-sm text-slate-800">
            <li class="flex gap-2"><span class="text-[#0B1F5D]">•</span> Business registration documents</li>
            <li class="flex gap-2"><span class="text-[#0B1F5D]">•</span> Valid IDs of owners/authorized signatories</li>
            <li class="flex gap-2"><span class="text-[#0B1F5D]">•</span> Proof of business operations (permits / invoices / etc.)</li>
            <li class="flex gap-2"><span class="text-[#0B1F5D]">•</span> Financial documents (as applicable)</li>
          </ul>
        </div>

        <div class="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-sm ring-1 ring-slate-200">
          <h2 class="text-xl font-bold flex items-center gap-2">
            <i class="fa-solid fa-lock text-[#0B1F5D]"></i>
            Confidential & Secure
          </h2>
          <p class="mt-4 text-slate-800 text-sm leading-relaxed">
            All information submitted will be treated as confidential.
            Your inquiry is used only for evaluation and communication regarding your loan request.
          </p>
          <div class="mt-4 text-xs text-slate-600">Note: No registration fees.</div>
        </div>
      </div>
    </section>

    <!-- BENEFITS -->
    <section id="benefits" class="max-w-6xl mx-auto px-6 pb-4">
      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold">Key Benefits</h2>
        <p class="mt-3 text-slate-700">
          Simple, business-first lending designed for speed and flexibility.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-6">
        <div class="bg-white/80 backdrop-blur rounded-2xl p-4 md:p-6 shadow-sm ring-1 ring-slate-200 hover:shadow-md transition">
          <img src="/images/eifl-lending/flexible-repayment-term.png" alt="Flexible Repayment Term" class="w-full rounded-xl" />
        </div>

        <div class="bg-white/80 backdrop-blur rounded-2xl p-4 md:p-6 shadow-sm ring-1 ring-slate-200 hover:shadow-md transition">
          <img src="/images/eifl-lending/competitive-interest-rate.png" alt="Competitive Interest Rate" class="w-full rounded-xl" />
        </div>

        <div class="bg-white/80 backdrop-blur rounded-2xl p-4 md:p-6 shadow-sm ring-1 ring-slate-200 hover:shadow-md transition">
          <img src="/images/eifl-lending/complete-docs-faster-release.png" alt="Complete Docs Faster Release" class="w-full rounded-xl" />
        </div>

        <div class="bg-white/80 backdrop-blur rounded-2xl p-4 md:p-6 shadow-sm ring-1 ring-slate-200 hover:shadow-md transition">
          <img src="/images/eifl-lending/accelerate-your-loan-approval.png" alt="Accelerate Your Loan Approval" class="w-full rounded-xl" />
        </div>

        <div class="bg-white/80 backdrop-blur rounded-2xl p-4 md:p-6 shadow-sm ring-1 ring-slate-200 hover:shadow-md transition lg:col-span-2">
          <img src="/images/eifl-lending/access-flexible-loans.png" alt="Access Flexible Loans" class="w-full rounded-xl" />
        </div>
      </div>
    </section>

    <!-- APPLY -->
    <section id="apply" class="bg-white/80 backdrop-blur border-t border-slate-200">
      <div class="max-w-3xl mx-auto px-6 py-16">
        <div class="text-center">
          <h2 class="text-3xl font-bold">Apply Now</h2>
          <p class="mt-3 text-slate-700">Submit your inquiry and we’ll contact you for the next steps.</p>
        </div>

        <form class="mt-10 bg-white rounded-2xl p-6 md:p-8 ring-1 ring-slate-200 shadow-sm space-y-5" @submit.prevent="submitForm">
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <label class="text-sm font-medium">Full Name</label>
              <div class="relative mt-2">
                <i class="fa-solid fa-user absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
                <input
                  v-model="form.fullName"
                  class="w-full rounded-lg border border-slate-200 pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B1F5D]/20"
                  placeholder="Juan Dela Cruz"
                />
              </div>
            </div>

            <div>
              <label class="text-sm font-medium">Contact Number</label>
              <div class="relative mt-2">
                <i class="fa-solid fa-phone absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
                <input
                  v-model="form.phone"
                  class="w-full rounded-lg border border-slate-200 pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B1F5D]/20"
                  placeholder="09XX XXX XXXX"
                />
              </div>
            </div>
          </div>

          <div>
            <label class="text-sm font-medium">Business Name</label>
            <div class="relative mt-2">
              <i class="fa-solid fa-building absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
              <input
                v-model="form.businessName"
                class="w-full rounded-lg border border-slate-200 pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B1F5D]/20"
                placeholder="ABC Trading Corp."
              />
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <label class="text-sm font-medium">Email</label>
              <div class="relative mt-2">
                <i class="fa-solid fa-envelope absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
                <input
                  v-model="form.email"
                  type="email"
                  class="w-full rounded-lg border border-slate-200 pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B1F5D]/20"
                  placeholder="you@business.com"
                />
              </div>
            </div>

            <div>
              <label class="text-sm font-medium">Desired Loan Amount</label>
              <div class="relative mt-2">
                <i class="fa-solid fa-sack-dollar absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
                <select
                  v-model="form.loanAmount"
                  class="w-full rounded-lg border border-slate-200 pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B1F5D]/20"
                >
                  <option>₱300,000 – ₱1,000,000</option>
                  <option>₱1,000,000 – ₱5,000,000</option>
                  <option>₱5,000,000 – ₱20,000,000</option>
                </select>
              </div>
            </div>
          </div>

          <div class="flex items-start gap-3 text-sm text-slate-700">
            <input v-model="form.consent" type="checkbox" class="mt-1" />
            <p>I agree that all information submitted will be treated confidentially.</p>
          </div>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full rounded-lg bg-[#0B1F5D] text-white py-3 font-semibold shadow hover:opacity-95 transition disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
          >
            <i class="fa-solid fa-paper-plane"></i>
            <span>{{ isSubmitting ? 'Submitting...' : 'Submit Application' }}</span>
          </button>

          <div class="text-xs text-slate-600 text-center leading-relaxed">
            <div class="font-medium text-slate-700">Disclaimer</div>
            <div>
              This is a <b>concept website proposal</b> for pitching/preview only and is not an official EIFL site.
              Loan approval and release timelines depend on eligibility and completeness of requirements.
            </div>
          </div>
        </form>
      </div>
    </section>

    <!-- LOCATION / MAP -->
    <section id="location" class="max-w-6xl mx-auto px-6 py-16">
      <div class="bg-white/80 backdrop-blur rounded-2xl p-6 md:p-8 shadow-sm ring-1 ring-slate-200">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
          <div>
            <h2 class="text-2xl font-bold">Office Location</h2>
            <p class="mt-2 text-slate-700 text-sm">
              Unit 422 Avida CityFlex Soho Tower, 7th Ave cor. Lane T, North Bonifacio,
              Bonifacio Global City, Metro Manila, Taguig, Philippines, 1630
            </p>
          </div>
        </div>

        <div class="rounded-xl overflow-hidden ring-1 ring-slate-200 bg-white">
          <iframe
            title="EIFL Lending Location"
            class="w-full h-[320px] md:h-[380px]"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Unit%20422%20Avida%20CityFlex%20Soho%20Tower%2C%207th%20Ave%20cor.%20Lane%20T%2C%20North%20Bonifacio%2C%20Bonifacio%20Global%20City%2C%20Taguig%2C%201630&output=embed"
          ></iframe>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="border-t border-slate-200 bg-white/60 backdrop-blur">
      <div class="max-w-6xl mx-auto px-6 py-8 text-center text-sm text-slate-600">
        © {{ new Date().getFullYear() }} EIFL Lending Corporation — All information submitted will be treated confidentially.
      </div>
    </footer>
  </div>
</template>

<style scoped>
.eifl-font {
  font-family:
    ui-sans-serif,
    system-ui,
    -apple-system,
    "Inter",
    "Plus Jakarta Sans",
    "DM Sans",
    "Segoe UI",
    Roboto,
    Arial,
    "Noto Sans",
    sans-serif;
}

.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

/* Mobile dropdown animation */
.nav-enter-active, .nav-leave-active {
  transition: all 180ms ease;
}
.nav-enter-from, .nav-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

/* Loader transition */
.loader-enter-active,
.loader-leave-active {
  transition: opacity 400ms ease, transform 400ms ease;
}
.loader-enter-from,
.loader-leave-to {
  opacity: 0;
  transform: scale(0.98);
}

/* Subtle loading bar animation */
@keyframes loadingBar {
  0% { width: 0; opacity: 0.4; }
  50% { width: 2.5rem; opacity: 1; }
  100% { width: 0; opacity: 0.4; }
}

.animate-loading-bar {
  animation: loadingBar 1.2s ease-in-out infinite;
}
/* EIFL logo glow */
@keyframes eiflGlow {
  0% {
    box-shadow:
      0 0 0 rgba(11, 31, 93, 0.0),
      0 0 0 rgba(11, 31, 93, 0.0);
    transform: scale(1);
  }
  50% {
    box-shadow:
      0 0 18px rgba(11, 31, 93, 0.35),
      0 0 36px rgba(11, 31, 93, 0.15);
    transform: scale(1.03);
  }
  100% {
    box-shadow:
      0 0 0 rgba(11, 31, 93, 0.0),
      0 0 0 rgba(11, 31, 93, 0.0);
    transform: scale(1);
  }
}

.eifl-glow {
  animation: eiflGlow 1.6s ease-in-out infinite;
  ring: 1px solid rgba(148, 163, 184, 0.6);
}
</style>

<template>
    <!-- TRANSITION -->
    <transition name="fade">
    <div v-if="isLoading" class="loader-overlay">
        <div class="loader-box">
        <div class="spinner"></div>
        <div class="loader-title">Gatt Bros Transport</div>
        <div class="loader-sub">Preparing heavy transport nationwide…</div>
        </div>
    </div>
    </transition>
    <!-- Demo Disclaimer Bar -->
      <div  v-if="showDemoBar"
        class="fixed top-0 w-full bg-[#0B1F5D] text-white text-sm z-[60]">
        <div class="max-w-6xl mx-auto px-4 py-2 text-xs md:text-sm text-center">
          <span class="opacity-95">
            Concept website proposal — not an official site. Built for pitching and preview only.
          </span>
          <button
            class="ml-4 text-white hover:opacity-70"
            @click="showDemoBar = false"
        >
            ✕
        </button>
        </div>
      </div>
  <div class="page">
     <!-- Top Nav -->
 <header class="fixed w-full bg-slate-900 text-white z-50 shadow-lg"
        :class="showDemoBar ? 'top-8' : 'top-0'">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Brand -->
        <div class="flex items-center space-x-2">
          <!-- your svg -->
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="w-8 h-8 text-orange-500">
            <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
            <path d="M15 18H9"></path>
            <path
              d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14">
            </path>
            <circle cx="17" cy="18" r="2"></circle>
            <circle cx="7" cy="18" r="2"></circle>
          </svg>

          <div>
            <h1 class="text-xl font-bold leading-tight">Gatt Bros Transport</h1>
            <p class="text-xs text-gray-300">Heavy Haulage &amp; Earthmoving Logistics</p>
          </div>
        </div>

        <!-- Desktop menu -->
        <div class="hidden md:flex items-center space-x-8">
            <button class="hover:text-orange-500 transition" @click.prevent="scrollTo('home')">Home</button>
          <button class="hover:text-orange-500 transition" @click.prevent="scrollTo('services')">Services</button>
          <button class="hover:text-orange-500 transition" @click.prevent="scrollTo('about')">About</button>
          <button class="hover:text-orange-500 transition" @click.prevent="scrollTo('fleet')">Fleet</button>
          <button class="hover:text-orange-500 transition" @click.prevent="scrollTo('contact')">Contact Us</button>
          <button class="bg-orange-500 px-6 py-2 rounded-lg hover:bg-orange-600 transition"
            @click.prevent="scrollTo('quote')">
            Request a Quote
          </button>
        </div>

        <!-- Mobile hamburger -->
        <button
          type="button"
          class="md:hidden inline-flex items-center justify-center p-2 rounded-lg hover:bg-slate-800 transition"
          @click="toggleMobile"
          :aria-expanded="mobileOpen"
          aria-label="Toggle menu"
        >
          <svg v-if="!mobileOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>

          <!-- X icon when open -->
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile dropdown -->
      <div v-show="mobileOpen" class="md:hidden mt-4 pb-2">
        <div class="bg-slate-800/70 backdrop-blur rounded-xl p-3 space-y-2 border border-white/10">
            <button class="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-700"
            @click.prevent="scrollTo('home')">Home</button>
          <button class="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-700"
            @click.prevent="scrollTo('services')">Services</button>
          <button class="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-700"
            @click.prevent="scrollTo('about')">About</button>
          <button class="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-700"
            @click.prevent="scrollTo('fleet')">Fleet</button>
          <button class="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-700"
            @click.prevent="scrollTo('contact')">Contact Us</button>

          <button class="w-full bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-600 transition"
            @click.prevent="scrollTo('quote')">
            Request a Quote
          </button>
        </div>
      </div>
    </nav>
  </header>

    <main id="top">
      <!-- HERO -->
      <section class="hero" id="home">
        <div class="hero__overlay"></div>
        <div class="container hero__grid">
          <div class="hero__content">
            <span class="pill">Australia-Wide Heavy Haulage Specialists</span>

            <h1 class="hero__title">
            Precision Heavy Transport<br />
            <span class="accent">Across Australia</span>
            </h1>

            <p class="hero__subtitle">
            Family-owned and operated. Australia’s most trusted crane and heavy machinery transporter,
            delivering excellence 24/7.
            </p>

            <div class="hero__actions">
              <a class="btn btn--primary btn--lg" href="#quote" @click.prevent="scrollTo('quote')">
                Request a Quote
              </a>
              <a class="btn btn--ghost btn--lg" :href="`tel:${phoneRaw}`">
                <span class="icon">📞</span> Call Now
              </a>
            </div>

            <div class="stats">
              <div class="stat" v-for="s in stats" :key="s.label">
                <div class="stat__value">{{ s.value }}</div>
                <div class="stat__label">{{ s.label }}</div>
              </div>
            </div>
          </div>

          <div class="hero__spacer" />
        </div>
        <button
            class="scroll-down"
            @click.prevent="scrollTo('services')"
            aria-label="Scroll Down"
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        </button>
      </section>

      <!-- SERVICES -->
      <section id="services" class="section section--light">
        <div class="container">
          <h2 class="section__title">Our Services</h2>
          <p class="section__lead">
            Comprehensive heavy transport solutions designed to meet the unique demands of
            Australia's mining, construction, and industrial sectors.
          </p>

          <div class="grid grid--3">
            <article class="card" v-for="svc in services" :key="svc.title">
              <div class="card__icon">{{ svc.icon }}</div>
              <h3 class="card__title">{{ svc.title }}</h3>
              <p class="card__text">{{ svc.text }}</p>
            </article>
          </div>
        </div>
      </section>

      <!-- ABOUT -->
      <section id="about" class="section section--light">
        <div class="container about">
          <div class="about__left">
            <span class="pill pill--soft">About Gatt Bros Transport</span>
            <h2 class="about__title">Australia's Trusted Heavy Haulage Partner</h2>

            <p class="about__text">
              For over 25 years, Gatt Bros Transport has been at the forefront of heavy haulage and
              earthmoving logistics across Australia. Our commitment to safety, reliability, and
              customer satisfaction has made us the preferred choice for mining, construction, and
              industrial sectors nationwide.
            </p>

            <p class="about__text">
              From the remote mines of Western Australia to major construction projects in
              metropolitan areas, we have the expertise, equipment, and determination to deliver your
              cargo safely and on time, every time.
            </p>

            <div class="about__badges">
              <div class="badge" v-for="b in badges" :key="b.title">
                <div class="badge__icon">{{ b.icon }}</div>
                <div>
                  <div class="badge__title">{{ b.title }}</div>
                  <div class="badge__sub">{{ b.sub }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="about__right">
            <div class="about__image" aria-hidden="true"></div>
            <div class="about__years">
              <div class="about__years__big">3+</div>
              <div class="about__years__small">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      <!-- FLEET -->
      <section id="fleet" class="section section--dark">
        <div class="container fleet">
          <div class="fleet__left">
            <span class="pill">Fleet &amp; Capabilities</span>
            <h2 class="fleet__title">Modern Fleet for Maximum Efficiency</h2>
            <p class="fleet__text">
              Our diverse fleet of modern vehicles and specialized equipment ensures we can handle any
              transport challenge. From standard heavy haulage to complex oversize loads, we have the
              right equipment for your needs.
            </p>

            <ul class="checklist">
              <li v-for="item in fleetList" :key="item">✅ {{ item }}</li>
            </ul>

            <div class="fleet__callout">
              <div class="fleet__callout__title">🚚 Load Capacity</div>
              <div class="fleet__callout__text">
                Our fleet can handle loads from 10 tonnes to over 150 tonnes, with specialized
                equipment for even heavier requirements.
              </div>
            </div>
          </div>

          <div class="fleet__right">
            <div class="imgGrid">
              <div class="imgGrid__a"></div>
              <div class="imgGrid__b"></div>
              <div class="imgGrid__c"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- CONTACT -->
      <section id="contact" class="section section--light">
        <div class="container">
          <h2 class="section__title">Get In Touch</h2>
          <p class="section__lead">
            Ready to move your heavy equipment? Contact us today for a competitive quote and expert
            transport solution.
          </p>

          <div class="grid grid--3">
            <article class="card card--center">
              <div class="card__icon">📞</div>
              <h3 class="card__title">Phone</h3>
              <p class="card__text">Available 24/7 for urgent inquiries</p>
              <div class="card__strong">{{ phoneDisplay }}</div>
              <div class="card__muted">({{ phoneAlt }})</div>
            </article>

            <article class="card card--center">
              <div class="card__icon">✉️</div>
              <h3 class="card__title">Email</h3>
              <p class="card__text">Send us your transport requirements</p>
              <a class="link" :href="`mailto:${email}`">{{ email }}</a>
            </article>

            <article class="card card--center">
              <div class="card__icon">⏱️</div>
              <h3 class="card__title">Hours</h3>
              <p class="card__text">We're here when you need us</p>
              <div class="card__strong">24/7 Operations</div>
              <div class="card__muted">Emergency transport available</div>
            </article>
          </div>
        </div>
      </section>

      <!-- QUOTE -->
      <section id="quote" class="section section--light section--tight">
        <div class="container">
          <div class="formCard">
            <h2 class="formCard__title">Request a Quote</h2>

            <form class="form" @submit.prevent="submitQuote">
              <div class="form__grid">
                <div class="field">
                  <label>Name <span class="req">*</span></label>
                  <input v-model.trim="form.name" type="text" placeholder="Your name" required />
                </div>

                <div class="field">
                  <label>Company</label>
                  <input v-model.trim="form.company" type="text" placeholder="Company name" />
                </div>

                <div class="field">
                  <label>Email <span class="req">*</span></label>
                  <input v-model.trim="form.email" type="email" placeholder="your@email.com" required />
                </div>

                <div class="field">
                  <label>Phone <span class="req">*</span></label>
                  <input v-model.trim="form.phone" type="tel" placeholder="Your phone number" required />
                </div>

                <div class="field">
                  <label>Pickup Location <span class="req">*</span></label>
                  <input v-model.trim="form.pickup" type="text" placeholder="Pickup address or suburb" required />
                </div>

                <div class="field">
                  <label>Delivery Location <span class="req">*</span></label>
                  <input v-model.trim="form.delivery" type="text" placeholder="Delivery address or suburb" required />
                </div>

                <div class="field field--full">
                  <label>Transport Details <span class="req">*</span></label>
                  <textarea
                    v-model.trim="form.details"
                    rows="5"
                    placeholder="Please describe what needs to be transported, dimensions, weight, and any special requirements..."
                    required
                  />
                </div>
              </div>

              <button class="btn btn--primary btn--full btn--xl" type="submit">
                Submit Quote Request
              </button>

              <p v-if="toast" class="toast">{{ toast }}</p>
              <p class="disclaimer">
                This is a portfolio concept demo and is not affiliated with any real business.
              </p>
            </form>
          </div>
        </div>
      </section>

      <!-- FOOTER -->
      <footer class="footer">
        <div class="container footer__grid">
          <div>
            <div class="footer__brand flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-truck w-8 h-8 text-orange-500">
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                <path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                <circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle>
                </svg>
                <div>
                    <h1 class="text-xl font-bold">Gatt Bros Transport</h1>
                    <p class="text-xs text-gray-300">Heavy Haulage &amp; Earthmoving Logistics</p>
                </div>
            </div>
            <p class="footer__text">
              Family-owned and operated. Australia’s most trusted crane and heavy machinery transporter, delivering excellence 24/7.
            </p>
          </div>

          <div>
            <div class="footer__title">Services</div>
            <ul class="footer__list">
              <li v-for="s in footerServices" :key="s">{{ s }}</li>
            </ul>
          </div>

          <div>
            <div class="footer__title">Coverage</div>
            <ul class="footer__list">
              <li v-for="c in coverage" :key="c">📍 {{ c }}</li>
            </ul>
          </div>

          <div>
            <div class="footer__title">Contact</div>
            <ul class="footer__list">
              <li>📞 {{ phoneDisplay }} ({{ phoneAlt }})</li>
              <li>✉️ {{ email }}</li>
              <li>📍 Australia-Wide Operations</li>
            </ul>
          </div>
        </div>

        <div class="container footer__bottom">
          <span>© {{ new Date().getFullYear() }} Gatt Bros Transport. All rights reserved.</span>
          <span class="footer__links">
            <a href="#" @click.prevent>Privacy Policy</a>
            <a href="#" @click.prevent>Terms of Service</a>
          </span>
        </div>
      </footer>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, reactive } from "vue";

const isLoading = ref(true);

onMounted(() => {
  // simulate initial loading (assets/fonts/etc.)
  setTimeout(() => {
    isLoading.value = false;
  }, 900); // adjust 600–1200ms
});

// optional: lock scroll while loading
watch(isLoading, (val) => {
  document.body.style.overflow = val ? "hidden" : "";
});

const showDemoBar = ref(true)

const mobileOpen = ref(false);

function toggleMobile() {
  mobileOpen.value = !mobileOpen.value;
}

function closeMobile() {
  mobileOpen.value = false;
}


const phoneDisplay = "1300 GATT BROS";
const phoneAlt = "0412 096 080";
const phoneRaw = "0412 096 080";
const email = "info@gattbros.com.au";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "Fully", label: "Licensed & Insured" },
  { value: "24/7", label: "Available" },
  { value: "AU", label: "Nationwide" },
];

const services = [
  {
    icon: "🚚",
    title: "Heavy Haulage",
    text: "Specialized transport for oversized and overweight loads including mining equipment, construction machinery, and industrial components.",
  },
  {
    icon: "📦",
    title: "Earthmoving Logistics",
    text: "Complete logistics solutions for earthmoving equipment, excavators, dozers, and graders across Australia.",
  },
  {
    icon: "📍",
    title: "Australia-Wide Coverage",
    text: "Comprehensive transport services from capital cities to remote regional areas, with expert route planning and permits.",
  },
  {
    icon: "🛡️",
    title: "Permit Management",
    text: "Full handling of permits, escort vehicles, and compliance with state and federal transport regulations.",
  },
  {
    icon: "🧰",
    title: "Project Logistics",
    text: "Tailored solutions for complex projects including site visits, load assessment, and specialized equipment.",
  },
  {
    icon: "🧭",
    title: "Route Planning",
    text: "Expert route surveying and planning to ensure safe, efficient transport of your valuable machinery.",
  },
];

const badges = [
  { icon: "🎖️", title: "Certified", sub: "Fully licensed & insured" },
  { icon: "👥", title: "Expert Team", sub: "Skilled professionals" },
  { icon: "🎯", title: "Precision", sub: "Accurate delivery" },
  { icon: "📈", title: "Growth", sub: "Expanding fleet" },
];

const fleetList = [
  "Semi-trailers and extendable trailers",
  "Low loaders and drop deck trailers",
  "Multi-axle heavy haulage trailers",
  "Specialized machinery transport",
  "Pilot vehicles and escort services",
  "Crane and lifting equipment",
];

const footerServices = [
  "Heavy Haulage",
  "Earthmoving Logistics",
  "Project Transport",
  "Permit Management",
  "Route Planning",
];

const coverage = ["Queensland", "New South Wales", "Victoria", "Western Australia", "South Australia"];

const form = reactive({
  name: "",
  company: "",
  email: "",
  phone: "",
  pickup: "",
  delivery: "",
  details: "",
});

const toast = ref("");

function scrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function submitQuote() {
  // Demo-only: just show a toast and clear.
  toast.value = "✅ Quote request submitted (demo). We'll get back to you shortly.";
  setTimeout(() => (toast.value = ""), 3500);

  Object.assign(form, {
    name: "",
    company: "",
    email: "",
    phone: "",
    pickup: "",
    delivery: "",
    details: "",
  });
}
</script>

<style scoped>
/* ===== Base ===== */
.page {
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Apple Color Emoji",
    "Segoe UI Emoji";
  color: #0b1220;
  background: #0b1220;
}
.container {
  width: min(1120px, calc(100% - 48px));
  margin: 0 auto;
}
a {
  color: inherit;
  text-decoration: none;
}
.accent {
  color: #ff7a18;
}

/* ===== Nav ===== */
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: linear-gradient(180deg, #0a1426 0%, #091224 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 0;
}
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}
.brand__icon {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: rgba(255, 122, 24, 0.12);
  color: #ff7a18;
  font-size: 18px;
}
.brand__name {
  display: block;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: 0.2px;
}
.brand__tag {
  display: block;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 2px;
}
.menu {
  display: flex;
  align-items: center;
  gap: 22px;
  color: rgba(255, 255, 255, 0.85);
}
.menu a:hover {
  color: #ffffff;
}
@media (max-width: 780px) {
  .menu a:not(.btn) {
    display: none;
  }
}

/* ===== Buttons ===== */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 12px;
  padding: 12px 16px;
  font-weight: 700;
  border: 1px solid transparent;
  transition: transform 0.12s ease, background 0.12s ease, border-color 0.12s ease;
}
.btn:active {
  transform: translateY(1px);
}
.btn--primary {
  background: #ff7a18;
  color: #ffffff;
}
.btn--primary:hover {
  background: #ff8b37;
}
.btn--ghost {
  background: rgba(255, 255, 255, 0.95);
  color: #0b1220;
  border-color: rgba(255, 255, 255, 0.25);
}
.btn--ghost:hover {
  background: #ffffff;
}
.btn--lg {
  padding: 14px 18px;
  border-radius: 14px;
}
.btn--xl {
  padding: 16px 18px;
  border-radius: 14px;
}
.btn--full {
  width: 100%;
}

/* ===== Hero ===== */
.hero {
  position: relative;
  min-height: 911px;
  background:
    radial-gradient(1200px 600px at 30% 10%, rgba(255, 122, 24, 0.08), transparent 55%),
    linear-gradient(180deg, #0b1529 0%, #091224 100%);
  overflow: hidden;
}
.hero__overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(9, 18, 36, 0.95) 0%, rgba(9, 18, 36, 0.7) 50%, rgba(9, 18, 36, 0.55) 100%),
    url("https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1920")
      center/cover no-repeat;
  filter: saturate(1.05) contrast(1.02);
  opacity: 0.95;
}
.hero__grid {
  position: relative;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 28px;
  padding: 150px 0 70px;
}
.hero__content {
  color: #ffffff;
}
.hero__title {
  font-size: clamp(42px, 5vw, 72px);
  line-height: 1.03;
  margin: 18px 0 14px;
  font-weight: 900;
  letter-spacing: -0.8px;
}
.hero__subtitle {
  font-size: 18px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.82);
  max-width: 620px;
}
.hero__actions {
  display: flex;
  gap: 14px;
  margin: 26px 0 26px;
  flex-wrap: wrap;
}
.hero__spacer {
  /* Right side for composition like your screenshot */
}
.pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(255, 122, 24, 0.18);
  color: #ffb27a;
  font-weight: 800;
  font-size: 13px;
  border: 1px solid rgba(255, 122, 24, 0.22);
}
.pill--soft {
  background: rgba(255, 122, 24, 0.12);
  color: #ff7a18;
  border-color: rgba(255, 122, 24, 0.16);
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin-top: 24px;
}
.stat {
  border-radius: 14px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(8px);
}
.stat__value {
  font-size: 28px;
  font-weight: 900;
  color: #ff7a18;
}
.stat__label {
  margin-top: 4px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.75);
}
@media (max-width: 860px) {
  .hero__grid {
    grid-template-columns: 1fr;
    padding: 70px 0 56px;
  }
  .stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* ===== Sections ===== */
.section {
  padding: 76px 0;
}
.section--light {
  background: #ffffff;
  color: #0b1220;
}
.section--dark {
  background: linear-gradient(180deg, #0a1426 0%, #081021 100%);
  color: #ffffff;
}
.section--tight {
  padding-top: 48px;
}
.section__title {
  text-align: center;
  font-size: clamp(34px, 3.4vw, 54px);
  letter-spacing: -0.7px;
  margin: 0;
  font-weight: 950;
}
.section__lead {
  text-align: center;
  max-width: 780px;
  margin: 14px auto 40px;
  color: rgba(11, 18, 32, 0.72);
  line-height: 1.7;
}

/* ===== Grid & Cards ===== */
.grid {
  display: grid;
  gap: 22px;
}
.grid--3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
@media (max-width: 980px) {
  .grid--3 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 640px) {
  .grid--3 {
    grid-template-columns: 1fr;
  }
}

.card {
  background: #ffffff;
  border-radius: 18px;
  padding: 24px;
  box-shadow: 0 18px 48px rgba(11, 18, 32, 0.08);
  border: 1px solid rgba(11, 18, 32, 0.06);
}
.card__icon {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: rgba(255, 122, 24, 0.12);
  color: #ff7a18;
  font-size: 20px;
  margin-bottom: 14px;
}
.card__title {
  margin: 0 0 10px;
  font-size: 20px;
  font-weight: 900;
}
.card__text {
  margin: 0;
  color: rgba(11, 18, 32, 0.72);
  line-height: 1.7;
}
.card--center {
  text-align: center;
}
.card--center .card__icon {
  margin-left: auto;
  margin-right: auto;
}
.card__strong {
  margin-top: 10px;
  font-weight: 950;
  color: #ff7a18;
}
.card__muted {
  margin-top: 4px;
  color: rgba(11, 18, 32, 0.55);
}
.link {
  font-weight: 800;
  color: #ff7a18;
}
.link:hover {
  text-decoration: underline;
}

/* ===== About ===== */
.about {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 28px;
  align-items: center;
}
.about__title {
  font-size: clamp(34px, 3.2vw, 52px);
  margin: 14px 0 14px;
  line-height: 1.05;
  letter-spacing: -0.7px;
  font-weight: 950;
}
.about__text {
  color: rgba(11, 18, 32, 0.72);
  line-height: 1.75;
  margin: 0 0 14px;
}
.about__badges {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin-top: 18px;
}
.badge {
  display: flex;
  gap: 12px;
  padding: 14px;
  border-radius: 16px;
  background: rgba(11, 18, 32, 0.03);
  border: 1px solid rgba(11, 18, 32, 0.06);
}
.badge__icon {
  width: 42px;
  height: 42px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: rgba(255, 122, 24, 0.12);
  color: #ff7a18;
  font-size: 18px;
}
.badge__title {
  font-weight: 950;
}
.badge__sub {
  margin-top: 2px;
  color: rgba(11, 18, 32, 0.6);
  font-size: 13px;
}
.about__right {
  position: relative;
}
.about__image {
  height: 360px;
  border-radius: 22px;
  background:
    linear-gradient(180deg, rgba(11, 18, 32, 0.15), rgba(11, 18, 32, 0.25)),
    url("https://images.pexels.com/photos/1009926/pexels-photo-1009926.jpeg?auto=compress&cs=tinysrgb&w=1200")
      center/cover no-repeat;
  box-shadow: 0 24px 70px rgba(11, 18, 32, 0.18);
}
.about__years {
  position: absolute;
  left: -22px;
  bottom: 18px;
  background: #ff7a18;
  color: #ffffff;
  border-radius: 18px;
  padding: 18px 18px;
  width: 190px;
  box-shadow: 0 18px 50px rgba(255, 122, 24, 0.35);
}
.about__years__big {
  font-size: 44px;
  font-weight: 1000;
  line-height: 1;
}
.about__years__small {
  margin-top: 6px;
  opacity: 0.95;
}
@media (max-width: 980px) {
  .about {
    grid-template-columns: 1fr;
  }
  .about__years {
    left: 18px;
  }
}

/* ===== Fleet ===== */
.fleet {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 26px;
  align-items: center;
}
.fleet__title {
  font-size: clamp(34px, 3.2vw, 52px);
  margin: 14px 0 12px;
  line-height: 1.05;
  letter-spacing: -0.7px;
  font-weight: 950;
}
.fleet__text {
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.75;
  margin: 0 0 16px;
}
.checklist {
  list-style: none;
  padding: 0;
  margin: 18px 0 22px;
  display: grid;
  gap: 10px;
}
.checklist li {
  color: rgba(255, 255, 255, 0.9);
}
.fleet__callout {
  margin-top: 10px;
  background: rgba(255, 122, 24, 0.95);
  border-radius: 18px;
  padding: 18px;
  box-shadow: 0 18px 55px rgba(255, 122, 24, 0.25);
}
.fleet__callout__title {
  font-weight: 950;
  margin-bottom: 6px;
}
.fleet__callout__text {
  color: rgba(255, 255, 255, 0.92);
  line-height: 1.65;
}

/* image grid placeholders like your screenshot */
.imgGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  align-items: stretch;
}
.imgGrid__a,
.imgGrid__b,
.imgGrid__c {
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  box-shadow: 0 22px 60px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
.imgGrid__a {
  grid-column: 1 / 3;
  height: 220px;
  background-image: url("https://images.pexels.com/photos/14484399/pexels-photo-14484399.jpeg");
}
.imgGrid__b {
  height: 210px;
  background-image: url("https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800");
}
.imgGrid__c {
  height: 210px;
  background-image: url("https://images.pexels.com/photos/9529407/pexels-photo-9529407.jpeg?auto=compress&cs=tinysrgb&w=800");
}
@media (max-width: 980px) {
  .fleet {
    grid-template-columns: 1fr;
  }
}

/* ===== Form ===== */
.formCard {
  background: #ffffff;
  border-radius: 22px;
  padding: 34px;
  box-shadow: 0 24px 70px rgba(11, 18, 32, 0.12);
  border: 1px solid rgba(11, 18, 32, 0.06);
  max-width: 920px;
  margin: 0 auto;
}
.formCard__title {
  text-align: center;
  margin: 0 0 22px;
  font-size: 36px;
  font-weight: 1000;
  letter-spacing: -0.6px;
}
.form__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}
.field label {
  display: block;
  font-weight: 850;
  font-size: 13px;
  margin-bottom: 8px;
  color: rgba(11, 18, 32, 0.75);
}
.req {
  color: #ff7a18;
}
.field input,
.field textarea {
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(11, 18, 32, 0.14);
  padding: 12px 12px;
  font-size: 14px;
  outline: none;
}
.field input:focus,
.field textarea:focus {
  border-color: rgba(255, 122, 24, 0.7);
  box-shadow: 0 0 0 4px rgba(255, 122, 24, 0.14);
}
.field--full {
  grid-column: 1 / -1;
}
@media (max-width: 740px) {
  .form__grid {
    grid-template-columns: 1fr;
  }
}

.toast {
  margin-top: 12px;
  text-align: center;
  font-weight: 800;
  color: #1b7f3a;
}
.disclaimer {
  margin-top: 12px;
  text-align: center;
  color: rgba(11, 18, 32, 0.55);
  font-size: 12px;
}

/* ===== Footer ===== */
.footer {
  background: linear-gradient(180deg, #0b1529 0%, #091224 100%);
  color: rgba(255, 255, 255, 0.85);
  padding: 56px 0 26px;
}
.footer__grid {
  display: grid;
  grid-template-columns: 1.2fr 0.9fr 0.9fr 1fr;
  gap: 22px;
  padding-bottom: 28px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.footer__brand {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 10px;
}
.footer__name {
  font-weight: 950;
  color: #ffffff;
}
.footer__tag {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.65);
}
.footer__text {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
  margin: 0;
  max-width: 420px;
}
.footer__title {
  font-weight: 950;
  color: #ffffff;
  margin-bottom: 10px;
}
.footer__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
  color: rgba(255, 255, 255, 0.72);
}
.footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding-top: 18px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
}
.footer__links {
  display: inline-flex;
  gap: 14px;
}
.footer__links a:hover {
  color: #ffffff;
}
@media (max-width: 980px) {
  .footer__grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 640px) {
  .footer__grid {
    grid-template-columns: 1fr;
  }
  .footer__bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}
.scroll-down {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  width: 48px;
  height: 48px;
  border-radius: 999px;
  background: rgba(255, 122, 24, 0.95);
  color: white;
  font-size: 22px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(255, 122, 24, 0.4);
  cursor: pointer;
  animation: bounce 2s infinite;
  transition: background 0.2s ease;
  z-index: 10;
}

.scroll-down:hover {
  background: #ff8b37;
}

@keyframes bounce {
  0%, 100% { transform: translate(-50%, 0); }
  50% { transform: translate(-50%, -10px); }
}

/* fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.loader-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: grid;
  place-items: center;
  background: linear-gradient(180deg, #0b1529 0%, #091224 100%);
}

.loader-box {
  text-align: center;
  padding: 22px 26px;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
  box-shadow: 0 22px 70px rgba(0, 0, 0, 0.35);
}

.spinner {
  width: 44px;
  height: 44px;
  margin: 0 auto 14px;
  border-radius: 999px;
  border: 4px solid rgba(255, 255, 255, 0.18);
  border-top-color: #ff7a18;
  animation: spin 0.9s linear infinite;
}

.loader-title {
  color: #fff;
  font-weight: 900;
  letter-spacing: 0.2px;
  font-size: 18px;
}

.loader-sub {
  margin-top: 6px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
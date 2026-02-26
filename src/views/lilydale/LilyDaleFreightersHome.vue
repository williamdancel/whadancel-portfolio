<template>
  <div class="page">
    <!-- LOADING OVERLAY -->
    <transition name="loader">
    <div v-if="loading" class="loadingOverlay" role="status" aria-live="polite" aria-label="Loading">
        <div class="loadingCard">
        <div class="loadingTop">
            <span class="loadingIcon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 7h11v10H3z" />
                <path d="M14 10h4l3 3v4h-7z" />
                <path d="M6.5 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                <path d="M17.5 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
            </svg>
            </span>

            <div class="loadingText">
            <div class="loadingTitle">Loading Lilydale Freighters</div>
            <div class="loadingSub">Preparing your logistics experience…</div>
            </div>
        </div>

        <div class="loadingBar" aria-hidden="true">
            <span class="loadingBarFill" />
        </div>
        </div>
    </div>
    </transition>
    <!-- HEADER -->
    <header ref="headerRef" class="header" :class="{ scrolled: scrolled }">
    <!-- DISCLAIMER BAR (DEMO) -->
    <transition name="disclaimer">
    <div v-if="showDisclaimer" class="disclaimer">
        <div class="disclaimerInner">
        <p class="disclaimerText">
            Demo website only — content and contact details are placeholders for presentation purposes.
        </p>
        <button class="disclaimerClose" type="button" aria-label="Close disclaimer" @click="closeDisclaimer">
            ✕
        </button>
        </div>
    </div>
    </transition>
      <div class="headerInner">
        <a class="brand" href="#home" @click.prevent="go('home', true)">
          <span class="brandIcon" aria-hidden="true">
            <!-- simple truck icon -->
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 7h11v10H3z" />
              <path d="M14 10h4l3 3v4h-7z" />
              <path d="M6.5 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
              <path d="M17.5 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
            </svg>
          </span>
          <span class="brandText">
            <span class="brandName">Lilydale Freighters</span>
            <span class="brandTag">Excellence in Logistics</span>
          </span>
        </a>

        <nav class="nav desktop">
          <a href="#home" @click.prevent="go('home')">Home</a>
          <a href="#services" @click.prevent="go('services')">Services</a>
          <a href="#about" @click.prevent="go('about')">About</a>
          <a href="#drivers" @click.prevent="go('drivers')">Our Drivers</a>
          <a class="navCta" href="#contact" @click.prevent="go('contact')">Contact</a>
        </nav>

        <button class="burger" type="button" aria-label="Open menu" @click="toggleMobile()">
          <span />
          <span />
          <span />
        </button>
      </div>

      <!-- MOBILE MENU -->
      <transition name="fade">
        <div v-if="mobileOpen" class="mobileOverlay" @click="toggleMobile(false)">
          <div class="mobilePanel" @click.stop>
            <div class="mobileHead">
              <span class="mobileTitle">Menu</span>
              <button class="xBtn" type="button" aria-label="Close menu" @click="toggleMobile(false)">✕</button>
            </div>
            <div class="mobileLinks">
              <a href="#home" @click.prevent="go('home', true)">Home</a>
              <a href="#services" @click.prevent="go('services', true)">Services</a>
              <a href="#about" @click.prevent="go('about', true)">About</a>
              <a href="#drivers" @click.prevent="go('drivers', true)">Our Drivers</a>
              <a class="navCtaMobile" href="#contact" @click.prevent="go('contact', true)">Contact</a>
            </div>
          </div>
        </div>
      </transition>
    </header>

    <!-- HERO -->
    <section id="home" class="section hero">
      <div class="container heroGrid">
        <div class="heroLeft">
          <span class="pill">Family-Run Since Day One</span>

          <h1 class="h1">
            Your Trusted Partner<br />
            in <span class="accent">Freight &amp;<br /> Logistics</span>
          </h1>

          <p class="lead">
            Specializing in reliable haulage across Queensland, New South Wales, and Victoria.
            We deliver excellence with every load.
          </p>

          <div class="heroActions">
            <button class="btn primary" type="button" @click="go('contact')">
              Get a Quote <span aria-hidden="true">→</span>
            </button>
            <button class="btn ghost" type="button" @click="go('services')">Our Services</button>
          </div>

          <div class="heroStates">
            <div class="state">
              <div class="stateTop">QLD</div>
              <div class="stateSub">Queensland</div>
            </div>
            <div class="state">
              <div class="stateTop">NSW</div>
              <div class="stateSub">New South Wales</div>
            </div>
            <div class="state">
              <div class="stateTop">VIC</div>
              <div class="stateSub">Victoria</div>
            </div>
          </div>
        </div>

        <div class="heroRight">
          <div class="mediaStack">
            <div class="blob b1" aria-hidden="true"></div>
            <div class="blob b2" aria-hidden="true"></div>

            <div class="mediaCard">
              <img
                class="mediaImg"
                alt="Container yard"
                src="/images/lilydale/pic1.jpg"
              />
              <div class="expCard">
                <div class="expBig">13+</div>
                <div class="expSmall">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICES -->
    <section id="services" class="section">
      <div class="container">
        <h2 class="h2 center">Our Services</h2>
        <p class="sub center">Comprehensive logistics solutions tailored to your business needs</p>

        <div class="cardsGrid">
          <article class="card">
            <div class="iconBox" aria-hidden="true">
              <span class="icon">🚚</span>
            </div>
            <h3 class="h3">Interstate Haulage</h3>
            <p class="p">
              Comprehensive freight solutions across QLD, NSW, and VIC with reliable scheduling and tracking.
            </p>
            <ul class="list">
              <li>Full &amp; Part Loads</li>
              <li>Express Delivery</li>
              <li>Regular Routes</li>
            </ul>
          </article>

          <article class="card">
            <div class="iconBox" aria-hidden="true">
              <span class="icon">📍</span>
            </div>
            <h3 class="h3">Route Expertise</h3>
            <p class="p">
              Deep knowledge of eastern Australian routes ensures efficient and cost-effective transportation.
            </p>
            <ul class="list">
              <li>Optimized Routes</li>
              <li>Regional Coverage</li>
              <li>Local Knowledge</li>
            </ul>
          </article>

          <article class="card">
            <div class="iconBox" aria-hidden="true">
              <span class="icon">⏱️</span>
            </div>
            <h3 class="h3">On-Time Delivery</h3>
            <p class="p">
              We pride ourselves on punctuality and commitment to meeting your delivery deadlines every time.
            </p>
            <ul class="list">
              <li>Reliable Schedules</li>
              <li>Proactive Updates</li>
              <li>Time-Critical Loads</li>
            </ul>
          </article>

          <article class="card">
            <div class="iconBox" aria-hidden="true">
              <span class="icon">🛡️</span>
            </div>
            <h3 class="h3">Safe &amp; Secure</h3>
            <p class="p">
              Your cargo is in safe hands with experienced drivers and a well-maintained fleet.
            </p>
            <ul class="list">
              <li>Safety-First Culture</li>
              <li>Compliance Focus</li>
              <li>Careful Handling</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about" class="section soft">
      <div class="container aboutGrid">
        <div class="aboutMedia">
          <img
            class="aboutImg"
            alt="Packing and handling"
            src="/images/lilydale/pic2.jpg"
          />
        </div>

        <div class="aboutText">
          <span class="pill blue">About Us</span>
          <h2 class="h2">Family-Run Excellence in Logistics</h2>

          <p class="p">
            Lilydale Freighters has been built on a foundation of family values, hard work,
            and an unwavering commitment to our customers. We understand that your freight is more than
            just cargo, it's your business, your livelihood, and your trust in us.
          </p>

          <p class="p">
            Operating across Queensland, New South Wales, and Victoria, we’ve established ourselves as a reliable
            partner for businesses of all sizes.
          </p>

          <div class="statRow">
            <div class="statCard">
              <div class="statBig accent">100%</div>
              <div class="statSmall">Customer Satisfaction</div>
            </div>
            <div class="statCard alt">
              <div class="statBig blueText">24/7</div>
              <div class="statSmall">Available Support</div>
            </div>
          </div>

          <div class="valueGrid">
            <div class="value">
              <div class="valueIcon" aria-hidden="true">❤</div>
              <div class="valueTitle">Customer Care</div>
              <div class="valueDesc">Your satisfaction is our priority. We build lasting relationships.</div>
            </div>
            <div class="value">
              <div class="valueIcon" aria-hidden="true">🏅</div>
              <div class="valueTitle">Delivery Excellence</div>
              <div class="valueDesc">Committed to high standards in every aspect of our operations.</div>
            </div>
            <div class="value">
              <div class="valueIcon" aria-hidden="true">👥</div>
              <div class="valueTitle">Family Values</div>
              <div class="valueDesc">We treat customers and drivers like extended family.</div>
            </div>
            <div class="value">
              <div class="valueIcon" aria-hidden="true">📈</div>
              <div class="valueTitle">Continuous Growth</div>
              <div class="valueDesc">Evolving with the industry while keeping quality consistent.</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- DRIVERS -->
    <section id="drivers" class="section soft2">
      <div class="container driversGrid">
        <div class="driversLeft">
          <span class="pill">Our People</span>
          <h2 class="h2">Our Drivers Are the Heart of Our Business</h2>
          <p class="p">
            We believe that our drivers are the backbone of Lilydale Freighters. They’re not just employees,
            they’re valued members of our family who take pride in delivering excellence on every journey.
          </p>
          <p class="p">
            Each driver brings professionalism, expertise, and a commitment to safety that ensures your freight arrives on time
            and in perfect condition.
          </p>

          <div class="driverPills">
            <div class="miniCard"><span aria-hidden="true">★</span> Experienced</div>
            <div class="miniCard"><span aria-hidden="true">🎖️</span> Professional</div>
            <div class="miniCard"><span aria-hidden="true">👤</span> Dedicated</div>
          </div>
        </div>

        <div class="driversRight">
          <div class="mediaStack">
            <div class="blob b3" aria-hidden="true"></div>
            <div class="blob b4" aria-hidden="true"></div>

            <div class="mediaCard">
              <img
                class="mediaImg"
                alt="Driver delivering packages"
                src="/images/lilydale/pic3.jpg"
              />
              <div class="quoteCard">
                <div class="stars" aria-hidden="true">★★★★★</div>
                <div class="quote">“Our drivers consistently receive 5-star ratings for their professionalism and care.”</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="section">
      <div class="container">
        <h2 class="h2 center">Get in Touch</h2>
        <p class="sub center">Ready to discuss your freight needs? We’re here to help.</p>

        <div class="contactGrid">
          <div class="contactInfo">
            <h3 class="h3">Contact Information</h3>

            <div class="infoRow">
              <div class="infoIcon" aria-hidden="true">📞</div>
              <div>
                <div class="infoLabel">Phone</div>
                <div class="infoVal">+61 7 4634 0780</div>
              </div>
            </div>

            <div class="infoRow">
              <div class="infoIcon" aria-hidden="true">✉️</div>
              <div>
                <div class="infoLabel">Email</div>
                <div class="infoVal">info@lilydalefreighters.com.au</div>
              </div>
            </div>

            <div class="infoRow">
              <div class="infoIcon" aria-hidden="true">📍</div>
              <div>
                <div class="infoLabel">Business Address</div>
                <div class="infoVal">6 Lewis Street, Torrington, Queensland, 4350, Australia.</div>
              </div>
            </div>

            <div class="whyBox">
              <div class="whyTitle">Why Choose Us?</div>
              <ul class="whyList">
                <li>Family-owned and operated</li>
                <li>Competitive pricing</li>
                <li>Reliable and punctual service</li>
                <li>Experienced, professional drivers</li>
                <li>24/7 customer support</li>
              </ul>
            </div>
          </div>

          <form class="contactForm" @submit.prevent="onSubmit">
            <h3 class="h3">Request a Quote</h3>

            <label class="field">
              <span class="label">Full Name</span>
              <input v-model.trim="form.name" type="text" placeholder="John Smith" autocomplete="name" required />
            </label>

            <label class="field">
              <span class="label">Email Address</span>
              <input v-model.trim="form.email" type="email" placeholder="john@example.com" autocomplete="email" required />
            </label>

            <label class="field">
              <span class="label">Phone Number</span>
              <input v-model.trim="form.phone" type="tel" placeholder="0400 000 000" autocomplete="tel" />
            </label>

            <label class="field">
              <span class="label">Service Required</span>
              <select v-model="form.service">
                <option>General Enquiry</option>
                <option>Interstate Haulage</option>
                <option>Express Delivery</option>
                <option>Regular Routes</option>
                <option>Other</option>
              </select>
            </label>

            <label class="field">
              <span class="label">Message</span>
              <textarea v-model.trim="form.message" rows="5" placeholder="Tell us about your freight requirements..." />
            </label>

            <button class="btn primary full" type="submit">
              Send Message <span aria-hidden="true">➤</span>
            </button>

            <p v-if="toast" class="toast">{{ toast }}</p>
          </form>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="container footerGrid">
        <div class="footerBrand">
          <div class="brandRow">
            <span class="brandIcon dark" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 7h11v10H3z" />
                <path d="M14 10h4l3 3v4h-7z" />
                <path d="M6.5 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                <path d="M17.5 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
              </svg>
            </span>
            <div>
              <div class="footerName">Lilydale Freighters</div>
              <div class="footerTag">Excellence in Logistics</div>
            </div>
          </div>

          <p class="footerDesc">
            A family-run logistics business specializing in reliable haulage across Queensland, New South Wales, and Victoria.
            Committed to delivery excellence and customer care.
          </p>

          <div class="social">
            <a href="https://www.facebook.com/profile.php?id=61566388207839" aria-label="Facebook">f</a>
            <a href="https://www.instagram.com/lilydalefreighters/" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Email">✉</a>
          </div>
        </div>

        <div class="footerLinks">
          <div class="footerColTitle">Quick Links</div>
          <a href="#home" @click.prevent="go('home')">Home</a>
          <a href="#services" @click.prevent="go('services')">Services</a>
          <a href="#about" @click.prevent="go('about')">About Us</a>
          <a href="#drivers" @click.prevent="go('drivers')">Our Drivers</a>
          <a href="#contact" @click.prevent="go('contact')">Contact</a>
        </div>

        <div class="footerLinks">
          <div class="footerColTitle">Service Areas</div>
          <div class="dotItem"><span class="dot" /> Queensland</div>
          <div class="dotItem"><span class="dot" /> New South Wales</div>
          <div class="dotItem"><span class="dot" /> Victoria</div>
        </div>
      </div>

      <div class="container footerBottom">
        <div class="muted">© {{ new Date().getFullYear() }} Lilydale Freighters. All rights reserved.</div>
        <div class="bottomLinks">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, reactive, ref } from "vue";

const loading = ref(true);

const headerRef = ref<HTMLElement | null>(null);
const mobileOpen = ref(false);
const scrolled = ref(false);
const toast = ref("");
const showDisclaimer = ref(true);

function finishLoading() {
  loading.value = false;
  lockBodyScroll(false);
}

onMounted(() => {
  // Always show loader on every page load / refresh
  loading.value = true;
  lockBodyScroll(true);

  // Ensure DOM is painted first then animate for a short duration
  requestAnimationFrame(() => {
    // You can tweak this duration (ms)
    setTimeout(() => finishLoading(), 900);
  });

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  lockBodyScroll(false);
});

function closeDisclaimer() {
  showDisclaimer.value = false;
}

const form = reactive({
  name: "",
  email: "",
  phone: "",
  service: "General Enquiry",
  message: "",
});

function lockBodyScroll(lock: boolean) {
  document.body.style.overflow = lock ? "hidden" : "";
}

function toggleMobile(force?: boolean) {
  mobileOpen.value = typeof force === "boolean" ? force : !mobileOpen.value;
  lockBodyScroll(mobileOpen.value);
}

function getHeaderOffset() {
  const header = headerRef.value;
  if (!header) return 80;
  // include header height + a little breathing room
  return Math.round(header.getBoundingClientRect().height + 12);
}

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const y = el.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
  window.scrollTo({ top: y, behavior: "smooth" });
}

async function go(id: string, closeMobile = false) {
  if (closeMobile && mobileOpen.value) {
    toggleMobile(false);
    // wait for menu close + layout to settle (fixes mobile offset issues)
    await nextTick();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => scrollToId(id));
    });
    return;
  }
  scrollToId(id);
}

function onSubmit() {
  // Mock submission
  toast.value = "Thanks! Your message has been recorded (demo only).";
  setTimeout(() => (toast.value = ""), 3500);

  form.name = "";
  form.email = "";
  form.phone = "";
  form.service = "General Enquiry";
  form.message = "";
}

function onScroll() {
  scrolled.value = window.scrollY > 8;
}

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  lockBodyScroll(false);
});
</script>

<style scoped>
/* ===== Base ===== */
.page {
   --bg: #ffffff;
  --soft: #f5fbfe;
  --soft2: #eef8fc;
  --text: #0f172a;
  --muted: #64748b;
  --line: rgba(15, 23, 42, 0.10);
  --shadow: 0 12px 30px rgba(15, 23, 42, 0.10);
  --shadow2: 0 18px 40px rgba(15, 23, 42, 0.12);

  /* NEW BRAND COLORS */
  --accent: #0088ba;
  --accent2: #00a2db;
  --accent-dark: #006b92;
  --accent-soft: rgba(0, 136, 186, 0.10);

  background: var(--bg);
  color: var(--text);
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji",
    "Segoe UI Emoji";
}

* {
  box-sizing: border-box;
}

a {
  color: inherit;
  text-decoration: none;
}

.container {
  width: min(1140px, calc(100% - 40px));
  margin: 0 auto;
}

.section {
  padding: 76px 0;
}

.section.soft {
  background: radial-gradient(1200px 600px at 20% 0%, rgba(59, 130, 246, 0.08), transparent 55%),
    radial-gradient(1200px 600px at 90% 40%, rgba(240, 90, 0, 0.10), transparent 50%),
    var(--soft);
}

.section.soft2 {
  background: radial-gradient(900px 500px at 85% 0%, rgba(240, 90, 0, 0.10), transparent 55%),
    radial-gradient(900px 500px at 10% 60%, rgba(59, 130, 246, 0.08), transparent 55%),
    var(--soft2);
}

.center {
  text-align: center;
}

.h1 {
  font-size: clamp(38px, 4.2vw, 58px);
  line-height: 1.05;
  margin: 14px 0 14px;
  letter-spacing: -0.02em;
}

.h2 {
  font-size: clamp(28px, 3vw, 40px);
  line-height: 1.12;
  margin: 0 0 8px;
  letter-spacing: -0.02em;
}

.h3 {
  font-size: 20px;
  margin: 10px 0 6px;
}

.lead {
  color: var(--muted);
  font-size: 16.5px;
  line-height: 1.7;
  max-width: 520px;
  margin: 0 0 22px;
}

.sub {
  color: var(--muted);
  margin: 0 0 34px;
}

.p {
  color: var(--muted);
  line-height: 1.75;
  margin: 10px 0;
}

.accent {
  color: var(--accent);
}

/* ===== Header ===== */
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.header.scrolled {
  border-bottom-color: var(--line);
  background: rgba(255, 255, 255, 0.92);
}

.headerInner {
  width: min(1140px, calc(100% - 40px));
  margin: 0 auto;
  padding: 14px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 220px;
}

.brandIcon {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: rgba(240, 90, 0, 0.10);
  color: var(--accent);
}

.brandIcon svg {
  width: 20px;
  height: 20px;
}

.brandText {
  display: flex;
  flex-direction: column;
  line-height: 1.05;
}

.brandName {
  font-weight: 800;
  letter-spacing: -0.01em;
}

.brandTag {
  font-size: 12px;
  color: var(--muted);
  margin-top: 3px;
}

.nav {
  display: flex;
  align-items: center;
  gap: 26px;
  color: #0b1220;
  font-weight: 600;
  font-size: 14px;
}

.nav a {
  color: rgba(15, 23, 42, 0.78);
  transition: color 0.15s ease;
}

.nav a:hover {
  color: rgba(15, 23, 42, 1);
}

.navCta {
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: #fff;
}

.burger {
  display: none;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: #fff;
  cursor: pointer;
  padding: 10px;
}

.burger span {
  display: block;
  height: 2px;
  background: rgba(15, 23, 42, 0.85);
  border-radius: 2px;
  margin: 5px 0;
}

/* Mobile menu */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.18s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.mobileOverlay {
  position: fixed;
  inset: 0;
  background: rgba(2, 6, 23, 0.55);
  display: grid;
  place-items: start end;
  padding: 14px;
}

.mobilePanel {
  width: min(360px, 92vw);
  background: #fff;
  border-radius: 18px;
  box-shadow: var(--shadow2);
  border: 1px solid var(--line);
  overflow: hidden;
}

.mobileHead {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 14px 10px;
  border-bottom: 1px solid var(--line);
}

.mobileTitle {
  font-weight: 800;
}

.xBtn {
  width: 38px;
  height: 38px;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: #fff;
  cursor: pointer;
}

.mobileLinks {
  display: grid;
  padding: 10px;
  gap: 6px;
}

.mobileLinks a {
  padding: 12px 12px;
  border-radius: 12px;
  color: rgba(15, 23, 42, 0.86);
  font-weight: 650;
}

.mobileLinks a:hover {
  background: rgba(15, 23, 42, 0.04);
}

.navCtaMobile {
  background: rgba(240, 90, 0, 0.10);
  color: #b53f00;
}

/* ===== Hero ===== */
.hero {
  min-height: 95vh;
  display: flex;
  align-items: center;
  padding-top: 0;
  padding-bottom: 0;
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    #ffffff 60%,
    rgba(0, 136, 186, 0.06) 100%
  );
}
.heroGrid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 38px;
  align-items: center;
  margin-bottom:6rem;
}

.pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 12.5px;
  padding: 10px 14px;
  border-radius: 999px;
  color: var(--accent-dark);
  background: var(--accent-soft);
}

.pill.blue {
  color: #1d4ed8;
  background: rgba(59, 130, 246, 0.12);
}

.heroActions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin: 18px 0 22px;
}

.btn {
  border-radius: 14px;
  padding: 12px 18px;
  border: 1px solid var(--line);
  background: #fff;
  cursor: pointer;
  font-weight: 750;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.06);
}

.btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 14px 28px rgba(15, 23, 42, 0.10);
}

.btn.primary {
  border-color: rgba(240, 90, 0, 0.25);
  background: linear-gradient(180deg, var(--accent2), var(--accent));
  color: #fff;
  box-shadow: 0 16px 34px rgba(240, 90, 0, 0.18);
}

.btn.ghost {
  background: #fff;
}

.btn.full {
  width: 100%;
}

.heroStates {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  border-top: 1px solid var(--line);
  padding-top: 18px;
  max-width: 520px;
}

.stateTop {
  color: var(--accent);
  font-weight: 900;
  font-size: 22px;
  letter-spacing: -0.02em;
}

.stateSub {
  color: var(--muted);
  font-size: 13px;
}

.mediaStack {
  position: relative;
  display: grid;
  place-items: center;
}

.blob {
  position: absolute;
  width: 92%;
  height: 76%;
  border-radius: 26px;
  transform: rotate(-6deg);
  z-index: 0;
  filter: blur(0px);
}

.blob.b1 {
  background: rgba(240, 90, 0, 0.22);
  transform: translate(10px, 18px) rotate(-7deg);
}

.blob.b2 {
  background: rgba(59, 130, 246, 0.22);
  transform: translate(30px, 40px) rotate(6deg);
}

.blob.b3 {
  background: rgba(240, 90, 0, 0.18);
  transform: translate(16px, 22px) rotate(-7deg);
}

.blob.b4 {
  background: rgba(59, 130, 246, 0.18);
  transform: translate(32px, 44px) rotate(6deg);
}

.mediaCard {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 520px;
  border-radius: 22px;
  padding: 14px;
  background: #fff;
  border: 1px solid var(--line);
  box-shadow: var(--shadow2);
}

.mediaImg {
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 16px;
  display: block;
}

.expCard {
  position: absolute;
  left: 14px;
  bottom: 14px;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 14px 14px;
  box-shadow: 0 16px 36px rgba(15, 23, 42, 0.14);
  min-width: 120px;
}

.expBig {
  color: var(--accent);
  font-weight: 950;
  font-size: 34px;
  line-height: 1;
}

.expSmall {
  color: var(--muted);
  font-size: 12px;
  margin-top: 4px;
}

/* ===== Services ===== */
.cardsGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;
  margin-top: 26px;
}

.card {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 22px;
  box-shadow: var(--shadow);
}

.iconBox {
  width: 46px;
  height: 46px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: var(--accent-soft);
  border: 1px solid rgba(0, 136, 186, 0.18);
}

.icon {
  font-size: 18px;
}

.list {
  list-style: none;
  padding: 0;
  margin: 14px 0 0;
  display: grid;
  gap: 8px;
  color: rgba(15, 23, 42, 0.82);
  font-weight: 600;
  font-size: 14px;
}

.list li {
  position: relative;
  padding-left: 16px;
}

.list li::before {
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 99px;
  background: var(--accent);
  position: absolute;
  left: 0;
  top: 9px;
}

/* ===== About ===== */
.aboutGrid {
  display: grid;
  grid-template-columns: 1fr 1.02fr;
  gap: 28px;
  align-items: start;
}

.aboutImg {
  width: 100%;
  height: 420px;
  object-fit: cover;
  border-radius: 22px;
  border: 1px solid var(--line);
  box-shadow: var(--shadow2);
}

.statRow {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin: 18px 0 10px;
}

.statCard {
  background: var(--accent-soft);
  border: 1px solid rgba(0, 136, 186, 0.18);
  border-radius: 18px;
  padding: 16px;
}

.statCard.alt {
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.16);
}

.statBig {
  font-weight: 950;
  font-size: 30px;
  line-height: 1.1;
}

.blueText {
  color: #1d4ed8;
}

.statSmall {
  color: var(--muted);
  font-size: 13px;
  margin-top: 4px;
}

.valueGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 18px;
}

.value {
  text-align: center;
  padding: 14px 12px;
}

.valueIcon {
  width: 46px;
  height: 46px;
  border-radius: 16px;
  margin: 0 auto 10px;
  display: grid;
  place-items: center;
  background: rgba(15, 23, 42, 0.04);
  border: 1px solid var(--line);
}

.valueTitle {
  font-weight: 850;
  margin-bottom: 6px;
}

.valueDesc {
  color: var(--muted);
  font-size: 13px;
  line-height: 1.55;
}

/* ===== Drivers ===== */
.driversGrid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 32px;
  align-items: center;
}

.driverPills {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 16px;
}

.miniCard {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  border-radius: 16px;
  background: #fff;
  border: 1px solid var(--line);
  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.08);
  font-weight: 800;
}

.quoteCard {
  position: absolute;
  right: 14px;
  bottom: 14px;
  width: min(290px, 78%);
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 14px;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.15);
}

.stars {
  color: #f59e0b;
  font-weight: 900;
  letter-spacing: 1px;
  margin-bottom: 6px;
}

.quote {
  color: rgba(15, 23, 42, 0.78);
  font-style: italic;
  line-height: 1.45;
  font-size: 13px;
}

/* ===== Contact ===== */
.contactGrid {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 26px;
  margin-top: 28px;
  align-items: start;
}

.contactInfo {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 22px;
  box-shadow: var(--shadow);
}

.infoRow {
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 10px 0;
}

.infoIcon {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: var(--accent-soft);
  border: 1px solid rgba(0, 136, 186, 0.18);
}

.infoLabel {
  font-size: 12px;
  color: var(--muted);
  margin-bottom: 2px;
}

.infoVal {
  font-weight: 750;
  color: rgba(15, 23, 42, 0.85);
}

.whyBox {
  margin-top: 14px;
  border-radius: 18px;
  padding: 18px;
  background: linear-gradient(135deg, #0088ba, #00a2db);
  color: #fff;
}

.whyTitle {
  font-weight: 900;
  font-size: 18px;
  margin-bottom: 10px;
}

.whyList {
  margin: 0;
  padding-left: 18px;
  display: grid;
  gap: 8px;
  font-weight: 600;
}

.contactForm {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 22px;
  box-shadow: var(--shadow2);
}

.field {
  display: grid;
  gap: 8px;
  margin: 12px 0;
}

.label {
  font-size: 12px;
  color: rgba(15, 23, 42, 0.72);
  font-weight: 700;
}

input,
select,
textarea {
  width: 100%;
  border-radius: 14px;
  border: 1px solid rgba(15, 23, 42, 0.16);
  padding: 12px 12px;
  font-family: inherit;
  font-size: 14px;
  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

input:focus,
select:focus,
textarea:focus {
  border-color: rgba(240, 90, 0, 0.45);
  box-shadow: 0 0 0 4px rgba(240, 90, 0, 0.12);
}

.toast {
  margin-top: 12px;
  padding: 12px 12px;
  border-radius: 14px;
  background: rgba(34, 197, 94, 0.10);
  border: 1px solid rgba(34, 197, 94, 0.20);
  color: rgba(21, 128, 61, 1);
  font-weight: 700;
}

/* ===== Footer ===== */
.footer {
  background: #0b1220;
  color: rgba(255, 255, 255, 0.86);
  padding: 54px 0 18px;
}

.footerGrid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr 0.8fr;
  gap: 28px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.brandRow {
  display: flex;
  gap: 12px;
  align-items: center;
}

.brandIcon.dark {
  background: rgba(255, 138, 61, 0.12);
  color: #0088ba;
}

.footerName {
  font-weight: 950;
  letter-spacing: -0.01em;
}

.footerTag {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.62);
  margin-top: 2px;
}

.footerDesc {
  color: rgba(255, 255, 255, 0.62);
  line-height: 1.7;
  margin: 14px 0 16px;
  max-width: 520px;
}

.social {
  display: flex;
  gap: 10px;
}

.social a {
  width: 40px;
  height: 40px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-weight: 900;
}

.footerLinks {
  display: grid;
  gap: 10px;
  align-content: start;
}

.footerColTitle {
  font-weight: 900;
  margin-bottom: 8px;
  color: rgba(255, 255, 255, 0.92);
}

.footerLinks a {
  color: rgba(255, 255, 255, 0.70);
}

.footerLinks a:hover {
  color: rgba(255, 255, 255, 0.92);
}

.dotItem {
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.70);
  font-weight: 650;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 99px;
  background: #ff8a3d;
}

.footerBottom {
  display: flex;
  justify-content: space-between;
  gap: 14px;
  padding-top: 18px;
  flex-wrap: wrap;
}

.muted {
  color: rgba(255, 255, 255, 0.55);
  font-size: 12.5px;
}

.bottomLinks {
  display: flex;
  gap: 18px;
  font-size: 12.5px;
}

.bottomLinks a {
  color: rgba(255, 255, 255, 0.65);
}

/* ===== Responsive ===== */
@media (max-width: 980px) {
  .heroGrid,
  .driversGrid,
  .aboutGrid,
  .contactGrid {
    grid-template-columns: 1fr;
  }

  .mediaImg {
    height: 300px;
  }

  .valueGrid {
    grid-template-columns: repeat(2, 1fr);
  }

  .footerGrid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 860px) {
  .nav.desktop {
    display: none;
  }
  .burger {
    display: inline-block;
  }
  .cardsGrid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 520px) {
  .container {
    width: min(1140px, calc(100% - 28px));
  }
  .section {
    padding: 62px 0;
  }
  .heroStates {
    grid-template-columns: 1fr;
  }
  .expCard {
    transform: scale(0.95);
    transform-origin: left bottom;
  }
  .quoteCard {
    width: 86%;
    right: 10px;
    bottom: 10px;
  }
}

/* ===== Loading Overlay ===== */
.loadingOverlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(10px);
}

.loadingCard {
  width: min(520px, calc(100% - 40px));
  border-radius: 22px;
  padding: 18px 18px 16px;
  background: #fff;
  border: 1px solid rgba(15, 23, 42, 0.12);
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.14);
}

.loadingTop {
  display: flex;
  align-items: center;
  gap: 12px;
}

.loadingIcon {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: rgba(240, 90, 0, 0.10);
  border: 1px solid rgba(240, 90, 0, 0.14);
  color: var(--accent);
}

.loadingIcon svg {
  width: 22px;
  height: 22px;
}

.loadingTitle {
  font-weight: 900;
  letter-spacing: -0.01em;
}

.loadingSub {
  color: var(--muted);
  font-size: 13px;
  margin-top: 2px;
}

.loadingBar {
  height: 10px;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.06);
  overflow: hidden;
  margin-top: 14px;
  border: 1px solid rgba(15, 23, 42, 0.08);
}

.loadingBarFill {
  display: block;
  height: 100%;
  width: 38%;
  border-radius: 999px;
  background: linear-gradient(
    90deg,
    var(--accent2),
    var(--accent),
    var(--accent-dark)
  );
  animation: loadingMove 0.9s ease-in-out infinite;
}

@keyframes loadingMove {
  0%   { transform: translateX(-10%); width: 28%; opacity: 0.85; }
  50%  { transform: translateX(120%); width: 48%; opacity: 1; }
  100% { transform: translateX(-10%); width: 28%; opacity: 0.85; }
}

/* Transition */
.loader-enter-active,
.loader-leave-active {
  transition: opacity 0.28s ease, transform 0.28s ease;
}

.loader-enter-from,
.loader-leave-to {
  opacity: 0;
  transform: scale(0.98);
}

.btn.primary {
  border-color: rgba(0, 136, 186, 0.35);
  background: linear-gradient(180deg, var(--accent2), var(--accent));
  color: #fff;
  box-shadow: 0 16px 34px rgba(0, 136, 186, 0.22);
}
/* ===== Disclaimer ===== */
.disclaimer {
  background: rgba(0, 136, 186, 0.10);
  border-bottom: 1px solid rgba(0, 136, 186, 0.18);
}

.disclaimerInner {
  width: min(1140px, calc(100% - 40px));
  margin: 0 auto;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.disclaimerText {
  margin: 0;
  font-size: 12.5px;
  color: rgba(15, 23, 42, 0.78);
  font-weight: 650;
  line-height: 1.35;
}

.disclaimerClose {
  width: 34px;
  height: 34px;
  border-radius: 12px;
  border: 1px solid rgba(15, 23, 42, 0.12);
  background: #fff;
  cursor: pointer;
}

/* transition */
.disclaimer-enter-active,
.disclaimer-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.disclaimer-enter-from,
.disclaimer-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

@media (max-width: 520px) {
  .disclaimerInner {
    width: min(1140px, calc(100% - 28px));
  }
  .disclaimerText {
    font-size: 12px;
  }
}
</style>
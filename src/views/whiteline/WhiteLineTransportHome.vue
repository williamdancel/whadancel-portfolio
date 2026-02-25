<template>
  <div class="app">
    <!-- Initial loading overlay -->
    <Transition name="fade">
      <div v-if="loading" class="loading">
        <div class="loadingBox">
          <div class="loadingLogo">
            <span class="truck"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-truck h-7 w-7 text-white"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg></span>
          </div>
          <div class="loadingTitle">Loading Transport Demo…</div>
          <div class="loadingSub">White Line Transport</div>
          <div class="bar"><span class="barFill" /></div>
        </div>
      </div>
    </Transition>
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
    <!-- NAV -->
    <header class="fixed w-full z-50 header"
        :class="showDemoBar ? 'top-8' : 'top-0'">
      <nav class="nav">
        <a class="brand" href="#home" @click.prevent="go('home')">
          <span class="logo">
            <span class="logoIcon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-truck h-7 w-7 text-white"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg></span>
          </span>
          <span class="brandText">
            <span class="brandName">White Line Transport</span>
            <span class="brandTag">East-West Specialists</span>
          </span>
        </a>

        <div class="links desktop">
          <a class="link" href="#home" @click.prevent="go('home')">Home</a>
          <a class="link" href="#services" @click.prevent="go('services')">Services</a>
          <a class="link" href="#about" @click.prevent="go('about')">About</a>
          <a class="link" href="#locations" @click.prevent="go('locations')">Locations</a>
        </div>

        <div class="actions desktop">
          <a class="btnPrimary" href="#contact" @click.prevent="go('contact')">Get Quote</a>
        </div>

        <button
            class="menuBtn mobile"
            type="button"
            aria-label="Toggle menu"
            :aria-expanded="mobileOpen"
            @click="mobileOpen = !mobileOpen"
            >
            <span class="hamburger" :class="{ active: mobileOpen }">
                <span></span>
                <span></span>
                <span></span>
            </span>
        </button>
      </nav>

      <Transition name="mobile">
        <div v-if="mobileOpen" class="mobileMenu">
            <a class="mLink" href="#home" @click.prevent="mobileGo('home')">Home</a>
            <a class="mLink" href="#services" @click.prevent="mobileGo('services')">Services</a>
            <a class="mLink" href="#about" @click.prevent="mobileGo('about')">About</a>
            <a class="mLink" href="#locations" @click.prevent="mobileGo('locations')">Locations</a>
            <a class="btnPrimary full" href="#contact" @click.prevent="mobileGo('contact')">Get Quote</a>
        </div>
      </Transition>
    </header>

    <!-- HERO -->
    <section id="home" class="hero">
      <!-- Replace with your hero image if you have one (recommended) -->
      <div class="heroBg" />
      <div class="heroShade" />

      <div class="wrap heroWrap">
        <div class="pill">Over 30 Years of Excellence</div>

        <h1 class="h1">
          Your Trusted<br />
          <span class="accent">East-West Logistics</span><br />
          Partner
        </h1>

        <p class="heroP">
          Professional freight solutions connecting Perth, Adelaide, and beyond. Delivering reliability, speed, and
          exceptional customer service across Australia.
        </p>

        <div class="heroBtns">
          <a class="btnHero" href="#contact" @click.prevent="go('contact')">Request a Quote ⚡</a>
          <a class="btnGhost" href="#services" @click.prevent="go('services')">Our Services</a>
        </div>
      </div>
    </section>

    <!-- SERVICES -->
    <section id="services" class="section">
      <div class="wrap">
        <h2 class="h2">Our Services</h2>
        <p class="sub">Comprehensive logistics solutions tailored to your business needs</p>

        <div class="grid4">
          <div class="card">
            <div class="icon blue"><span>📦</span></div>
            <div class="cardTitle">Distribution</div>
            <div class="cardText">
              Local and regional distribution services with real-time tracking and guaranteed delivery windows.
            </div>
          </div>

          <div class="card">
            <div class="icon red"><span>🚚</span></div>
            <div class="cardTitle">National Freight</div>
            <div class="cardText">
              Comprehensive freight solutions across Australia with competitive rates and reliable schedules.
            </div>
          </div>

          <div class="card">
            <div class="icon red"><span>⚡</span></div>
            <div class="cardTitle">Hot Shots</div>
            <div class="cardText">
              Urgent delivery services for time-critical shipments that can't wait for standard transit.
            </div>
          </div>

          <div class="card">
            <div class="icon green"><span>📊</span></div>
            <div class="cardTitle">Sales &amp; Logistics</div>
            <div class="cardText">
              Custom pricing and freight solutions designed specifically for your business requirements.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about" class="section white">
      <div class="wrap about">
        <div class="aboutLeft">
          <h2 class="h2Left">
            Three Decades of<br />
            <span class="accent">Transport Excellence</span>
          </h2>

          <p class="aboutP">
            Since our establishment, White Line Transport has been the trusted partner for businesses requiring reliable
            East-West logistics solutions. Our commitment to professionalism and exceptional customer service has made us
            a leader in Australian transport.
          </p>

          <div class="features">
            <div class="feat">
              <div class="featIcon">🛡️</div>
              <div>
                <div class="featTitle">Professional Service</div>
                <div class="featSub">Committed to the highest standards of customer care</div>
              </div>
            </div>

            <div class="feat">
              <div class="featIcon">🚚</div>
              <div>
                <div class="featTitle">Modern Fleet</div>
                <div class="featSub">Well-maintained vehicles for safe, efficient transport</div>
              </div>
            </div>

            <div class="feat">
              <div class="featIcon">⏱️</div>
              <div>
                <div class="featTitle">On-Time Delivery</div>
                <div class="featSub">Reliable schedules you can count on</div>
              </div>
            </div>
          </div>
        </div>

        <!-- tilted image block like your screenshot -->
        <div class="aboutRight" aria-hidden="true">
          <div class="tiltShadow" />
          <div class="tiltCard">
            <!-- Replace with a real about image if you have one -->
            <div class="tiltImg" />
          </div>
        </div>
      </div>
    </section>

    <!-- LOCATIONS -->
    <section id="locations" class="section">
      <div class="wrap">
        <h2 class="h2">Our Depot Locations</h2>
        <p class="sub">Strategic locations for comprehensive East-West coverage</p>

        <div class="grid3">
          <div class="card">
            <div class="icon red"><span>📍</span></div>
            <div class="cardTitle">Perth</div>
            <div class="state">Western Australia</div>
            <div class="cardText">Western hub for freight operations</div>
          </div>

          <div class="card">
            <div class="icon red"><span>📍</span></div>
            <div class="cardTitle">Adelaide</div>
            <div class="state">South Australia</div>
            <div class="cardText">Central distribution center</div>
          </div>

          <div class="card">
            <div class="icon red"><span>📍</span></div>
            <div class="cardTitle">Berri</div>
            <div class="state">South Australia</div>
            <div class="cardText">Regional service depot</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT CTA -->
    <section id="contact" class="cta">
      <!-- Replace with your contact background image if you have one -->
      <div class="ctaBg" />
      <div class="ctaShade" />

      <div class="wrap ctaWrap">
        <h2 class="ctaTitle">Get in Touch</h2>
        <p class="ctaSub">Ready to discuss your logistics needs? Contact us today for a customized solution.</p>

        <div class="ctaGrid">
          <div class="glass">
            <div class="gIcon red">📞</div>
            <div class="gTitle">Phone</div>
            <div class="gText">(08) 8281 2444</div>
          </div>

          <div class="glass">
            <div class="gIcon blue">✉️</div>
            <div class="gTitle">Email</div>
            <div class="gText">shaz@wline.com.au</div>
          </div>

          <div class="glass">
            <div class="gIcon green">👥</div>
            <div class="gTitle">Follow Us</div>
            <div class="social">
              <a class="sBtn" href="https://www.facebook.com/wlinetransport/" target="_blank"  aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook h-5 w-5 text-white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a class="sBtn" href="https://www.instagram.com/explore/locations/453345810/whiteline-transport/" target="_blank" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram h-5 w-5 text-white"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
            </div>
          </div>
        </div>

        <div class="footer">
          <div class="footLeft">
            <span class="logo small"><span class="logoIcon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-truck h-7 w-7 text-white"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg></span></span>
            <div class="footBrand">
              <div class="footName">White Line Transport</div>
              <div class="footTag">East-West Specialists</div>
            </div>
          </div>
          <div class="footRight">© 2024 White Line Transport. All rights reserved.</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const showDemoBar = ref(true)

const loading = ref(true);
const mobileOpen = ref(false);

function go(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const headerOffset = 78;
  const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
}

function mobileGo(id: string) {
  mobileOpen.value = false;
  requestAnimationFrame(() => go(id));
}

onMounted(() => {
  // Startup loading transition
  window.setTimeout(() => (loading.value = false), 900);
});
</script>

<style scoped>
/* ====== Base ====== */
.app {
  min-height: 100vh;
  color: #0f172a;
  background: #ffffff;
  font-family: 'Inter', sans-serif;
}
.wrap {
  width: min(1140px, calc(100% - 40px));
  margin: 0 auto;
}
.accent {
  color: #dd181f;
}

/* ====== Loading ====== */
.loading {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: grid;
  place-items: center;
  background: linear-gradient(180deg, #0b1220, #050814);
}
.loadingBox {
  width: min(520px, calc(100% - 40px));
  padding: 22px 18px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  box-shadow: 0 22px 70px rgba(0, 0, 0, 0.35);
  text-align: center;
}
.loadingLogo {
  width: 54px;
  height: 54px;
  margin: 0 auto 10px;
  border-radius: 16px;
  background: rgba(240, 75, 35, 0.18);
  border: 1px solid rgba(240, 75, 35, 0.3);
  display: grid;
  place-items: center;
}
.truck {
  font-size: 22px;
}
.loadingTitle {
  color: rgba(255, 255, 255, 0.92);
  font-size: 18px;
  font-weight: 900;
  letter-spacing: -0.02em;
}
.loadingSub {
  margin-top: 4px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  font-weight: 700;
}
.bar {
  margin-top: 14px;
  height: 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  overflow: hidden;
}
.barFill {
  display: block;
  height: 100%;
  width: 35%;
  background: rgba(240, 75, 35, 0.95);
  border-radius: 999px;
  animation: slide 0.9s ease-in-out infinite alternate;
}
@keyframes slide {
  from {
    transform: translateX(-10%);
    width: 35%;
  }
  to {
    transform: translateX(140%);
    width: 55%;
  }
}

/* ====== Navbar ====== */
.header {
  position: sticky;
  z-index: 50;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(15, 23, 42, 0.06);
}
.nav {
  height: 78px;
  width: min(1200px, calc(100% - 28px));
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  position: relative;
}
.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: inherit;
  min-width: 240px;
}
.logo {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: #dd181f;
  display: grid;
  place-items: center;
  box-shadow: 0 12px 30px rgba(240, 75, 35, 0.25);
}
.logo.small {
  width: 40px;
  height: 40px;
  border-radius: 12px;
}
.logoIcon {
  color: #fff;
  font-size: 18px;
}
.brandText {
  display: grid;
  line-height: 1.05;
}
.brandName {
  font-weight: 900;
  letter-spacing: -0.02em;
}
.brandTag {
  margin-top: 3px;
  font-size: 12px;
  color: rgba(15, 23, 42, 0.6);
  font-weight: 700;
}
.links {
  display: flex;
  align-items: center;
  gap: 18px;
}
.link {
  text-decoration: none;
  color: rgba(15, 23, 42, 0.72);
  font-weight: 800;
  font-size: 14px;
  padding: 10px 10px;
  border-radius: 10px;
}
.link:hover {
  background: rgba(15, 23, 42, 0.05);
  color: rgba(15, 23, 42, 0.95);
}
.btnPrimary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border-radius: 14px;
  background: #dd181f;
  color: #fff;
  text-decoration: none;
  font-weight: 900;
  box-shadow: 0 18px 34px rgba(240, 75, 35, 0.22);
  border: 1px solid rgba(0, 0, 0, 0);
}
.btnPrimary:hover {
  filter: brightness(0.98);
}
.btnPrimary.full {
  width: 100%;
}

/* ========================= */
/* Clean Hamburger */
/* ========================= */

.menuBtn {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid rgba(15, 23, 42, 0.12);
  background: #fff;
  display: grid;
  place-items: center;
  cursor: pointer;
}

.hamburger {
  width: 20px;
  height: 16px;
  position: relative;
  margin-left: 11px;
}

.hamburger span {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: #0f172a;
  border-radius: 999px;
  transition: all 0.25s ease;
}

.hamburger span:nth-child(1) {
  top: 0;
}

.hamburger span:nth-child(2) {
  top: 7px;
}

.hamburger span:nth-child(3) {
  bottom: 0;
}

/* Active (X animation) */
.hamburger.active span:nth-child(1) {
  top: 7px;
  transform: rotate(45deg);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  bottom: 7px;
  transform: rotate(-45deg);
}

/* ========================= */
/* Mobile Menu */
/* ========================= */

.mobileMenu {
  position: absolute;
  top: 78px;
  left: 0;
  right: 0;
  padding: 18px;
  background: #ffffff;
  border-top: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 20px 40px rgba(2, 6, 23, 0.08);
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 999;
}

.mLink {
  text-decoration: none;
  font-weight: 900;
  color: #0f172a;
  padding: 10px 6px;
  border-radius: 8px;
}

.mLink:hover {
  background: rgba(15, 23, 42, 0.05);
}

/* ========================= */
/* Smooth Animation */
/* ========================= */

.mobile-enter-active,
.mobile-leave-active {
  transition: all 0.25s ease;
}

.mobile-enter-from,
.mobile-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.mobile-enter-to,
.mobile-leave-from {
  opacity: 1;
  transform: translateY(0);
}
/* ====== Hero ====== */
.hero {
  position: relative;
  min-height: clamp(520px, 78vh, 720px);
  display: grid;
  align-items: center;
  overflow: hidden;
}
.heroBg {
  position: absolute;
  inset: 0;
  background-image: url(https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1920);
  background-size: cover;
  background-position: center;
  transform: scale(1.02);
}
.heroShade {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(2, 6, 23, 0.78), rgba(2, 6, 23, 0.35), rgba(2, 6, 23, 0.72));
}
.heroWrap {
  position: relative;
  padding: 86px 0 72px;
}
.pill {
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(240, 75, 35, 0.16);
  border: 1px solid rgba(240, 75, 35, 0.28);
  color: rgba(255, 255, 255, 0.9);
  font-weight: 900;
  font-size: 12px;
  margin-bottom: 18px;
}
.h1 {
  margin: 0;
  color: #fff;
  font-size: clamp(42px, 5vw, 66px);
  line-height: 1.02;
  letter-spacing: -0.04em;
  font-weight: 950;
}
.heroP {
  margin: 14px 0 0;
  max-width: 620px;
  color: rgba(255, 255, 255, 0.78);
  font-weight: 700;
  line-height: 1.7;
}
.heroBtns {
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.btnHero {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 18px;
  border-radius: 14px;
  background: #dd181f;
  color: #fff;
  text-decoration: none;
  font-weight: 950;
  box-shadow: 0 18px 34px rgba(240, 75, 35, 0.22);
}
.btnGhost {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 18px;
  border-radius: 14px;
  text-decoration: none;
  font-weight: 950;
  color: #fff;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(10px);
}

/* ====== Sections ====== */
.section {
  padding: 80px 0;
  background: #f8fafc;
}
.section.white {
  background: #ffffff;
}
.h2 {
  margin: 0;
  text-align: center;
  font-size: clamp(30px, 3vw, 44px);
  letter-spacing: -0.03em;
  font-weight: 950;
}
.sub {
  margin: 10px auto 0;
  max-width: 720px;
  text-align: center;
  color: rgba(15, 23, 42, 0.65);
  font-weight: 800;
}

/* ====== Cards ====== */
.grid4 {
  margin-top: 42px;
  display: grid;
  gap: 22px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
.grid3 {
  margin-top: 42px;
  display: grid;
  gap: 22px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.card {
  background: #fff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 18px;
  padding: 24px 22px;
  box-shadow: 0 18px 36px rgba(2, 6, 23, 0.08);
  min-height: 190px;
}
.icon {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(15, 23, 42, 0.08);
  margin-bottom: 16px;
  font-size: 20px;
}
.icon.blue {
  background: rgba(37, 99, 235, 0.12);
  border-color: rgba(37, 99, 235, 0.18);
}
.icon.red {
  background: rgba(240, 75, 35, 0.12);
  border-color: rgba(240, 75, 35, 0.18);
}
.icon.red {
  background: rgba(245, 158, 11, 0.14);
  border-color: rgba(245, 158, 11, 0.18);
}
.icon.green {
  background: rgba(34, 197, 94, 0.12);
  border-color: rgba(34, 197, 94, 0.18);
}
.cardTitle {
  font-size: 18px;
  font-weight: 950;
  letter-spacing: -0.02em;
}
.cardText {
  margin-top: 10px;
  color: rgba(15, 23, 42, 0.65);
  font-weight: 700;
  line-height: 1.7;
  font-size: 14px;
}
.state {
  margin-top: 10px;
  color: #dd181f;
  font-weight: 950;
  font-size: 13px;
}

/* ====== About layout (like screenshot) ====== */
.about {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 28px;
  align-items: center;
}
.h2Left {
  margin: 0;
  font-size: clamp(30px, 3.2vw, 46px);
  line-height: 1.08;
  letter-spacing: -0.03em;
  font-weight: 950;
}
.aboutP {
  margin: 14px 0 0;
  color: rgba(15, 23, 42, 0.65);
  font-weight: 750;
  line-height: 1.7;
}
.features {
  margin-top: 24px;
  display: grid;
  gap: 14px;
}
.feat {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}
.featIcon {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: rgba(240, 75, 35, 0.12);
  border: 1px solid rgba(240, 75, 35, 0.18);
  display: grid;
  place-items: center;
  font-size: 18px;
}
.featTitle {
  font-weight: 950;
  letter-spacing: -0.02em;
}
.featSub {
  margin-top: 4px;
  color: rgba(15, 23, 42, 0.65);
  font-weight: 700;
  font-size: 13px;
}

/* Tilt image card */
.aboutRight {
  position: relative;
  display: grid;
  justify-items: end;
}
.tiltShadow {
  position: absolute;
  inset: auto 0 0 auto;
  width: min(520px, 100%);
  aspect-ratio: 4 / 3;
  border-radius: 28px;
  background: rgba(240, 75, 35, 0.22);
  transform: rotate(-2deg) translate(10px, 8px);
  filter: blur(0px);
}
.tiltCard {
  position: relative;
  width: min(520px, 100%);
  aspect-ratio: 4 / 3;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 26px 60px rgba(2, 6, 23, 0.18);
  transform: rotate(-2deg);
  background: #fff;
}
.tiltImg {
  position: absolute;
  inset: 0;
  background-image: url('https://images.pexels.com/photos/4246091/pexels-photo-4246091.jpeg?auto=compress&cs=tinysrgb&w=1200');
  background-size: cover;
  background-position: center;
}

/* ====== CTA ====== */
.cta {
  position: relative;
  padding: 92px 0 46px;
  overflow: hidden;
}
.ctaBg {
  position: absolute;
  inset: 0;
  /* Replace with your CTA bg image:
     background-image: url('@/assets/contact.jpg');
  */
  background: linear-gradient(120deg, #0b1220, #071227);
  background-size: cover;
  background-position: center;
  transform: scale(1.02);
}
.ctaShade {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(2, 6, 23, 0.55), rgba(2, 6, 23, 0.72));
}
.ctaWrap {
  position: relative;
  text-align: center;
}
.ctaTitle {
  margin: 0;
  color: #fff;
  font-size: clamp(30px, 3.5vw, 46px);
  font-weight: 950;
  letter-spacing: -0.03em;
}
.ctaSub {
  margin: 10px auto 0;
  max-width: 680px;
  color: rgba(255, 255, 255, 0.76);
  font-weight: 800;
  line-height: 1.7;
}
.ctaGrid {
  margin-top: 38px;
  display: grid;
  gap: 22px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.glass {
  text-align: left;
  border-radius: 18px;
  padding: 22px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(12px);
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.25);
  min-height: 170px;
}
.gIcon {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  margin-bottom: 14px;
  font-size: 20px;
  border: 1px solid rgba(255, 255, 255, 0.16);
}
.gIcon.red {
  background: rgba(240, 75, 35, 0.18);
}
.gIcon.blue {
  background: rgba(37, 99, 235, 0.18);
}
.gIcon.green {
  background: rgba(34, 197, 94, 0.18);
}
.gTitle {
  margin: 0;
  color: rgba(255, 255, 255, 0.92);
  font-weight: 950;
}
.gText {
  margin-top: 8px;
  color: rgba(255, 255, 255, 0.72);
  font-weight: 800;
}
.social {
  margin-top: 10px;
  display: flex;
  gap: 10px;
}
.sBtn {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.06);
  font-weight: 950;
}
.sBtn:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* Footer */
.footer {
  margin-top: 46px;
  padding: 18px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
}
.footLeft {
  display: flex;
  align-items: center;
  gap: 12px;
}
.footBrand {
  text-align: left;
}
.footName {
  color: rgba(255, 255, 255, 0.92);
  font-weight: 950;
}
.footTag {
  color: rgba(255, 255, 255, 0.62);
  font-weight: 800;
  font-size: 12px;
  margin-top: 2px;
}
.footRight {
  color: rgba(255, 255, 255, 0.62);
  font-weight: 800;
  font-size: 12px;
}

/* ====== Transitions ====== */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.drop-enter-active,
.drop-leave-active {
  transition: max-height 0.22s ease, opacity 0.2s ease, transform 0.2s ease;
}
.drop-enter-from,
.drop-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-6px);
}
.drop-enter-to,
.drop-leave-from {
  max-height: 360px;
  opacity: 1;
  transform: translateY(0);
}

/* ====== Responsive ====== */
.desktop {
  display: none;
}
.mobile {
  display: inline-flex;
}
@media (min-width: 900px) {
  .desktop {
    display: flex;
  }
  .mobile {
    display: none;
  }
}
@media (max-width: 980px) {
  .grid4 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .about {
    grid-template-columns: 1fr;
  }
  .aboutRight {
    justify-items: start;
  }
  .ctaGrid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 640px) {
  .wrap {
    width: min(1140px, calc(100% - 28px));
  }
  .grid4,
  .grid3 {
    grid-template-columns: 1fr;
  }
  .footer {
    flex-direction: column;
    align-items: flex-start;
  }
}
.disclaimer {
  margin-top: 12px;
  text-align: center;
  color: rgba(11, 18, 32, 0.55);
  font-size: 12px;
}
</style>
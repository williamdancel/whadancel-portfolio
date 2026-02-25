<template>
  <div class="page">
    <!-- Loading overlay -->
    <transition name="fade">
      <div v-if="isLoading" class="loaderOverlay" aria-live="polite" aria-busy="true">
        <div class="loaderCard">
          <div class="loaderMark">W</div>
          <div class="loaderText">
            <div class="loaderTitle">Loading Whiteline Racing…</div>
            <div class="loaderSub">Preparing the racing experience</div>
          </div>
          <div class="loaderBar" role="progressbar" aria-label="Loading">
            <span class="loaderBarFill"></span>
          </div>
        </div>
      </div>
    </transition>

    <!-- Disclaimer top bar -->
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

    <!-- Navbar -->
    <header class="fixed w-full z-50 header"
        :class="showDemoBar ? 'top-8' : 'top-0'">
      <div class="container navWrap">
        <a class="brand" href="#home" @click.prevent="go('home')">
          <span class="brandMark" aria-hidden="true">W</span>
          <span class="brandText">
            <span class="brandTitle">WHITELINE</span>
            <span class="brandSub">RACING</span>
          </span>
        </a>

        <nav class="navLinks" aria-label="Primary">
          <a href="#home" @click.prevent="go('home')">Home</a>
          <a href="#about" @click.prevent="go('about')">About</a>
          <a href="#vehicles" @click.prevent="go('vehicles')">Vehicles</a>
          <a href="#results" @click.prevent="go('results')">Results</a>
          <a href="#sponsors" @click.prevent="go('sponsors')">Sponsors</a>
          <a href="#contact" @click.prevent="go('contact')">Contact</a>
        </nav>

        <button class="menuBtn" type="button" @click="toggleMenu" :aria-expanded="mobileOpen" aria-label="Open menu">
          <span class="menuIcon" aria-hidden="true">
            <span></span><span></span><span></span>
          </span>
        </button>
      </div>

      <!-- Mobile menu -->
      <transition name="slideDown">
        <div v-if="mobileOpen" class="mobileMenu">
          <div class="container mobileMenuInner">
            <a href="#home" @click.prevent="go('home', true)">Home</a>
            <a href="#about" @click.prevent="go('about', true)">About</a>
            <a href="#vehicles" @click.prevent="go('vehicles', true)">Vehicles</a>
            <a href="#results" @click.prevent="go('results', true)">Results</a>
            <a href="#sponsors" @click.prevent="go('sponsors', true)">Sponsors</a>
            <a href="#contact" @click.prevent="go('contact', true)">Contact</a>
          </div>
        </div>
      </transition>
    </header>

    <!-- HERO -->
    <section id="home" class="hero">
      <div class="heroBg" aria-hidden="true"></div>
      <div class="container heroInner">
        <div class="heroKicker">TOURING CAR MASTERS</div>
        <h1 class="heroTitle">
          <span>WHITELINE</span>
          <span class="accent">RACING</span>
        </h1>
        <p class="heroDesc">
          Competing in the Gulf Western Oil Touring Car Masters series <br> with classic Camaros and SuperTrucks across
          Australia.
        </p>

        <div class="heroActions">
          <button class="btn primary" @click="go('vehicles')">OUR VEHICLES</button>
          <button class="btn ghost" @click="go('about')">LEARN MORE</button>
        </div>

        <button class="scrollHint" type="button" @click="go('about')" aria-label="Scroll down">
          <span class="chev"></span>
        </button>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about" class="section">
      <div class="container">
        <div class="sectionHead">
          <div class="eyebrow">OUR STORY</div>
          <h2 class="h2">ABOUT THE TEAM</h2>
        </div>

        <div class="aboutGrid">
          <div class="mediaCard">
            <img
              class="media"
              :src="images.about"
              alt="Team paddock lineup (placeholder)"
              loading="lazy"
            />
          </div>

          <div class="aboutText">
            <p>
              Whiteline Racing is a proud competitor in the Gulf Western Oil Touring Car Masters (TCM) series,
              Australia’s premier classic touring car championship. Our team campaigns iconic vehicles that embody the
              golden era of Australian motorsport.
            </p>
            <p>
              The Touring Car Masters series celebrates the legendary machines of the 1960s and 70s, bringing them back
              to life on circuits across Australia. From thunderous V8 Camaros to awe-inspiring SuperTrucks, we deliver
              an unforgettable motorsport experience at every event.
            </p>

            <div class="stats">
              <div class="stat">
                <div class="statNum">30+</div>
                <div class="statLabel">YEARS RACING</div>
              </div>
              <div class="stat">
                <div class="statNum">50+</div>
                <div class="statLabel">RACE WINS</div>
              </div>
              <div class="stat">
                <div class="statNum">5</div>
                <div class="statLabel">VEHICLES</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- VEHICLES -->
    <section id="vehicles" class="section">
      <div class="container">
        <div class="sectionHead">
          <div class="eyebrow">THE MACHINES</div>
          <h2 class="h2">OUR VEHICLES</h2>
        </div>

        <div class="cardsGrid">
          <article v-for="v in vehicles" :key="v.title" class="vehicleCard">
            <div class="vehicleMedia">
              <img class="vehicleImg" :src="v.img" :alt="v.title" loading="lazy" />
              <span class="tag">{{ v.tag }}</span>
            </div>

            <div class="vehicleBody">
              <h3 class="h3">{{ v.title }}</h3>
              <p class="muted">{{ v.desc }}</p>

              <div class="pillRow">
                <span v-for="p in v.pills" :key="p" class="pill">{{ p }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- RESULTS -->
    <section id="results" class="section results">
      <div class="resultsBg" aria-hidden="true"></div>
      <div class="container">
        <div class="sectionHead">
          <div class="eyebrow">SEASON HIGHLIGHTS</div>
          <h2 class="h2">2024 RESULTS</h2>
        </div>

        <div class="resultsList">
          <div v-for="r in results" :key="r.round" class="resultRow">
            <div class="resultIcon">
              <div class="place">{{ r.place }}</div>
              <div class="mini">🏆</div>
            </div>
            <div class="resultMain">
              <div class="resultTop">
                <div class="round">ROUND {{ r.round }}</div>
                <div class="event">{{ r.event }}</div>
              </div>
              <div class="track muted">{{ r.track }}</div>
            </div>
            <div class="resultDate muted">{{ r.date }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- SPONSORS -->
    <section id="sponsors" class="section">
      <div class="container">
        <div class="sectionHead center">
          <div class="eyebrow">OUR PARTNERS</div>
          <h2 class="h2">SPONSORS</h2>
          <p class="lead muted">
            Whiteline Racing is proudly supported by leading Australian automotive and motorsport brands.
            Together, we push the limits of performance.
          </p>
        </div>

        <div class="sponsorBlock">
          <div class="blockTitle">MAJOR SPONSORS</div>
          <div class="sponsorGrid major">
            <div v-for="s in sponsors.major" :key="s" class="sponsorTile">{{ s }}</div>
          </div>
        </div>

        <div class="sponsorBlock">
          <div class="blockTitle">ASSOCIATE SPONSORS</div>
          <div class="sponsorGrid">
            <div v-for="s in sponsors.associate" :key="s" class="sponsorTile">{{ s }}</div>
          </div>
        </div>

        <div class="sponsorBlock">
          <div class="blockTitle">SUPPORTERS</div>
          <div class="sponsorGrid">
            <div v-for="s in sponsors.supporters" :key="s" class="sponsorTile dim">{{ s }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="section">
      <div class="container">
        <div class="sectionHead center">
          <div class="eyebrow">GET IN TOUCH</div>
          <h2 class="h2">CONTACT US</h2>
          <p class="lead muted">
            Whether you're interested in sponsorship, media enquiries, or just want to say hello, we'd love to hear from you.
          </p>
        </div>

        <form class="contactCard" @submit.prevent="submit">
          <div class="fieldGrid">
            <div class="field">
              <label for="name">NAME</label>
              <input id="name" v-model="form.name" type="text" placeholder="Your name" autocomplete="name" />
            </div>

            <div class="field">
              <label for="email">EMAIL</label>
              <input id="email" v-model="form.email" type="email" placeholder="your@email.com" autocomplete="email" />
            </div>
          </div>

          <div class="field">
            <label for="subject">SUBJECT</label>
            <select id="subject" v-model="form.subject">
              <option>General Enquiry</option>
              <option>Sponsorship</option>
              <option>Media</option>
              <option>Events</option>
            </select>
          </div>

          <div class="field">
            <label for="message">MESSAGE</label>
            <textarea
              id="message"
              v-model="form.message"
              rows="6"
              placeholder="Tell us what you're interested in…"
            />
          </div>

          <button class="btn primary wide" type="submit">
            SEND MESSAGE
          </button>

          <p v-if="toast" class="toast" role="status">{{ toast }}</p>
        </form>
      </div>
    </section>

    <footer class="footer">
      <div class="container footerInner">
        <span class="muted">© {{ new Date().getFullYear() }} Whiteline Racing, Demo UI</span>
        <button class="toTop" type="button" @click="go('home')">Back to top ↑</button>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, reactive, ref, nextTick } from "vue";

const showDemoBar = ref(true);

const isLoading = ref(true);
const mobileOpen = ref(false);
const toast = ref("");

const images = {
  hero: "/images/whiteline/hero-camaro.jpg?auto=format&fit=crop&w=2000&q=80",
  about: "/images/whiteline/pit-lane.jpg?auto=format&fit=crop&w=1600&q=80",
  v1: "/images/whiteline/hero-camaro.jpg?auto=format&fit=crop&w=1600&q=80",
  v2: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
  v3: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80",
};

const vehicles = [
  {
    tag: "TOURING CAR MASTERS",
    title: "1970 CHEVROLET CAMARO",
    desc: "Our flagship TCM entry, a beautifully restored 1970 Camaro that dominates the grid with raw V8 power and classic American muscle.",
    pills: ["350CI V8", "450+ HP", "4-SPEED MANUAL"],
    img: images.v1,
  },
  {
    tag: "SUPER TRUCK RACING",
    title: "SUPERTRUCK",
    desc: "Whiteline Racing's SuperTruck is a fearsome machine on the circuit, combining enormous power with surprising agility.",
    pills: ["7500CC ENGINE", "3 TONNE", "SINGLE DRIVE"],
    img: images.v2,
  },
  {
    tag: "TOURING CAR MASTERS",
    title: "RACE-READY CAMARO RS",
    desc: "Our second TCM entry packs cutting-edge race technology into a period-correct body shell, delivering incredible on-track performance.",
    pills: ["LS7 V8", "500+ HP", "SEQUENTIAL GEARBOX"],
    img: images.v3,
  },
];

const results = [
  { round: 7, event: "BATHURST 1000", track: "Mount Panorama Circuit", place: "1st", date: "OCT 2024" },
  { round: 6, event: "SANDOWN 500", track: "Sandown Raceway", place: "3rd", date: "SEP 2024" },
  { round: 5, event: "SYDNEY SUPERSPRINT", track: "Sydney Motorsport Park", place: "2nd", date: "AUG 2024" },
  { round: 4, event: "TOWNSVILLE 400", track: "Reid Park Street Circuit", place: "1st", date: "JUL 2024" },
  { round: 3, event: "DARWIN TRIPLE CROWN", track: "Hidden Valley Raceway", place: "4th", date: "JUN 2024" },
];

const sponsors = {
  major: ["GULF WESTERN OIL", "WHITELINE PERFORMANCE"],
  associate: ["PENRITE OIL", "ACDELCO", "KUMHO TYRES"],
  supporters: ["SUPERCHEAP AUTO", "TURBOSMART", "HALTECH"],
};

const form = reactive({
  name: "",
  email: "",
  subject: "General Enquiry",
  message: "",
});

function lockBodyScroll(locked: boolean) {
  document.documentElement.style.overflow = locked ? "hidden" : "";
}

function toggleMenu() {
  mobileOpen.value = !mobileOpen.value;
  lockBodyScroll(mobileOpen.value);
}

async function go(id: string, closeMobile = false) {
  if (closeMobile && mobileOpen.value) {
    mobileOpen.value = false;
    lockBodyScroll(false);
    await nextTick();              // wait for menu to collapse
    await new Promise(r => setTimeout(r, 60)); // small buffer for transition
  }

  const el = document.getElementById(id);
  if (!el) return;

  const header = document.querySelector(".header") as HTMLElement | null;
  const disclaimer = document.querySelector(".disclaimer") as HTMLElement | null;

  const offset =
    (disclaimer?.offsetHeight ?? 0) +
    (header?.offsetHeight ?? 0) +
    12; // extra spacing

  const y = el.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: Math.max(0, y),
    behavior: "smooth",
  });
}

function submit() {
  // demo-only behavior
  toast.value = "Message sent (demo). Thanks!";
  setTimeout(() => (toast.value = ""), 2400);

  form.name = "";
  form.email = "";
  form.subject = "General Enquiry";
  form.message = "";
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === "Escape" && mobileOpen.value) {
    mobileOpen.value = false;
    lockBodyScroll(false);
  }
}

onMounted(() => {
  // Simulate initial loading transition
  const t = window.setTimeout(() => {
    isLoading.value = false;
  }, 900);

  window.addEventListener("keydown", onKeydown);

  // Set hero background image via CSS variable
  document.documentElement.style.setProperty("--hero-img", `url('${images.hero}')`);

  onBeforeUnmount(() => {
    window.clearTimeout(t);
    window.removeEventListener("keydown", onKeydown);
    lockBodyScroll(false);
  });
});
</script>

<style scoped>
/* Modern UI font */
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap");

.page {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji",
    "Segoe UI Emoji";
  background: #0a0a0b;
  color: #e8e8ea;
}

/* Layout helpers */
.container {
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
}

/* Loading */
.loaderOverlay {
  position: fixed;
  inset: 0;
  background: radial-gradient(1200px 700px at 50% 20%, rgba(255, 0, 38, 0.18), transparent 55%),
    rgba(0, 0, 0, 0.92);
  z-index: 9999;
  display: grid;
  place-items: center;
  padding: 24px;
}
.loaderCard {
  width: min(520px, 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(10, 10, 11, 0.65);
  backdrop-filter: blur(10px);
  border-radius: 18px;
  padding: 18px;
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.55);
}
.loaderMark {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: #ff0026;
  display: grid;
  place-items: center;
  font-weight: 900;
  letter-spacing: 0.04em;
  margin-bottom: 10px;
}
.loaderTitle {
  font-weight: 800;
  font-size: 16px;
  letter-spacing: 0.02em;
}
.loaderSub {
  margin-top: 4px;
  color: rgba(232, 232, 234, 0.7);
  font-size: 13px;
}
.loaderBar {
  margin-top: 14px;
  height: 10px;
  border-radius: 999px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
.loaderBarFill {
  display: block;
  height: 100%;
  width: 55%;
  background: linear-gradient(90deg, rgba(255, 0, 38, 0.3), rgba(255, 0, 38, 1));
  animation: indeterminate 1.1s ease-in-out infinite;
}
@keyframes indeterminate {
  0% { transform: translateX(-70%); width: 40%; }
  50% { transform: translateX(10%); width: 65%; }
  100% { transform: translateX(120%); width: 40%; }
}

/* Disclaimer */
.disclaimer {
  margin-top: 12px;
  text-align: center;
  color: rgba(11, 18, 32, 0.55);
  font-size: 12px;
}
.disclaimerInner {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
}
.disclaimer p {
  margin: 0;
  font-size: 13px;
  color: rgba(232, 232, 234, 0.9);
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ff0026;
  box-shadow: 0 0 0 4px rgba(255, 0, 38, 0.18);
}

/* Header / Nav */
.header {
  position: sticky;
  z-index: 50;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.navWrap {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  color: inherit;
  text-decoration: none;
}
.brandMark {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: #ff0026;
  display: grid;
  place-items: center;
  font-weight: 900;
}
.brandText {
  display: flex;
  flex-direction: column;
  line-height: 1;
}
.brandTitle {
  font-weight: 900;
  letter-spacing: 0.06em;
  font-size: 14px;
}
.brandSub {
  margin-top: 4px;
  letter-spacing: 0.18em;
  font-size: 11px;
  color: rgba(232, 232, 234, 0.65);
}

.navLinks {
  display: flex;
  align-items: center;
  gap: 22px;
}
.navLinks a {
  color: rgba(232, 232, 234, 0.72);
  text-decoration: none;
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  transition: color 0.2s ease;
}
.navLinks a:hover {
  color: #ffffff;
}

.menuBtn {
  display: none;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  color: #fff;
  border-radius: 12px;
  padding: 10px 12px;
  cursor: pointer;
}
.menuIcon {
  width: 18px;
  height: 14px;
  display: grid;
  gap: 3px;
}
.menuIcon span {
  display: block;
  height: 2px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.85);
}

.mobileMenu {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(0, 0, 0, 0.78);
}
.mobileMenuInner {
  display: grid;
  gap: 10px;
  padding: 14px 0 18px;
}
.mobileMenuInner a {
  text-decoration: none;
  color: rgba(232, 232, 234, 0.9);
  padding: 12px 12px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 12px;
}
.mobileMenuInner a:hover {
  border-color: rgba(255, 0, 38, 0.45);
}

/* Hero */
.hero {
  position: relative;
  min-height: calc(100vh - 108px);
  display: grid;
  align-items: center;
  overflow: hidden;
}
.heroBg {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(900px 500px at 50% 20%, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.75)),
    var(--hero-img);
  background-size: cover;
  background-position: center;
  transform: scale(1.02);
  filter: saturate(0.9) contrast(1.05);
}
.heroInner {
  position: relative;
  padding: 72px 0 64px;
  text-align: center;
}
.heroKicker {
  color: rgba(255, 0, 38, 0.9);
  letter-spacing: 0.5em;
  font-size: 18px;
  text-transform: uppercase;
  margin-bottom: 18px;
  font-weight: bolder;
}
.heroTitle {
  margin: 0;
  font-weight: 900;
  letter-spacing: -0.02em;
  line-height: 0.92;
  font-size: clamp(44px, 6vw, 86px);
}
.heroTitle .accent {
  display: block;
  color: #ff0026;
  margin-top: 10px;
}
.heroDesc {
  margin: 18px auto 0;
  max-width: 720px;
  color: white;
  font-size: 14px;
  line-height: 1.7;
}
.heroActions {
  margin-top: 26px;
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.btn {
  border-radius: 14px;
  padding: 12px 16px;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
}
.btn.primary {
  background: #ff0026;
  border-color: rgba(255, 0, 38, 0.65);
  box-shadow: 0 12px 28px rgba(255, 0, 38, 0.22);
}
.btn.ghost {
  background: rgba(0, 0, 0, 0.25);
}
.btn.wide {
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.sendIcon {
  font-size: 14px;
  transform: translateY(-1px);
}

.scrollHint {
  margin-top: 40px;
  border: 0;
  background: transparent;
  cursor: pointer;
  opacity: 0.9;
}
.chev {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-right: 2px solid rgba(255, 255, 255, 0.65);
  border-bottom: 2px solid rgba(255, 255, 255, 0.65);
  transform: rotate(45deg);
  animation: bounce 1.4s ease-in-out infinite;
}
@keyframes bounce {
  0%, 100% { transform: translateY(0) rotate(45deg); }
  50% { transform: translateY(6px) rotate(45deg); }
}

/* Sections */
.section {
  padding: 84px 0;
  background:
    radial-gradient(800px 400px at 10% 10%, rgba(255, 0, 38, 0.08), transparent 55%),
    radial-gradient(900px 500px at 90% 30%, rgba(255, 255, 255, 0.04), transparent 55%);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}
.sectionHead {
  margin-bottom: 26px;
}
.sectionHead.center {
  text-align: center;
}
.eyebrow {
  color: rgba(255, 0, 38, 0.9);
  letter-spacing: 0.5em;
  font-size: 15px;
  text-transform: uppercase;
  margin-bottom: 10px;
}
.h2 {
  margin: 0;
  font-weight: 900;
  letter-spacing: -0.02em;
  font-size: clamp(30px, 4.2vw, 54px);
}
.h3 {
  margin: 0;
  font-weight: 900;
  letter-spacing: -0.01em;
  font-size: 18px;
}
.lead {
  margin: 12px auto 0;
  max-width: 720px;
  line-height: 1.7;
  font-size: 14px;
}
.muted {
  color: rgba(232, 232, 234, 0.68);
  line-height: 1.7;
  font-size: 14px;
}

/* About grid */
.aboutGrid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 26px;
  align-items: start;
}
.mediaCard {
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.35);
}
.media {
  width: 100%;
  height: auto;
  display: block;
}
.aboutText p {
  margin: 0 0 14px;
}
.stats {
  margin-top: 18px;
  padding-top: 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}
.statNum {
  color: #ff0026;
  font-weight: 900;
  font-size: 34px;
  letter-spacing: -0.02em;
}
.statLabel {
  margin-top: 4px;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(232, 232, 234, 0.65);
}

/* Vehicle cards */
.cardsGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}
.vehicleCard {
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.35);
  display: grid;
}
.vehicleMedia {
  position: relative;
  height: 210px;
  overflow: hidden;
}
.vehicleImg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.02);
  filter: saturate(0.9) contrast(1.05);
}
.vehicleMedia::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.88));
}
.tag {
  position: absolute;
  left: 14px;
  bottom: 14px;
  z-index: 2;
  background: #ff0026;
  color: #fff;
  padding: 8px 10px;
  border-radius: 12px;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 900;
}
.vehicleBody {
  padding: 16px 16px 18px;
}
.pillRow {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
}
.pill {
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(0, 0, 0, 0.25);
  padding: 8px 10px;
  border-radius: 12px;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(232, 232, 234, 0.85);
  font-weight: 800;
}

/* Results */
.results {
  position: relative;
  overflow: hidden;
}
.resultsBg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(900px 500px at 50% 20%, rgba(0,0,0,0.2), rgba(0,0,0,0.92)),
    linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.92)),
    url("/images/whiteline/race-action.jpg?auto=format&fit=crop&w=2000&q=70");
  background-size: cover;
  background-position: center;
  filter: saturate(0.75) contrast(1.05);
}
.results .container {
  position: relative;
}
.resultsList {
  margin-top: 18px;
  display: grid;
  gap: 14px;
}
.resultRow {
  display: grid;
  grid-template-columns: 84px 1fr 110px;
  gap: 14px;
  align-items: center;
  padding: 18px;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(10px);
}
.resultIcon {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  border: 1px solid rgba(255, 0, 38, 0.35);
  background: rgba(255, 0, 38, 0.12);
  display: grid;
  place-items: center;
  text-align: center;
}
.place {
  font-weight: 900;
  color: #ff0026;
  letter-spacing: 0.06em;
}
.mini {
  font-size: 14px;
  opacity: 0.85;
}
.resultTop {
  display: flex;
  align-items: baseline;
  gap: 12px;
  flex-wrap: wrap;
}
.round {
  color: rgba(255, 0, 38, 0.85);
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  font-weight: 900;
}
.event {
  font-weight: 900;
  letter-spacing: 0.02em;
}
.resultDate {
  text-align: right;
  font-size: 12px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

/* Sponsors */
.sponsorBlock {
  margin-top: 24px;
}
.blockTitle {
  text-align: center;
  font-size: 11px;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: rgba(232, 232, 234, 0.55);
  margin-bottom: 12px;
}
.sponsorGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  max-width: 760px;
  margin: 0 auto;
}
.sponsorGrid.major {
  grid-template-columns: repeat(2, 1fr);
  max-width: 620px;
}
.sponsorTile {
  padding: 18px 16px;
  text-align: center;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 12px;
}
.sponsorTile.dim {
  opacity: 0.72;
}

/* Contact */
.contactCard {
  margin: 22px auto 0;
  max-width: 760px;
  padding: 18px;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.35);
}
.fieldGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.field {
  margin-bottom: 14px;
}
label {
  display: block;
  margin-bottom: 8px;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(232, 232, 234, 0.65);
  font-weight: 900;
}
input, select, textarea {
  width: 100%;
  border-radius: 14px;
  padding: 12px 12px;
  background: rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.10);
  color: rgba(232, 232, 234, 0.92);
  outline: none;
  font-size: 14px;
}
input:focus, select:focus, textarea:focus {
  border-color: rgba(255, 0, 38, 0.55);
  box-shadow: 0 0 0 4px rgba(255, 0, 38, 0.12);
}
.toast {
  margin: 12px 0 0;
  color: rgba(232, 232, 234, 0.78);
  font-size: 13px;
  text-align: center;
}

/* Footer */
.footer {
  padding: 26px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(0, 0, 0, 0.55);
}
.footerInner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
.toTop {
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  color: rgba(232, 232, 234, 0.9);
  border-radius: 12px;
  padding: 10px 12px;
  cursor: pointer;
}

/* Transitions */
.fade-enter-active, .fade-leave-active { transition: opacity 0.25s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.slideDown-enter-active, .slideDown-leave-active { transition: all 0.22s ease; }
.slideDown-enter-from, .slideDown-leave-to { opacity: 0; transform: translateY(-8px); }

/* Responsive */
@media (max-width: 980px) {
  .aboutGrid { grid-template-columns: 1fr; }
  .cardsGrid { grid-template-columns: 1fr; }
  .resultRow { grid-template-columns: 84px 1fr; }
  .resultDate { text-align: left; }
}

@media (max-width: 860px) {
  .navLinks { display: none; }
  .menuBtn { display: inline-flex; }
  .sponsorGrid { grid-template-columns: 1fr; }
  .sponsorGrid.major { grid-template-columns: 1fr; }
}

@media (max-width: 640px) {
  .fieldGrid { grid-template-columns: 1fr; }
  .heroInner { padding: 62px 0 54px; }
  .heroKicker { letter-spacing: 0.35em; }
}
</style>
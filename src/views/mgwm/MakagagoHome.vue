<script setup lang="ts">
import Swal from "sweetalert2";
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";

/** -----------------------------
 *  Types
 * ------------------------------*/
interface NavItem {
  label: string;
  id: string;
}

interface FeaturedItem {
  title: string;
  href: string;
  thumb: string;
  videoDuration?: string;
  viewCount?: string;
  note?: string;
}

interface SeriesItem {
  name: string;
  count: string;
  thumb: string;
  href: string;
}

interface SeriesRow {
  title: string;
  items: SeriesItem[];
}

interface MerchItem {
  name: string;
  desc: string;
  price: string;
  image: string;
  cta: string;
  href: string;
}

interface PartnerItem {
  name: string;
  logo: string;
  link: string;
}

interface PartnerForm {
  name: string;
  brand: string;
  email: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name: string;
  brand: string;
  email: string;
  message: string;
}

interface FormTouched {
  name: boolean;
  brand: boolean;
  email: boolean;
  message: boolean;
}

type FormKey = keyof Pick<PartnerForm, "name" | "brand" | "email" | "message">;

/** -----------------------------
 *  Data
 * ------------------------------*/
const brand = {
  name: "Makagago",
  tagline: "Wazzup Man",
  facebook: "https://www.facebook.com/MakagagoWM09",
  youtube: "https://www.youtube.com/@MakagagoWazzupMan",
};

const nav: NavItem[] = [
  { label: "Home", id: "top" },
  { label: "Latest Videos", id: "latest-videos" },
  { label: "Series", id: "series" },
  { label: "Merch", id: "merch" },
  { label: "Partners", id: "partners" },
  { label: "Partner With Us", id: "partner-with-us" },
];

/** -----------------------------
 *  Loading Splash
 * ------------------------------*/
const isLoading = ref<boolean>(true);
const loadingFadeOut = ref<boolean>(false);

const finishLoading = async (): Promise<void> => {
  loadingFadeOut.value = true;

  // wait for fade out
  setTimeout(() => {
    isLoading.value = false;

    // refresh scroll/observer calculations
    nextTick(() => {
      window.dispatchEvent(new Event("scroll"));
    });
  }, 450);
};

/** -----------------------------
 *  Scroll / Active Nav / Back to top
 * ------------------------------*/
const activeSection = ref<string>("top");
const showBackToTop = ref<boolean>(false);

// lock observer during programmatic scroll (nav clicks)
const isProgrammaticScroll = ref<boolean>(false);
let scrollLockTimer: ReturnType<typeof setTimeout> | null = null;

const headerOffset = 96;

// proper TS types for handlers/observer
let onScrollHandler: (() => void) | null = null;
let observer: IntersectionObserver | null = null;
const isMobileMenuOpen = ref<boolean>(false);

/**
 * Scroll to section with header offset
 */
const scrollTo = (id: string): void => {
  const el = document.getElementById(id);
  if (!el) return;

  isProgrammaticScroll.value = true;
  activeSection.value = id;

  // If going to top, hide back-to-top immediately
  if (id === "top") {
    showBackToTop.value = false;
  }

  const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
  history.replaceState(null, "", `#${id}`);

  if (scrollLockTimer) clearTimeout(scrollLockTimer);
  scrollLockTimer = setTimeout(() => {
    isProgrammaticScroll.value = false;

    // Safety: top state after scroll completes
    if (window.scrollY <= 40) {
      showBackToTop.value = false;
      activeSection.value = "top";
      history.replaceState(null, "", "#top");
    } else {
      // Ensure button state is correct after programmatic scroll
      showBackToTop.value = window.scrollY > 400;
    }
  }, 750);
};

/** -----------------------------
 *  Content Lists
 * ------------------------------*/
const featured: FeaturedItem[] = [
 
  {
    title: "NORMAN MANGUSIN HINAMON SI MANNY PACQUIAO",
    href: "https://www.youtube.com/watch?v=1gec39fotzw",
    thumb: "/images/makagago/featured-video-1.avif",
    videoDuration: "52:01",
    viewCount: "422K",
    note: "",
  },
  {
    title: "NORMAN MANGUSIN SINAGOT NA NI MANNY PACQUIAO",
    href: "https://www.youtube.com/watch?v=PCSYa7PT8gI",
    thumb: "/images/makagago/featured-video-2.avif",
    videoDuration: "30:01",
    viewCount: "1M",
    note: "",
  },
  {
    title: "NORMAN MANGUSIN ITINANGGI ANG MOMMY NYA",
    href: "https://www.youtube.com/watch?v=NaNr3Nag2Ks",
    thumb: "/images/makagago/featured-video-3.avif",
    videoDuration: "1:02:40",
    viewCount: "333K",
    note: "",
  },
];

const seriesRows: SeriesRow[] = [
  {
    title: "Episodes",
    items: [
      {
        name: "FRANCIS LEO MARCOS EPISODES",
        count: "62 videos",
        thumb: "/images/makagago/series/flm-series.jpg",
        href: "https://www.youtube.com/watch?v=vKSA-e41zTI&list=PLvhbEtwm1bb6zdhISxA2FQ2ayuoAU8Rw6",
      },
      {
        name: "THE RISE AND FALL EPISODES",
        count: "14 videos",
        thumb: "/images/makagago/series/rise-and-fall-series.jpg",
        href: "https://www.youtube.com/watch?v=lgS3Fntii-E&list=PLvhbEtwm1bb7_byrjfun8g4ppAT-P04kS",
      },
      {
        name: "Reality Quest",
        count: "6 videos",
        thumb: "/images/makagago/series/reality-quest-series.jpg",
        href: "https://www.youtube.com/watch?v=L-slt4YwoLA&list=PLvhbEtwm1bb5M3vePLzQ3Dut9Wus7rKNm",
      },
      {
        name: "NICO DAVID EPISODES",
        count: "4 videos",
        thumb: "/images/makagago/series/nico-david-series.jpg",
        href: "https://www.youtube.com/watch?v=OOM9cmy_TXk&list=PLvhbEtwm1bb55tXe6WFeL0yc9WHt2De1u",
      },
      {
        name: "ATO EPISODES",
        count: "5 videos",
        thumb: "/images/makagago/series/ato-series.jpg",
        href: "https://www.youtube.com/watch?v=n-BJ_2SzE94&list=PLvhbEtwm1bb6LCz-TOIpXjGliHfqowS7J",
      },
      {
        name: "WHAMOS CRUZ EPISODES",
        count: "5 videos",
        thumb: "/images/makagago/series/whamos-series.jpg",
        href: "https://www.youtube.com/watch?v=XLcBS4gzULk&list=PLvhbEtwm1bb7bbU9wUmdcnc_WesBW_T8A",
      },
      {
        name: "PIO BALBUENA EPISODES",
        count: "6 videos",
        thumb: "/images/makagago/series/pio-series.jpg",
        href: "https://www.youtube.com/watch?v=M6-gZFQapQ4&list=PLvhbEtwm1bb6zMqMk0Kr3ZKBhiY7QNhYo",
      },
      {
        name: "BUGOY NA KOYKOY EPISODES",
        count: "2 videos",
        thumb: "/images/makagago/series/bugoy-series.jpg",
        href: "https://www.youtube.com/watch?v=PcuKmWBTohE&list=PLvhbEtwm1bb7USrJRr1FG31MtmebBtKHt",
      },
    ],
  },
];

const merch: MerchItem[] = [
  {
    name: "Repent (Black)",
    desc: "Comfortable black t-shirt — bold white print.",
    price: "PHP 750",
    image: "/images/makagago/merch/repent-black.jpg",
    cta: "Chat to our Facebook Page",
    href: "https://www.messenger.com/t/792285597310101",
  },
  {
    name: "The Biggest (White)",
    desc: "Comfortable white t-shirt — bold black print.",
    price: "PHP 650",
    image: "/images/makagago/merch/the-biggest-white.jpg",
    cta: "Chat to our Facebook Page",
    href: "https://www.messenger.com/t/792285597310101",
  },
];

const partners: PartnerItem[] = [
  {
    name: "Manny Pay",
    logo: "/images/makagago/partners/mannypay.png",
    link: "https://www.mannypay.ph/",
  },
];

/**
 * Horizontal row scroller (for series)
 */
const scrollRow = (id: string, dir: number = 1): void => {
  const el = document.getElementById(id);
  if (!el) return;
  const amount = Math.round(el.clientWidth * 0.9) * dir;
  el.scrollBy({ left: amount, behavior: "smooth" });
};

/** -----------------------------
 *  Form + Validation + SweetAlert
 * ------------------------------*/
const form = ref<PartnerForm>({
  name: "",
  brand: "",
  email: "",
  budget: "",
  message: "",
});

const errors = ref<FormErrors>({
  name: "",
  brand: "",
  email: "",
  message: "",
});

const touched = ref<FormTouched>({
  name: false,
  brand: false,
  email: false,
  message: false,
});

const isValidEmail = (email: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validateField = (key: FormKey): void => {
  const value = (form.value[key] ?? "").trim();

  errors.value[key] = "";

  if (key === "name" && value.length < 2) errors.value.name = "Please enter your name.";
  if (key === "brand" && value.length < 2) errors.value.brand = "Please enter your brand/company.";
  if (key === "email" && !isValidEmail(value)) errors.value.email = "Please enter a valid email address.";
  if (key === "message" && value.length < 10) errors.value.message = "Please write a short message (10+ chars).";
};

const validateForm = (): boolean => {
  (Object.keys(touched.value) as Array<keyof FormTouched>).forEach((k) => {
    touched.value[k] = true;
  });

  validateField("name");
  validateField("brand");
  validateField("email");
  validateField("message");

  return !errors.value.name && !errors.value.brand && !errors.value.email && !errors.value.message;
};

const submitting = ref<boolean>(false);

const submitPartnerWithUs = async (): Promise<void> => {
  if (!validateForm()) {
    await Swal.fire({
      icon: "error",
      title: "Please check the form",
      text: "Some fields are missing or invalid.",
      confirmButtonText: "Okay",
    });
    return;
  }

  submitting.value = true;

  setTimeout(async () => {
    submitting.value = false;

    await Swal.fire({
      icon: "success",
      title: "Inquiry submitted!",
      text: "This is a demo only — no data was sent.",
      confirmButtonText: "Got it",
    });

    form.value = { name: "", brand: "", email: "", budget: "", message: "" };

    (Object.keys(touched.value) as Array<keyof FormTouched>).forEach((k) => {
      touched.value[k] = false;
    });

    (Object.keys(errors.value) as Array<keyof FormErrors>).forEach((k) => {
      errors.value[k] = "";
    });
  }, 650);
};

/** -----------------------------
 *  Lifecycle: mount/unmount
 * ------------------------------*/
onMounted(() => {
  // splash visible on first load
  setTimeout(() => {
    finishLoading();
  }, 1500);

  const ids = nav.map((n) => n.id);
  const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

  // Set initial active if URL has hash
  const hash = window.location.hash?.replace("#", "");
  if (hash && ids.includes(hash)) activeSection.value = hash;

  observer = new IntersectionObserver(
    (entries) => {
      if (isProgrammaticScroll.value) return;

      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

      if (visible?.target && (visible.target as HTMLElement).id) {
        activeSection.value = (visible.target as HTMLElement).id;
      }
    },
    {
      root: null,
      threshold: [0.25, 0.4, 0.55, 0.7],
      rootMargin: `-${headerOffset}px 0px -60% 0px`,
    }
  );

  sections.forEach((sec) => observer?.observe(sec));

  onScrollHandler = () => {
    // NOTE: we do NOT early-return here, otherwise back-to-top won't update while programmatic scrolling.
    // We only avoid changing activeSection during programmatic scroll.
    const y = window.scrollY;

    showBackToTop.value = y > 400;

    if (!isProgrammaticScroll.value && y <= 40) {
      activeSection.value = "top";
      history.replaceState(null, "", "#top");
    }
  };

  window.addEventListener("scroll", onScrollHandler, { passive: true });

  // initial state
  window.dispatchEvent(new Event("scroll"));
});

onBeforeUnmount(() => {
  if (onScrollHandler) window.removeEventListener("scroll", onScrollHandler);
  if (observer) observer.disconnect();
  if (scrollLockTimer) clearTimeout(scrollLockTimer);
});
</script>

<template>
  <div id="top" class="min-h-screen bg-neutral-950 text-neutral-100">
    <!-- LOADING SPLASH -->
    <transition name="splash">
        <div
        v-if="isLoading"
        class="fixed inset-0 z-[999] grid place-items-center bg-neutral-950"
        >
        <!-- subtle glow -->
        <div class="pointer-events-none absolute inset-0 overflow-hidden">
            <div class="absolute -top-40 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-red-600/20 blur-3xl" />
            <div class="absolute bottom-[-10rem] right-[-10rem] h-[28rem] w-[28rem] rounded-full bg-white/5 blur-3xl" />
        </div>

        <div
            :class="[
            'relative flex flex-col items-center text-center transition-all duration-500',
            loadingFadeOut ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'
            ]"
        >
            <div class="grid h-24 w-24 place-items-center rounded-3xl bg-white/5 ring-1 ring-white/10">
            <img
                src="/images/makagago/mg-logo.png"
                alt="MG"
                class="h-16 w-16 object-contain"
            />
            </div>

            <p class="mt-6 text-sm uppercase tracking-[0.35em] text-neutral-400">
            Makagago - Wazzup Man
            </p>

            <h2 class="mt-3 text-2xl font-black tracking-tight md:text-3xl">
            <span class="text-red-500">1L</span>GFV
            </h2>

            <div class="mt-6 h-1 w-44 overflow-hidden rounded-full bg-white/10 ring-1 ring-white/10">
            <div class="h-full w-1/2 animate-loading-bar rounded-full bg-red-600"></div>
            </div>

            <button
            type="button"
            @click="finishLoading"
            class="mt-6 text-xs text-neutral-400 hover:text-white"
            >
            Skip intro
            </button>
        </div>
        </div>
    </transition>

    <!-- subtle controlled glow -->
    <div class="pointer-events-none fixed inset-0 overflow-hidden">
      <div class="absolute -top-48 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-red-600/15 blur-3xl" />
      <div class="absolute top-40 right-[-10rem] h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      <div class="absolute bottom-[-14rem] left-[-10rem] h-[28rem] w-[28rem] rounded-full bg-red-500/10 blur-3xl" />
    </div>

    <!-- Proposal disclaimer bar (full width) -->
    <div class="relative border-b border-white/10 bg-black/30 backdrop-blur">
        <div class="text-center px-6 py-3 md:px-10">
            <p class="text-xs text-neutral-300">
            Concept website proposal — <span class="font-semibold text-white">not an official site</span>. Built for pitching and preview only.
            </p>
        </div>
    </div>

    <!-- Header -->
    <header class="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/95 backdrop-blur">
      <div class="w-full px-6 py-4 md:px-10">
        <div class="flex items-center justify-between gap-4">
          <!-- Logo & Brand -->
          <div class="flex min-w-0 items-center gap-3">
            <div class="grid h-11 w-11 flex-none place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
              <img src="/images/makagago/mg-logo.png" alt="MG Logo" class="h-8 w-8 object-contain" />
            </div>
            <div class="min-w-0 leading-tight">
              <h1 class="truncate text-base font-semibold">{{ brand.name }} — {{ brand.tagline }}</h1>
            </div>
          </div>

          <!-- Desktop Nav -->
          <nav class="hidden md:flex items-center gap-2">
            <a
              v-for="n in nav"
              :key="n.id"
              href="#"
              @click.prevent="scrollTo(n.id)"
              :class="[
                'shrink-0 rounded-xl px-4 py-2 text-sm ring-1 transition',
                activeSection === n.id
                  ? 'bg-red-600 text-white ring-red-500/40'
                  : 'bg-white/5 text-neutral-200 ring-white/10 hover:bg-white/10'
              ]"
            >
              {{ n.label }}
            </a>
          </nav>

          <!-- Mobile Hamburger -->
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="md:hidden flex items-center justify-center h-11 w-11 rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10"
          >
            <svg class="h-5 w-5 text-neutral-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Mobile Menu (simple) -->
        <div v-if="isMobileMenuOpen" class="md:hidden mt-4 pb-2 border-t border-white/10 pt-4">
          <div class="flex flex-col gap-2">
            <a
              v-for="n in nav"
              :key="n.id"
              href="#"
              @click.prevent="scrollTo(n.id); isMobileMenuOpen = false"
              :class="[
                'rounded-xl px-4 py-3 text-sm ring-1 transition',
                activeSection === n.id
                  ? 'bg-red-600 text-white ring-red-500/40'
                  : 'bg-white/5 text-neutral-200 ring-white/10 hover:bg-white/10'
              ]"
            >
              {{ n.label }}
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- HERO  -->
    <section class="relative min-h-screen w-full px-6 py-14 md:px-10 md:py-20">
      <div class="grid gap-10 lg:grid-cols-12 lg:items-center">
        <div class="lg:col-span-6">

          <h2 class="mt-5 text-5xl font-black tracking-tight md:text-6xl">
            <span class="text-white">THE BIGGEST</span>
            <span class="block text-red-500">MAKAGAGO</span>
          </h2>

          <p class="mt-5 max-w-2xl text-neutral-300 leading-relaxed">
            No sugar-coating. Just real talk, viral callouts, and stories you won’t hear anywhere else. Wazzup mga kahombre.
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <a
              :href="brand.youtube"
              target="_blank"
              class="inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-500"
            >
              Watch on YouTube →
            </a>

            <a
              :href="brand.facebook"
              target="_blank"
              class="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm ring-1 ring-white/10 hover:bg-blue-500"
            >
              Follow on Facebook
            </a>

            <a
              href="#"
              @click.prevent="scrollTo('partner-with-us')"
              class="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-neutral-950 hover:bg-neutral-200"
            >
              Partner With Us
            </a>
          </div>
        </div>

        <div class="lg:col-span-6">
          <div class="relative overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10">
            <div class="absolute inset-0 bg-gradient-to-b from-red-600/10 via-transparent to-black/30" />

            <div class="p-5 md:p-6">
              <div class="flex items-center gap-3">
                <div class="grid h-12 w-12 place-items-center rounded-2xl bg-black/40 ring-1 ring-white/10">
                  <img src="/images/makagago/mg-logo.png" alt="MG Logo" class="h-9 w-9 object-contain" />
                </div>
                <div>
                  <p class="text-sm font-semibold leading-tight">{{ brand.name }}</p>
                  <p class="text-xs text-neutral-300">{{ brand.tagline }}</p>
                </div>
              </div>

              <div class="mt-5 overflow-hidden rounded-2xl ring-1 ring-white/10">
                <img
                  src="/images/makagago/makagago-dp.jpg"
                  alt="Makagago profile picture"
                  class="h-[420px] w-full object-cover md:h-[520px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- LATEST VIDEOS -->
    <section id="latest-videos" class="relative w-full px-6 py-14 md:px-10 md:py-20">
    <!-- Section Header -->
    <div class="relative mb-12">
        <div class="absolute -top-10 left-0 h-20 w-64 rounded-full bg-red-600/10 blur-3xl"></div>
        <div class="flex items-end justify-between gap-4">
        <div>
            <h3 class="text-4xl font-extrabold tracking-tight md:text-5xl">
            Latest <span class="text-red-500">Videos</span>
            </h3>
            <p class="mt-2 max-w-2xl text-neutral-400">
            Catch up on the most recent viral callouts and exclusive content.
            </p>
        </div>
        <a 
            href="https://www.youtube.com/@MakagagoWazzupMan/videos" 
            target="_blank" 
            class="group inline-flex items-center gap-2 rounded-xl bg-white/5 px-5 py-3 text-sm font-medium ring-1 ring-white/10 hover:bg-white/10 transition-all"
        >
            <span>See all videos</span>
            <svg class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
        </a>
        </div>
    </div>

    <!-- Video Grid -->
    <div class="mt-10 grid gap-6 lg:grid-cols-3">
        <a
        v-for="(v, idx) in featured"
        :key="idx"
        :href="v.href"
        target="_blank"
        class="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-black/40 to-neutral-900/40 ring-1 ring-white/10 hover:ring-red-500/30 transition-all duration-500 hover:-translate-y-2"
        >
        <!-- Glow effect on hover -->
        <div class="absolute inset-0 bg-gradient-to-br from-red-600/0 via-transparent to-red-600/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
        
        <!-- Thumbnail Container -->
        <div class="relative overflow-hidden rounded-t-3xl">
            <div class="relative h-56 md:h-64 overflow-hidden">
            <img 
                :src="v.thumb" 
                :alt="v.title" 
                class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <!-- Gradient overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            <!-- Play Button -->
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="rounded-full bg-red-600/90 p-4 ring-4 ring-red-600/30 backdrop-blur-sm transition-transform group-hover:scale-110">
                <svg class="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                </svg>
                </div>
            </div>
            
            <!-- YouTube Badge -->
            <div class="absolute top-4 right-4">
                <span class="inline-flex items-center gap-1 rounded-full bg-red-600 px-3 py-1.5 text-xs font-semibold text-white ring-2 ring-red-400/50">
                <svg class="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
                YouTube
                </span>
            </div>
            
            <!-- Video Duration -->
            <div class="absolute bottom-4 left-4 rounded-md bg-black/80 px-2 py-1 text-xs font-medium text-white ring-1 ring-white/20">
                {{ v.videoDuration }}
            </div>
            </div>
        </div>

        <!-- Content -->
        <div class="p-6">
            <!-- Title -->
            <h4 class="text-lg font-bold text-white line-clamp-2 group-hover:text-red-300 transition-colors">
            {{ v.title }}
            </h4>
            
            <!-- Stats -->
            <div class="mt-4 flex items-center gap-4 text-xs text-neutral-400">
            <span class="flex items-center gap-1">
                <svg class="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                </svg>
                {{ v.viewCount }} views
            </span>
            </div>
            
            <!-- Description -->
            <p class="mt-3 text-sm text-neutral-300 line-clamp-2">
            {{ v.note || "Latest viral callout from Makagago. Watch now for the full story and exclusive insights." }}
            </p>
        </div>
        </a>
    </div>
    
    <!-- View More -->
    <div class="mt-12 text-center">
        <a 
        href="https://www.youtube.com/@MakagagoWazzupMan/videos" 
        target="_blank"
        class="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 px-8 py-4 text-sm font-semibold text-white ring-2 ring-red-500/30 hover:from-red-500 hover:to-red-600 transition-all"
        >
        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
        </svg>
        <span>Subscribe for more content</span>
        <svg class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
        </a>
        <p class="mt-3 text-xs text-neutral-500">
        New videos every week • Never miss a callout
        </p>
    </div>
    </section>

    <!-- MAKAGAGO SERIES -->
    <section id="series" class="relative w-full px-6 py-14 md:px-10 md:py-20">
      <div class="flex items-end justify-between gap-4">
        <div>
          <h3 class="text-3xl font-extrabold tracking-tight md:text-4xl">Makagago Series</h3>
        </div>
        <a :href="brand.youtube + '/playlists'" target="_blank" class="text-sm text-neutral-300 hover:text-white">
          View all playlists →
        </a>
      </div>

      <div class="mt-10 space-y-12">
        <div v-for="(row, rIndex) in seriesRows" :key="row.title">
          <div class="mb-4 flex items-center justify-between gap-4">
            <h4 class="text-xl font-bold text-white">{{ row.title }}</h4>

            <div class="hidden gap-2 md:flex">
              <button
                type="button"
                class="rounded-xl bg-white/5 px-3 py-2 text-sm ring-1 ring-white/10 hover:bg-white/10"
                @click="scrollRow(`row-${rIndex}`, -1)"
              >
                ←
              </button>
              <button
                type="button"
                class="rounded-xl bg-white/5 px-3 py-2 text-sm ring-1 ring-white/10 hover:bg-white/10"
                @click="scrollRow(`row-${rIndex}`, 1)"
              >
                →
              </button>
            </div>
          </div>

          <div class="relative">
            <div
              :id="`row-${rIndex}`"
              class="flex gap-5 overflow-x-auto pb-2 pr-2 snap-x snap-mandatory scroll-smooth
                     [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <a
                v-for="item in row.items"
                :key="item.name"
                :href="item.href"
                target="_blank"
                class="group w-[240px] flex-none snap-start"
              >
                <div
                  class="relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10
                         transition group-hover:-translate-y-1 group-hover:bg-white/10"
                >
                  <img :src="item.thumb" :alt="item.name" class="h-[140px] w-full object-cover" />
                  <div class="absolute bottom-3 right-3 rounded-lg bg-black/70 px-2 py-1 text-xs text-white ring-1 ring-white/10">
                    {{ item.count }}
                  </div>
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100"></div>
                </div>

                <div class="mt-3">
                  <p class="text-sm font-semibold text-white line-clamp-2">{{ item.name }}</p>
                  <p class="mt-1 text-xs text-neutral-300">View full playlist →</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="merch" class="relative w-full px-6 py-14 md:px-10 md:py-20">
    <div class="text-center">
        <div>
          <h3 class="text-3xl font-extrabold tracking-tight md:text-4xl">The Biggest Merch</h3>
        </div>
        <p class="mt-3 text-sm text-neutral-300">
        Support the brand with official the biggest gear.
        </p>
    </div>

    <div class="mt-10 flex flex-wrap justify-center gap-6">
        <article
        v-for="m in merch"
        :key="m.name"
        class="w-full max-w-[420px] md:w-[420px]
                overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10
                transition hover:bg-white/10"
        >
        <div class="relative">
            <img :src="m.image" :alt="m.name" class="h-56 w-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
        </div>

        <div class="p-6">
            <h4 class="text-xl font-bold">{{ m.name }}</h4>
            <p class="mt-2 text-sm text-neutral-300 leading-relaxed">
            {{ m.desc }}
            </p>

            <div class="mt-4 flex items-center gap-2 text-sm font-semibold">
            <span class="inline-flex items-center gap-2 rounded-full bg-red-600/20 px-3 py-1 text-red-200 ring-1 ring-red-500/30">
                🏷️ {{ m.price }}
            </span>
            </div>

            <a
            :href="m.href"
            target="_blank"
            class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-500"
            >
            {{ m.cta }}
            </a>
        </div>
        </article>
    </div>
    </section>


    <!-- PARTNERS  -->
    <section id="partners" class="relative w-full px-6 py-14 md:px-10 md:py-20">
        <div class="text-center">
            <h3 class="text-3xl font-extrabold tracking-tight md:text-4xl">
            Partners
            </h3>
            <p class="mt-2 text-sm text-neutral-300">
            Brands and collaborators <br> (proposal demo — replace with official partner list).
            </p>
        </div>

        <!-- Centered, auto-adjusting logo list -->
        <div class="mt-10 flex flex-wrap justify-center gap-6">
            <div
            v-for="p in partners"
            :key="p.name"
            class="group flex h-24 w-[100px] items-center justify-center
                    rounded-2xl bg-white/5 ring-1 ring-white/10
                    transition hover:bg-white/10 cursor-pointer relative"
            >
            <a :href="p.link" target="_blank" class="absolute inset-0 z-10" />
            <img
                :src="p.logo"
                :alt="p.name"
                class=" object-contain opacity-70 
                    transition group-hover:opacity-100 group-hover:grayscale-0"
            />
            </div>
        </div>
    </section>

    <!-- PARTNER WITH US  -->
    <section id="partner-with-us" class="relative w-full px-6 py-14 md:px-10 md:py-20">
      <div class="rounded-3xl bg-white/5 p-7 ring-1 ring-white/10 md:p-10">
        <div class="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div class="lg:col-span-5">
            <h3 class="text-3xl font-extrabold tracking-tight md:text-4xl">Partner With Us</h3>
            <p class="mt-3 text-sm text-neutral-300">
              A clean collab funnel so brands can reach out quickly <br> sponsorships, guesting, partnerships, promos.
            </p>
            
          </div>

          <div class="lg:col-span-7">
            <form class="grid gap-4">
              <div class="grid gap-4 md:grid-cols-2">
                <div>
                  <label class="text-xs text-neutral-300">Your Name</label>
                    <input
                    v-model="form.name"
                    type="text"
                    @blur="touched.name = true; validateField('name')"
                    class="mt-2 w-full rounded-xl bg-black/40 px-4 py-3 text-sm ring-1 ring-white/10 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-500/60"
                    placeholder="Juan Dela Cruz"
                    />
                    <p v-if="touched.name && errors.name" class="mt-2 text-xs text-red-300">
                    {{ errors.name }}
                    </p>
                </div>
                <div>
                  <label class="text-xs text-neutral-300">Brand / Company</label>
                    <input
                    v-model="form.brand"
                    type="text"
                    @blur="touched.brand = true; validateField('brand')"
                    class="mt-2 w-full rounded-xl bg-black/40 px-4 py-3 text-sm ring-1 ring-white/10 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-500/60"
                    placeholder="Brand name"
                    />
                    <p v-if="touched.brand && errors.brand" class="mt-2 text-xs text-red-300">
                    {{ errors.brand }}
                    </p>
                </div>
              </div>

              <div class="grid gap-4 md:grid-cols-2">
                <div>
                  <label class="text-xs text-neutral-300">Email</label>
                    <input
                    v-model="form.email"
                    type="email"
                    @blur="touched.email = true; validateField('email')"
                    class="mt-2 w-full rounded-xl bg-black/40 px-4 py-3 text-sm ring-1 ring-white/10 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-500/60"
                    placeholder="brand@email.com"
                    />
                    <p v-if="touched.email && errors.email" class="mt-2 text-xs text-red-300">
                    {{ errors.email }}
                    </p>
                </div>
              </div>

              <div>
                <label class="text-xs text-neutral-300">Message</label>
                <textarea
                v-model="form.message"
                rows="5"
                @blur="touched.message = true; validateField('message')"
                class="mt-2 w-full rounded-xl bg-black/40 px-4 py-3 text-sm ring-1 ring-white/10 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-500/60"
                placeholder="Tell us about the campaign, timeline, and goals..."
                />
                <p v-if="touched.message && errors.message" class="mt-2 text-xs text-red-300">
                {{ errors.message }}
                </p>
              </div>

                <div class="flex flex-col gap-2">
                <button
                    type="button"
                    @click="submitPartnerWithUs"
                    :disabled="submitting"
                    class="rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-500 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    {{ submitting ? "Submitting..." : "Submit Inquiry" }}
                </button>

                <p class="text-xs text-neutral-400">
                    Demo only — this form shows validation + success popup, but doesn’t send data yet.
                </p>
                </div>
            </form>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <footer class="mt-12 border-t border-white/10 pt-8">
        <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div class="flex items-center gap-3">
            <div class="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
              <img src="/images/makagago/mg-logo.png" alt="MG Logo" class="h-7 w-7 object-contain" />
            </div>
            <div class="text-sm">
              <p class="font-semibold">{{ brand.name }} — {{ brand.tagline }}</p>
            </div>
          </div>

          <div class="flex flex-wrap gap-3">
            <a :href="brand.facebook" target="_blank" class="text-sm text-neutral-300 hover:text-white">Facebook</a>
            <a :href="brand.youtube" target="_blank" class="text-sm text-neutral-300 hover:text-white">YouTube</a>
            <a href="#" @click.prevent="scrollTo('partner-with-us')" class="text-sm text-neutral-300 hover:text-white">
              Partner With Us
            </a>
          </div>
        </div>

        <p class="mt-6 text-xs text-neutral-500">
          © {{ new Date().getFullYear() }} • Built as a proposal concept on whadancel.dev
        </p>
      </footer>
    </section>
  </div>

    <!-- Back to Top Button -->
    <button
    v-if="showBackToTop"
    @click="scrollTo('top')"
    class="fixed bottom-6 right-6 z-50
            flex items-center justify-center
            h-12 w-12 rounded-full
            bg-red-600 text-white
            shadow-lg shadow-black/40
            ring-1 ring-red-500/40
            transition hover:bg-red-500
            focus:outline-none"
    aria-label="Back to top"
    >
    ↑
    </button>
</template>
<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 0.25s ease-out;
}

/* fade transition for the overlay */
.splash-enter-active,
.splash-leave-active {
  transition: opacity 0.35s ease;
}
.splash-enter-from,
.splash-leave-to {
  opacity: 0;
}

/* animated loading bar */
@keyframes loadingBar {
  0% { transform: translateX(-80%); }
  100% { transform: translateX(220%); }
}
.animate-loading-bar {
  animation: loadingBar 1s ease-in-out infinite;
}
</style>

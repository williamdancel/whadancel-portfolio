<!-- Landing.vue (single-file Vue component + Tailwind) -->
<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <!-- Top glow -->
    <div class="pointer-events-none fixed inset-0 overflow-hidden">
      <div class="absolute -top-24 left-1/2 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl"></div>
      <div class="absolute top-40 right-[-10rem] h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"></div>
      <div class="absolute bottom-[-10rem] left-[-10rem] h-96 w-96 rounded-full bg-fuchsia-400/10 blur-3xl"></div>
    </div>

    <!-- Navbar -->
    <header class="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-white/10">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <nav class="flex items-center justify-between py-6">
          <div class="flex items-center gap-3">
            <!-- Put your logo at: /public/images/CrowPOS.png (or update the src below) -->
            <img
              :src="logoSrc"
              alt="CrowPOS logo"
              class="h-10 w-10 rounded-xl bg-white/5 ring-1 ring-white/10"
              loading="eager"
            />
            <div class="leading-tight">
              <div class="text-base font-semibold tracking-tight">CrowPOS</div>
              <div class="text-xs text-slate-300">Simple POS for daily business</div>
            </div>
          </div>

          <div class="hidden items-center gap-3 sm:flex">
            <a
              href="#home"
              class="rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/5 hover:text-white"
            >
              Home
            </a>
            <a
              href="#features"
              class="rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/5 hover:text-white"
            >
              Features
            </a>
            <a
              href="#reports"
              class="rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/5 hover:text-white"
            >
              Reports
            </a>
            <a
              href="#contact"
              class="rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/5 hover:text-white"
            >
              Contact
            </a>
          </div>

          <button
            type="button"
            class="sm:hidden rounded-xl bg-white/5 px-3 py-2 text-sm ring-1 ring-white/10 hover:bg-white/10"
            @click="mobileOpen = !mobileOpen"
            aria-label="Toggle menu"
          >
            <span v-if="!mobileOpen">Menu</span>
            <span v-else>Close</span>
          </button>
        </nav>

        <!-- Mobile menu -->
        <div v-if="mobileOpen" class="sm:hidden pb-6">
          <div class="sm:hidden absolute left-0 right-0 top-full bg-slate-950/95 backdrop-blur border-b border-white/10">
            <a href="#home" class="mt-1 block rounded-xl px-3 py-2 text-slate-200 hover:bg-white/10" @click="mobileOpen=false">
              Home
            </a>
            <a href="#features" class="mt-1 block rounded-xl px-3 py-2 text-slate-200 hover:bg-white/10" @click="mobileOpen=false">
              Features
            </a>
            <a href="#reports" class="mt-1 block rounded-xl px-3 py-2 text-slate-200 hover:bg-white/10" @click="mobileOpen=false">
              Reports
            </a>
            <a href="#contact" class="mt-1 block rounded-xl px-3 py-2 text-slate-200 hover:bg-white/10" @click="mobileOpen=false">
              contact
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- Hero -->
    <main class="relative z-10">
      <section id="home" class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-16">
          <div>

            <h1 class="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              A clean, <span class="text-white">generic POS</span> for
              <span class="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                any daily business
              </span>
              .
            </h1>

            <p class="mt-4 max-w-xl text-base leading-relaxed text-slate-300">
              CrowPOS is an <span class="text-white font-medium">offline-capable desktop POS</span> that helps you manage
              categories and items, run fast checkouts, and view sales reports without the clutter.
              Perfect for small shops, services, food, retail, and more.
            </p>

            <p class="mt-2 text-sm text-slate-400">
              Works fully as a <span class="text-slate-200">desktop app</span> and continues operating even
              <span class="text-slate-200">without internet connection</span>.
            </p>

            <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">

              <a
                href="#features"
                class="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100"
              >
                Explore features
              </a>
            </div>

            <div class="mt-8 grid grid-cols-3 gap-4 max-w-xl">
              <div class="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div class="text-sm font-semibold">Fast POS</div>
                <div class="mt-1 text-xs text-slate-300">Quick checkout flow</div>
              </div>
              <div class="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div class="text-sm font-semibold">Clean Admin</div>
                <div class="mt-1 text-xs text-slate-300">Categories & items</div>
              </div>
              <div class="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div class="text-sm font-semibold">Reports</div>
                <div class="mt-1 text-xs text-slate-300">Daily sales insights</div>
              </div>
            </div>
          </div>

          <div class="relative">
            <button
              type="button"
              class="group relative w-full overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition"
              @click="openLightboxVideo('/videos/crowpos/pos-demo.mp4')"
              aria-label="Open POS demo video"
            >
              <video
                class="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                autoplay
                muted
                loop
                playsinline
                preload="metadata"
              >
                <source src="/videos/crowpos/pos-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div class="pointer-events-none absolute inset-0 flex items-end justify-end p-3">
                <div class="rounded-xl bg-slate-950/60 px-3 py-1 text-xs text-slate-200 ring-1 ring-white/10 backdrop-blur">
                  Click to zoom
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      <!-- Features -->
      <section id="features" class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div class="rounded-[2rem] bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur sm:p-10">
          <div class="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 class="text-2xl font-semibold tracking-tight">Core Features</h2>
              <p class="mt-2 text-slate-300">
                Built around what daily businesses actually do: manage items, sell quickly, and track results.
              </p>

              <div class="mt-6 space-y-3">
                <ModuleRow title="Categories" desc="Simple grouping with active/inactive state." />
                <ModuleRow title="Items (Products/Services)" desc="Name, pricing, and type ready to sell." />
                <ModuleRow title="POS" desc="Checkout-focused flow designed for minimal clicks." />
                <ModuleRow title="Sales Reports" desc="Daily and summary views for decision-making." />
              </div>

              <div class="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#reports"
                  class="inline-flex items-center justify-center rounded-2xl bg-white/5 px-5 py-3 text-sm font-semibold ring-1 ring-white/10 hover:bg-white/10"
                >
                  View reporting
                </a>
              </div>
            </div>

            <div class="rounded-[1.6rem] bg-slate-950/40 p-5 ring-1 ring-white/10">
              <div class="flex items-center justify-between">
                <div class="text-sm font-semibold">Works for</div>
              </div>

              <div class="mt-4 grid gap-3 sm:grid-cols-2">
                <UseCaseCard title="Mini marts" desc="Quick product lookup and checkout." />
                <UseCaseCard title="Cafés" desc="Fast orders and daily totals." />
                <UseCaseCard title="Services" desc="Simple service items + pricing." />
                <UseCaseCard title="Retail shops" desc="Category-based item browsing." />
              </div>

              <div class="mt-5 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div class="text-xs text-slate-300">Focus</div>
                <div class="mt-1 text-sm font-semibold">
                  Speed, clarity, and daily reporting without overcomplication.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Reports -->
      <section id="reports" class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div class="flex items-end justify-between gap-6">
          <div>
            <h2 class="text-2xl font-semibold tracking-tight">Sales reporting that stays simple</h2>
            <p class="mt-2 max-w-2xl text-slate-300">
              Keep tabs on performance without drowning in charts. Just what you need for day-to-day decisions.
            </p>
          </div>
        </div>

        <div class="mt-8 grid gap-4 lg:grid-cols-3">
          <ReportCard title="Daily sales" desc="Track daily totals and transaction volume." />
          <ReportCard title="Best sellers" desc="See what items move the most, fast." />
          <ReportCard title="At-a-glance summaries" desc="Quick views for owners and staff." />
        </div>
      </section>

      <!-- CTA -->
      <section class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16">
        <div class="rounded-[2rem] bg-gradient-to-br from-white/10 to-white/0 p-1">
          <div class="rounded-[1.9rem] bg-slate-950/60 p-8 ring-1 ring-white/10 backdrop-blur sm:p-10">
            <div class="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <h3 class="text-xl font-semibold tracking-tight">Ready to run your daily sales with CrowPOS?</h3>
                <p class="mt-2 text-slate-300">
                  Open the app and start managing categories, items, and sales clean and simple.
                </p>
              </div>
              
            </div>

            <div class="mt-8 flex items-center gap-3 text-xs text-slate-400">
              <span class="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                <span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                Simple
              </span>
              <span class="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                <span class="h-1.5 w-1.5 rounded-full bg-indigo-300"></span>
                Desktop-ready
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact -->
        <section id="contact" class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div class="rounded-[2rem] bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur sm:p-10">
            <div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <h2 class="text-2xl font-semibold tracking-tight">Contact us</h2>
                <p class="mt-2 max-w-2xl text-slate-300">
                Questions, demo requests, or customization? Reach out anytime.
                </p>
            </div>

            <div class="grid gap-3 sm:min-w-[360px]">
                <div class="rounded-2xl bg-slate-950/40 p-4 ring-1 ring-white/10">
                <div class="text-xs text-slate-300">Email</div>
                <div class="mt-1 text-sm font-semibold">
                    <a class="hover:underline" href="mailto:william.a.dancel@gmail.com">william.a.dancel@gmail.com</a>
                </div>
                </div>

                <div class="rounded-2xl bg-slate-950/40 p-4 ring-1 ring-white/10">
                <div class="text-xs text-slate-300">Contact Number</div>
                <div class="mt-1 text-sm font-semibold">
                    <a class="hover:underline" href="tel:+63 998 256 7098">+63 998 256 7098</a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

      <!-- Footer -->
      <footer class="border-t border-white/10">
        <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div class="flex items-center gap-3">
              <img
                :src="logoSrc"
                alt="CrowPOS logo"
                class="h-9 w-9 rounded-xl bg-white/5 ring-1 ring-white/10"
              />
              <div>
                <div class="text-sm font-semibold">CrowPOS</div>
                <div class="text-xs text-slate-400">Simple POS for daily business</div>
              </div>
            </div>

            <div class="text-xs text-slate-500">
              © {{ new Date().getFullYear() }} CrowPOS
            </div>
          </div>
        </div>
      </footer>

        <!-- Video Lightbox -->
        <div
          v-if="videoLightbox.open"
          class="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
          @click.self="closeVideoLightbox"
        >
          <div class="mx-auto flex h-full max-w-6xl items-center justify-center p-4 sm:p-6">
            <div class="relative w-full rounded-2xl bg-slate-950/80 ring-1 ring-white/10">
              <button
                type="button"
                class="absolute right-3 top-3 rounded-xl bg-white/5 px-3 py-2 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/10"
                @click="closeVideoLightbox"
                aria-label="Close video"
              >
                ✕
              </button>

              <div class="p-3 sm:p-4">
                <video
                  ref="zoomVideoRef"
                  class="max-h-[80vh] w-full rounded-xl object-contain"
                  controls
                  autoplay
                  muted
                  loop
                  playsinline
                >
                  <source :src="videoLightbox.src" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
    </main>
  </div>
<!-- Back to top -->
<button
  v-show="showBackToTop"
  @click="scrollToTop"
  class="fixed bottom-6 right-6 z-50 rounded-2xl bg-white/10 backdrop-blur px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/20 transition-all"
  aria-label="Back to top"
>
  ↑ Top
</button>
</template>

<script setup lang="ts">
import { defineComponent, h, ref, onMounted, onBeforeUnmount } from "vue";

/* -----------------------------
 * Types
 * ----------------------------- */
interface VideoLightboxState {
  open: boolean;
  src: string;
}

/* -----------------------------
 * Video Lightbox
 * ----------------------------- */
const videoLightbox = ref<VideoLightboxState>({
  open: false,
  src: "",
});

const zoomVideoRef = ref<HTMLVideoElement | null>(null);

function openLightboxVideo(src: string): void {
  videoLightbox.value = { open: true, src };
  document.body.style.overflow = "hidden";

  requestAnimationFrame(() => {
    zoomVideoRef.value?.play().catch(() => {});
  });
}

function closeVideoLightbox(): void {
  zoomVideoRef.value?.pause();

  videoLightbox.value.open = false;
  videoLightbox.value.src = "";
  document.body.style.overflow = "";
}

function onKeydown(e: KeyboardEvent): void {
  if (e.key === "Escape" && videoLightbox.value.open) {
    closeVideoLightbox();
  }
}

/* -----------------------------
 * Navbar / Back-to-top
 * ----------------------------- */
const mobileOpen = ref<boolean>(false);
const showBackToTop = ref<boolean>(false);

function onScroll(): void {
  showBackToTop.value = window.scrollY > 300;
}

function scrollToTop(): void {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

/* -----------------------------
 * Lifecycle
 * ----------------------------- */
onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("keydown", onKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("keydown", onKeydown);
  document.body.style.overflow = "";
});

/* -----------------------------
 * Assets
 * ----------------------------- */
const logoSrc: string = "/images/crowpos/crowPOS.png";

/* -----------------------------
 * Components
 * ----------------------------- */
const ModuleRow = defineComponent({
  props: {
    title: { type: String, required: true },
    desc: { type: String, required: true },
  },
  setup(props) {
    return () =>
      h("div", { class: "flex gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10" }, [
        h(
          "div",
          {
            class:
              "mt-0.5 h-8 w-8 shrink-0 rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center",
          },
          h("div", {
            class: "h-2.5 w-2.5 rounded-full bg-gradient-to-r from-cyan-300 to-indigo-300",
          })
        ),
        h("div", null, [
          h("div", { class: "text-sm font-semibold" }, props.title),
          h("div", { class: "mt-1 text-sm text-slate-300" }, props.desc),
        ]),
      ]);
  },
});

const UseCaseCard = defineComponent({
  props: {
    title: { type: String, required: true },
    desc: { type: String, required: true },
  },
  setup(props) {
    return () =>
      h(
        "div",
        {
          class:
            "rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 hover:bg-white/10 transition",
        },
        [
          h("div", { class: "text-sm font-semibold" }, props.title),
          h("div", { class: "mt-1 text-sm text-slate-300" }, props.desc),
        ]
      );
  },
});

const ReportCard = defineComponent({
  props: {
    title: { type: String, required: true },
    desc: { type: String, required: true },
  },
  setup(props) {
    return () =>
      h(
        "div",
        {
          class:
            "rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur hover:bg-white/10 transition",
        },
        [
          h("div", { class: "text-base font-semibold" }, props.title),
          h("p", { class: "mt-3 text-sm leading-relaxed text-slate-300" }, props.desc),
          h("div", { class: "mt-5 h-2 w-full rounded-full bg-white/5 overflow-hidden" }, [
            h("div", {
              class:
                "h-full w-[60%] rounded-full bg-gradient-to-r from-emerald-300 to-cyan-300",
            }),
          ]),
          h("div", { class: "mt-2 text-xs text-slate-400" }, "Simple, readable, actionable"),
        ]
      );
  },
});
</script>

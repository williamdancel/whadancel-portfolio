<script setup lang="ts">
const profile = {
  name: "William Harry A. Dancel",
  role: "PHP Developer | Remote-First",
  location: "San Pablo City, Laguna, Philippines (Open to Global Remote Work)",
  phone: "(+63) 998 256 7098",
  email: "william.a.dancel@gmail.com",
  github: "https://github.com/williamdancel",
  linkedin: "https://linkedin.com/in/william-harry-dancel-06516a231/",
  summary:
    "Remote-ready PHP Web Developer with 7+ years of experience working with distributed teams and international clients. Strong expertise in PHP (Laravel, CodeIgniter, CakePHP), REST APIs, and frontend technologies. Proven ability to maintain and enhance large-scale production systems, communicate effectively across time zones, and deliver results independently in fully remote environments.",
};

const skills = [
  { group: "Backend", items: ["PHP 7.2+–8.3+", "Laravel 12", "CodeIgniter 3", "CakePHP 4", "REST APIs"] },
  { group: "Frontend", items: ["Vue 3", "JavaScript", "jQuery", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap CSS"] },
  { group: "Data", items: ["MySQL", "PostgreSQL"] },
  { group: "Workflow", items: ["Git (GitHub/GitLab/Bitbucket)", "Remote Collaboration", "Cross-timezone communication"] },
];

const highlights = [
  {
    title: "kukuys.live",
    subtitle: "Freelance website for Kukuys Streamer Group (Dota 2 Pros)",
    tags: ["Laravel 12", "Vue 3", "Tailwind"],
    bullets: [
      "Admin dashboard with Dota Pub Tracker",
      "Taryahan matchmaking for CS2 / Dota 2",
      "Partner Enquiries module",
    ],
    url: "https://kukuys.live",
    cta: { label: "View GitHub", href: "https://github.com/williamdancel/kukuys" }, 
  },
  {
    title: "Tinbo.ph",
    subtitle: "OFW digital services platform (Payments, Bills, Virtual Numbers)",
    tags: ["CodeIgniter 3", "jQuery", "Bootstrap"],
    bullets: [
      "Maintained and enhanced production platform features",
      "Worked in a distributed setup with backend microservices team",
      "Focused on reliability and long-term stability",
    ],
    url: "https://tinbo.ph",
    cta: null,
  },
  {
    title: "Tipsportal.com",
    subtitle: "Multi-language sports free tips / betting portal with backoffice",
    tags: ["CodeIgniter 3", "jQuery", "Bootstrap"],
    bullets: [
      "Built and maintained backoffice workflows",
      "Integrated third-party APIs and payment gateways",
      "Supported multi-content + multi-language delivery",
    ],
    url: "https://web.archive.org/web/20201201231927/https://tipsportal.com/", // archived link
    cta: null,
  },
];

const experience = [
  {
    company: "Outsourced Staff",
    title: "Full Stack Developer — Ozcar.com.au (Remote)",
    date: "Nov 2024 – Aug 2025",
    bullets: [
      "Worked fully remote with an international team based in Australia",
      "Maintained and enhanced production systems using CakePHP, jQuery, and Bootstrap",
      "Fixed critical bugs, optimized performance, and improved UI/UX",
      "Ensured cross-browser compatibility and long-term system stability",
    ],
  },
  {
    company: "PLDT Global Corporation",
    title: "Sr. Specialist PHP Web Developer / Team Lead (Remote/Hybrid)",
    date: "Oct 2023 – Sep 2024",
    bullets: [
      "Team Lead developer for Tinbo.ph (OFW digital services platform)",
      "Collaborated with backend microservices teams using Java Spring Boot",
      "Maintained and enhanced Payment as a Service (PAAS) gateway",
      "Led coordinated tasks across teams",
    ],
  },
  {
    company: "PLDT Global Corporation",
    title: "Mid Web Developer (Consultant) (Remote/Hybrid)",
    date: "Apr 2023 – Oct 2023",
    bullets: [
      "Continued maintenance and feature development for Tinbo.ph",
      "Delivered backend and frontend enhancements under tight timelines",
    ],
  },
  {
    company: "SLI Consulting",
    title: "Mid Web Developer",
    date: "Apr 2022 – Mar 2023",
    bullets: [
      "Revamped BeePays to Tinbo.ph",
      "Worked on Zoom x PLDT CRM and PEP (Laravel 5.3, Laravel 8 + Vue)",
      "Worked with cross-functional teams in a distributed setup",
    ],
  },
  {
    company: "Siegreich Solutions Inc.",
    title: "Mid Web Developer",
    date: "May 2018 – Dec 2021",
    bullets: [
      "Team Lead developer for Tipsportal.com",
      "Developed and maintained multiple client platforms and promo systems",
      "Integrated third-party APIs and payment gateways",
    ],
  },
];

const education = {
  school: "Arellano University",
  degree: "Bachelor of Computer Science major in Information Technology",
  date: "2014 – 2018",
  thesis: "IT-JOB MATCH – Online Job Matching System (Laravel 5.5)",
};

const availability = [
  "Immediate availability for full-time remote roles",
  "Comfortable working across time zones",
  "Strong written communication skills",
];
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <!-- Top glow -->
    <div class="pointer-events-none fixed inset-0 overflow-hidden">
      <div class="absolute -top-32 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
      <div class="absolute top-40 right-[-8rem] h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
    </div>

    <!-- Container -->
    <div class="relative mx-auto max-w-6xl px-6 py-10 md:py-14">
        
        <!-- Centered Logo -->
        <div class="mb-10 flex justify-center">
            <img
            src="/images/logo.png"
            alt="Logo"
            class="h-28 w-28 md:h-36 md:w-36 lg:h-40 lg:w-40 object-contain
                    drop-shadow-[0_0_35px_rgba(59,130,246,0.45)]"
            />
        </div>
      <!-- Header -->
      <header class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div class="flex items-center gap-4">
          <div class="grid h-12 w-12 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
            <img src="/images/profile.png" alt="Profile Picture" class="h-10 w-10 rounded-lg object-cover" />
          </div>
          <div>
            <p class="text-sm text-slate-300">Portfolio</p>
            <h1 class="text-xl font-semibold tracking-tight">{{ profile.name }}</h1>
          </div>
        </div>

        <div class="flex flex-wrap gap-3">
          <a
            :href="profile.github"
            target="_blank"
            class="inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-sm ring-1 ring-white/10 hover:bg-white/10"
          >
            <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
            GitHub
          </a>
          <a
            :href="profile.linkedin"
            target="_blank"
            class="inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-sm ring-1 ring-white/10 hover:bg-white/10"
          >
            <span class="h-2 w-2 rounded-full bg-sky-400"></span>
            LinkedIn
          </a>
          <a
            :href="`mailto:${profile.email}`"
            class="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-400"
          >
            Contact
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </header>

      <!-- Hero -->
      <section class="mt-10 grid gap-8 md:mt-14 md:grid-cols-12">
        <div class="md:col-span-7">
          <div class="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs text-slate-300 ring-1 ring-white/10">
            <span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Remote-ready • 7+ years • Laravel + Vue
          </div>

          <h2 class="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Building reliable PHP apps with a clean, modern UI.
          </h2>

          <p class="mt-4 text-slate-300 leading-relaxed">
            {{ profile.summary }}
          </p>

          <div class="mt-6 flex flex-wrap gap-3">
            <div class="rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
              <p class="text-xs text-slate-400">Role</p>
              <p class="text-sm font-medium">{{ profile.role }}</p>
            </div>
            <div class="rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
              <p class="text-xs text-slate-400">Location</p>
              <p class="text-sm font-medium">{{ profile.location }}</p>
            </div>
          </div>

          <div class="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
            <span class="rounded-lg bg-white/5 px-3 py-2 ring-1 ring-white/10">📞 {{ profile.phone }}</span>
            <span class="rounded-lg bg-white/5 px-3 py-2 ring-1 ring-white/10">✉ {{ profile.email }}</span>
          </div>
        </div>

        <div class="md:col-span-5">
          <div class="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
            <h3 class="text-lg font-semibold">Core Skills</h3>
            <p class="mt-1 text-sm text-slate-300">
              Primary stack: <span class="text-white">Laravel 12 • Vue 3 • Tailwind</span>
            </p>

            <div class="mt-5 space-y-4">
              <div v-for="s in skills" :key="s.group" class="rounded-2xl bg-slate-950/40 p-4 ring-1 ring-white/10">
                <p class="text-sm font-medium text-white">{{ s.group }}</p>
                <div class="mt-3 flex flex-wrap gap-2">
                  <span
                    v-for="item in s.items"
                    :key="item"
                    class="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-200 ring-1 ring-white/10"
                  >
                    {{ item }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-5 rounded-3xl bg-gradient-to-b from-indigo-500/20 to-fuchsia-500/10 p-6 ring-1 ring-white/10">
            <h3 class="text-lg font-semibold">Availability</h3>
            <ul class="mt-3 space-y-2 text-sm text-slate-200">
              <li v-for="(a, idx) in availability" :key="idx" class="flex gap-2">
                <span class="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400"></span>
                <span>{{ a }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Projects -->
      <section class="mt-12 md:mt-16">
        <div class="flex items-end justify-between gap-4">
          <div>
            <h3 class="text-2xl font-semibold tracking-tight">Highlighted Projects</h3>
            <p class="mt-1 text-sm text-slate-300">Production-focused work with admin dashboards, APIs, and real users.</p>
          </div>
        </div>

        <div class="mt-6 grid gap-5 md:grid-cols-3">
          <article
            v-for="p in highlights"
            :key="p.title"
            class="group rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 transition hover:bg-white/10"
          >
            <div class="flex items-start justify-between gap-3">
              <div>
                <h4 class="text-lg font-semibold">{{ p.title }}</h4>
                <p class="mt-1 text-sm text-slate-300">{{ p.subtitle }}</p>
              </div>
              <div class="h-10 w-10 rounded-2xl bg-slate-950/40 ring-1 ring-white/10 grid place-items-center">
                <a :href="p.url" target="_blank" class="text-sm">↗</a>
              </div>
            </div>

            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="t in p.tags"
                :key="t"
                class="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-200 ring-1 ring-white/10"
              >
                {{ t }}
              </span>
            </div>

            <ul class="mt-4 space-y-2 text-sm text-slate-200">
              <li v-for="(b, idx) in p.bullets" :key="idx" class="flex gap-2">
                <span class="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-indigo-300"></span>
                <span>{{ b }}</span>
              </li>
            </ul>

            <div v-if="p.cta" class="mt-5">
              <a
                :href="p.cta.href"
                target="_blank"
                class="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-400"
              >
                {{ p.cta.label }}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        </div>
      </section>

      <!-- Experience -->
      <section class="mt-12 md:mt-16">
        <h3 class="text-2xl font-semibold tracking-tight">Experience</h3>
        <p class="mt-1 text-sm text-slate-300">Remote + hybrid teams, production systems, performance and stability.</p>

        <div class="mt-6 space-y-5">
          <div
            v-for="(e, idx) in experience"
            :key="idx"
            class="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10"
          >
            <div class="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div>
                <p class="text-sm text-slate-300">{{ e.company }}</p>
                <h4 class="text-lg font-semibold">{{ e.title }}</h4>
              </div>
              <p class="text-sm text-slate-300">{{ e.date }}</p>
            </div>

            <ul class="mt-4 space-y-2 text-sm text-slate-200">
              <li v-for="(b, bidx) in e.bullets" :key="bidx" class="flex gap-2">
                <span class="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-300"></span>
                <span>{{ b }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Education -->
      <section class="mt-12 md:mt-16">
        <div class="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
          <h3 class="text-2xl font-semibold tracking-tight">Education</h3>
          <p class="mt-3 text-sm text-slate-300">{{ education.school }}</p>
          <p class="text-lg font-semibold">{{ education.degree }}</p>
          <p class="mt-1 text-sm text-slate-300">{{ education.date }}</p>

          <div class="mt-4 rounded-2xl bg-slate-950/40 p-4 ring-1 ring-white/10">
            <p class="text-xs text-slate-400">Thesis</p>
            <p class="text-sm text-slate-200">{{ education.thesis }}</p>
          </div>
        </div>
      </section>

      <!-- CTA Footer -->
      <footer class="mt-12 md:mt-16">
        <div class="rounded-3xl bg-gradient-to-r from-indigo-500/20 to-emerald-500/10 p-7 ring-1 ring-white/10">
          <h3 class="text-2xl font-semibold tracking-tight">Let’s work together</h3>
          <p class="mt-2 text-sm text-slate-200">
            If you need a remote-first PHP developer who can deliver stable production work and modern UI, let’s talk.
          </p>

          <div class="mt-5 flex flex-wrap gap-3">
            <a
              :href="`mailto:${profile.email}`"
              class="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-200"
            >
              Email me
              <span aria-hidden="true">→</span>
            </a>
            <a
              :href="profile.linkedin"
              target="_blank"
              class="inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-sm ring-1 ring-white/10 hover:bg-white/10"
            >
              LinkedIn
            </a>
            <a
              :href="profile.github"
              target="_blank"
              class="inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-sm ring-1 ring-white/10 hover:bg-white/10"
            >
              GitHub
            </a>
          </div>
        </div>

        <p class="mt-6 text-center text-xs text-slate-500">
          © {{ new Date().getFullYear() }} {{ profile.name }} • Built with Laravel + Vue + Tailwind
        </p>
      </footer>
    </div>
  </div>
</template>

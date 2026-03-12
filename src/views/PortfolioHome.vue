<script setup lang="ts">
const profile = {
  name: "William Harry A. Dancel",
  role: "Full Stack PHP Developer | Remote-First",
  location: "San Pablo City, Laguna, Philippines (Open to Global Remote Work)",
  phone: "(+63) 998 256 7098",
  email: "william.a.dancel@gmail.com",
  github: "https://github.com/williamdancel",
  linkedin: "https://linkedin.com/in/william-harry-dancel-06516a231/",
  badges: ['Laravel • Vue • Livewire • Tailwind CSS', '7+ yrs PHP Dev', 'Remote-ready'],
  summary:
    "Remote-ready Full Stack PHP Web Developer with 7+ years of experience working with distributed teams and international clients. Strong expertise in PHP (Laravel, CodeIgniter, CakePHP), REST APIs, and frontend technologies. Proven ability to maintain and enhance large-scale production systems, communicate effectively across time zones, and deliver results independently in fully remote environments.",
};


const skills = [
  { group: "Backend", items: ["PHP 7.2+–8.3+", "Laravel 12", "NativePHP", "CodeIgniter 3", "CakePHP 3", "REST APIs"] },
  { group: "Frontend", items: ["Vue 3", "Livewire", "JavaScript", "jQuery", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap CSS"] },
  { group: "Database", items: ["MySQL", "PostgreSQL", "SQLite"] },
  { group: "Workflow", items: ["Git (GitHub/GitLab/Bitbucket)", "Remote Collaboration", "Cross-timezone communication"] },
];

type ProjectCta = { label: string; href: string } | null;

type HighlightProject = {
  title: string;
  subtitle: string;
  tags: string[];
  bullets: string[];
  url: string;
  cta: ProjectCta;
  image: string;
};

const highlights: HighlightProject[] = [
  {
    title: "kukuys.live",
    subtitle: "Freelance website for Kukuys Streamer Group (Dota 2 Pros)",
    tags: ["Laravel 12", "Vue 3", "Tailwind CSS"],
    bullets: [
      "Admin dashboard with Dota Pub Tracker",
      "Taryahan matchmaking for CS2 / Dota 2",
      "Partner Enquiries module",
    ],
    url: "https://kukuys.live",
    cta: null, 
    image: "/images/highlighted-projects/kukuys.png", 
  },
  {
    title: "CrowPOS",
    subtitle: "is an offline-capable desktop POS. Simple and clean.",
    tags: ["Laravel 12", "Livewire", "Tailwind CSS", "Native PHP (Desktop App)"],
    bullets: [
      "Run Fast Checkouts",
      "Manage categories and items",
      "View Sales Reports",
    ],
    url: "https://www.whadancel.dev/crowpos",
    cta: null,
    image: "/images/highlighted-projects/crowPOS.png", 
  },
  {
    title: "Tinbo.ph",
    subtitle: "OFW digital services platform (Payments, Bills, Virtual Numbers)",
    tags: ["CodeIgniter 3", "jQuery", "Bootstrap CSS"],
    bullets: [
      "Maintained and enhanced production platform features",
      "Worked in a distributed setup with backend microservices team",
      "Focused on reliability and long-term stability",
    ],
    url: "https://tinbo.ph",
    cta: null,
    image: "/images/highlighted-projects/tinbo.png", 
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
    image: "/images/highlighted-projects/tipsportal.png", 
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
    title: "Mid Web Developer (Contract) (Remote)",
    date: "Apr 2022 – Mar 2023",
    bullets: [
      "Revamped BeePays to Tinbo.ph",
      "Worked on Zoom x PLDT CRM and PEP (Laravel 5.3, Laravel 8 + Vue)",
      "Worked with cross-functional teams in a distributed setup",
    ],
  },
  {
    company: "Siegreich Solutions Inc.",
    title: "Mid Web Developer (On-site)",
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
  thesis: "IT-JOB MATCH – Online Job Matching System (Laravel 5.5, Jquery, Bootstrap CSS, MySQL)",
};

const availability = [
  "Immediate availability for full-time remote roles",
  "Comfortable working across time zones",
  "Strong written communication skills",
];
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-900">
    <div class="mx-auto max-w-5xl px-6 py-12">

      <!-- PAPER -->
      <div class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

        <!-- subtle top accent -->
        <div class="h-1 w-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500"></div>

        <div class="p-8 md:p-10">

          <!-- HEADER -->
          <header class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

              <!-- LEFT: NAME + ROLE -->
              <div class="flex items-center gap-6">

                <!-- PROFILE IMAGE -->
                <img
                  src="/images/profile.png"
                  alt="Profile"
                  class="h-24 w-24 rounded-2xl object-cover border border-slate-200 shadow-sm"
                />

                <div>
                  <h1 class="text-3xl font-bold tracking-tight">
                    {{ profile.name }}
                  </h1>

                  <p class="mt-2 text-slate-600">
                    {{ profile.role }}
                  </p>

                  <div class="mt-3 flex flex-wrap gap-2">
                    <span
                      v-for="(b, idx) in profile.badges ?? []"
                      :key="idx"
                      class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {{ b }}
                    </span>
                  </div>
                </div>
              </div>

  <!-- RIGHT: CONTACT + BUTTONS -->
  <div class="flex flex-col items-start gap-3 md:items-end">

    <div class="text-sm text-slate-600 text-left md:text-right">
      <p>{{ profile.location }}</p>
      <a :href="`mailto:${profile.email}`" class="hover:underline">
        {{ profile.email }}
      </a>
    </div>

    <div class="flex gap-3">
      <a
        :href="profile.github"
        target="_blank"
        class="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
      >
        GitHub
      </a>

      <a
        :href="profile.linkedin"
        target="_blank"
        class="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-blue-500 text-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-400"
      >
        LinkedIn
      </a>
    </div>

  </div>
</header>

          <!-- SUMMARY -->
          <section class="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h2 class="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Profile
            </h2>
            <p class="mt-3 text-slate-700 leading-relaxed">
              {{ profile.summary }}
            </p>
          </section>

          <!-- GRID -->
          <div class="mt-10 grid gap-10 md:grid-cols-3">

            <!-- LEFT -->
            <aside class="md:col-span-1 space-y-10">

              <!-- SKILLS -->
              <section>
                <div class="flex items-center gap-3">
                  <div class="h-6 w-1 rounded-full bg-indigo-500"></div>
                  <h2 class="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Skills
                  </h2>
                </div>

                <div class="mt-4 space-y-5">
                  <div v-for="s in skills" :key="s.group">
                    <p class="text-sm font-semibold text-slate-800">{{ s.group }}</p>

                    <div class="mt-2 flex flex-wrap gap-2">
                      <span
                        v-for="(item, idx) in s.items"
                        :key="idx"
                        class="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700"
                      >
                        {{ item }}
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              <!-- EDUCATION -->
              <section>
                <div class="flex items-center gap-3">
                  <div class="h-6 w-1 rounded-full bg-sky-500"></div>
                  <h2 class="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Education
                  </h2>
                </div>

                <div class="mt-4">
                  <p class="font-semibold text-slate-800">{{ education.degree }}</p>
                  <p class="text-sm text-slate-600">{{ education.school }}</p>
                  <p class="text-xs text-slate-500 mt-1">{{ education.date }}</p>

                  <p class="mt-3 text-sm text-slate-600 leading-relaxed">
                    <span class="font-medium text-slate-700">Thesis:</span>
                    {{ education.thesis }}
                  </p>
                </div>
              </section>

              <!-- AVAILABILITY -->
              <section>
                <div class="flex items-center gap-3">
                  <div class="h-6 w-1 rounded-full bg-emerald-500"></div>
                  <h2 class="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Availability
                  </h2>
                </div>

                <ul class="mt-4 space-y-2 text-sm text-slate-700">
                  <li v-for="(a, idx) in availability" :key="idx" class="flex gap-2">
                    <span class="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                    <span>{{ a }}</span>
                  </li>
                </ul>
              </section>
            </aside>

            <!-- RIGHT -->
            <main class="md:col-span-2 space-y-12">

              <!-- PROJECTS -->
              <section>
                <div class="flex items-center gap-3">
                  <div class="h-6 w-1 rounded-full bg-sky-500"></div>
                  <h2 class="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Selected Projects
                  </h2>
                </div>

                <div class="mt-6 grid gap-4">
                  <div
                    v-for="p in highlights"
                    :key="p.title"
                    class="overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:shadow-sm"
                  >
                    <!-- PROJECT IMAGE -->
                    <a :href="p.url" target="_blank" class="block">
                      <img
                        :src="p.image"
                        :alt="`${p.title} preview`"
                        class="h-52 w-full object-cover"
                      />
                    </a>

                    <div class="p-5">
                      <div class="flex items-start justify-between gap-4">
                        <div>
                          <p class="font-semibold text-slate-900">{{ p.title }}</p>
                          <p class="text-sm text-slate-600">{{ p.subtitle }}</p>
                          <p class="mt-2 text-xs text-slate-500">
                            {{ p.tags.join(' • ') }}
                          </p>
                        </div>

                        <a
                          :href="p.url"
                          target="_blank"
                          class="shrink-0 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
                        >
                          View
                        </a>
                      </div>

                      <ul class="mt-4 space-y-2 text-sm text-slate-700">
                        <li v-for="(b, idx) in p.bullets" :key="idx" class="flex gap-2">
                          <span class="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                          <span>{{ b }}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <!-- EXPERIENCE -->
              <section>
                <div class="flex items-center gap-3">
                  <div class="h-6 w-1 rounded-full bg-indigo-500"></div>
                  <h2 class="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Experience
                  </h2>
                </div>

                <div class="mt-6 space-y-8">
                  <div v-for="(e, idx) in experience" :key="idx" class="relative pl-6">
                    <!-- timeline dot -->
                    <div class="absolute left-0 top-2 h-3 w-3 rounded-full bg-indigo-500"></div>
                    <!-- timeline line -->
                    <div class="absolute left-[5px] top-6 h-[calc(100%-1rem)] w-px bg-slate-200"></div>

                    <div class="flex items-start justify-between gap-4">
                      <div>
                        <p class="font-semibold text-slate-900">{{ e.title }}</p>
                        <p class="text-sm text-slate-600">{{ e.company }}</p>
                      </div>
                      <p class="text-xs text-slate-500 whitespace-nowrap">{{ e.date }}</p>
                    </div>

                    <ul class="mt-3 space-y-2 text-sm text-slate-700">
                      <li v-for="(b, bidx) in e.bullets" :key="bidx" class="flex gap-2">
                        <span class="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                        <span>{{ b }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </main>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
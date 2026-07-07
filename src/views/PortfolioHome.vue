<template>
  <div class="portfolio">
    <!-- Hero Section with Contact Info -->
    <section class="hero">
      <div class="hero-content">
        <div class="avatar">
          <img src="/images/profile.png" alt="Profile">
        </div>
        <h1>{{ profile.name }}</h1>
        <p class="role">{{ profile.role }}</p>
        <p class="location">{{ profile.location }}</p>
        <div class="contact-bar">
          <a :href="`mailto:${profile.email}`" class="contact-link">📧 {{ profile.email }}</a>
          <span class="contact-link">📞 {{ profile.phone }}</span>
        </div>
        <div class="badges">
          <span v-for="badge in profile.badges" :key="badge" class="badge">{{ badge }}</span>
        </div>
        <div class="social-links">
          <a :href="profile.github" target="_blank" class="social-btn">GitHub</a>
          <a :href="profile.linkedin" target="_blank" class="social-btn">LinkedIn</a>
        </div>
      </div>
    </section>

    <!-- Summary Section -->
    <section class="summary">
      <div class="container">
        <h2>Professional Summary</h2>
        <p>{{ profile.summary }}</p>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills">
      <div class="container">
        <h2>Technical Skills</h2>
        <div class="skills-grid">
          <div v-for="skill in skills" :key="skill.group" class="skill-group">
            <h3>{{ skill.group }}</h3>
            <div class="skill-tags">
              <span v-for="item in skill.items" :key="item" class="skill-tag">{{ item }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="projects">
      <div class="container">
        <h2>Featured Projects</h2>
        <div class="projects-grid">
          <div v-for="project in highlights" :key="project.title" class="project-card">
            <div 
              class="project-image" 
              :style="{ backgroundImage: 'url(' + project.image + ')' }"
              @click="openGallery(project)"
            >
              <div class="image-overlay">
                <span class="gallery-text">View Gallery</span>
              </div>
            </div>
            <div class="project-content">
              <h3>{{ project.title }}</h3>
              <p class="project-subtitle">{{ project.subtitle }}</p>
              <div class="project-tags">
                <span v-for="tag in project.tags" :key="tag" class="project-tag">{{ tag }}</span>
              </div>
              <ul class="project-bullets">
                <li v-for="bullet in project.bullets" :key="bullet">{{ bullet }}</li>
              </ul>
              <a v-if="project.url.length > 0" :href="project.url" target="_blank" class="project-link">View Project →</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Work Experience -->
    <section class="experience">
      <div class="container">
        <h2>Work Experience</h2>
        <div class="timeline">
          <div v-for="job in experience" :key="job.company + job.date" class="timeline-item">
            <div class="timeline-left">
              <div class="timeline-dot"></div>
            </div>
            <div class="timeline-content">
              <div class="job-header">
                <h3>{{ job.title }}</h3>
                <span class="job-date">{{ job.date }}</span>
              </div>
              <p class="job-company">{{ job.company }}</p>
              <ul>
                <li v-for="bullet in job.bullets" :key="bullet">{{ bullet }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education & Availability -->
    <section class="info-grid">
      <div class="container">
        <div class="grid-2">
          <div class="info-card">
            <h3>🎓 Education</h3>
            <p class="degree">{{ education.degree }}</p>
            <p class="school">{{ education.school }}</p>
            <p class="date">{{ education.date }}</p>
            <p class="thesis"><strong>Thesis:</strong> {{ education.thesis }}</p>
          </div>
          <div class="info-card">
            <h3>✅ Availability</h3>
            <ul>
              <li v-for="item in availability" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Image Gallery Modal -->
    <div v-if="galleryVisible" class="gallery-modal" @click="closeGallery">
      <div class="gallery-modal-content" @click.stop>
        <button class="gallery-close" @click="closeGallery">✕</button>
        
        <div class="gallery-header">
          <h2>{{ currentProject?.title }}</h2>
          <p>{{ currentProject?.subtitle }}</p>
        </div>

        <div class="gallery-main">
          <img 
            :src="galleryImages[currentImageIndex]" 
            :alt="currentProject?.title"
            class="gallery-image"
          />
          
          <button 
            v-if="galleryImages.length > 1" 
            class="gallery-nav gallery-nav-prev" 
            @click="prevImage"
          >
            ❮
          </button>
          <button 
            v-if="galleryImages.length > 1" 
            class="gallery-nav gallery-nav-next" 
            @click="nextImage"
          >
            ❯
          </button>
        </div>

        <div v-if="galleryImages.length > 1" class="gallery-thumbnails">
          <div 
            v-for="(image, index) in galleryImages" 
            :key="index"
            class="gallery-thumbnail"
            :class="{ active: index === currentImageIndex }"
            @click="currentImageIndex = index"
          >
            <img :src="image" :alt="`${currentProject?.title} - Image ${index + 1}`" />
          </div>
        </div>

        <div class="gallery-info">
          <span>{{ currentDisplayIndex }} / {{ totalImages }}</span>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
      <p>© {{ new Date().getFullYear() }} William Harry A. Dancel | Full Stack PHP Developer</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

// Type definitions
interface Project {
  title: string;
  subtitle: string;
  tags: string[];
  bullets: string[];
  url: string;
  image: string;
  gallery: string[];
}

interface Skill {
  group: string;
  items: string[];
}

interface Job {
  company: string;
  title: string;
  date: string;
  bullets: string[];
}

// Profile data
const profile = {
  name: "William Harry A. Dancel",
  role: "Full Stack PHP Developer",
  location: "San Pablo City, Laguna, Philippines (Open to Global Remote Work)",
  phone: "(+63) 998 256 7098",
  email: "william.a.dancel@gmail.com",
  github: "https://github.com/williamdancel",
  linkedin: "https://linkedin.com/in/william-harry-dancel-06516a231/",
  badges: ['• Laravel • Codeigniter • VueJS • JQuery', '8 yrs PHP Dev', 'Docker', 'Remote-ready'],
  summary: "Full Stack PHP Web Developer with 8 years of experience working with distributed teams and international clients. Strong expertise in PHP (Laravel, CodeIgniter, CakePHP), REST APIs, and frontend technologies (VueJS, Tailwind CSS, Bootstrap CSS, Jquery, Javascript). Proven ability to maintain and enhance large-scale production systems, communicate effectively across time zones, and deliver results independently in fully remote/hybrid/onsite environments.",
};

// Skills data
const skills: Skill[] = [
  { group: "Backend", items: ["PHP 7.2+–8.3+", "Laravel 12", "NativePHP", "CodeIgniter 3", "CakePHP 3", "Livewire", "REST APIs"] },
  { group: "Frontend", items: ["Vue 3", "Javascript", "jQuery", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap CSS"] },
  { group: "Database", items: ["MySQL", "PostgreSQL", "SQLite"] },
  { group: "Workflow", items: ["Docker", "Git (GitHub/GitLab/Bitbucket)", "Remote Collaboration", "Cross-timezone communication"] },
];

// Projects data with galleries
const highlights: Project[] = [
   {
    title: "Ruststreet",
    subtitle: "Social Media Platform for the Rust Gaming Community",
    tags: [
      "Laravel 13",
      "Vue.js 3",
      "Inertia.js",
      "Tailwind CSS",
      "Docker"
    ],
    bullets: [
      "Designed and developed a full-stack social platform from the ground up for the Rust gaming community.",
      "Implemented player profiles, clan recruitment, LFG, social feeds, notifications, messaging, and moderation features.",
      "Focused on scalability, clean architecture, performance, and long-term maintainability."
    ],
    url: "",
    image: "/images/highlighted-projects/ruststreet-1.png",
    gallery: [
      "/images/highlighted-projects/ruststreet-1.png",
      "/images/highlighted-projects/ruststreet-2.png",
      "/images/highlighted-projects/ruststreet-3.png",
      "/images/highlighted-projects/ruststreet-4.png",
      "/images/highlighted-projects/ruststreet-5.png",
    ]
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
    image: "/images/highlighted-projects/tinbo.png",
    gallery: [
      "/images/highlighted-projects/tinbo.png",
      "/images/highlighted-projects/tinbo-2.png",
      "/images/highlighted-projects/tinbo-3.png",
      "/images/highlighted-projects/tinbo-4.png",
      "/images/highlighted-projects/tinbo-5.png",
    ]
  },
  {
    title: "Nicolas Leveille Website",
    subtitle: "Freelance website for Nicolas Leveille",
    tags: ["Laravel 13", "Vue 3", "Inertia JS", "Tailwind CSS"],
    bullets: [
      "User Interface of the website",
      "Admin dashboard with Enquiries and Evaluation module",
    ],
    url: "https://gokw.ca/",
    image: "/images/highlighted-projects/nicolas-leveille.png",
    gallery: [
      "/images/highlighted-projects/nicolas-leveille.png",
      "/images/highlighted-projects/nicolas-leveille-2.png",
      "/images/highlighted-projects/nicolas-leveille-3.png",
      "/images/highlighted-projects/nicolas-leveille-4.png",
      "/images/highlighted-projects/nicolas-leveille-5.png",
    ]
  },
  {
    title: "CrowPOS",
    subtitle: "Offline-capable desktop POS. Simple and clean.",
    tags: ["Laravel 12", "Livewire", "Tailwind CSS", "NativePHP (Desktop App)"],
    bullets: [
      "Run Fast Checkouts",
      "Manage categories and items",
      "View Sales Reports",
    ],
    url: "https://www.whadancel.dev/crowpos",
    image: "/images/highlighted-projects/crowPOS.png",
    gallery: [
      "/images/highlighted-projects/crowPOS.png",
      "/images/highlighted-projects/crowPOS-2.png",
      "/images/highlighted-projects/crowPOS-3.png",
      "/images/highlighted-projects/crowPOS-4.png",
      "/images/highlighted-projects/crowPOS-5.png",
      "/images/highlighted-projects/crowPOS-6.png",
      "/images/highlighted-projects/crowPOS-7.png",
    ]
  },
  {
    title: "kukuys.live",
    subtitle: "Personal project website for Kukuys Streamer Group (Dota 2 Pros)",
    tags: ["Laravel 12", "Vue 3", "Inertia JS", "Tailwind CSS"],
    bullets: [
      "Admin dashboard with Dota Pub Tracker",
      "Taryahan matchmaking for CS2 / Dota 2",
      "Partner Enquiries module",
    ],
    url: "",
    image: "/images/highlighted-projects/kukuys.png",
    gallery: [
      "/images/highlighted-projects/kukuys.png",
      "/images/highlighted-projects/kukuys-2.png",
      "/images/highlighted-projects/kukuys-3.png",
      "/images/highlighted-projects/kukuys-4.png",
      "/images/highlighted-projects/kukuys-5.png",
      "/images/highlighted-projects/kukuys-6.png",
    ]
  },
  {
    title: "Tipsportal.com",
    subtitle: "Multi-language sports free tips / betting portal with backoffice",
    tags: ["CodeIgniter 3", "jQuery", "Bootstrap"],
    bullets: [
      "Built and maintained backoffice workflows",
      "Integrated third-party APIs (sportmonks)",
      "Supported multi-content + multi-language delivery",
    ],
    url: "https://web.archive.org/web/20201201231927/https://tipsportal.com/",
    image: "/images/highlighted-projects/tipsportal.png",
    gallery: [
      "/images/highlighted-projects/tipsportal.png",
      "/images/highlighted-projects/tipsportal-2.png",
    ]
  },
];

// Experience data
const experience: Job[] = [
  {
    company: "Meydenbaur Partners",
    title: "Senior Full-Stack Engineer (Part-time)",
    date: "May 2026 – Present",
    bullets: [
      "Awaiting for client assignment",
    ],
  },
  {
    company: "Freelance",
    title: "Freelance Full Stack Developer / Upskilling",
    date: "Sept 2025 – Present",
    bullets: [
      "Designed and developed the Nicolas Leveille website",
      "Built CrowPOS as a full-stack personal POS application",
      "Created kukuys.live, an online community platform",
    ],
  },
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

// Education data
const education = {
  school: "Arellano University",
  degree: "Bachelor of Computer Science major in Information Technology",
  date: "2014 – 2018",
  thesis: "IT-JOB MATCH – Online Job Matching System (Laravel 5.5, Jquery, Bootstrap CSS, MySQL)",
};

// Availability data
const availability: string[] = [
  "Immediate availability",
  "Comfortable working across time zones",
  "Strong written communication skills",
];

// Gallery state with explicit typing
const galleryVisible = ref<boolean>(false);
const currentProject = ref<Project | null>(null);
const currentImageIndex = ref<number>(0);

// Computed properties for gallery
const galleryImages = computed<string[]>(() => {
  return currentProject.value?.gallery || [currentProject.value?.image || ''];
});

const currentDisplayIndex = computed<number>(() => {
  return currentImageIndex.value + 1;
});

const totalImages = computed<number>(() => {
  return galleryImages.value.length;
});

// Gallery methods
const openGallery = (project: Project): void => {
  currentProject.value = project;
  currentImageIndex.value = 0;
  galleryVisible.value = true;
  document.body.style.overflow = 'hidden';
};

const closeGallery = (): void => {
  galleryVisible.value = false;
  document.body.style.overflow = '';
  setTimeout(() => {
    currentProject.value = null;
    currentImageIndex.value = 0;
  }, 300);
};

const nextImage = (): void => {
  const currentIndex = currentImageIndex.value;
  const total = galleryImages.value.length;
  if (currentIndex < total - 1) {
    currentImageIndex.value = currentIndex + 1;
  }
};

const prevImage = (): void => {
  const currentIndex = currentImageIndex.value;
  if (currentIndex > 0) {
    currentImageIndex.value = currentIndex - 1;
  }
};

// Keyboard navigation
const handleKeyDown = (e: KeyboardEvent): void => {
  if (!galleryVisible.value) return;
  
  if (e.key === 'Escape') {
    closeGallery();
  } else if (e.key === 'ArrowRight') {
    nextImage();
  } else if (e.key === 'ArrowLeft') {
    prevImage();
  }
};

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown);
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.portfolio {
  font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  color: #1e293b;
  background: #f8fafc;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4f46e5 100%);
  color: white;
  text-align: center;
  padding: 60px 20px;
}

.avatar {
  width: 120px;
  height: 120px;
  margin: 0 auto 20px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid rgba(255,255,255,0.3);
  box-shadow: 0 10px 25px -5px rgba(0,0,0,0.2);
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.role {
  font-size: 1.2rem;
  font-weight: 500;
  opacity: 0.95;
  margin-bottom: 8px;
}

.location {
  font-size: 0.95rem;
  opacity: 0.85;
  margin-bottom: 20px;
}

.contact-bar {
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.contact-link {
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  background: rgba(255,255,255,0.15);
  padding: 6px 16px;
  border-radius: 40px;
  transition: background 0.2s;
}

.contact-link:hover {
  background: rgba(255,255,255,0.3);
}

.badges {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

.badge {
  background: rgba(255,255,255,0.2);
  backdrop-filter: blur(4px);
  padding: 6px 16px;
  border-radius: 40px;
  font-size: 0.85rem;
  font-weight: 500;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.social-btn {
  background: white;
  color: #4f46e5;
  padding: 8px 24px;
  border-radius: 40px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s, box-shadow 0.2s;
}

.social-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px -5px rgba(0,0,0,0.2);
}

/* Summary */
.summary {
  padding: 60px 0;
  background: white;
}

.summary h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #1e293b;
  text-align: center;
}

.summary p {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #334155;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

/* Skills */
.skills {
  padding: 60px 0;
  background: #f1f5f9;
}

.skills h2 {
  font-size: 1.8rem;
  margin-bottom: 40px;
  text-align: center;
  color: #1e293b;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 32px;
}

.skill-group h3 {
  font-size: 1.2rem;
  margin-bottom: 16px;
  color: #4f46e5;
  border-left: 3px solid #4f46e5;
  padding-left: 12px;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill-tag {
  background: white;
  padding: 6px 14px;
  border-radius: 30px;
  font-size: 0.85rem;
  color: #1e293b;
  border: 1px solid #e2e8f0;
  transition: all 0.2s;
}

.skill-tag:hover {
  border-color: #4f46e5;
  transform: translateY(-2px);
}

/* Projects */
.projects {
  padding: 60px 0;
  background: white;
}

.projects h2 {
  font-size: 1.8rem;
  margin-bottom: 40px;
  text-align: center;
  color: #1e293b;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
}

.project-card {
  background: #f8fafc;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 30px -12px rgba(0,0,0,0.1);
}

.project-image {
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s;
}

.project-image:hover .image-overlay {
  opacity: 1;
}

.project-image:hover {
  transform: scale(1.02);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 20px 20px 0 0;
}

.gallery-icon {
  font-size: 2.5rem;
  margin-bottom: 8px;
}

.gallery-text {
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.2);
  padding: 6px 16px;
  border-radius: 20px;
  backdrop-filter: blur(4px);
}

.project-content {
  padding: 24px;
}

.project-content h3 {
  font-size: 1.3rem;
  margin-bottom: 6px;
  color: #0f172a;
}

.project-subtitle {
  font-size: 0.9rem;
  color: #4f46e5;
  margin-bottom: 12px;
  font-weight: 500;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.project-tag {
  background: #e2e8f0;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 600;
  color: #1e293b;
}

.project-bullets {
  list-style: none;
  margin-bottom: 20px;
}

.project-bullets li {
  font-size: 0.85rem;
  color: #475569;
  padding: 4px 0 4px 20px;
  position: relative;
}

.project-bullets li::before {
  content: "▹";
  position: absolute;
  left: 0;
  color: #4f46e5;
}

.project-link {
  display: inline-block;
  color: #4f46e5;
  text-decoration: none;
  font-weight: 600;
  transition: gap 0.2s;
}

.project-link:hover {
  gap: 8px;
}

/* Gallery Modal */
.gallery-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.gallery-modal-content {
  background: #1e293b;
  border-radius: 20px;
  max-width: 90%;
  max-height: 90vh;
  width: 100%;
  position: relative;
  padding: 20px;
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.gallery-close {
  position: absolute;
  top: 10px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 10;
  transition: transform 0.2s;
}

.gallery-close:hover {
  transform: rotate(90deg);
}

.gallery-header {
  text-align: center;
  margin-bottom: 20px;
  padding-right: 40px;
}

.gallery-header h2 {
  color: white;
  font-size: 1.5rem;
  margin: 0;
}

.gallery-header p {
  color: #94a3b8;
  margin: 4px 0 0;
}

.gallery-main {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
}

.gallery-image {
  max-width: 100%;
  max-height: 60vh;
  object-fit: contain;
  border-radius: 8px;
}

.gallery-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  border: none;
  color: white;
  font-size: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery-nav:hover {
  background: rgba(255, 255, 255, 0.3);
}

.gallery-nav-prev {
  left: 10px;
}

.gallery-nav-next {
  right: 10px;
}

.gallery-thumbnails {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;
  flex-wrap: wrap;
  padding: 10px 0;
}

.gallery-thumbnail {
  width: 80px;
  height: 60px;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid transparent;
  transition: all 0.2s;
}

.gallery-thumbnail:hover {
  transform: scale(1.05);
}

.gallery-thumbnail.active {
  border-color: #4f46e5;
  transform: scale(1.05);
}

.gallery-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery-info {
  text-align: center;
  color: #94a3b8;
  margin-top: 12px;
  font-size: 0.9rem;
}

/* Experience */
.experience {
  padding: 60px 0;
  background: #f1f5f9;
}

.experience h2 {
  font-size: 1.8rem;
  margin-bottom: 40px;
  text-align: center;
  color: #1e293b;
}

.timeline {
  max-width: 800px;
  margin: 0 auto;
}

.timeline-item {
  display: flex;
  gap: 20px;
  margin-bottom: 32px;
}

.timeline-left {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timeline-dot {
  width: 12px;
  height: 12px;
  background: #4f46e5;
  border-radius: 50%;
  margin-top: 6px;
}

.timeline-item:not(:last-child) .timeline-left::after {
  content: '';
  position: absolute;
  top: 24px;
  width: 2px;
  height: calc(100% + 8px);
  background: #cbd5e1;
}

.timeline-content {
  flex: 1;
  background: white;
  padding: 20px;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
}

.job-header {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 6px;
}

.job-header h3 {
  font-size: 1.1rem;
  color: #0f172a;
}

.job-date {
  font-size: 0.8rem;
  color: #64748b;
}

.job-company {
  font-weight: 600;
  color: #4f46e5;
  margin-bottom: 12px;
  font-size: 0.9rem;
}

.timeline-content ul {
  list-style: none;
  padding-left: 0;
}

.timeline-content li {
  font-size: 0.85rem;
  color: #475569;
  padding: 4px 0 4px 20px;
  position: relative;
}

.timeline-content li::before {
  content: "•";
  position: absolute;
  left: 6px;
  color: #4f46e5;
  font-weight: bold;
}

/* Info Grid */
.info-grid {
  padding: 60px 0;
  background: white;
}

.grid-2 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
}

.info-card {
  background: #f8fafc;
  padding: 28px;
  border-radius: 20px;
  border: 1px solid #e2e8f0;
}

.info-card h3 {
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: #1e293b;
}

.degree {
  font-weight: 700;
  font-size: 1rem;
  color: #0f172a;
}

.school {
  color: #4f46e5;
  font-weight: 500;
  margin: 4px 0;
}

.date {
  font-size: 0.8rem;
  color: #64748b;
  margin-bottom: 12px;
}

.thesis {
  font-size: 0.9rem;
  color: #475569;
  margin-top: 12px;
}

.info-card ul {
  list-style: none;
}

.info-card li {
  padding: 8px 0 8px 24px;
  position: relative;
  font-size: 0.9rem;
  color: #334155;
}

.info-card li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #10b981;
  font-weight: bold;
}

/* Footer */
.footer {
  background: #1e293b;
  color: #94a3b8;
  text-align: center;
  padding: 32px;
  font-size: 0.85rem;
}

/* Responsive */
@media (max-width: 768px) {
  .hero h1 { font-size: 1.8rem; }
  .contact-bar { flex-direction: column; align-items: center; gap: 10px; }
  .job-header { flex-direction: column; }
  .timeline-item { flex-direction: column; }
  .timeline-left::after { display: none; }
  .container { padding: 0 20px; }
  
  .gallery-modal-content {
    max-width: 95%;
    padding: 15px;
  }
  
  .gallery-nav {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }
  
  .gallery-thumbnail {
    width: 60px;
    height: 45px;
  }
  
  .gallery-header h2 {
    font-size: 1.2rem;
  }
}
</style>
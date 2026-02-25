<template>
  <div class="services-page">
    <section class="services-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="page-title">Our Services</h1>
          <p class="page-subtitle">
            Comprehensive immigration solutions tailored to your needs
          </p>
        </div>
      </div>
    </section>

    <section class="services-list section">
      <div class="container">
        <div class="services-grid">
          <router-link
            v-for="(service, index) in services"
            :key="index"
            :to="service.path"
            class="service-card-link"
          >
            <div class="service-card">
              <div class="service-icon">
                <component :is="'svg'" v-html="service.icon"></component>
              </div>
              <h3 class="service-title">{{ service.title }}</h3>
              <p class="service-description">{{ service.description }}</p>
              <div class="service-link">
                Learn More
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Need Help Choosing the Right Visa?</h2>
          <p class="cta-subtitle">
            Our experts can guide you to the best immigration pathway
          </p>
          <button class="btn btn-primary" @click="openForm">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>

    <ConsultationForm :isOpen="formOpen" @close="closeForm" />
  </div>
</template>

<script>
import ConsultationForm from "../components/ConsultationForm.vue";

export default {
  name: "Services",
  components: {
    ConsultationForm,
  },
  data() {
    return {
      formOpen: false,
      services: [
        {
          title: "PR Visa",
          description:
            "Get permanent residency with our expert guidance through complex immigration procedures.",
          icon: '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline><path d="M12 12v10"></path><circle cx="12" cy="8" r="1"></circle></svg>',
          path: "/services/pr-visa",
        },
        {
          title: "Work Visa",
          description:
            "Secure work permits for short or long-term employment opportunities abroad.",
          icon: '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><line x1="8" y1="11" x2="16" y2="11"></line><line x1="8" y1="15" x2="16" y2="15"></line><circle cx="12" cy="3" r="1"></circle></svg>',
          path: "/services/work-visa",
        },
        {
          title: "Study Visa",
          description:
            "Pursue world-class education with our comprehensive student visa services.",
          icon: '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path><path d="M6 12l6-3 6 3"></path></svg>',
          path: "/services/study-visa",
        },
        {
          title: "Investor Visa",
          description:
            "Expand your business globally with investment immigration programs.",
          icon: '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path><circle cx="12" cy="12" r="1"></circle></svg>',
          path: "/services/investor-visa",
        },
        {
          title: "Visitor Visa",
          description:
            "Travel for tourism, family visits, or business with our visitor visa assistance.",
          icon: '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
          path: "/services/visitor-visa",
        },
        {
          title: "Job Seeker Visa",
          description:
            "Explore job opportunities abroad with our job seeker visa services and career guidance.",
          icon: '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><path d="M20 8v6"></path><path d="M23 11h-6"></path></svg>',
          path: "/services/job-seeker-visa",
        },
        {
          title: "Air Ticket",
          description:
            "Book flights for immigration, study, work, or leisure with competitive fares and reliable support.",
          icon: '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16v-2l-8-5V3.5a2.5 2.5 0 0 0-5 0V9l-8 5v2l8-2.5V19"></path><line x1="12" y1="9" x2="12" y2="19"></line></svg>',
          path: "/services/air-ticket",
        },
        {
          title: "Tour Package",
          description:
            "Curated tour packages for leisure, exploration, and destination discovery worldwide.",
          icon: '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
          path: "/services/tour-package",
        },
      ],
    };
  },
  methods: {
    openForm() {
      this.formOpen = true;
    },
    closeForm() {
      this.formOpen = false;
    },
  },
};
</script>

<style scoped>
.services-page {
  padding-top: 140px;
}

.services-hero {
  padding: 100px 0;
  background: var(--gradient-hero);
  color: var(--white);
  position: relative;
  overflow: hidden;
}

.services-hero::before {
  content: "";
  position: absolute;
  top: -50%;
  right: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.1) 0%,
    transparent 70%
  );
  border-radius: 50%;
  animation: float 20s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(30px, -30px) scale(1.1);
  }
}

.hero-content {
  text-align: center;
  position: relative;
  z-index: 1;
}

.page-title {
  font-size: 3.75rem;
  font-weight: 800;
  margin-bottom: 24px;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.page-subtitle {
  font-size: 1.375rem;
  opacity: 0.95;
  max-width: 750px;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 400;
}

.services-list {
  padding: 100px 0;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
}

.service-card-link {
  text-decoration: none;
  color: inherit;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.service-card {
  background: var(--white);
  padding: 32px;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gradient-primary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-card:hover {
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.15);
  transform: translateY(-8px);
  border-color: transparent;
}

.service-icon {
  width: 70px;
  height: 70px;
  min-width: 70px;
  min-height: 70px;
  background: linear-gradient(
    135deg,
    rgba(99, 102, 241, 0.1) 0%,
    rgba(236, 72, 153, 0.1) 100%
  );
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  padding: 14px;
  box-sizing: border-box;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
}

.service-icon::before {
  content: "";
  position: absolute;
  inset: 0;
  background: var(--gradient-primary);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.service-card:hover .service-icon {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);
}

.service-card:hover .service-icon::before {
  opacity: 1;
}

.service-icon :deep(svg) {
  width: 100%;
  height: 100%;
  max-width: 36px;
  max-height: 36px;
  color: var(--primary-color);
  transition: all 0.4s ease;
  position: relative;
  z-index: 1;
  display: block;
}

.service-card:hover .service-icon :deep(svg) {
  color: var(--white);
  transform: scale(1.1);
}

.service-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--text-dark);
}

.service-description {
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 0.95rem;
  flex: 1;
}

.service-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--primary-color);
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  position: relative;
  margin-top: auto;
}

.service-link::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gradient-primary);
  transition: width 0.3s ease;
}

.service-card:hover .service-link {
  gap: 12px;
}

.service-card:hover .service-link::after {
  width: 100%;
}

.cta-section {
  padding: 100px 0;
  background: var(--gradient-hero);
  color: var(--white);
  text-align: center;
}

.cta-content {
  position: relative;
  z-index: 1;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 16px;
}

.cta-subtitle {
  font-size: 1.25rem;
  opacity: 0.95;
  margin-bottom: 32px;
}

.btn {
  padding: 14px 28px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background: var(--white);
  color: var(--primary-color);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>

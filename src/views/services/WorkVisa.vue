<template>
  <div class="service-page">
    <section class="service-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="page-title">Work Visa</h1>
          <p class="page-subtitle">
            Secure employment opportunities abroad with our work visa services
          </p>
        </div>
      </div>
    </section>

    <section class="service-content section">
      <div class="container">
        <div class="content-wrapper">
          <div class="main-content">
            <h2 class="section-heading">Work Visa Services</h2>
            <p class="text-content">
              A work visa allows you to legally work in a foreign country for a
              specified period. Whether you're seeking temporary employment,
              transferring within your company, or exploring skilled worker
              programs, we can help you navigate the complex work visa
              application process.
            </p>

            <h2 class="section-heading">Types of Work Visas</h2>
            <div class="programs-grid">
              <div
                v-for="(type, index) in visaTypes"
                :key="index"
                class="program-card"
              >
                <div class="program-icon">
                  <component :is="'svg'" v-html="type.icon"></component>
                </div>
                <h3 class="program-title">{{ type.title }}</h3>
                <p class="program-description">{{ type.description }}</p>
              </div>
            </div>

            <h2 class="section-heading">Popular Work Visa Programs</h2>
            <div class="requirements-list">
              <div
                v-for="(program, index) in programs"
                :key="index"
                class="requirement-item"
              >
                <div class="requirement-icon">
                  <span class="flag">{{ program.flag }}</span>
                </div>
                <div class="requirement-content">
                  <h4 class="requirement-title">{{ program.country }}</h4>
                  <p class="requirement-description">
                    {{ program.description }}
                  </p>
                </div>
              </div>
            </div>

            <h2 class="section-heading">Our Services</h2>
            <div class="services-list">
              <div
                v-for="(service, index) in services"
                :key="index"
                class="service-item"
              >
                <div class="service-number">{{ index + 1 }}</div>
                <div class="service-details">
                  <h4 class="service-name">{{ service.name }}</h4>
                  <p class="service-desc">{{ service.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Ready to Work Abroad?</h2>
          <p class="cta-subtitle">Let us help you secure your work visa</p>
          <button class="btn btn-primary" @click="openForm">
            Book Free Consultation
          </button>
        </div>
      </div>
    </section>

    <ConsultationForm :isOpen="formOpen" @close="closeForm" />
  </div>
</template>

<script>
import ConsultationForm from "../../components/ConsultationForm.vue";

export default {
  name: "WorkVisa",
  components: {
    ConsultationForm,
  },
  data() {
    return {
      formOpen: false,
      visaTypes: [
        {
          title: "Temporary Work Permits",
          description:
            "Short-term employment opportunities for skilled workers.",
          icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
        },
        {
          title: "Intra-Company Transfers",
          description: "Transfer to your company's branch in another country.",
          icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
        },
        {
          title: "Skilled Worker Programs",
          description:
            "Long-term work opportunities for qualified professionals.",
          icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>',
        },
      ],
      programs: [
        {
          country: "Canada",
          flag: "🇨🇦",
          description:
            "Temporary Foreign Worker Program, International Mobility Program, and various provincial nominee programs.",
        },
        {
          country: "Australia",
          flag: "🇦🇺",
          description:
            "Temporary Skill Shortage (TSS) visa, Skilled Regional visa, and various employer-sponsored programs.",
        },
        {
          country: "Germany",
          flag: "🇩🇪",
          description:
            "EU Blue Card for highly qualified professionals, work permit for skilled workers, and job seeker visa.",
        },
        {
          country: "United Kingdom",
          flag: "🇬🇧",
          description:
            "Skilled Worker visa, Health and Care Worker visa, and various sponsored work routes.",
        },
      ],
      services: [
        {
          name: "Job Search Assistance",
          description:
            "Help finding employment opportunities that match your skills and qualifications.",
        },
        {
          name: "Employer Sponsorship",
          description:
            "Guidance on securing employer sponsorship and understanding sponsorship requirements.",
        },
        {
          name: "Application Preparation",
          description:
            "Complete assistance with work visa application forms and documentation.",
        },
        {
          name: "Work Permit Renewal",
          description:
            "Support with extending or renewing your work permit when needed.",
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
.service-page {
  padding-top: 140px;
}

.service-hero {
  padding: 100px 0;
  background: var(--gradient-hero);
  color: var(--white);
  position: relative;
  overflow: hidden;
}

.service-hero::before {
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

.service-content {
  padding: 100px 0;
  background: var(--white);
}

.content-wrapper {
  max-width: 1000px;
  margin: 0 auto;
}

.section-heading {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 24px;
  margin-top: 48px;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-heading:first-child {
  margin-top: 0;
}

.text-content {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-light);
  margin-bottom: 32px;
}

.programs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin: 40px 0;
}

.program-card {
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
  padding: 32px;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  text-align: center;
  transition: all 0.4s ease;
}

.program-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.15);
  border-color: transparent;
}

.program-icon {
  width: 70px;
  height: 70px;
  margin: 0 auto 20px;
  background: linear-gradient(
    135deg,
    rgba(99, 102, 241, 0.1) 0%,
    rgba(236, 72, 153, 0.1) 100%
  );
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  transition: all 0.3s ease;
}

.program-card:hover .program-icon {
  background: var(--gradient-primary);
  color: var(--white);
  transform: scale(1.1) rotate(5deg);
}

.program-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--text-dark);
}

.program-description {
  color: var(--text-light);
  line-height: 1.6;
  font-size: 0.95rem;
}

.requirements-list {
  margin: 40px 0;
}

.requirement-item {
  display: flex;
  gap: 20px;
  padding: 24px;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
  border-radius: 16px;
  margin-bottom: 20px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.requirement-item:hover {
  transform: translateX(8px);
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.1);
}

.requirement-icon {
  width: 64px;
  height: 64px;
  background: var(--gradient-primary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.flag {
  font-size: 2rem;
}

.requirement-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--text-dark);
}

.requirement-description {
  color: var(--text-light);
  line-height: 1.6;
}

.services-list {
  margin: 40px 0;
}

.service-item {
  display: flex;
  gap: 24px;
  padding: 24px;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
  border-radius: 16px;
  margin-bottom: 20px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.service-item:hover {
  transform: translateX(8px);
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.1);
}

.service-number {
  width: 48px;
  height: 48px;
  background: var(--gradient-primary);
  color: var(--white);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 800;
  flex-shrink: 0;
}

.service-name {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--text-dark);
}

.service-desc {
  color: var(--text-light);
  line-height: 1.6;
}

.cta-section {
  padding: 100px 0;
  background: var(--gradient-hero);
  color: var(--white);
  text-align: center;
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

  .section-heading {
    font-size: 2rem;
  }

  .programs-grid {
    grid-template-columns: 1fr;
  }
}
</style>

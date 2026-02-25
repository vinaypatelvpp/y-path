<template>
  <div class="service-page">
    <section class="service-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="page-title">Study Visa</h1>
          <p class="page-subtitle">
            Pursue world-class education abroad with our comprehensive student
            visa services
          </p>
        </div>
      </div>
    </section>

    <section class="service-content section">
      <div class="container">
        <div class="content-wrapper">
          <div class="main-content">
            <h2 class="section-heading">Study Abroad Opportunities</h2>
            <p class="text-content">
              A study visa allows you to pursue education in a foreign country.
              Whether you're looking for undergraduate, graduate, or
              professional programs, we help you navigate the application
              process from university selection to visa approval.
            </p>

            <h2 class="section-heading">Our Study Visa Services</h2>
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

            <h2 class="section-heading">Popular Study Destinations</h2>
            <div class="programs-grid">
              <div
                v-for="(destination, index) in destinations"
                :key="index"
                class="program-card"
              >
                <div class="program-flag">{{ destination.flag }}</div>
                <h3 class="program-title">{{ destination.country }}</h3>
                <p class="program-description">{{ destination.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Ready to Study Abroad?</h2>
          <p class="cta-subtitle">
            Let us help you achieve your educational goals
          </p>
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
  name: "StudyVisa",
  components: {
    ConsultationForm,
  },
  data() {
    return {
      formOpen: false,
      services: [
        {
          name: "University Selection",
          description:
            "Guidance in choosing the right university and program based on your academic background and career goals.",
        },
        {
          name: "Application Support",
          description:
            "Complete assistance with university applications, including document preparation and submission.",
        },
        {
          name: "Student Visa Processing",
          description:
            "Expert handling of student visa applications with attention to all requirements and deadlines.",
        },
        {
          name: "Post-Study Work Options",
          description:
            "Information about work opportunities and pathways to permanent residency after graduation.",
        },
      ],
      destinations: [
        {
          country: "Canada",
          flag: "🇨🇦",
          description:
            "Study Permit, Post-Graduation Work Permit (PGWP), and pathways to PR through Express Entry.",
        },
        {
          country: "Australia",
          flag: "🇦🇺",
          description:
            "Student Visa (Subclass 500), Temporary Graduate Visa (Subclass 485), and Student Guardian Visa (Subclass 590).",
        },
        {
          country: "Germany",
          flag: "🇩🇪",
          description:
            "Student Visa for degree studies, Language Course Visa, and Student Applicant Visa.",
        },
        {
          country: "United Kingdom",
          flag: "🇬🇧",
          description:
            "Student Visa (formerly Tier 4), Graduate Route (Post-study work), and Short-term Study Visa.",
        },
        {
          country: "Austria",
          flag: "🇦🇹",
          description:
            "Student Residence Permit for degree studies, language courses, and research at Austrian universities.",
        },
        {
          country: "Portugal",
          flag: "🇵🇹",
          description:
            "Student Visa for higher education, language courses, and exchange programs in Portugal.",
        },
        {
          country: "Sweden",
          flag: "🇸🇪",
          description:
            "Residence Permit for studies at Swedish universities, with options for work during and after studies.",
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

.program-flag {
  font-size: 3rem;
  margin-bottom: 16px;
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

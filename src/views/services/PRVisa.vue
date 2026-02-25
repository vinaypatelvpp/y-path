<template>
  <div class="service-page">
    <section class="service-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="page-title">Permanent Residency (PR) Visa</h1>
          <p class="page-subtitle">
            Your pathway to permanent residency in your dream destination
          </p>
        </div>
      </div>
    </section>

    <section class="service-content section">
      <div class="container">
        <div class="content-wrapper">
          <div class="main-content">
            <h2 class="section-heading">What is a PR Visa?</h2>
            <p class="text-content">
              A Permanent Residency (PR) visa allows you to live, work, and
              study in a foreign country indefinitely. It's often the first step
              toward citizenship and provides you with most of the rights and
              benefits of a citizen, except voting rights.
            </p>

            <h2 class="section-heading">Popular PR Programs</h2>
            <div class="programs-grid">
              <div
                v-for="(program, index) in programs"
                :key="index"
                class="program-card"
              >
                <div class="program-flag">{{ program.flag }}</div>
                <h3 class="program-title">{{ program.country }}</h3>
                <p class="program-name">{{ program.name }}</p>
                <ul class="program-features">
                  <li
                    v-for="(feature, fIndex) in program.features"
                    :key="fIndex"
                  >
                    {{ feature }}
                  </li>
                </ul>
              </div>
            </div>

            <h2 class="section-heading">Eligibility Requirements</h2>
            <div class="requirements-list">
              <div
                v-for="(req, index) in requirements"
                :key="index"
                class="requirement-item"
              >
                <div class="requirement-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div class="requirement-content">
                  <h4 class="requirement-title">{{ req.title }}</h4>
                  <p class="requirement-description">{{ req.description }}</p>
                </div>
              </div>
            </div>

            <h2 class="section-heading">Our PR Visa Services</h2>
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
          <h2 class="cta-title">Ready to Apply for PR?</h2>
          <p class="cta-subtitle">
            Get expert guidance from our experienced consultants
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
  name: "PRVisa",
  components: {
    ConsultationForm,
  },
  data() {
    return {
      formOpen: false,
      programs: [
        {
          country: "Australia",
          flag: "🇦🇺",
          name: "Skilled Migration Sub-Classes",
          features: [
            "Skilled Independent Visa (Subclass 189)",
            "Skilled Nominated Visa (Subclass 190)",
            "Skilled Work Regional (Subclass 491)",
            "Employer Nomination Scheme (Subclass 186)",
          ],
        },
        {
          country: "Canada",
          flag: "🇨🇦",
          name: "Express Entry & PNP Streams",
          features: [
            "Federal Skilled Worker Program (FSWP)",
            "Federal Skilled Trades Program (FSTP)",
            "Canadian Experience Class (CEC)",
            "Provincial Nominee Program (PNP)",
          ],
        },
        {
          country: "Germany",
          flag: "🇩🇪",
          name: "Skilled Immigration Routes",
          features: [
            "EU Blue Card",
            "Skilled Worker Visa (Residence Permit)",
            "Opportunity Card (Chancenkarte)",
            "Fast-track PR for Highly Skilled",
          ],
        },
        {
          country: "Austria",
          flag: "🇦🇹",
          name: "Red-White-Red Card & Settlement",
          features: [
            "Red-White-Red Card (Skilled Workers)",
            "EU Blue Card Austria",
            "Permanent Residence (Settlement)",
            "Family Reunification",
          ],
        },
        {
          country: "Portugal",
          flag: "🇵🇹",
          name: "Golden Visa & Residence",
          features: [
            "Golden Visa (Investment)",
            "D7 Passive Income Visa",
            "Work Visa to Residence",
            "Family Reunification",
          ],
        },
        {
          country: "Sweden",
          flag: "🇸🇪",
          name: "Work & Residence Permits",
          features: [
            "Work Permit (Employer-sponsored)",
            "EU Blue Card Sweden",
            "Permanent Residence",
            "Family Reunification",
          ],
        },
      ],
      requirements: [
        {
          title: "Age Requirements",
          description:
            "Most programs prefer applicants under 45 years, though some programs have different age criteria.",
        },
        {
          title: "Language Proficiency",
          description:
            "IELTS, CELPIP, or other recognized language test scores demonstrating proficiency in English or the host country's language.",
        },
        {
          title: "Education",
          description:
            "Minimum educational qualifications, typically a bachelor's degree or equivalent, assessed by recognized credential evaluation services.",
        },
        {
          title: "Work Experience",
          description:
            "Relevant work experience in your field, usually 2-5 years depending on the program.",
        },
        {
          title: "Points System",
          description:
            "Meet the minimum points requirement based on factors like age, education, experience, and language skills.",
        },
      ],
      services: [
        {
          name: "Eligibility Assessment",
          description:
            "Comprehensive evaluation of your profile to determine the best PR pathway for you.",
        },
        {
          name: "Documentation Support",
          description:
            "Complete assistance with gathering, preparing, and organizing all required documents.",
        },
        {
          name: "Application Filing",
          description:
            "Expert preparation and submission of your PR application with attention to detail.",
        },
        {
          name: "Follow-up & Updates",
          description:
            "Regular communication and updates throughout the application process.",
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
  margin-bottom: 8px;
  color: var(--text-dark);
}

.program-name {
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 20px;
}

.program-features {
  list-style: none;
  text-align: left;
}

.program-features li {
  padding: 8px 0;
  color: var(--text-light);
  position: relative;
  padding-left: 24px;
}

.program-features li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--success-color);
  font-weight: 700;
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
  width: 48px;
  height: 48px;
  background: var(--gradient-primary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  flex-shrink: 0;
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

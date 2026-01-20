<template>
  <div class="calculator-page">
    <section class="calculator-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="page-title">Points Calculator</h1>
          <p class="page-subtitle">
            Check your eligibility for immigration programs
          </p>
        </div>
      </div>
    </section>

    <section class="calculator-content section">
      <div class="container">
        <div class="content-wrapper">
          <h2 class="section-heading">Select a Country</h2>
          <p class="text-content">
            Choose a country to calculate your immigration points and assess
            your eligibility for various programs.
          </p>

          <div class="calculators-grid">
            <div
              v-for="(calculator, index) in calculators"
              :key="index"
              class="calculator-card"
              @click="openCalculator(calculator.country)"
            >
              <div class="calculator-icon">
                <span class="flag">{{ calculator.flag }}</span>
              </div>
              <h3 class="calculator-title">{{ calculator.country }}</h3>
              <p class="calculator-description">{{ calculator.description }}</p>
              <button class="calculator-btn">
                Calculate Points
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Need Help Understanding Your Score?</h2>
          <p class="cta-subtitle">
            Our experts can help you improve your eligibility
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
import ConsultationForm from "../components/ConsultationForm.vue";

export default {
  name: "Calculator",
  components: {
    ConsultationForm,
  },
  data() {
    return {
      formOpen: false,
      calculators: [
        {
          country: "Canada",
          flag: "🇨🇦",
          description:
            "Calculate your CRS score for Express Entry and provincial programs.",
        },
        {
          country: "Australia",
          flag: "🇦🇺",
          description:
            "Check your points for skilled migration and regional programs.",
        },
        {
          country: "Germany",
          flag: "🇩🇪",
          description:
            "Assess your eligibility for German work and residence permits.",
        },
        {
          country: "United Kingdom",
          flag: "🇬🇧",
          description:
            "Calculate points for UK skilled worker and business visas.",
        },
      ],
    };
  },
  methods: {
    openCalculator(country) {
      const routes = {
        Canada: "/calculator/canada",
        Australia: "/calculator/australia",
        Germany: "/calculator/germany",
        "United Kingdom": "/calculator/uk",
      };
      const route = routes[country];
      if (route) {
        this.$router.push(route);
      }
    },
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
.calculator-page {
  padding-top: 140px;
}

.calculator-hero {
  padding: 100px 0;
  background: var(--gradient-hero);
  color: var(--white);
  position: relative;
  overflow: hidden;
}

.calculator-hero::before {
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

.calculator-content {
  padding: 100px 0;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.section-heading {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 24px;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
}

.text-content {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-light);
  margin-bottom: 50px;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.calculators-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.calculator-card {
  background: var(--white);
  padding: 32px 24px;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  text-align: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.calculator-card::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(99, 102, 241, 0.05) 0%,
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
}

.calculator-card:hover::before {
  opacity: 1;
}

.calculator-card:hover {
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.15);
  transform: translateY(-8px) scale(1.02);
  border-color: transparent;
}

.calculator-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  background: linear-gradient(
    135deg,
    rgba(99, 102, 241, 0.1) 0%,
    rgba(236, 72, 153, 0.1) 100%
  );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(99, 102, 241, 0.2);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  z-index: 1;
}

.calculator-card:hover .calculator-icon {
  border-color: var(--primary-color);
  background: var(--gradient-primary);
  transform: scale(1.1) rotate(360deg);
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);
}

.flag {
  font-size: 2.5rem;
}

.calculator-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--text-dark);
  position: relative;
  z-index: 1;
}

.calculator-description {
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 24px;
  min-height: 48px;
  position: relative;
  z-index: 1;
}

.calculator-btn {
  width: 100%;
  padding: 12px 20px;
  background: var(--white);
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.calculator-btn::before {
  content: "";
  position: absolute;
  inset: 0;
  background: var(--gradient-primary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
  z-index: -1;
}

.calculator-card:hover .calculator-btn::before {
  transform: scaleX(1);
}

.calculator-card:hover .calculator-btn {
  color: var(--white);
  border-color: transparent;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
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

  .calculators-grid {
    grid-template-columns: 1fr;
  }
}
</style>

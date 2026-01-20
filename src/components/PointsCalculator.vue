<template>
  <section class="calculator-section" id="calculator">
    <div class="container">
      <h2 class="section-title">Check Your Eligibility</h2>
      <p class="section-subtitle">
        The Y-Path points calculator is a simple way to assess the strength of
        your profile when applying to work, study, or settle in a foreign
        country.
      </p>

      <div class="calculator-grid">
        <div
          v-for="(calculator, index) in calculators"
          :key="index"
          class="calculator-card"
        >
          <div class="calculator-icon">
            <span class="flag">{{ calculator.flag }}</span>
          </div>
          <h3 class="calculator-title">{{ calculator.country }}</h3>
          <p class="calculator-description">{{ calculator.description }}</p>
          <button
            class="calculator-btn"
            @click="openCalculator(calculator.country)"
          >
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
  </section>
</template>

<script>
export default {
  name: "PointsCalculator",
  data() {
    return {
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
  },
};
</script>

<style scoped>
.calculator-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 50%, #f8fafc 100%);
  position: relative;
}

.calculator-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  margin-top: 50px;
}

.calculator-card {
  background: var(--white);
  padding: 32px 24px;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  text-align: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
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
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--text-dark);
}

.calculator-description {
  color: var(--text-light);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 20px;
  min-height: 48px;
}

.calculator-btn {
  width: 100%;
  padding: 12px 20px;
  background: var(--white);
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.9rem;
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

.calculator-btn:hover::before {
  transform: scaleX(1);
}

.calculator-btn:hover {
  color: var(--white);
  border-color: transparent;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
}

.calculator-btn svg {
  transition: transform 0.2s;
}

.calculator-btn:hover svg {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .calculator-section {
    padding: 60px 0;
  }

  .calculator-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<template>
  <section class="country-section">
    <div class="container">
      <h2 class="section-title">Immigration Services by Country</h2>
      <p class="section-subtitle">
        We provide comprehensive visa and immigration services for popular
        destinations worldwide
      </p>

      <div class="countries-grid">
        <div
          v-for="(country, index) in countries"
          :key="index"
          class="country-card"
        >
          <div class="country-header">
            <div class="country-flag">{{ country.flag }}</div>
            <h3 class="country-name">{{ country.name }}</h3>
          </div>

          <div class="visa-types">
            <div
              v-for="(visa, vIndex) in country.visaTypes"
              :key="vIndex"
              class="visa-item"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polyline points="9 11 12 14 22 4"></polyline>
                <path
                  d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
                ></path>
              </svg>
              <span>{{ visa }}</span>
            </div>
          </div>

          <button class="country-btn" @click="$emit('open-form')">
            Apply Now
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
  name: "CountryCards",
  emits: ["open-form"],
  data() {
    return {
      countries: [
        {
          name: "Canada",
          flag: "🇨🇦",
          visaTypes: [
            "Express Entry PR",
            "Provincial Nominee Program",
            "Work Visa",
            "Study Visa",
            "Business & Investor Visa",
            "Visitor Visa",
          ],
        },
        {
          name: "Australia",
          flag: "🇦🇺",
          visaTypes: [
            "Skilled Migration PR",
            "Regional Visa Programs",
            "Work Visa",
            "Study Visa",
            "Business Innovation Visa",
            "Visitor Visa",
          ],
        },
        {
          name: "Germany",
          flag: "🇩🇪",
          visaTypes: [
            "EU Blue Card",
            "Job Seeker Visa",
            "Work Permit",
            "Study Visa",
            "Business Visa",
            "Digital Nomad Visa",
          ],
        },
        {
          name: "United Kingdom",
          flag: "🇬🇧",
          visaTypes: [
            "Skilled Worker Visa",
            "Graduate Route",
            "Study Visa",
            "Business Visa",
            "Innovator Visa",
            "Visitor Visa",
          ],
        },
        {
          name: "United States",
          flag: "🇺🇸",
          visaTypes: [
            "H-1B Work Visa",
            "L-1 Transfer Visa",
            "EB-5 Investor Visa",
            "F-1 Study Visa",
            "B-1/B-2 Visitor Visa",
            "O-1 Talent Visa",
          ],
        },
        {
          name: "Austria",
          flag: "🇦🇹",
          visaTypes: [
            "Red-White-Red Card",
            "Job Seeker Visa",
            "Work Permit",
            "Study Visa",
            "Business Visa",
            "Startup Visa",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.country-section {
  padding: 80px 0;
  background: var(--white);
}

.countries-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 50px;
}

.country-card {
  background: var(--white);
  border-radius: 8px;
  padding: 28px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.country-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--primary-color);
}

.country-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border-color);
}

.country-flag {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  background: var(--bg-light);
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.country-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-dark);
}

.visa-types {
  flex: 1;
  margin-bottom: 24px;
}

.visa-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  color: var(--text-dark);
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.visa-item:hover {
  color: var(--primary-color);
  padding-left: 4px;
}

.visa-item svg {
  color: var(--success-color);
  flex-shrink: 0;
}

.country-btn {
  width: 100%;
  padding: 12px 20px;
  background: var(--primary-color);
  color: var(--white);
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.country-btn:hover {
  background: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.country-btn svg {
  transition: transform 0.2s;
}

.country-btn:hover svg {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .country-section {
    padding: 60px 0;
  }

  .countries-grid {
    grid-template-columns: 1fr;
  }
}
</style>

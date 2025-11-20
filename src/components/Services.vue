<template>
  <section class="services-section" id="services">
    <div class="container">
      <h2 class="section-title">Our Services</h2>
      <p class="section-subtitle">
        Comprehensive immigration solutions tailored to your needs. We provide
        expert guidance for all types of visas and immigration programs.
      </p>

      <div class="services-grid">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="service-card"
        >
          <div class="service-icon">
            <component :is="'svg'" v-html="service.icon"></component>
          </div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-description">{{ service.description }}</p>
          <ul class="service-features">
            <li v-for="(feature, fIndex) in service.features" :key="fIndex">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              {{ feature }}
            </li>
          </ul>
          <a href="#contact" class="service-link">
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
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Services",
  data() {
    return {
      services: [
        {
          title: "PR Visa",
          description:
            "Get permanent residency with our expert guidance through complex immigration procedures.",
          icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
          features: [
            "Express Entry Programs",
            "Provincial Nominee Programs",
            "Skilled Migration",
            "Family Sponsorship",
          ],
        },
        {
          title: "Work Visa",
          description:
            "Secure work permits for short or long-term employment opportunities abroad.",
          icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>',
          features: [
            "Temporary Work Permits",
            "Intra-Company Transfers",
            "Skilled Worker Programs",
            "Job Search Assistance",
          ],
        },
        {
          title: "Study Visa",
          description:
            "Pursue world-class education with our comprehensive student visa services.",
          icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>',
          features: [
            "University Selection",
            "Application Support",
            "Student Visa Processing",
            "Post-Study Work Options",
          ],
        },
        {
          title: "Investor Visa",
          description:
            "Expand your business globally with investment immigration programs.",
          icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>',
          features: [
            "Business Immigration",
            "Entrepreneur Programs",
            "Investment Options",
            "Business Setup Support",
          ],
        },
        {
          title: "Visitor Visa",
          description:
            "Travel for tourism, family visits, or business with our visitor visa assistance.",
          icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
          features: [
            "Tourist Visas",
            "Business Visit Visas",
            "Family Visit Support",
            "Multiple Entry Options",
          ],
        },
        {
          title: "Additional Services",
          description:
            "Complete support including documentation, language tests, and settlement services.",
          icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>',
          features: [
            "Document Verification",
            "IELTS/Language Preparation",
            "Job Placement",
            "Settlement Services",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.services-section {
  padding: 80px 0;
  background: var(--white);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  margin-top: 50px;
}

.service-card {
  background: var(--white);
  padding: 32px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
  border-color: var(--primary-color);
}

.service-icon {
  width: 64px;
  height: 64px;
  background: #eff6ff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.service-card:hover .service-icon {
  background: var(--primary-color);
}

.service-icon :deep(svg) {
  color: var(--primary-color);
  transition: color 0.3s ease;
}

.service-card:hover .service-icon :deep(svg) {
  color: var(--white);
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
}

.service-features {
  list-style: none;
  margin-bottom: 24px;
  flex: 1;
}

.service-features li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  color: var(--text-dark);
  font-size: 0.9rem;
}

.service-features svg {
  color: var(--success-color);
  flex-shrink: 0;
}

.service-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--primary-color);
  font-weight: 600;
  font-size: 0.95rem;
  transition: gap 0.2s;
}

.service-link:hover {
  gap: 12px;
}

@media (max-width: 768px) {
  .services-section {
    padding: 60px 0;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>

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
          icon: '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline><path d="M12 12v10"></path><circle cx="12" cy="8" r="1"></circle></svg>',
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
          icon: '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><line x1="8" y1="11" x2="16" y2="11"></line><line x1="8" y1="15" x2="16" y2="15"></line><circle cx="12" cy="3" r="1"></circle></svg>',
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
          icon: '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path><path d="M6 12l6-3 6 3"></path></svg>',
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
          icon: '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path><circle cx="12" cy="12" r="1"></circle></svg>',
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
          icon: '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
          features: [
            "Tourist Visas",
            "Business Visit Visas",
            "Family Visit Support",
            "Multiple Entry Options",
          ],
        },
        {
          title: "Job Seeker Visa",
          description:
            "Explore job opportunities abroad with our job seeker visa services and career guidance.",
          icon: '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><path d="M20 8v6"></path><path d="M23 11h-6"></path></svg>',
          features: [
            "Job Search Support",
            "Visa Application Assistance",
            "Career Counseling",
            "Interview Preparation",
          ],
        },
        {
          title: "Additional Services",
          description:
            "Complete support including documentation, language tests, and settlement services.",
          icon: '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline><path d="M20 13v4"></path><path d="M20 17h-4"></path></svg>',
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
  padding: 100px 0;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
  position: relative;
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
  border-radius: 20px;
  border: 1px solid var(--border-color);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  flex-direction: column;
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
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
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
  transition: all 0.3s ease;
  position: relative;
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

.service-link:hover {
  gap: 12px;
}

.service-link:hover::after {
  width: 100%;
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

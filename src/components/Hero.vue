<template>
  <section class="hero" id="home">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            Your Trusted Partner for<br />
            <span class="highlight">Global Immigration</span>
          </h1>
          <p class="hero-description">
            We support the movement of people to a country of their choice for
            migration in order to achieve their dreams and aspirations in the
            realm of work, study, investment, and permanent residency.
          </p>
          <div class="hero-features">
            <div class="feature-badge">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>25+ Years Experience</span>
            </div>
            <div class="feature-badge">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>98% Success Rate</span>
            </div>
            <div class="feature-badge">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Expert Consultants</span>
            </div>
          </div>
          <div class="cta-buttons">
            <button class="btn btn-primary" @click="$emit('open-form')">
              Get Free Assessment
            </button>
            <button class="btn btn-secondary" @click="scrollToServices">
              Our Services
            </button>
          </div>
        </div>
        <div class="hero-image">
          <div class="image-placeholder">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 400 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="400" height="300" fill="#EEF2FF" />
              <circle cx="200" cy="120" r="50" fill="#1e40af" opacity="0.1" />
              <path
                d="M150 180 L200 130 L250 180"
                stroke="#1e40af"
                stroke-width="8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle cx="200" cy="90" r="25" fill="#1e40af" opacity="0.2" />
              <rect
                x="120"
                y="200"
                width="160"
                height="80"
                rx="8"
                fill="#1e40af"
                opacity="0.15"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
  emits: ["open-form"],
  methods: {
    scrollToServices() {
      document
        .querySelector("#services")
        ?.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.hero {
  padding: 160px 0 80px;
  background: var(--white);
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.hero-text {
  animation: fadeInLeft 0.8s ease-out;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 24px;
  color: var(--text-dark);
}

.highlight {
  color: var(--primary-color);
}

.hero-description {
  font-size: 1.125rem;
  color: var(--text-light);
  line-height: 1.7;
  margin-bottom: 32px;
}

.hero-features {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 32px;
}

.feature-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: var(--bg-light);
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-dark);
  border: 1px solid var(--border-color);
}

.feature-badge svg {
  color: var(--success-color);
  flex-shrink: 0;
}

.cta-buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btn {
  padding: 14px 28px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s;
  border: 2px solid transparent;
}

.btn-primary {
  background: var(--primary-color);
  color: var(--white);
}

.btn-primary:hover {
  background: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn-secondary {
  background: var(--white);
  color: var(--primary-color);
  border-color: var(--primary-color);
}

.btn-secondary:hover {
  background: var(--primary-color);
  color: var(--white);
}

.hero-image {
  animation: fadeInRight 0.8s ease-out;
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.image-placeholder {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  background: var(--bg-light);
}

@media (max-width: 968px) {
  .hero {
    padding: 140px 0 60px;
  }

  .hero-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .hero-image {
    order: -1;
  }

  .hero-title {
    font-size: 2.25rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    text-align: center;
  }
}
</style>

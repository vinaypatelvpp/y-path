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
              <span>10+ Years Experience</span>
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
            <img
              :src="heroImageSrc"
              alt="Global Immigration Network"
              class="hero-img"
              @error="handleImageError"
              v-show="!imageError"
            />
            <div v-if="imageError" class="image-fallback">
              <div class="fallback-content">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="80" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
                  <path d="M100 40 L100 100 L60 140 L100 100 L140 140" stroke="rgba(255,255,255,0.5)" stroke-width="3" fill="none" stroke-linecap="round"/>
                </svg>
                <p class="fallback-text">Add your hero image</p>
                <p class="fallback-hint">Place your image file at: <code>public/hero-image.png</code></p>
                <p class="fallback-hint-small">Supported: PNG, JPG, SVG, WebP</p>
              </div>
            </div>
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
  data() {
    return {
      imageError: false,
      heroImageSrc: "/hero-imagee.png",
    };
  },
  methods: {
    scrollToServices() {
      document
        .querySelector("#services")
        ?.scrollIntoView({ behavior: "smooth" });
    },
    handleImageError() {
      this.imageError = true;
    },
  },
};
</script>

<style scoped>
.hero {
  padding: 180px 0 100px;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: "";
  position: absolute;
  top: -50%;
  right: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(
    circle,
    rgba(99, 102, 241, 0.1) 0%,
    transparent 70%
  );
  border-radius: 50%;
  animation: float 20s ease-in-out infinite;
}

.hero::after {
  content: "";
  position: absolute;
  bottom: -30%;
  left: -5%;
  width: 500px;
  height: 500px;
  background: radial-gradient(
    circle,
    rgba(236, 72, 153, 0.1) 0%,
    transparent 70%
  );
  border-radius: 50%;
  animation: float 15s ease-in-out infinite reverse;
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 1;
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
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 28px;
  color: var(--text-dark);
  position: relative;
  z-index: 1;
  letter-spacing: -0.02em;
}

.highlight {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
}

.hero-description {
  font-size: 1.25rem;
  color: var(--text-medium);
  line-height: 1.75;
  margin-bottom: 40px;
  font-weight: 400;
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
  padding: 10px 18px;
  background: linear-gradient(
    135deg,
    rgba(99, 102, 241, 0.1) 0%,
    rgba(236, 72, 153, 0.1) 100%
  );
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-dark);
  border: 1px solid rgba(99, 102, 241, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.feature-badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
  border-color: var(--primary-color);
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
  background: var(--gradient-primary);
  color: var(--white);
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
}

.btn-primary::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transition: left 0.5s;
}

.btn-primary:hover::before {
  left: 100%;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);
}

.btn-secondary {
  background: var(--white);
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  font-weight: 600;
}

.btn-secondary:hover {
  background: var(--gradient-primary);
  color: var(--white);
  border-color: transparent;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
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
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
  background: transparent;
  position: relative;
  z-index: 1;
  transform: perspective(1000px) rotateY(-5deg) rotateX(5deg);
  transition: transform 0.3s ease;
}

.image-placeholder:hover {
  transform: perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.02);
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  background: transparent;
}

.image-fallback {
  width: 100%;
  height: 100%;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-hero);
  border-radius: 20px;
  padding: 40px;
}

.fallback-content {
  text-align: center;
  color: var(--white);
}

.fallback-content svg {
  margin-bottom: 20px;
  opacity: 0.6;
}

.fallback-text {
  color: var(--white);
  font-size: 1.2rem;
  margin-bottom: 12px;
  font-weight: 600;
}

.fallback-hint {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  margin-bottom: 8px;
}

.fallback-hint code {
  background: rgba(255, 255, 255, 0.2);
  padding: 4px 8px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
}

.fallback-hint-small {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
  margin-top: 8px;
}

@media (max-width: 968px) {
  .hero {
    padding: 160px 0 80px;
  }

  .hero-content {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .hero-image {
    order: -1;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-description {
    font-size: 1.125rem;
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

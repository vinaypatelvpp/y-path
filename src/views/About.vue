<template>
  <div class="about-page">
    <section class="about-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="page-title">About Y-Path</h1>
          <p class="page-subtitle">
            Your trusted partner in global immigration for over 10 years
          </p>
        </div>
      </div>
    </section>

    <section class="about-content section">
      <div class="container">
        <div class="content-grid">
          <div class="content-text">
            <h2 class="section-heading">Our Story</h2>
            <p class="text-content">
              Y-Path Immigration Services has been a leading name in the
              immigration industry for over 10 years. We have successfully
              helped thousands of individuals and families achieve their dreams
              of living, working, and studying abroad.
            </p>
            <p class="text-content">
              Our team of experienced immigration consultants understands the
              complexities of visa processes and provides personalized guidance
              tailored to each client's unique situation. We pride ourselves on
              maintaining a 98% success rate and building lasting relationships
              with our clients.
            </p>
          </div>
          <div class="content-image">
            <div class="image-placeholder">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 500 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="aboutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
                  </linearGradient>
                  <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.3" />
                    <stop offset="100%" style="stop-color:#ffffff;stop-opacity:0.1" />
                  </linearGradient>
                </defs>
                
                <!-- Background -->
                <rect width="500" height="400" fill="url(#aboutGradient)" rx="20"/>
                
                <!-- Central icon representing company/team -->
                <circle cx="250" cy="200" r="100" fill="url(#iconGradient)"/>
                <circle cx="250" cy="200" r="80" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
                
                <!-- Team/People representation -->
                <circle cx="220" cy="180" r="20" fill="rgba(255,255,255,0.9)"/>
                <circle cx="250" cy="170" r="22" fill="rgba(255,255,255,0.9)"/>
                <circle cx="280" cy="180" r="20" fill="rgba(255,255,255,0.9)"/>
                
                <!-- Bodies -->
                <ellipse cx="220" cy="220" rx="15" ry="25" fill="rgba(255,255,255,0.8)"/>
                <ellipse cx="250" cy="215" rx="16" ry="28" fill="rgba(255,255,255,0.8)"/>
                <ellipse cx="280" cy="220" rx="15" ry="25" fill="rgba(255,255,255,0.8)"/>
                
                <!-- Hands together / collaboration -->
                <path d="M235 230 Q245 235 255 230" stroke="rgba(255,255,255,0.6)" stroke-width="3" fill="none" stroke-linecap="round"/>
                
                <!-- Success stars -->
                <g transform="translate(150, 120)">
                  <path d="M0,-15 L4,-4 L15,-4 L7,2 L11,13 L0,7 L-11,13 L-7,2 L-15,-4 L-4,-4 Z" fill="rgba(255,255,255,0.6)"/>
                </g>
                <g transform="translate(350, 120)">
                  <path d="M0,-15 L4,-4 L15,-4 L7,2 L11,13 L0,7 L-11,13 L-7,2 L-15,-4 L-4,-4 Z" fill="rgba(255,255,255,0.6)"/>
                </g>
                <g transform="translate(100, 280)">
                  <path d="M0,-12 L3,-3 L12,-3 L5,2 L9,10 L0,6 L-9,10 L-5,2 L-12,-3 L-3,-3 Z" fill="rgba(255,255,255,0.5)"/>
                </g>
                <g transform="translate(400, 280)">
                  <path d="M0,-12 L3,-3 L12,-3 L5,2 L9,10 L0,6 L-9,10 L-5,2 L-12,-3 L-3,-3 Z" fill="rgba(255,255,255,0.5)"/>
                </g>
                
                <!-- Decorative circles -->
                <circle cx="80" cy="80" r="30" fill="rgba(255,255,255,0.1)"/>
                <circle cx="420" cy="320" r="40" fill="rgba(255,255,255,0.08)"/>
                
                <!-- Years of experience indicator -->
                <rect x="200" y="280" width="100" height="40" rx="20" fill="rgba(255,255,255,0.2)"/>
                <text x="250" y="305" text-anchor="middle" fill="white" font-size="18" font-weight="bold">10+ Years</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="values-section section">
      <div class="container">
        <h2 class="section-title">Our Core Values</h2>
        <div class="values-grid">
          <div v-for="(value, index) in values" :key="index" class="value-card">
            <div class="value-icon">
              <component :is="'svg'" v-html="value.icon"></component>
            </div>
            <h3 class="value-title">{{ value.title }}</h3>
            <p class="value-description">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="team-section section">
      <div class="container">
        <h2 class="section-title">Why Choose Y-Path?</h2>
        <div class="features-grid">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="feature-card"
          >
            <div class="feature-number">{{ index + 1 }}</div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Ready to Start Your Immigration Journey?</h2>
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
import ConsultationForm from "../components/ConsultationForm.vue";

export default {
  name: "About",
  components: {
    ConsultationForm,
  },
  data() {
    return {
      formOpen: false,
      values: [
        {
          title: "Integrity",
          description:
            "We maintain the highest ethical standards in all our dealings, ensuring transparency and honesty with every client.",
          icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
        },
        {
          title: "Excellence",
          description:
            "We strive for excellence in every aspect of our service, from initial consultation to final visa approval.",
          icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>',
        },
        {
          title: "Client-Focused",
          description:
            "Your success is our priority. We provide personalized solutions tailored to your unique immigration goals.",
          icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
        },
        {
          title: "Expertise",
          description:
            "With 10+ years of experience, our team stays updated with the latest immigration laws and policies.",
          icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>',
        },
      ],
      features: [
        {
          title: "10+ Years Experience",
          description:
            "Decades of expertise in immigration services across multiple countries.",
        },
        {
          title: "98% Success Rate",
          description:
            "Proven track record of successful visa applications and client satisfaction.",
        },
        {
          title: "Expert Consultants",
          description:
            "Certified immigration consultants with in-depth knowledge of visa processes.",
        },
        {
          title: "Personalized Service",
          description:
            "Tailored immigration solutions based on your unique profile and goals.",
        },
        {
          title: "End-to-End Support",
          description:
            "Comprehensive assistance from initial assessment to post-landing services.",
        },
        {
          title: "Transparent Process",
          description:
            "Clear communication and regular updates throughout your application journey.",
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
.about-page {
  padding-top: 140px;
}

.about-hero {
  padding: 100px 0;
  background: var(--gradient-hero);
  color: var(--white);
  position: relative;
  overflow: hidden;
}

.about-hero::before {
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

.about-content {
  padding: 100px 0;
  background: var(--white);
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.section-heading {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 24px;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-content {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-light);
  margin-bottom: 20px;
}

.content-image {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
}

.image-placeholder {
  width: 100%;
  aspect-ratio: 4/3;
}

.values-section {
  padding: 100px 0;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 50px;
}

.value-card {
  background: var(--white);
  padding: 32px;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  text-align: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.value-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.15);
  border-color: transparent;
}

.value-icon {
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

.value-card:hover .value-icon {
  background: var(--gradient-primary);
  color: var(--white);
  transform: scale(1.1) rotate(5deg);
}

.value-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--text-dark);
}

.value-description {
  color: var(--text-light);
  line-height: 1.6;
  font-size: 0.95rem;
}

.team-section {
  padding: 100px 0;
  background: var(--white);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
}

.feature-card {
  background: var(--white);
  padding: 32px;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
}

.feature-card::before {
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

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.15);
  border-color: transparent;
}

.feature-number {
  width: 50px;
  height: 50px;
  background: var(--gradient-primary);
  color: var(--white);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--text-dark);
}

.feature-description {
  color: var(--text-light);
  line-height: 1.6;
  font-size: 0.95rem;
}

.cta-section {
  padding: 100px 0;
  background: var(--gradient-hero);
  color: var(--white);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-content {
  position: relative;
  z-index: 1;
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

@media (max-width: 968px) {
  .content-grid {
    grid-template-columns: 1fr;
  }

  .page-title {
    font-size: 2.5rem;
  }

  .values-grid,
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<template>
  <div class="legal-page">
    <section class="legal-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="page-title">Privacy Policy</h1>
          <p class="page-subtitle">
            Last updated: {{ new Date().toLocaleDateString() }}
          </p>
        </div>
      </div>
    </section>

    <section class="legal-content section">
      <div class="container">
        <div class="content-wrapper">
          <div class="legal-section">
            <h2 class="section-heading">1. Introduction</h2>
            <p class="text-content">
              Y-Path Immigration Services ("we," "our," or "us") is committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website and use our services.
            </p>
          </div>

          <div class="legal-section">
            <h2 class="section-heading">2. Information We Collect</h2>
            <p class="text-content">
              We may collect information about you in a variety of ways:
            </p>
            <ul class="legal-list">
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number, date of birth, passport details, and other
                information you provide when using our services.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you access
                and use our website, including IP address, browser type, and
                pages visited.
              </li>
              <li>
                <strong>Cookies:</strong> We use cookies to enhance your
                experience and collect information about your preferences.
              </li>
            </ul>
          </div>

          <div class="legal-section">
            <h2 class="section-heading">3. How We Use Your Information</h2>
            <p class="text-content">We use the information we collect to:</p>
            <ul class="legal-list">
              <li>Provide, maintain, and improve our services</li>
              <li>Process your visa applications and consultations</li>
              <li>Communicate with you about our services</li>
              <li>
                Send you updates and promotional materials (with your consent)
              </li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div class="legal-section">
            <h2 class="section-heading">4. Information Sharing</h2>
            <p class="text-content">
              We do not sell your personal information. We may share your
              information only in the following circumstances:
            </p>
            <ul class="legal-list">
              <li>
                With government authorities as required for visa processing
              </li>
              <li>With service providers who assist in our operations</li>
              <li>When required by law or to protect our rights</li>
              <li>With your explicit consent</li>
            </ul>
          </div>

          <div class="legal-section">
            <h2 class="section-heading">5. Data Security</h2>
            <p class="text-content">
              We implement appropriate technical and organizational measures to
              protect your personal information. However, no method of
              transmission over the Internet is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </div>

          <div class="legal-section">
            <h2 class="section-heading">6. Your Rights</h2>
            <p class="text-content">You have the right to:</p>
            <ul class="legal-list">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </div>

          <div class="legal-section">
            <h2 class="section-heading">7. Contact Us</h2>
            <p class="text-content">
              If you have questions about this Privacy Policy, please contact us
              at:
            </p>
            <p class="text-content">
              <strong>Email:</strong> connect@y-path.com<br />
              <strong>Phone:</strong> +91 88090 82762
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Privacy",
};
</script>

<style scoped>
.legal-page {
  padding-top: 140px;
}

.legal-hero {
  padding: 80px 0;
  background: var(--gradient-primary);
  color: var(--white);
  position: relative;
  overflow: hidden;
}

.legal-hero::before {
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
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  line-height: 1.2;
}

.page-subtitle {
  font-size: 1.25rem;
  opacity: 0.95;
}

.legal-content {
  padding: 80px 0;
  background: var(--white);
}

.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.legal-section {
  margin-bottom: 48px;
}

.section-heading {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 20px;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-content {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-light);
  margin-bottom: 16px;
}

.legal-list {
  list-style: none;
  padding-left: 0;
  margin: 20px 0;
}

.legal-list li {
  padding: 12px 0;
  padding-left: 32px;
  position: relative;
  color: var(--text-light);
  line-height: 1.8;
}

.legal-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-size: 1.5rem;
  line-height: 1.2;
}

.legal-list li strong {
  color: var(--text-dark);
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }

  .section-heading {
    font-size: 1.75rem;
  }
}
</style>

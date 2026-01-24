<template>
  <div class="legal-page">
    <section class="legal-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="page-title">Terms & Conditions</h1>
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
            <h2 class="section-heading">1. Acceptance of Terms</h2>
            <p class="text-content">
              By accessing and using Y-Path Immigration Services' website and
              services, you accept and agree to be bound by these Terms and
              Conditions. If you do not agree to these terms, please do not use
              our services.
            </p>
          </div>

          <div class="legal-section">
            <h2 class="section-heading">2. Services</h2>
            <p class="text-content">
              Y-Path provides immigration consulting services, including but not
              limited to:
            </p>
            <ul class="legal-list">
              <li>Visa application assistance</li>
              <li>Immigration consultation</li>
              <li>Document preparation support</li>
              <li>Eligibility assessments</li>
            </ul>
            <p class="text-content">
              We act as consultants and facilitators. Final visa decisions rest
              with the respective government authorities.
            </p>
          </div>

          <div class="legal-section">
            <h2 class="section-heading">3. Client Responsibilities</h2>
            <p class="text-content">As a client, you agree to:</p>
            <ul class="legal-list">
              <li>Provide accurate and complete information</li>
              <li>Submit all required documents in a timely manner</li>
              <li>Pay all applicable fees as agreed</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Notify us of any changes to your circumstances</li>
            </ul>
          </div>

          <div class="legal-section">
            <h2 class="section-heading">4. Fees and Payment</h2>
            <p class="text-content">
              Our service fees are clearly communicated before engagement. Fees
              may vary based on the type of service and complexity of your case.
              Government fees and third-party charges are separate and are your
              responsibility.
            </p>
          </div>

          <div class="legal-section">
            <h2 class="section-heading">5. No Guarantee of Success</h2>
            <p class="text-content">
              While we strive to provide the best possible service, we cannot
              guarantee visa approval. Visa decisions are made solely by
              government authorities based on their criteria and policies.
            </p>
          </div>

          <div class="legal-section">
            <h2 class="section-heading">6. Limitation of Liability</h2>
            <p class="text-content">
              Y-Path shall not be liable for any indirect, incidental, special,
              or consequential damages arising from the use of our services or
              inability to obtain a visa.
            </p>
          </div>

          <div class="legal-section">
            <h2 class="section-heading">7. Intellectual Property</h2>
            <p class="text-content">
              All content on this website, including text, graphics, logos, and
              software, is the property of Y-Path and protected by copyright
              laws.
            </p>
          </div>

          <div class="legal-section">
            <h2 class="section-heading">8. Changes to Terms</h2>
            <p class="text-content">
              We reserve the right to modify these terms at any time. Changes
              will be effective immediately upon posting on our website.
            </p>
          </div>

          <div class="legal-section">
            <h2 class="section-heading">9. Contact Information</h2>
            <p class="text-content">
              For questions about these Terms & Conditions, please contact us:
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
  name: "Terms",
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

<template>
  <div class="contact-page">
    <section class="contact-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="page-title">Contact Us</h1>
          <p class="page-subtitle">Get in touch with our immigration experts</p>
        </div>
      </div>
    </section>

    <section class="contact-content section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <h2 class="section-heading">Get in Touch</h2>
            <p class="text-content">
              Have questions about immigration? Our team is here to help you
              navigate your journey. Reach out to us through any of the
              following channels.
            </p>

            <div class="contact-methods">
              <div class="contact-method">
                <div class="method-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                    ></path>
                  </svg>
                </div>
                <div class="method-details">
                  <h3 class="method-title">Phone</h3>
                  <a href="tel:+918809082762" class="method-link"
                    >+91 88090 82762</a
                  >
                </div>
              </div>

              <div class="contact-method">
                <div class="method-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    ></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div class="method-details">
                  <h3 class="method-title">Email</h3>
                  <a href="mailto:connect@y-path.com" class="method-link"
                    >connect@y-path.com</a
                  >
                </div>
              </div>

              <div class="contact-method">
                <div class="method-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                    ></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div class="method-details">
                  <h3 class="method-title">Location</h3>
                  <p class="method-text">India</p>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-form-wrapper">
            <h2 class="section-heading">Send us a Message</h2>
            <form @submit.prevent="handleSubmit" class="contact-form">
              <div class="form-group">
                <label for="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  v-model="formData.name"
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div class="form-group">
                <label for="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  v-model="formData.email"
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  v-model="formData.phone"
                  placeholder="+91 123 456 7890"
                />
              </div>

              <div class="form-group">
                <label for="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  v-model="formData.subject"
                  required
                  placeholder="What is this regarding?"
                />
              </div>

              <div class="form-group">
                <label for="message">Message *</label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  rows="6"
                  required
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button type="submit" class="submit-btn" :disabled="isSubmitting">
                {{ isSubmitting ? "Sending..." : "Send Message" }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      isSubmitting: false,
      formData: {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    async handleSubmit() {
      this.isSubmitting = true;
      await new Promise((resolve) => setTimeout(resolve, 1500));
      alert("Thank you! We will get back to you soon.");
      this.formData = {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      };
      this.isSubmitting = false;
    },
  },
};
</script>

<style scoped>
.contact-page {
  padding-top: 140px;
}

.contact-hero {
  padding: 100px 0;
  background: var(--gradient-hero);
  color: var(--white);
  position: relative;
  overflow: hidden;
}

.contact-hero::before {
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

.contact-content {
  padding: 100px 0;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
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
}

.text-content {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-light);
  margin-bottom: 40px;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.contact-method {
  display: flex;
  gap: 20px;
  padding: 24px;
  background: var(--white);
  border-radius: 16px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.contact-method:hover {
  transform: translateX(8px);
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.1);
}

.method-icon {
  width: 56px;
  height: 56px;
  background: var(--gradient-primary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  flex-shrink: 0;
}

.method-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--text-dark);
}

.method-link {
  color: var(--primary-color);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
}

.method-link:hover {
  color: var(--primary-dark);
}

.method-text {
  color: var(--text-light);
}

.contact-form-wrapper {
  background: var(--white);
  padding: 40px;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-weight: 600;
  color: var(--text-dark);
  font-size: 0.9rem;
}

.form-group input,
.form-group textarea {
  padding: 12px 16px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-size: 0.95rem;
  transition: all 0.2s;
  font-family: inherit;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  transform: translateY(-1px);
}

.form-group textarea {
  resize: vertical;
}

.submit-btn {
  width: 100%;
  padding: 14px 24px;
  background: var(--gradient-primary);
  color: var(--white);
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  margin-top: 8px;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
  border: none;
  cursor: pointer;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

@media (max-width: 968px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .page-title {
    font-size: 2.5rem;
  }
}
</style>

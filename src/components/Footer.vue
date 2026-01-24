<template>
  <footer class="footer" id="contact">
    <div class="footer-main">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <div class="footer-logo-wrapper">
              <Logo variant="light" :showTagline="true" />
            </div>
            <p class="footer-description">
              India's leading visa and immigration experts with 10+ years of
              experience. We support the movement of people to achieve their
              dreams abroad.
            </p>
            <div class="social-links">
              <a
                href="https://wa.me/918809082762"
                aria-label="WhatsApp"
                class="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div class="footer-section">
            <h4 class="footer-title">Quick Links</h4>
            <ul class="footer-links">
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/about">About Us</router-link></li>
              <li><router-link to="/services">Services</router-link></li>
              <li>
                <router-link to="/calculator">Points Calculator</router-link>
              </li>
              <li><router-link to="/contact">Contact Us</router-link></li>
              <li><router-link to="/privacy">Privacy Policy</router-link></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4 class="footer-title">Our Services</h4>
            <ul class="footer-links">
              <li><router-link to="/services/pr-visa">PR Visa</router-link></li>
              <li>
                <router-link to="/services/work-visa">Work Visa</router-link>
              </li>
              <li>
                <router-link to="/services/study-visa">Study Visa</router-link>
              </li>
              <li>
                <router-link to="/services/investor-visa"
                  >Investor Visa</router-link
                >
              </li>
              <li>
                <router-link to="/services/visitor-visa"
                  >Visitor Visa</router-link
                >
              </li>
              <li><router-link to="/services">All Services</router-link></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4 class="footer-title">Contact Us</h4>
            <div class="contact-info">
              <div class="contact-item">
                <svg
                  width="18"
                  height="18"
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
                <div>
                  <strong>Location:</strong><br />
                  India
                </div>
              </div>
              <div class="contact-item">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  ></path>
                </svg>
                <div>
                  <strong>Phone:</strong><br />
                  <a href="tel:+918809082762">+91 88090 82762</a>
                </div>
              </div>
              <div class="contact-item">
                <svg
                  width="18"
                  height="18"
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
                <div>
                  <strong>Email:</strong><br />
                  <a href="mailto:connect@y-path.com">connect@y-path.com</a>
                </div>
              </div>
              <div class="contact-item">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path
                    d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                  ></path>
                </svg>
                <div>
                  <strong>Website:</strong><br />
                  <a
                    href="https://www.y-path.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >www.y-path.com</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom-content">
          <p class="copyright">
            Copyright © 2024 Y-Path Immigration Services. All rights reserved.
          </p>
          <div class="footer-bottom-links">
            <router-link to="/terms">Terms & Conditions</router-link>
            <span>|</span>
            <router-link to="/privacy">Privacy Policy</router-link>
          </div>
        </div>
      </div>
    </div>

    <a
      href="https://wa.me/918809082762"
      class="whatsapp-float"
      aria-label="WhatsApp us"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
        />
      </svg>
    </a>
  </footer>
</template>

<script>
import Logo from "./Logo.vue";

export default {
  name: "Footer",
  components: {
    Logo,
  },
};
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  color: var(--white);
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gradient-primary);
}

.footer-main {
  padding: 60px 0 40px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 40px;
}

.footer-logo-wrapper {
  margin-bottom: 16px;
}

.footer-description {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
  font-size: 0.9rem;
  margin-bottom: 20px;
}

.social-links {
  display: flex;
  gap: 12px;
}

.social-link {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.social-link:hover {
  background: var(--gradient-primary);
  transform: translateY(-4px) scale(1.1);
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
  border-color: transparent;
}

.footer-title {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--white);
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.2s ease;
  display: inline-block;
  font-size: 0.9rem;
}

.footer-links a:hover {
  color: var(--white);
  padding-left: 4px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
  line-height: 1.6;
}

.contact-item svg {
  color: var(--accent-orange);
  flex-shrink: 0;
  margin-top: 2px;
  transition: all 0.3s ease;
}

.contact-item:hover svg {
  color: var(--accent-color);
  transform: scale(1.1);
}

.contact-item a {
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.2s ease;
}

.contact-item a:hover {
  color: var(--white);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 24px 0;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.copyright {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
}

.footer-bottom-links {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.875rem;
}

.footer-bottom-links a {
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.2s;
}

.footer-bottom-links a:hover {
  color: var(--white);
}

.footer-bottom-links span {
  color: rgba(255, 255, 255, 0.3);
}

.whatsapp-float {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.5);
  z-index: 1000;
  transition: all 0.3s ease;
  animation: pulse 2s infinite;
  border: 3px solid rgba(255, 255, 255, 0.2);
}

.whatsapp-float:hover {
  transform: scale(1.15);
  box-shadow: 0 8px 30px rgba(37, 211, 102, 0.7);
}

@keyframes pulse {
  0%,
  100% {
    box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
  }
  50% {
    box-shadow: 0 4px 20px rgba(37, 211, 102, 0.7);
  }
}

@media (max-width: 768px) {
  .footer-main {
    padding: 40px 0 30px;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
  }

  .whatsapp-float {
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
  }

  .whatsapp-float svg {
    width: 24px;
    height: 24px;
  }
}
</style>

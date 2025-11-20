<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <div class="header-top">
      <div class="container">
        <div class="header-top-content">
          <div class="contact-links">
            <a href="tel:+918293221186" class="contact-link">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                ></path>
              </svg>
              +91 829 322 1186
            </a>
            <a href="mailto:contact@y-path.com" class="contact-link">
              <svg
                width="14"
                height="14"
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
              contact@y-path.com
            </a>
          </div>
          <button class="btn-consultation" @click="$emit('open-form')">
            Free Consultation
          </button>
        </div>
      </div>
    </div>

    <nav class="navbar">
      <div class="container">
        <div class="nav-content">
          <a href="/" class="logo">
            <div class="logo-text">Y-Path</div>
            <div class="logo-tagline">Immigration Services</div>
          </a>

          <button
            class="mobile-menu-btn"
            @click="toggleMenu"
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul class="nav-menu" :class="{ active: menuOpen }">
            <li><a href="#home" @click="closeMenu">Home</a></li>
            <li><a href="#about" @click="closeMenu">About Us</a></li>
            <li class="dropdown">
              <a href="#services" @click="toggleDropdown">
                Services
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </a>
              <ul class="dropdown-menu" :class="{ show: dropdownOpen }">
                <li><a href="#pr-visa" @click="closeMenu">PR Visa</a></li>
                <li><a href="#work-visa" @click="closeMenu">Work Visa</a></li>
                <li><a href="#study-visa" @click="closeMenu">Study Visa</a></li>
                <li>
                  <a href="#investor-visa" @click="closeMenu">Investor Visa</a>
                </li>
                <li>
                  <a href="#visitor-visa" @click="closeMenu">Visitor Visa</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#calculator" @click="closeMenu">Points Calculator</a>
            </li>
            <li><a href="#contact" @click="closeMenu">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  emits: ["open-form"],
  data() {
    return {
      menuOpen: false,
      dropdownOpen: false,
      isScrolled: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    closeMenu() {
      this.menuOpen = false;
      this.dropdownOpen = false;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
  },
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: var(--white);
  transition: box-shadow 0.3s ease;
}

.header.scrolled {
  box-shadow: var(--shadow-md);
}

.header-top {
  background: var(--primary-color);
  padding: 10px 0;
}

.header-top-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.contact-links {
  display: flex;
  gap: 24px;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--white);
  font-size: 0.875rem;
  transition: opacity 0.2s;
}

.contact-link:hover {
  opacity: 0.9;
}

.btn-consultation {
  background: var(--accent-color);
  color: var(--white);
  padding: 8px 20px;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.2s;
}

.btn-consultation:hover {
  background: #dc2626;
  transform: translateY(-1px);
}

.navbar {
  padding: 0;
  background: var(--white);
  border-bottom: 1px solid var(--border-color);
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 70px;
}

.logo {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.logo-text {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--primary-color);
  line-height: 1;
}

.logo-tagline {
  font-size: 0.75rem;
  color: var(--text-light);
  font-weight: 500;
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  padding: 8px;
}

.mobile-menu-btn span {
  width: 25px;
  height: 2px;
  background: var(--text-dark);
  border-radius: 2px;
  transition: all 0.3s;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 32px;
  align-items: center;
  margin: 0;
}

.nav-menu li {
  position: relative;
}

.nav-menu a {
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 500;
  color: var(--text-dark);
  transition: color 0.2s;
  padding: 24px 0;
  font-size: 0.95rem;
}

.nav-menu a:hover {
  color: var(--primary-color);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--white);
  list-style: none;
  padding: 8px 0;
  border-radius: 4px;
  box-shadow: var(--shadow-lg);
  min-width: 200px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
}

.dropdown:hover .dropdown-menu,
.dropdown-menu.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-menu li {
  padding: 0;
}

.dropdown-menu a {
  padding: 10px 20px;
  display: block;
}

.dropdown-menu a:hover {
  background: var(--bg-light);
  color: var(--primary-color);
}

@media (max-width: 768px) {
  .header-top-content {
    flex-direction: column;
    gap: 12px;
  }

  .contact-links {
    flex-direction: column;
    gap: 8px;
    align-items: center;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    top: 140px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: var(--white);
    padding: 20px;
    gap: 0;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    box-shadow: var(--shadow-lg);
    max-height: calc(100vh - 140px);
    overflow-y: auto;
  }

  .nav-menu.active {
    transform: translateX(0);
  }

  .nav-menu li {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
  }

  .nav-menu a {
    padding: 16px 0;
    width: 100%;
  }

  .dropdown-menu {
    position: static;
    box-shadow: none;
    padding: 0 0 0 20px;
    max-height: 0;
    overflow: hidden;
    transform: none;
    opacity: 1;
    visibility: visible;
    border: none;
  }

  .dropdown-menu.show {
    max-height: 500px;
    padding: 10px 0 10px 20px;
  }

  .dropdown-menu li {
    border: none;
  }
}
</style>

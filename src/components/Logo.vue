<template>
  <div class="logo" :class="variant">
    <svg
      class="logo-icon"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- Path/Road element forming a Y shape -->
      <path
        d="M24 8 L24 24"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
        class="path-main"
      />
      <path
        d="M24 24 L16 36"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
        class="path-left"
      />
      <path
        d="M24 24 L32 36"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
        class="path-right"
      />
      <!-- Circles at endpoints representing destinations -->
      <circle cx="24" cy="8" r="3" fill="currentColor" class="dot-top" />
      <circle cx="16" cy="36" r="3" fill="currentColor" class="dot-left" />
      <circle cx="32" cy="36" r="3" fill="currentColor" class="dot-right" />
      <!-- Center point -->
      <circle cx="24" cy="24" r="2.5" fill="currentColor" class="dot-center" />
    </svg>
    <div class="logo-text">
      <span class="logo-name">Y-Path</span>
      <span v-if="showTagline" class="logo-tagline">Immigration Services</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Logo",
  props: {
    variant: {
      type: String,
      default: "default", // 'default', 'light', 'compact'
    },
    showTagline: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}

.logo-icon {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  color: var(--primary-color);
  transition: all 0.3s ease;
  filter: drop-shadow(0 2px 4px rgba(99, 102, 241, 0.2));
}

.logo:hover .logo-icon {
  transform: scale(1.1) rotate(5deg);
  filter: drop-shadow(0 4px 8px rgba(99, 102, 241, 0.4));
}

/* Gradient effect on paths */
.path-main {
  stroke: var(--primary-color);
}

.path-left,
.path-right {
  stroke: var(--accent-color);
}

.dot-top {
  fill: var(--primary-color);
}

.dot-left,
.dot-right {
  fill: var(--accent-color);
}

.dot-center {
  fill: var(--primary-color);
}

.logo-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.logo-name {
  font-size: 1.75rem;
  font-weight: 800;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  letter-spacing: -0.5px;
  transition: all 0.3s ease;
}

.logo:hover .logo-name {
  transform: translateX(2px);
}

.logo-tagline {
  font-size: 0.75rem;
  color: var(--text-light);
  font-weight: 500;
  line-height: 1;
}

/* Light variant for dark backgrounds */
.logo.light .logo-icon {
  color: var(--white);
}

.logo.light .path-main {
  stroke: var(--white);
}

.logo.light .path-left,
.logo.light .path-right {
  stroke: var(--accent-color);
}

.logo.light .dot-top,
.logo.light .dot-center {
  fill: var(--white);
}

.logo.light .logo-name {
  color: var(--white);
}

.logo.light .logo-tagline {
  color: rgba(255, 255, 255, 0.7);
}

/* Compact variant */
.logo.compact {
  gap: 8px;
}

.logo.compact .logo-icon {
  width: 32px;
  height: 32px;
}

.logo.compact .logo-name {
  font-size: 1.5rem;
}

.logo.compact .logo-tagline {
  font-size: 0.7rem;
}

@media (max-width: 768px) {
  .logo-icon {
    width: 36px;
    height: 36px;
  }

  .logo-name {
    font-size: 1.5rem;
  }

  .logo-tagline {
    font-size: 0.7rem;
  }
}
</style>

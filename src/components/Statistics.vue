<template>
  <section class="statistics-section">
    <div class="container">
      <div class="stats-grid">
        <div v-for="(stat, index) in statistics" :key="index" class="stat-card">
          <div class="stat-icon">
            <component :is="'svg'" v-html="stat.icon"></component>
          </div>
          <div class="stat-content">
            <div class="stat-number">
              <span class="counter">{{ animatedValues[index] }}</span>
              <span class="suffix">{{ stat.suffix }}</span>
            </div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Statistics",
  data() {
    return {
      statistics: [
        {
          value: 50,
          suffix: "K+",
          label: "Happy Customers",
          icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
        },
        {
          value: 98,
          suffix: "%",
          label: "Success Rate",
          icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
        },
        {
          value: 10,
          suffix: "+",
          label: "Years Experience",
          icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>',
        },
        {
          value: 100,
          suffix: "K+",
          label: "Visas Processed",
          icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>',
        },
      ],
      animatedValues: [0, 0, 0, 0],
      hasAnimated: false,
    };
  },
  mounted() {
    this.observeSection();
  },
  methods: {
    observeSection() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !this.hasAnimated) {
              this.animateCounters();
              this.hasAnimated = true;
            }
          });
        },
        { threshold: 0.3 }
      );

      const section = this.$el;
      if (section) {
        observer.observe(section);
      }
    },
    animateCounters() {
      this.statistics.forEach((stat, index) => {
        const duration = 2000;
        const steps = 60;
        const increment = stat.value / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            this.animatedValues[index] = stat.value;
            clearInterval(timer);
          } else {
            this.animatedValues[index] = Math.floor(current);
          }
        }, duration / steps);
      });
    },
  },
};
</script>

<style scoped>
.statistics-section {
  padding: 80px 0;
  background: var(--gradient-primary);
  position: relative;
  overflow: hidden;
}

.statistics-section::before {
  content: "";
  position: absolute;
  top: -50%;
  right: -20%;
  width: 800px;
  height: 800px;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.1) 0%,
    transparent 70%
  );
  border-radius: 50%;
  animation: pulse 8s ease-in-out infinite;
}

.statistics-section::after {
  content: "";
  position: absolute;
  bottom: -30%;
  left: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(
    circle,
    rgba(236, 72, 153, 0.15) 0%,
    transparent 70%
  );
  border-radius: 50%;
  animation: pulse 10s ease-in-out infinite reverse;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 20px;
  text-align: left;
  position: relative;
  z-index: 1;
  padding: 20px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.stat-card:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.stat-icon {
  flex-shrink: 0;
  width: 70px;
  height: 70px;
  min-width: 70px;
  min-height: 70px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.25) 0%,
    rgba(255, 255, 255, 0.15) 100%
  );
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 12px;
  box-sizing: border-box;
  overflow: hidden;
}

.stat-card:hover .stat-icon {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.35) 0%,
    rgba(255, 255, 255, 0.25) 100%
  );
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
}

.stat-icon :deep(svg) {
  width: 100%;
  height: 100%;
  max-width: 32px;
  max-height: 32px;
  color: var(--white);
  display: block;
  margin: 0 auto;
}

.stat-content {
  color: var(--white);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 8px;
}

.counter {
  display: inline-block;
}

.suffix {
  font-size: 1.75rem;
  font-weight: 700;
}

.stat-label {
  font-size: 1rem;
  font-weight: 500;
  opacity: 0.95;
}

@media (max-width: 768px) {
  .statistics-section {
    padding: 60px 0;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  .stat-card {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }

  .stat-number {
    font-size: 2rem;
  }

  .suffix {
    font-size: 1.5rem;
  }

  .stat-label {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>

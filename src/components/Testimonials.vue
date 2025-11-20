<template>
  <section class="testimonials-section">
    <div class="container">
      <h2 class="section-title">What Our Clients Say</h2>
      <p class="section-subtitle">
        Real stories from people who successfully immigrated with our help
      </p>

      <div class="testimonials-grid">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="testimonial-card"
        >
          <div class="quote-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-1.176.562-1.93.893-.199.087-.38.194-.559.313-.18.114-.32.25-.462.39-.133.14-.242.293-.345.446-.096.152-.194.297-.27.453-.082.152-.15.33-.214.497-.062.158-.14.313-.193.497-.053.179-.086.362-.121.538-.029.186-.05.372-.054.565-.015.185-.016.378-.016.56 0 .197.001.415.035.626.039.17.054.348.115.512.066.176.137.344.22.5.089.164.18.318.295.455.112.148.235.283.373.397.146.119.3.229.463.319.156.096.338.164.514.225.185.064.349.102.533.138.332.066.682.084 1.02.084.615 0 1.232-.105 1.794-.328.557-.217 1.067-.531 1.472-.97.397-.435.71-.932.895-1.474.183-.545.256-1.142.256-1.714 0-.54-.067-1.097-.217-1.613-.147-.53-.42-1.004-.743-1.416-.323-.407-.723-.75-1.166-.992-.446-.241-.94-.399-1.443-.441zm8.5 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L17.758 4.03c0 0-1.176.562-1.93.893-.199.087-.38.194-.559.313-.18.114-.32.25-.462.39-.133.14-.242.293-.345.446-.096.152-.194.297-.27.453-.082.152-.15.33-.214.497-.062.158-.14.313-.193.497-.053.179-.086.362-.121.538-.029.186-.05.372-.054.565-.015.185-.016.378-.016.56 0 .197.001.415.035.626.039.17.054.348.115.512.066.176.137.344.22.5.089.164.18.318.295.455.112.148.235.283.373.397.146.119.3.229.463.319.156.096.338.164.514.225.185.064.349.102.533.138.332.066.682.084 1.02.084.615 0 1.232-.105 1.794-.328.557-.217 1.067-.531 1.472-.97.397-.435.71-.932.895-1.474.183-.545.256-1.142.256-1.714 0-.54-.067-1.097-.217-1.613-.147-.53-.42-1.004-.743-1.416-.323-.407-.723-.75-1.166-.992-.446-.241-.94-.399-1.443-.441z"
              />
            </svg>
          </div>
          <p class="testimonial-text">{{ testimonial.text }}</p>
          <div class="testimonial-author">
            <div class="author-avatar">
              <span>{{ testimonial.initials }}</span>
            </div>
            <div class="author-info">
              <div class="author-name">{{ testimonial.name }}</div>
              <div class="author-destination">
                {{ testimonial.destination }}
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
  name: "Testimonials",
  data() {
    return {
      testimonials: [
        {
          name: "Priya Sharma",
          initials: "PS",
          destination: "Canada PR",
          text: "Y-Path made my Canadian PR dream come true. Their team was professional, responsive, and guided me through every step of the process. I'm now happily settled in Toronto!",
        },
        {
          name: "Rajesh Kumar",
          initials: "RK",
          destination: "Australia Work Visa",
          text: "I was confused about the visa process, but Y-Path simplified everything for me. Their expertise and support were invaluable. I highly recommend their services to anyone looking to immigrate.",
        },
        {
          name: "Anita Patel",
          initials: "AP",
          destination: "Germany Study Visa",
          text: "Excellent service from start to finish! Y-Path helped me secure admission to a top German university and handled all my visa documentation. Their guidance was exceptional.",
        },
        {
          name: "Amit Singh",
          initials: "AS",
          destination: "UK Investor Visa",
          text: "Professional, knowledgeable, and trustworthy. Y-Path handled my UK investor visa application with great care. Their attention to detail and transparency throughout the process was impressive.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.testimonials-section {
  padding: 80px 0;
  background: var(--bg-light);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 50px;
}

.testimonial-card {
  background: var(--white);
  padding: 32px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.testimonial-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}

.quote-icon {
  color: var(--primary-color);
  opacity: 0.2;
  margin-bottom: 16px;
}

.testimonial-text {
  color: var(--text-dark);
  line-height: 1.7;
  font-size: 0.95rem;
  margin-bottom: 24px;
  flex: 1;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 20px;
  border-top: 1px solid var(--border-color);
}

.author-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--primary-color);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  flex-shrink: 0;
}

.author-info {
  flex: 1;
}

.author-name {
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 4px;
}

.author-destination {
  font-size: 0.875rem;
  color: var(--text-light);
}

@media (max-width: 768px) {
  .testimonials-section {
    padding: 60px 0;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
  }
}
</style>

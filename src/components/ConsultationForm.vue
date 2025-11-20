<template>
  <div class="form-overlay" :class="{ active: isOpen }" @click="closeForm">
    <div class="form-container" @click.stop>
      <button class="close-btn" @click="closeForm" aria-label="Close form">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <div class="form-header">
        <h2 class="form-title">Free Consultation</h2>
        <p class="form-subtitle">
          Fill the form and get a call from our immigration expert!
        </p>
      </div>

      <form @submit.prevent="handleSubmit" class="consultation-form">
        <div class="form-row">
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
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              v-model="formData.phone"
              required
              placeholder="+91 123 456 7890"
            />
          </div>

          <div class="form-group">
            <label for="country">Country of Interest *</label>
            <select id="country" v-model="formData.country" required>
              <option value="">Select a country</option>
              <option value="canada">Canada</option>
              <option value="australia">Australia</option>
              <option value="germany">Germany</option>
              <option value="uk">United Kingdom</option>
              <option value="usa">United States</option>
              <option value="austria">Austria</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label for="visaType">Visa Type *</label>
          <select id="visaType" v-model="formData.visaType" required>
            <option value="">Select visa type</option>
            <option value="pr">PR Visa</option>
            <option value="work">Work Visa</option>
            <option value="study">Study Visa</option>
            <option value="investor">Investor Visa</option>
            <option value="visitor">Visitor Visa</option>
          </select>
        </div>

        <div class="form-group">
          <label for="consultationType">Consultation Type *</label>
          <div class="radio-group">
            <label class="radio-option">
              <input
                type="radio"
                name="consultationType"
                value="phone"
                v-model="formData.consultationType"
                required
              />
              <span>Phone (15 Minutes)</span>
            </label>
            <label class="radio-option">
              <input
                type="radio"
                name="consultationType"
                value="video"
                v-model="formData.consultationType"
              />
              <span>Video (Up to 60 Minutes)</span>
            </label>
            <label class="radio-option">
              <input
                type="radio"
                name="consultationType"
                value="in-person"
                v-model="formData.consultationType"
              />
              <span>In-Person</span>
            </label>
          </div>
        </div>

        <div class="form-group">
          <label for="message">Additional Information</label>
          <textarea
            id="message"
            v-model="formData.message"
            rows="4"
            placeholder="Tell us about your immigration goals..."
          ></textarea>
        </div>

        <button type="submit" class="submit-btn" :disabled="isSubmitting">
          {{ isSubmitting ? "Submitting..." : "Request Call Back" }}
        </button>
      </form>

      <p class="form-note">
        * We respect your privacy and will not share your information with third
        parties.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConsultationForm",
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["close"],
  data() {
    return {
      isSubmitting: false,
      formData: {
        name: "",
        email: "",
        phone: "",
        country: "",
        visaType: "",
        consultationType: "phone",
        message: "",
      },
    };
  },
  watch: {
    isOpen(newVal) {
      if (newVal) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    },
  },
  methods: {
    closeForm() {
      this.$emit("close");
    },
    async handleSubmit() {
      this.isSubmitting = true;
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      alert("Thank you! We will contact you soon.");
      this.resetForm();
      this.isSubmitting = false;
      this.closeForm();
    },
    resetForm() {
      this.formData = {
        name: "",
        email: "",
        phone: "",
        country: "",
        visaType: "",
        consultationType: "phone",
        message: "",
      };
    },
  },
  beforeUnmount() {
    document.body.style.overflow = "";
  },
};
</script>

<style scoped>
.form-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  padding: 20px;
  overflow-y: auto;
}

.form-overlay.active {
  opacity: 1;
  visibility: visible;
}

.form-container {
  background: var(--white);
  border-radius: 8px;
  padding: 40px;
  max-width: 700px;
  width: 100%;
  position: relative;
  box-shadow: var(--shadow-lg);
  transform: translateY(20px);
  transition: transform 0.3s ease;
  max-height: 90vh;
  overflow-y: auto;
}

.form-overlay.active .form-container {
  transform: translateY(0);
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  color: var(--text-light);
  padding: 8px;
  transition: color 0.2s;
}

.close-btn:hover {
  color: var(--text-dark);
}

.form-header {
  margin-bottom: 32px;
}

.form-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 8px;
}

.form-subtitle {
  color: var(--text-light);
  font-size: 1rem;
}

.consultation-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
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
.form-group select,
.form-group textarea {
  padding: 12px 16px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-size: 0.95rem;
  transition: all 0.2s;
  font-family: inherit;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.1);
}

.form-group textarea {
  resize: vertical;
}

.radio-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.radio-option {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}

.radio-option:hover {
  border-color: var(--primary-color);
  background: var(--bg-light);
}

.radio-option input[type="radio"] {
  width: 18px;
  height: 18px;
  margin: 0;
}

.radio-option span {
  font-size: 0.95rem;
  color: var(--text-dark);
}

.submit-btn {
  width: 100%;
  padding: 14px 24px;
  background: var(--primary-color);
  color: var(--white);
  border-radius: 4px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s;
  margin-top: 8px;
}

.submit-btn:hover:not(:disabled) {
  background: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.form-note {
  text-align: center;
  color: var(--text-muted);
  font-size: 0.85rem;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .form-container {
    padding: 30px 20px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .form-title {
    font-size: 1.5rem;
  }
}
</style>

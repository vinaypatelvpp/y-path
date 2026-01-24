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

        <div class="form-row">
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

          <div class="form-group" v-if="formData.visaType">
            <label for="visaSubClass">Visa Sub-Class *</label>
            <select id="visaSubClass" v-model="formData.visaSubClass" required>
              <option value="">Select sub-class</option>
              <option v-for="subClass in availableSubClasses" :key="subClass.value" :value="subClass.value">
                {{ subClass.label }}
              </option>
              <option value="other">Other / Not Sure</option>
            </select>
          </div>
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
          <label for="cv">Upload CV (Optional)</label>
          <div class="file-upload-wrapper">
            <input
              type="file"
              id="cv"
              ref="cvInput"
              @change="handleFileChange"
              accept=".pdf,.doc,.docx"
              class="file-input"
            />
            <div class="file-custom-design">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
              <span>{{ formData.cvName || 'Choose your CV (PDF, DOC, DOCX)' }}</span>
            </div>
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

        <div v-if="submitStatus" class="submit-message" :class="submitStatus">
          <svg v-if="submitStatus === 'success'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <span>{{ submitMessage }}</span>
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
import { loadEmailJS } from '../utils/emailjs-loader.js';

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
      submitStatus: null, // 'success' or 'error'
      submitMessage: '',
      emailjs: null,
      formData: {
        name: "",
        email: "",
        phone: "",
        country: "",
        visaType: "",
        visaSubClass: "",
        consultationType: "phone",
        message: "",
        cvName: "",
        cvFile: null,
      },
    };
  },
  computed: {
    availableSubClasses() {
      const subClasses = {
        pr: [
          { label: 'Skilled Independent (189)', value: '189' },
          { label: 'Skilled Nominated (190)', value: '190' },
          { label: 'Skilled Work Regional (491)', value: '491' },
          { label: 'Express Entry (Canada)', value: 'express_entry' },
          { label: 'Provincial Nominee (PNP)', value: 'pnp' },
        ],
        work: [
          { label: 'Temporary Skill Shortage (482)', value: '482' },
          { label: 'Employer Nomination Scheme (186)', value: '186' },
          { label: 'Skilled Worker Visa (UK)', value: 'uk_skilled' },
          { label: 'Health & Care Worker (UK)', value: 'uk_health' },
          { label: 'LMIA Work Permit (Canada)', value: 'canada_lmia' },
        ],
        study: [
          { label: 'Higher Education', value: 'higher_ed' },
          { label: 'Vocational Education', value: 'vocational' },
          { label: 'Postgraduate Research', value: 'research' },
          { label: 'ELICOS / Language', value: 'language' },
        ],
        investor: [
          { label: 'Business Innovation', value: 'business_inv' },
          { label: 'Significant Investor', value: 'sig_investor' },
          { label: 'Entrepreneur Stream', value: 'entrepreneur' },
          { label: 'Global Talent Visa', value: 'global_talent' },
        ],
        visitor: [
          { label: 'Tourist / Leisure', value: 'tourist' },
          { label: 'Business Visitor', value: 'business_visit' },
          { label: 'Family Visit', value: 'family_visit' },
        ],
      };
      return subClasses[this.formData.visaType] || [];
    },
  },
  watch: {
    'formData.visaType'() {
      // Reset sub-class when visa type changes
      this.formData.visaSubClass = "";
    },
    isOpen(newVal) {
      if (newVal) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    },
  },
  async mounted() {
    // Load EmailJS using utility function
    this.emailjs = await loadEmailJS();
    
    // Initialize EmailJS with your public key if available
    if (this.emailjs) {
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";
      if (publicKey !== "YOUR_PUBLIC_KEY" && typeof this.emailjs.init === 'function') {
        this.emailjs.init(publicKey);
      }
    }
  },
  methods: {
    closeForm() {
      this.$emit("close");
      // Reset status when closing
      setTimeout(() => {
        this.submitStatus = null;
        this.submitMessage = '';
      }, 300);
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        if (file.size > 5 * 1024 * 1024) { // 5MB limit
          this.submitStatus = 'error';
          this.submitMessage = 'File size too large. Please upload a file smaller than 5MB.';
          event.target.value = '';
          this.formData.cvName = '';
          this.formData.cvFile = null;
          return;
        }
        this.formData.cvName = file.name;
        this.formData.cvFile = file;
      }
    },
    async handleSubmit() {
      this.isSubmitting = true;
      this.submitStatus = null;
      this.submitMessage = '';

      // Check if EmailJS is available
      if (!this.emailjs) {
        this.submitStatus = 'error';
        this.submitMessage = 'Email service not configured. Please install @emailjs/browser package and configure EmailJS. See EMAILJS_SETUP.md for instructions.';
        this.isSubmitting = false;
        return;
      }

      try {
        // Prepare email template parameters
        const templateParams = {
          to_email: 'connect@y-path.com',
          from_name: this.formData.name,
          from_email: this.formData.email,
          phone: this.formData.phone,
          country: this.getCountryLabel(this.formData.country),
          visa_type: this.getVisaTypeLabel(this.formData.visaType),
          visa_sub_class: this.getVisaSubClassLabel(this.formData.visaSubClass),
          consultation_type: this.getConsultationTypeLabel(this.formData.consultationType),
          message: this.formData.message || 'No additional information provided',
          subject: `New Consultation Request from ${this.formData.name}`,
          cv_attached: this.formData.cvFile ? 'Yes' : 'No',
          // Format the email body
          email_body: this.formatEmailBody(),
        };

        // Note: For EmailJS to send attachments, you typically need to pass the file object 
        // as a parameter and ensure your template is configured to handle attachments.
        // If your template has an attachment field, EmailJS browser SDK can handle File objects.
        if (this.formData.cvFile) {
          templateParams.my_file = this.formData.cvFile;
        }

        // Send email using EmailJS
        // Get these IDs from EmailJS dashboard: https://dashboard.emailjs.com/admin
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
        
        if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID') {
          throw new Error('EmailJS not configured. Please set up EmailJS service. See EMAILJS_SETUP.md for instructions.');
        }

        const response = await this.emailjs.send(
          serviceId,
          templateId,
          templateParams
        );

        if (response.status === 200) {
          this.submitStatus = 'success';
          this.submitMessage = 'Thank you! Your request has been submitted. We will contact you soon.';
          
          // Reset form after successful submission
          setTimeout(() => {
            this.resetForm();
            this.closeForm();
          }, 2000);
        } else {
          throw new Error('Failed to send email');
        }
      } catch (error) {
        console.error('Email sending error:', error);
        this.submitStatus = 'error';
        const errorMsg = error.message || 'Sorry, there was an error submitting your request.';
        this.submitMessage = errorMsg.includes('EmailJS not configured') 
          ? errorMsg 
          : 'Sorry, there was an error submitting your request. Please try again or contact us directly at connect@y-path.com';
      } finally {
        this.isSubmitting = false;
      }
    },
    formatEmailBody() {
      return `
New Consultation Request

Name: ${this.formData.name}
Email: ${this.formData.email}
Phone: ${this.formData.phone}
Country of Interest: ${this.getCountryLabel(this.formData.country)}
Visa Type: ${this.getVisaTypeLabel(this.formData.visaType)}
Visa Sub-Class: ${this.getVisaSubClassLabel(this.formData.visaSubClass)}
Consultation Type: ${this.getConsultationTypeLabel(this.formData.consultationType)}
CV Attached: ${this.formData.cvFile ? 'Yes' : 'No'}
${this.formData.message ? `\nAdditional Information:\n${this.formData.message}` : ''}

---
This email was sent from the Y-Path website consultation form.
      `.trim();
    },
    getCountryLabel(value) {
      const countries = {
        canada: 'Canada',
        australia: 'Australia',
        germany: 'Germany',
        uk: 'United Kingdom',
        usa: 'United States',
        austria: 'Austria',
        other: 'Other'
      };
      return countries[value] || value;
    },
    getVisaTypeLabel(value) {
      const visaTypes = {
        pr: 'PR Visa',
        work: 'Work Visa',
        study: 'Study Visa',
        investor: 'Investor Visa',
        visitor: 'Visitor Visa'
      };
      return visaTypes[value] || value;
    },
    getVisaSubClassLabel(value) {
      if (!value) return 'N/A';
      if (value === 'other') return 'Other / Not Sure';
      
      const allSubClasses = this.availableSubClasses;
      const found = allSubClasses.find(s => s.value === value);
      return found ? found.label : value;
    },
    getConsultationTypeLabel(value) {
      const types = {
        phone: 'Phone (15 Minutes)',
        video: 'Video (Up to 60 Minutes)',
        'in-person': 'In-Person'
      };
      return types[value] || value;
    },
    resetForm() {
      this.formData = {
        name: "",
        email: "",
        phone: "",
        country: "",
        visaType: "",
        visaSubClass: "",
        consultationType: "phone",
        message: "",
        cvName: "",
        cvFile: null,
      };
      if (this.$refs.cvInput) {
        this.$refs.cvInput.value = '';
      }
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
  border-radius: 24px;
  padding: 40px;
  max-width: 700px;
  width: 100%;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  transform: translateY(20px);
  transition: transform 0.3s ease;
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid rgba(99, 102, 241, 0.1);
}

.form-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gradient-primary);
  border-radius: 24px 24px 0 0;
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
  font-weight: 800;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  transform: translateY(-1px);
}

.form-group textarea {
  resize: vertical;
}

.file-upload-wrapper {
  position: relative;
  width: 100%;
}

.file-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 2;
}

.file-custom-design {
  padding: 12px 16px;
  border: 1px dashed var(--border-color);
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 12px;
  background: #f8fafc;
  transition: all 0.2s;
  color: var(--text-light);
}

.file-input:hover + .file-custom-design {
  border-color: var(--primary-color);
  background: rgba(99, 102, 241, 0.05);
}

.file-custom-design svg {
  color: var(--primary-color);
}

.file-custom-design span {
  font-size: 0.95rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  background: linear-gradient(
    135deg,
    rgba(99, 102, 241, 0.05) 0%,
    rgba(236, 72, 153, 0.05) 100%
  );
  transform: translateX(4px);
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
  background: var(--gradient-primary);
  color: var(--white);
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  margin-top: 8px;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
  position: relative;
  overflow: hidden;
}

.submit-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transition: left 0.5s;
}

.submit-btn:hover:not(:disabled)::before {
  left: 100%;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit-message {
  padding: 12px 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.95rem;
  font-weight: 500;
}

.submit-message.success {
  background: rgba(16, 185, 129, 0.1);
  color: #059669;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.submit-message.error {
  background: rgba(239, 68, 68, 0.1);
  color: #dc2626;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.submit-message svg {
  flex-shrink: 0;
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

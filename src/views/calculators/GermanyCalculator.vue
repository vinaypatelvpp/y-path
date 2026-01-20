<template>
  <div class="calculator-detail-page">
    <section class="calculator-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="page-title">🇩🇪 Germany Points Calculator</h1>
          <p class="page-subtitle">
            Assess your eligibility for German Blue Card and Skilled Worker programs
          </p>
        </div>
      </div>
    </section>

    <section class="calculator-content section">
      <div class="container">
        <div class="content-wrapper">
          <div class="calculator-form-section">
            <h2 class="section-heading">Enter Your Details</h2>
            <p class="text-content">
              Calculate your eligibility for German work and residence permits. Blue Card requires minimum salary threshold.
            </p>

            <form @submit.prevent="calculatePoints" class="calculator-form">
              <!-- Education -->
              <div class="form-group">
                <label for="education">Education Level *</label>
                <select id="education" v-model="formData.education" required>
                  <option value="">Select education</option>
                  <option value="bachelor">Bachelor's Degree</option>
                  <option value="master">Master's Degree</option>
                  <option value="phd">PhD</option>
                  <option value="vocational">Vocational Training (3+ years)</option>
                </select>
              </div>

              <!-- Work Experience -->
              <div class="form-group">
                <label for="experience">Work Experience (Years) *</label>
                <select id="experience" v-model.number="formData.experience" required>
                  <option value="0">Less than 2 years</option>
                  <option value="2">2-4 years</option>
                  <option value="5">5+ years</option>
                </select>
              </div>

              <!-- Salary -->
              <div class="form-group">
                <label for="salary">Annual Salary (EUR) *</label>
                <input
                  type="number"
                  id="salary"
                  v-model.number="formData.salary"
                  min="0"
                  required
                  placeholder="Enter annual salary"
                />
                <small class="form-hint">Blue Card: €58,400 (2024) or €45,552 for shortage occupations</small>
              </div>

              <!-- German Language -->
              <div class="form-group">
                <label for="german">German Language Proficiency</label>
                <select id="german" v-model="formData.german">
                  <option value="none">None</option>
                  <option value="a1">A1 Level</option>
                  <option value="a2">A2 Level</option>
                  <option value="b1">B1 Level</option>
                  <option value="b2">B2 Level</option>
                  <option value="c1">C1 Level</option>
                  <option value="c2">C2 Level (Native)</option>
                </select>
              </div>

              <!-- English Language -->
              <div class="form-group">
                <label for="english">English Language Proficiency</label>
                <select id="english" v-model="formData.english">
                  <option value="none">None</option>
                  <option value="basic">Basic</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="fluent">Fluent/Native</option>
                </select>
              </div>

              <!-- Job Offer -->
              <div class="form-group">
                <label for="jobOffer">Job Offer from German Employer</label>
                <select id="jobOffer" v-model="formData.jobOffer">
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>

              <!-- Shortage Occupation -->
              <div class="form-group">
                <label for="shortage">Shortage Occupation</label>
                <select id="shortage" v-model="formData.shortage">
                  <option value="no">No</option>
                  <option value="yes">Yes (IT, Engineering, Healthcare, etc.)</option>
                </select>
              </div>

              <!-- Age -->
              <div class="form-group">
                <label for="age">Age *</label>
                <input
                  type="number"
                  id="age"
                  v-model.number="formData.age"
                  min="18"
                  max="65"
                  required
                  placeholder="Enter your age"
                />
              </div>

              <button type="submit" class="submit-btn">
                Check Eligibility
              </button>
            </form>
          </div>

          <!-- Results Section -->
          <div v-if="showResults" class="results-section">
            <div class="results-card">
              <h3 class="results-title">Eligibility Assessment</h3>
              
              <div class="eligibility-results">
                <div v-if="eligibleForBlueCard" class="eligibility-item eligible">
                  <h4>✅ EU Blue Card Eligible</h4>
                  <p>You meet the requirements for the EU Blue Card program.</p>
                </div>
                
                <div v-if="eligibleForSkilledWorker" class="eligibility-item eligible">
                  <h4>✅ Skilled Worker Visa Eligible</h4>
                  <p>You may be eligible for the Skilled Worker visa program.</p>
                </div>

                <div v-if="!eligibleForBlueCard && !eligibleForSkilledWorker" class="eligibility-item needs-improvement">
                  <h4>📈 Requirements Not Met</h4>
                  <p>You may need to improve certain criteria. See recommendations below.</p>
                </div>
              </div>

              <div class="requirements-checklist">
                <h4>Requirements Checklist</h4>
                <div class="checklist-item" :class="{ met: hasDegree }">
                  <span v-if="hasDegree">✅</span>
                  <span v-else>❌</span>
                  Recognized degree or vocational qualification
                </div>
                <div class="checklist-item" :class="{ met: hasExperience }">
                  <span v-if="hasExperience">✅</span>
                  <span v-else>❌</span>
                  Relevant work experience
                </div>
                <div class="checklist-item" :class="{ met: meetsSalary }">
                  <span v-if="meetsSalary">✅</span>
                  <span v-else>❌</span>
                  Meets salary threshold (€{{ salaryThreshold }})
                </div>
                <div class="checklist-item" :class="{ met: hasJobOffer }">
                  <span v-if="hasJobOffer">✅</span>
                  <span v-else>⚠️</span>
                  Job offer from German employer
                </div>
              </div>

              <div class="recommendations" v-if="recommendations.length > 0">
                <h4>Recommendations</h4>
                <ul>
                  <li v-for="(rec, index) in recommendations" :key="index">{{ rec }}</li>
                </ul>
              </div>

              <button @click="resetCalculator" class="reset-btn">Check Again</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "GermanyCalculator",
  data() {
    return {
      formData: {
        education: "",
        experience: 0,
        salary: null,
        german: "none",
        english: "none",
        jobOffer: "no",
        shortage: "no",
        age: null,
      },
      showResults: false,
      eligibleForBlueCard: false,
      eligibleForSkilledWorker: false,
      recommendations: [],
    };
  },
  computed: {
    hasDegree() {
      return ["bachelor", "master", "phd", "vocational"].includes(this.formData.education);
    },
    hasExperience() {
      return this.formData.experience >= 2;
    },
    meetsSalary() {
      const threshold = this.formData.shortage === "yes" ? 45552 : 58400;
      return this.formData.salary >= threshold;
    },
    hasJobOffer() {
      return this.formData.jobOffer === "yes";
    },
    salaryThreshold() {
      return this.formData.shortage === "yes" ? "45,552" : "58,400";
    },
  },
  methods: {
    calculatePoints() {
      this.recommendations = [];
      this.eligibleForBlueCard = false;
      this.eligibleForSkilledWorker = false;

      // Check Blue Card eligibility
      if (this.hasDegree && this.meetsSalary && this.hasJobOffer) {
        this.eligibleForBlueCard = true;
      }

      // Check Skilled Worker eligibility
      if (this.hasDegree && this.hasExperience && this.hasJobOffer) {
        this.eligibleForSkilledWorker = true;
      }

      // Generate recommendations
      if (!this.hasDegree) {
        this.recommendations.push("Obtain a recognized degree or vocational qualification");
      }
      if (!this.hasExperience) {
        this.recommendations.push("Gain at least 2 years of relevant work experience");
      }
      if (!this.meetsSalary) {
        this.recommendations.push(`Increase salary to meet threshold (€${this.salaryThreshold}) or consider shortage occupation`);
      }
      if (!this.hasJobOffer) {
        this.recommendations.push("Secure a job offer from a German employer");
      }
      if (this.formData.german === "none" || this.formData.german === "a1") {
        this.recommendations.push("Learn German (B1 level recommended for better integration)");
      }

      this.showResults = true;
    },
    resetCalculator() {
      this.formData = {
        education: "",
        experience: 0,
        salary: null,
        german: "none",
        english: "none",
        jobOffer: "no",
        shortage: "no",
        age: null,
      };
      this.showResults = false;
      this.recommendations = [];
    },
  },
};
</script>

<style scoped>
.calculator-detail-page {
  padding-top: 140px;
}

.calculator-hero {
  padding: 100px 0;
  background: var(--gradient-hero);
  color: var(--white);
  position: relative;
  overflow: hidden;
}

.calculator-hero::before {
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

.calculator-content {
  padding: 100px 0;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
}

.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.section-heading {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 16px;
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

.calculator-form {
  background: var(--white);
  padding: 40px;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.form-group {
  margin-bottom: 24px;
}

.form-group label {
  display: block;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 8px;
  font-size: 0.95rem;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s;
  font-family: inherit;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.form-hint {
  display: block;
  margin-top: 6px;
  font-size: 0.85rem;
  color: var(--text-light);
}

.submit-btn {
  width: 100%;
  padding: 16px 24px;
  background: var(--gradient-primary);
  color: var(--white);
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  margin-top: 8px;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
  border: none;
  cursor: pointer;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);
}

.results-section {
  margin-top: 40px;
}

.results-card {
  background: var(--white);
  padding: 40px;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.results-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 24px;
  color: var(--text-dark);
}

.eligibility-results {
  margin-bottom: 32px;
}

.eligibility-item {
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 16px;
}

.eligibility-item h4 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.requirements-checklist {
  text-align: left;
  margin-bottom: 32px;
  padding-top: 32px;
  border-top: 1px solid var(--border-color);
}

.requirements-checklist h4 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--text-dark);
}

.checklist-item {
  padding: 12px 0;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  gap: 12px;
}

.checklist-item.met {
  color: #059669;
}

.recommendations {
  text-align: left;
  padding: 24px;
  background: rgba(99, 102, 241, 0.05);
  border-radius: 12px;
  margin-bottom: 24px;
}

.recommendations h4 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--text-dark);
}

.recommendations ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.recommendations li {
  padding: 8px 0;
  padding-left: 24px;
  position: relative;
}

.recommendations li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: bold;
}

.reset-btn {
  padding: 12px 24px;
  background: var(--white);
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
}

.reset-btn:hover {
  background: var(--gradient-primary);
  color: var(--white);
  border-color: transparent;
}

@media (max-width: 768px) {
  .calculator-form,
  .results-card {
    padding: 24px;
  }

  .page-title {
    font-size: 2.5rem;
  }
}

.eligibility-results {
  margin-bottom: 32px;
}

.eligibility-item {
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 16px;
}

.eligibility-item h4 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.requirements-checklist {
  text-align: left;
  margin-bottom: 32px;
  padding-top: 32px;
  border-top: 1px solid var(--border-color);
}

.requirements-checklist h4 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--text-dark);
}

.checklist-item {
  padding: 12px 0;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  gap: 12px;
}

.checklist-item.met {
  color: #059669;
}

.recommendations {
  text-align: left;
  padding: 24px;
  background: rgba(99, 102, 241, 0.05);
  border-radius: 12px;
  margin-bottom: 24px;
}

.recommendations h4 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--text-dark);
}

.recommendations ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.recommendations li {
  padding: 8px 0;
  padding-left: 24px;
  position: relative;
}

.recommendations li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: bold;
}
</style>

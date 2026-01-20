<template>
  <div class="calculator-detail-page">
    <section class="calculator-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="page-title">🇨🇦 Canada CRS Points Calculator</h1>
          <p class="page-subtitle">
            Calculate your Comprehensive Ranking System (CRS) score for Express Entry
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
              Fill in your information to calculate your CRS score. This calculator is based on the official Express Entry system.
            </p>

            <form @submit.prevent="calculatePoints" class="calculator-form">
              <!-- Age -->
              <div class="form-group">
                <label for="age">Age *</label>
                <input
                  type="number"
                  id="age"
                  v-model.number="formData.age"
                  min="18"
                  max="45"
                  required
                  placeholder="Enter your age"
                />
                <small class="form-hint">Maximum points at age 20-29</small>
              </div>

              <!-- Education -->
              <div class="form-group">
                <label for="education">Education Level *</label>
                <select id="education" v-model="formData.education" required>
                  <option value="">Select education level</option>
                  <option value="secondary">Secondary school (high school)</option>
                  <option value="one-year">One-year post-secondary program</option>
                  <option value="two-year">Two-year post-secondary program</option>
                  <option value="bachelor">Bachelor's degree or 3-year program</option>
                  <option value="two-degrees">Two or more degrees (one must be 3+ years)</option>
                  <option value="master">Master's degree or professional degree</option>
                  <option value="phd">PhD</option>
                </select>
              </div>

              <!-- Language Proficiency - English -->
              <div class="form-group">
                <label for="english">English Language (IELTS/CELPIP) *</label>
                <select id="english" v-model="formData.english" required>
                  <option value="">Select CLB level</option>
                  <option value="4">CLB 4 or below</option>
                  <option value="5">CLB 5</option>
                  <option value="6">CLB 6</option>
                  <option value="7">CLB 7</option>
                  <option value="8">CLB 8</option>
                  <option value="9">CLB 9</option>
                </select>
                <small class="form-hint">Canadian Language Benchmark (CLB) level</small>
              </div>

              <!-- Work Experience -->
              <div class="form-group">
                <label for="experience">Work Experience (Years) *</label>
                <select id="experience" v-model.number="formData.experience" required>
                  <option value="0">Less than 1 year</option>
                  <option value="1">1 year</option>
                  <option value="2">2 years</option>
                  <option value="3">3 years</option>
                  <option value="4">4 years</option>
                  <option value="5">5+ years</option>
                </select>
              </div>

              <!-- Marital Status -->
              <div class="form-group">
                <label for="marital">Marital Status *</label>
                <select id="marital" v-model="formData.marital" required>
                  <option value="single">Single</option>
                  <option value="married">Married/Common-law</option>
                </select>
              </div>

              <!-- Canadian Work Experience -->
              <div class="form-group">
                <label for="canadianExp">Canadian Work Experience (Years)</label>
                <select id="canadianExp" v-model.number="formData.canadianExp">
                  <option value="0">None</option>
                  <option value="1">1 year</option>
                  <option value="2">2 years</option>
                  <option value="3">3+ years</option>
                </select>
              </div>

              <!-- Canadian Education -->
              <div class="form-group">
                <label for="canadianEdu">Canadian Education</label>
                <select id="canadianEdu" v-model="formData.canadianEdu">
                  <option value="none">None</option>
                  <option value="one-year">1-2 year program</option>
                  <option value="three-year">3+ year program</option>
                </select>
              </div>

              <!-- Provincial Nomination -->
              <div class="form-group">
                <label for="provincial">Provincial Nomination</label>
                <select id="provincial" v-model="formData.provincial">
                  <option value="no">No</option>
                  <option value="yes">Yes (PNP nomination)</option>
                </select>
              </div>

              <button type="submit" class="submit-btn">
                Calculate CRS Score
              </button>
            </form>
          </div>

          <!-- Results Section -->
          <div v-if="showResults" class="results-section">
            <div class="results-card">
              <h3 class="results-title">Your CRS Score</h3>
              <div class="score-display">
                <span class="score-number">{{ totalScore }}</span>
                <span class="score-label">out of 1200</span>
              </div>
              
              <div class="score-breakdown">
                <h4>Score Breakdown</h4>
                <div class="breakdown-item">
                  <span>Core Human Capital Factors</span>
                  <span class="breakdown-score">{{ coreScore }}</span>
                </div>
                <div class="breakdown-item">
                  <span>Spouse/Partner Factors</span>
                  <span class="breakdown-score">{{ spouseScore }}</span>
                </div>
                <div class="breakdown-item">
                  <span>Skill Transferability</span>
                  <span class="breakdown-score">{{ transferScore }}</span>
                </div>
                <div class="breakdown-item">
                  <span>Additional Points</span>
                  <span class="breakdown-score">{{ additionalScore }}</span>
                </div>
              </div>

              <div class="eligibility-info">
                <h4>Eligibility Assessment</h4>
                <p v-if="totalScore >= 470" class="eligible">
                  ✅ You have a competitive CRS score! You may be eligible for Express Entry draws.
                </p>
                <p v-else-if="totalScore >= 400" class="moderate">
                  ⚠️ Your score is moderate. Consider improving language scores or gaining more experience.
                </p>
                <p v-else class="needs-improvement">
                  📈 Your score needs improvement. Focus on language proficiency, education, or work experience.
                </p>
              </div>

              <button @click="resetCalculator" class="reset-btn">Calculate Again</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "CanadaCalculator",
  data() {
    return {
      formData: {
        age: null,
        education: "",
        english: "",
        experience: 0,
        marital: "single",
        canadianExp: 0,
        canadianEdu: "none",
        provincial: "no",
      },
      showResults: false,
      totalScore: 0,
      coreScore: 0,
      spouseScore: 0,
      transferScore: 0,
      additionalScore: 0,
    };
  },
  methods: {
    calculatePoints() {
      // Age points (max 110 for single, 100 for married)
      let agePoints = 0;
      if (this.formData.age >= 18 && this.formData.age <= 35) {
        agePoints = this.formData.marital === "single" ? 110 : 100;
      } else if (this.formData.age === 36) {
        agePoints = this.formData.marital === "single" ? 105 : 95;
      } else if (this.formData.age === 37) {
        agePoints = this.formData.marital === "single" ? 99 : 90;
      } else if (this.formData.age === 38) {
        agePoints = this.formData.marital === "single" ? 94 : 85;
      } else if (this.formData.age === 39) {
        agePoints = this.formData.marital === "single" ? 88 : 80;
      } else if (this.formData.age === 40) {
        agePoints = this.formData.marital === "single" ? 83 : 75;
      } else if (this.formData.age === 41) {
        agePoints = this.formData.marital === "single" ? 77 : 70;
      } else if (this.formData.age === 42) {
        agePoints = this.formData.marital === "single" ? 72 : 65;
      } else if (this.formData.age === 43) {
        agePoints = this.formData.marital === "single" ? 66 : 60;
      } else if (this.formData.age === 44) {
        agePoints = this.formData.marital === "single" ? 61 : 55;
      } else if (this.formData.age === 45) {
        agePoints = this.formData.marital === "single" ? 55 : 50;
      }

      // Education points
      const educationPoints = {
        secondary: this.formData.marital === "single" ? 30 : 28,
        "one-year": this.formData.marital === "single" ? 90 : 84,
        "two-year": this.formData.marital === "single" ? 98 : 91,
        bachelor: this.formData.marital === "single" ? 120 : 112,
        "two-degrees": this.formData.marital === "single" ? 128 : 119,
        master: this.formData.marital === "single" ? 135 : 126,
        phd: this.formData.marital === "single" ? 150 : 140,
      };

      // Language points (simplified - CLB 9 = max)
      let languagePoints = 0;
      if (this.formData.english >= 9) {
        languagePoints = this.formData.marital === "single" ? 160 : 152;
      } else if (this.formData.english >= 8) {
        languagePoints = this.formData.marital === "single" ? 128 : 121;
      } else if (this.formData.english >= 7) {
        languagePoints = this.formData.marital === "single" ? 96 : 91;
      } else if (this.formData.english >= 6) {
        languagePoints = this.formData.marital === "single" ? 64 : 61;
      } else if (this.formData.english >= 5) {
        languagePoints = this.formData.marital === "single" ? 32 : 30;
      }

      // Work experience points
      const experiencePoints = {
        0: 0,
        1: this.formData.marital === "single" ? 40 : 35,
        2: this.formData.marital === "single" ? 53 : 46,
        3: this.formData.marital === "single" ? 64 : 56,
        4: this.formData.marital === "single" ? 72 : 63,
        5: this.formData.marital === "single" ? 80 : 70,
      };

      // Core human capital factors
      this.coreScore = agePoints + (educationPoints[this.formData.education] || 0) + languagePoints + (experiencePoints[this.formData.experience] || 0);

      // Additional points
      this.additionalScore = 0;
      if (this.formData.canadianExp >= 3) {
        this.additionalScore += 80;
      } else if (this.formData.canadianExp >= 2) {
        this.additionalScore += 55;
      } else if (this.formData.canadianExp >= 1) {
        this.additionalScore += 40;
      }

      if (this.formData.canadianEdu === "three-year") {
        this.additionalScore += 30;
      } else if (this.formData.canadianEdu === "one-year") {
        this.additionalScore += 15;
      }

      if (this.formData.provincial === "yes") {
        this.additionalScore += 600; // PNP nomination
      }

      // Skill transferability (simplified)
      this.transferScore = Math.min(100, Math.floor(this.coreScore * 0.1));

      // Spouse factors (simplified)
      this.spouseScore = this.formData.marital === "married" ? 40 : 0;

      this.totalScore = this.coreScore + this.spouseScore + this.transferScore + this.additionalScore;
      this.showResults = true;
    },
    resetCalculator() {
      this.formData = {
        age: null,
        education: "",
        english: "",
        experience: 0,
        marital: "single",
        canadianExp: 0,
        canadianEdu: "none",
        provincial: "no",
      };
      this.showResults = false;
      this.totalScore = 0;
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

.score-display {
  margin-bottom: 32px;
}

.score-number {
  display: block;
  font-size: 4rem;
  font-weight: 800;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}

.score-label {
  display: block;
  font-size: 1.25rem;
  color: var(--text-light);
  margin-top: 8px;
}

.score-breakdown {
  text-align: left;
  margin-bottom: 32px;
  padding-top: 32px;
  border-top: 1px solid var(--border-color);
}

.score-breakdown h4 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--text-dark);
}

.breakdown-item {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid var(--border-color);
}

.breakdown-item:last-child {
  border-bottom: none;
}

.breakdown-score {
  font-weight: 700;
  color: var(--primary-color);
}

.eligibility-info {
  padding: 24px;
  border-radius: 12px;
  margin-bottom: 24px;
  text-align: left;
}

.eligibility-info h4 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--text-dark);
}

.eligibility-info p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
}

.eligible {
  background: rgba(16, 185, 129, 0.1);
  color: #059669;
}

.moderate {
  background: rgba(245, 158, 11, 0.1);
  color: #d97706;
}

.needs-improvement {
  background: rgba(239, 68, 68, 0.1);
  color: #dc2626;
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

  .score-number {
    font-size: 3rem;
  }
}
</style>

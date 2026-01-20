<template>
  <div class="calculator-detail-page">
    <section class="calculator-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="page-title">🇬🇧 UK Points Calculator</h1>
          <p class="page-subtitle">
            Calculate your points for UK Skilled Worker visa (minimum 70 points required)
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
              Calculate your points for the UK Skilled Worker visa. You need 70 points to be eligible.
            </p>

            <form @submit.prevent="calculatePoints" class="calculator-form">
              <!-- Job Offer -->
              <div class="form-group">
                <label for="jobOffer">Job Offer from Licensed Sponsor *</label>
                <select id="jobOffer" v-model="formData.jobOffer" required>
                  <option value="no">No</option>
                  <option value="yes">Yes (50 points - Mandatory)</option>
                </select>
              </div>

              <!-- Job at Appropriate Skill Level -->
              <div class="form-group">
                <label for="skillLevel">Job at Appropriate Skill Level *</label>
                <select id="skillLevel" v-model="formData.skillLevel" required>
                  <option value="no">No</option>
                  <option value="yes">Yes (20 points - Mandatory)</option>
                </select>
              </div>

              <!-- English Language -->
              <div class="form-group">
                <label for="english">English Language Proficiency *</label>
                <select id="english" v-model="formData.english" required>
                  <option value="">Select level</option>
                  <option value="b1">B1 Level (10 points - Mandatory)</option>
                  <option value="b2">B2 Level (10 points)</option>
                  <option value="c1">C1 Level (10 points)</option>
                  <option value="c2">C2 Level (10 points)</option>
                </select>
              </div>

              <!-- Salary -->
              <div class="form-group">
                <label for="salary">Annual Salary (GBP) *</label>
                <input
                  type="number"
                  id="salary"
                  v-model.number="formData.salary"
                  min="0"
                  required
                  placeholder="Enter annual salary"
                />
                <small class="form-hint">Points: £20,480-£23,039 (0), £23,040-£25,599 (10), £25,600+ (20)</small>
              </div>

              <!-- Education -->
              <div class="form-group">
                <label for="education">Education Level</label>
                <select id="education" v-model="formData.education">
                  <option value="none">None</option>
                  <option value="bachelor">Bachelor's Degree (10 points)</option>
                  <option value="master">Master's Degree (10 points)</option>
                  <option value="phd">PhD (20 points)</option>
                </select>
              </div>

              <!-- Work Experience -->
              <div class="form-group">
                <label for="experience">Relevant Work Experience (Years)</label>
                <select id="experience" v-model.number="formData.experience">
                  <option value="0">Less than 1 year</option>
                  <option value="1">1-2 years (5 points)</option>
                  <option value="3">3-5 years (10 points)</option>
                  <option value="5">5+ years (15 points)</option>
                </select>
              </div>

              <!-- Shortage Occupation -->
              <div class="form-group">
                <label for="shortage">Shortage Occupation</label>
                <select id="shortage" v-model="formData.shortage">
                  <option value="no">No</option>
                  <option value="yes">Yes (20 points)</option>
                </select>
              </div>

              <!-- PhD in STEM -->
              <div class="form-group">
                <label for="phdStem">PhD in STEM Subject</label>
                <select id="phdStem" v-model="formData.phdStem">
                  <option value="no">No</option>
                  <option value="yes">Yes (10 points)</option>
                </select>
              </div>

              <button type="submit" class="submit-btn">
                Calculate Points
              </button>
            </form>
          </div>

          <!-- Results Section -->
          <div v-if="showResults" class="results-section">
            <div class="results-card">
              <h3 class="results-title">Your Points Score</h3>
              <div class="score-display">
                <span class="score-number">{{ totalScore }}</span>
                <span class="score-label">points</span>
              </div>
              
              <div class="score-breakdown">
                <h4>Points Breakdown</h4>
                <div class="breakdown-item">
                  <span>Job Offer (Mandatory)</span>
                  <span class="breakdown-score">{{ jobOfferPoints }}</span>
                </div>
                <div class="breakdown-item">
                  <span>Skill Level (Mandatory)</span>
                  <span class="breakdown-score">{{ skillLevelPoints }}</span>
                </div>
                <div class="breakdown-item">
                  <span>English Language (Mandatory)</span>
                  <span class="breakdown-score">{{ englishPoints }}</span>
                </div>
                <div class="breakdown-item">
                  <span>Salary</span>
                  <span class="breakdown-score">{{ salaryPoints }}</span>
                </div>
                <div class="breakdown-item">
                  <span>Education</span>
                  <span class="breakdown-score">{{ educationPoints }}</span>
                </div>
                <div class="breakdown-item">
                  <span>Work Experience</span>
                  <span class="breakdown-score">{{ experiencePoints }}</span>
                </div>
                <div class="breakdown-item">
                  <span>Shortage Occupation</span>
                  <span class="breakdown-score">{{ shortagePoints }}</span>
                </div>
                <div class="breakdown-item">
                  <span>PhD in STEM</span>
                  <span class="breakdown-score">{{ phdStemPoints }}</span>
                </div>
              </div>

              <div class="eligibility-info">
                <h4>Eligibility Assessment</h4>
                <p v-if="totalScore >= 70" class="eligible">
                  ✅ You meet the minimum requirement of 70 points! You may be eligible for the Skilled Worker visa.
                </p>
                <p v-else class="needs-improvement">
                  📈 You need {{ 70 - totalScore }} more points to meet the minimum requirement. Consider improving salary, gaining more experience, or applying for a shortage occupation.
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
  name: "UKCalculator",
  data() {
    return {
      formData: {
        jobOffer: "no",
        skillLevel: "no",
        english: "",
        salary: null,
        education: "none",
        experience: 0,
        shortage: "no",
        phdStem: "no",
      },
      showResults: false,
      totalScore: 0,
      jobOfferPoints: 0,
      skillLevelPoints: 0,
      englishPoints: 0,
      salaryPoints: 0,
      educationPoints: 0,
      experiencePoints: 0,
      shortagePoints: 0,
      phdStemPoints: 0,
    };
  },
  methods: {
    calculatePoints() {
      // Mandatory points
      this.jobOfferPoints = this.formData.jobOffer === "yes" ? 50 : 0;
      this.skillLevelPoints = this.formData.skillLevel === "yes" ? 20 : 0;
      this.englishPoints = this.formData.english ? 10 : 0;

      // Salary points
      if (this.formData.salary >= 25600) {
        this.salaryPoints = 20;
      } else if (this.formData.salary >= 23040) {
        this.salaryPoints = 10;
      } else if (this.formData.salary >= 20480) {
        this.salaryPoints = 0;
      } else {
        this.salaryPoints = 0;
      }

      // Education points
      const eduPoints = {
        none: 0,
        bachelor: 10,
        master: 10,
        phd: 20,
      };
      this.educationPoints = eduPoints[this.formData.education] || 0;

      // Experience points
      const expPoints = {
        0: 0,
        1: 5,
        3: 10,
        5: 15,
      };
      this.experiencePoints = expPoints[this.formData.experience] || 0;

      // Shortage occupation
      this.shortagePoints = this.formData.shortage === "yes" ? 20 : 0;

      // PhD in STEM
      this.phdStemPoints = this.formData.phdStem === "yes" ? 10 : 0;

      this.totalScore =
        this.jobOfferPoints +
        this.skillLevelPoints +
        this.englishPoints +
        this.salaryPoints +
        this.educationPoints +
        this.experiencePoints +
        this.shortagePoints +
        this.phdStemPoints;

      this.showResults = true;
    },
    resetCalculator() {
      this.formData = {
        jobOffer: "no",
        skillLevel: "no",
        english: "",
        salary: null,
        education: "none",
        experience: 0,
        shortage: "no",
        phdStem: "no",
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

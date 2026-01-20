<template>
  <div class="calculator-detail-page">
    <section class="calculator-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="page-title">🇦🇺 Australia Points Calculator</h1>
          <p class="page-subtitle">
            Calculate your points for Australian Skilled Migration programs
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
              Calculate your points for Australian skilled migration. Minimum 65 points required.
            </p>

            <form @submit.prevent="calculatePoints" class="calculator-form">
              <!-- Age -->
              <div class="form-group">
                <label for="age">Age *</label>
                <select id="age" v-model.number="formData.age" required>
                  <option value="0">Select age</option>
                  <option value="18">18-24 years (25 points)</option>
                  <option value="25">25-32 years (30 points)</option>
                  <option value="33">33-39 years (25 points)</option>
                  <option value="40">40-44 years (15 points)</option>
                  <option value="45">45+ years (0 points)</option>
                </select>
              </div>

              <!-- English Language -->
              <div class="form-group">
                <label for="english">English Language Proficiency (IELTS) *</label>
                <select id="english" v-model="formData.english" required>
                  <option value="">Select IELTS score</option>
                  <option value="competent">Competent (6.0) - 0 points</option>
                  <option value="proficient">Proficient (7.0) - 10 points</option>
                  <option value="superior">Superior (8.0) - 20 points</option>
                </select>
              </div>

              <!-- Work Experience -->
              <div class="form-group">
                <label for="experience">Skilled Work Experience (Years) *</label>
                <select id="experience" v-model.number="formData.experience" required>
                  <option value="0">Less than 3 years (0 points)</option>
                  <option value="3">3-4 years (5 points)</option>
                  <option value="5">5-7 years (10 points)</option>
                  <option value="8">8-10 years (15 points)</option>
                  <option value="10">10+ years (20 points)</option>
                </select>
              </div>

              <!-- Australian Work Experience -->
              <div class="form-group">
                <label for="ausExp">Australian Work Experience (Years)</label>
                <select id="ausExp" v-model.number="formData.ausExp">
                  <option value="0">None (0 points)</option>
                  <option value="1">1-2 years (5 points)</option>
                  <option value="3">3-4 years (10 points)</option>
                  <option value="5">5-7 years (15 points)</option>
                  <option value="8">8+ years (20 points)</option>
                </select>
              </div>

              <!-- Education -->
              <div class="form-group">
                <label for="education">Education Level *</label>
                <select id="education" v-model="formData.education" required>
                  <option value="">Select education</option>
                  <option value="diploma">Diploma or Trade Qualification - 10 points</option>
                  <option value="bachelor">Bachelor Degree - 15 points</option>
                  <option value="master">Master Degree - 15 points</option>
                  <option value="phd">PhD - 20 points</option>
                </select>
              </div>

              <!-- Australian Education -->
              <div class="form-group">
                <label for="ausEdu">Australian Education</label>
                <select id="ausEdu" v-model="formData.ausEdu">
                  <option value="no">No Australian qualification</option>
                  <option value="yes">Australian qualification (5 points)</option>
                </select>
              </div>

              <!-- Regional Study -->
              <div class="form-group">
                <label for="regional">Regional Study</label>
                <select id="regional" v-model="formData.regional">
                  <option value="no">No</option>
                  <option value="yes">Yes (5 points)</option>
                </select>
              </div>

              <!-- Partner Skills -->
              <div class="form-group">
                <label for="partner">Partner Skills</label>
                <select id="partner" v-model="formData.partner">
                  <option value="none">No partner or partner not eligible</option>
                  <option value="competent">Partner with competent English - 5 points</option>
                  <option value="skilled">Partner with skilled assessment - 10 points</option>
                </select>
              </div>

              <!-- State Nomination -->
              <div class="form-group">
                <label for="nomination">State/Territory Nomination</label>
                <select id="nomination" v-model="formData.nomination">
                  <option value="no">No</option>
                  <option value="190">190 State Nomination (5 points)</option>
                  <option value="491">491 Regional Nomination (15 points)</option>
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
              
              <div class="eligibility-info">
                <h4>Eligibility Assessment</h4>
                <p v-if="totalScore >= 65" class="eligible">
                  ✅ You meet the minimum requirement of 65 points! You may be eligible for skilled migration.
                </p>
                <p v-else class="needs-improvement">
                  📈 You need {{ 65 - totalScore }} more points to meet the minimum requirement. Consider improving language scores, gaining more experience, or obtaining state nomination.
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
  name: "AustraliaCalculator",
  data() {
    return {
      formData: {
        age: 0,
        english: "",
        experience: 0,
        ausExp: 0,
        education: "",
        ausEdu: "no",
        regional: "no",
        partner: "none",
        nomination: "no",
      },
      showResults: false,
      totalScore: 0,
    };
  },
  methods: {
    calculatePoints() {
      let score = 0;

      // Age points
      const agePoints = {
        18: 25,
        25: 30,
        33: 25,
        40: 15,
        45: 0,
      };
      score += agePoints[this.formData.age] || 0;

      // English points
      const englishPoints = {
        competent: 0,
        proficient: 10,
        superior: 20,
      };
      score += englishPoints[this.formData.english] || 0;

      // Work experience points
      const expPoints = {
        0: 0,
        3: 5,
        5: 10,
        8: 15,
        10: 20,
      };
      score += expPoints[this.formData.experience] || 0;

      // Australian work experience
      const ausExpPoints = {
        0: 0,
        1: 5,
        3: 10,
        5: 15,
        8: 20,
      };
      score += ausExpPoints[this.formData.ausExp] || 0;

      // Education points
      const eduPoints = {
        diploma: 10,
        bachelor: 15,
        master: 15,
        phd: 20,
      };
      score += eduPoints[this.formData.education] || 0;

      // Australian education
      if (this.formData.ausEdu === "yes") {
        score += 5;
      }

      // Regional study
      if (this.formData.regional === "yes") {
        score += 5;
      }

      // Partner skills
      if (this.formData.partner === "competent") {
        score += 5;
      } else if (this.formData.partner === "skilled") {
        score += 10;
      }

      // Nomination
      if (this.formData.nomination === "190") {
        score += 5;
      } else if (this.formData.nomination === "491") {
        score += 15;
      }

      this.totalScore = score;
      this.showResults = true;
    },
    resetCalculator() {
      this.formData = {
        age: 0,
        english: "",
        experience: 0,
        ausExp: 0,
        education: "",
        ausEdu: "no",
        regional: "no",
        partner: "none",
        nomination: "no",
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

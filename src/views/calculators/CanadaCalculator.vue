<template>
  <div class="calculator-detail-page">
    <section class="calculator-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="page-title">🇨🇦 Canada CRS Points Calculator</h1>
          <p class="page-subtitle">
            Calculate your Comprehensive Ranking System (CRS) score for Express Entry
          </p>
          <p class="hero-note">
            <strong>Note:</strong> As of March 25, 2025, job offer points have been removed from the CRS system.
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
              This calculator is based on the official Express Entry CRS system. Fill in your information to calculate your score out of 1,200 points.
            </p>

            <form @submit.prevent="calculatePoints" class="calculator-form">
              <!-- 1. Marital Status -->
              <div class="form-group">
                <label for="maritalStatus">1. What is your marital status? *</label>
                <select id="maritalStatus" v-model="formData.maritalStatus" required>
                  <option value="">Select...</option>
                  <option value="single">Never Married / Single</option>
                  <option value="married">Married</option>
                  <option value="common-law">Common-Law</option>
                  <option value="divorced">Divorced / Separated</option>
                  <option value="widowed">Widowed</option>
                </select>
              </div>

              <!-- 2. Spouse/Partner Questions (only if married/common-law) -->
              <template v-if="formData.maritalStatus === 'married' || formData.maritalStatus === 'common-law'">
                <div class="form-group">
                  <label for="spouseCitizen">2. i. Is your spouse or common-law partner a citizen or permanent resident of Canada? *</label>
                  <select id="spouseCitizen" v-model="formData.spouseCitizen" required>
                    <option value="">Select...</option>
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="spouseAccompany">2. ii. Will your spouse or common-law partner come with you to Canada? *</label>
                  <select id="spouseAccompany" v-model="formData.spouseAccompany" required>
                    <option value="">Select...</option>
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>
              </template>

              <!-- 3. Age -->
              <div class="form-group">
                <label for="age">3. How old are you? *</label>
                <input
                  type="number"
                  id="age"
                  v-model.number="formData.age"
                  min="18"
                  max="100"
                  required
                  placeholder="Enter your age"
                />
                <small class="form-hint">If invited, enter age on invitation date. Otherwise, enter current age.</small>
              </div>

              <!-- 4. Education -->
              <div class="form-group">
                <label for="education">4. What is your level of education? *</label>
                <select id="education" v-model="formData.education" required>
                  <option value="">Select...</option>
                  <option value="secondary">Secondary (high school) or less</option>
                  <option value="one-year">One- or two-year diploma or certificate</option>
                  <option value="two-year">Two-year program at a university, college, trade or technical school</option>
                  <option value="bachelor">Bachelor's degree (three or more year program)</option>
                  <option value="two-degrees">Two or more certificates, diplomas or degrees. One must be for a program of three or more years</option>
                  <option value="master">Master's degree, or professional degree needed to practice in a licensed profession</option>
                  <option value="phd">Doctoral level university degree (PhD)</option>
                </select>
                <small class="form-hint">Must have Canadian degree or ECA (Educational Credential Assessment) if studied outside Canada</small>
              </div>

              <!-- 4b. Canadian Education -->
              <div class="form-group">
                <label for="canadianEdu">4b. Have you earned a Canadian degree, diploma or certificate? *</label>
                <select id="canadianEdu" v-model="formData.canadianEdu" required>
                  <option value="">Select...</option>
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>

              <!-- 4c. Education Level Description -->
              <div v-if="formData.canadianEdu === 'yes'" class="form-group">
                <label for="canadianEduLevel">4c. Choose the best answer to describe this level of education</label>
                <select id="canadianEduLevel" v-model="formData.canadianEduLevel">
                  <option value="">Select...</option>
                  <option value="secondary">Secondary (high school) or less</option>
                  <option value="one-two">One- or two-year diploma or certificate</option>
                  <option value="three-plus">Degree, diploma or certificate of three years or longer OR a Master's, professional or doctoral degree</option>
                </select>
              </div>

              <!-- 5. Language Tests -->
              <div class="form-group">
                <label>5. Official languages: Canada's official languages are English and French</label>
                
                <div class="form-subgroup">
                  <label for="languageTestRecent">i. Are your test results less than two years old? *</label>
                  <select id="languageTestRecent" v-model="formData.languageTestRecent" required>
                    <option value="">Select...</option>
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>

                <div v-if="formData.languageTestRecent === 'yes'" class="form-subgroup">
                  <label for="firstLanguageTest">ii. Which language test did you take for your first official language? *</label>
                  <select id="firstLanguageTest" v-model="formData.firstLanguageTest" required>
                    <option value="">Select...</option>
                    <option value="ielts">IELTS</option>
                    <option value="celpip">CELPIP-G</option>
                    <option value="pte">PTE Core</option>
                    <option value="tef">TEF Canada</option>
                    <option value="tcf">TCF Canada</option>
                  </select>
                </div>

                <div v-if="formData.firstLanguageTest" class="language-scores">
                  <label>Enter your test scores for first language:</label>
                  <div class="score-inputs">
                    <div class="score-input">
                      <label for="firstSpeaking">Speaking</label>
                      <select id="firstSpeaking" v-model.number="formData.firstSpeaking">
                        <option value="">Select...</option>
                        <option v-for="n in 9" :key="n" :value="n">{{ n }}</option>
                      </select>
                    </div>
                    <div class="score-input">
                      <label for="firstListening">Listening</label>
                      <select id="firstListening" v-model.number="formData.firstListening">
                        <option value="">Select...</option>
                        <option v-for="n in 9" :key="n" :value="n">{{ n }}</option>
                      </select>
                    </div>
                    <div class="score-input">
                      <label for="firstReading">Reading</label>
                      <select id="firstReading" v-model.number="formData.firstReading">
                        <option value="">Select...</option>
                        <option v-for="n in 9" :key="n" :value="n">{{ n }}</option>
                      </select>
                    </div>
                    <div class="score-input">
                      <label for="firstWriting">Writing</label>
                      <select id="firstWriting" v-model.number="formData.firstWriting">
                        <option value="">Select...</option>
                        <option v-for="n in 9" :key="n" :value="n">{{ n }}</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div v-if="formData.firstLanguageTest" class="form-subgroup">
                  <label for="hasSecondLanguage">iii. Do you have other language results?</label>
                  <select id="hasSecondLanguage" v-model="formData.hasSecondLanguage">
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>

                <div v-if="formData.hasSecondLanguage === 'yes'" class="form-subgroup">
                  <label for="secondLanguageTest">Which language test did you take for your second official language?</label>
                  <select id="secondLanguageTest" v-model="formData.secondLanguageTest">
                    <option value="">Select...</option>
                    <option value="ielts">IELTS</option>
                    <option value="celpip">CELPIP-G</option>
                    <option value="pte">PTE Core</option>
                    <option value="tef">TEF Canada</option>
                    <option value="tcf">TCF Canada</option>
                  </select>
                </div>

                <div v-if="formData.secondLanguageTest" class="language-scores">
                  <label>Enter your test scores for second language:</label>
                  <div class="score-inputs">
                    <div class="score-input">
                      <label for="secondSpeaking">Speaking</label>
                      <select id="secondSpeaking" v-model.number="formData.secondSpeaking">
                        <option value="">Select...</option>
                        <option v-for="n in 9" :key="n" :value="n">{{ n }}</option>
                      </select>
                    </div>
                    <div class="score-input">
                      <label for="secondListening">Listening</label>
                      <select id="secondListening" v-model.number="formData.secondListening">
                        <option value="">Select...</option>
                        <option v-for="n in 9" :key="n" :value="n">{{ n }}</option>
                      </select>
                    </div>
                    <div class="score-input">
                      <label for="secondReading">Reading</label>
                      <select id="secondReading" v-model.number="formData.secondReading">
                        <option value="">Select...</option>
                        <option v-for="n in 9" :key="n" :value="n">{{ n }}</option>
                      </select>
                    </div>
                    <div class="score-input">
                      <label for="secondWriting">Writing</label>
                      <select id="secondWriting" v-model.number="formData.secondWriting">
                        <option value="">Select...</option>
                        <option v-for="n in 9" :key="n" :value="n">{{ n }}</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 6. Work Experience -->
              <div class="form-group">
                <label>6. Work Experience</label>
                
                <div class="form-subgroup">
                  <label for="canadianWorkExp">i. In the last 10 years, how many years of skilled work experience in Canada do you have? *</label>
                  <select id="canadianWorkExp" v-model.number="formData.canadianWorkExp" required>
                    <option value="0">None or less than a year</option>
                    <option value="1">1 year</option>
                    <option value="2">2 years</option>
                    <option value="3">3 years</option>
                    <option value="4">4 years</option>
                    <option value="5">5 years or more</option>
                  </select>
                  <small class="form-hint">Must be paid, full-time (or equal part-time), in NOC TEER 0, 1, 2 or 3</small>
                </div>

                <div class="form-subgroup">
                  <label for="foreignWorkExp">ii. In the last 10 years, how many total years of foreign skilled work experience do you have? *</label>
                  <select id="foreignWorkExp" v-model.number="formData.foreignWorkExp" required>
                    <option value="0">None or less than a year</option>
                    <option value="1">1 year</option>
                    <option value="2">2 years</option>
                    <option value="3">3 years or more</option>
                  </select>
                  <small class="form-hint">Must be paid, full-time (or equal part-time), in one occupation (NOC TEER 0, 1, 2 or 3)</small>
                </div>
              </div>

              <!-- 7. Certificate of Qualification -->
              <div class="form-group">
                <label for="certificateQualification">7. Do you have a certificate of qualification from a Canadian province, territory or federal body?</label>
                <select id="certificateQualification" v-model="formData.certificateQualification">
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>

              <!-- 8. Job Offer (Note: Points removed but still asked for eligibility) -->
              <div class="form-group">
                <label for="jobOffer">8. Do you have a valid job offer supported by a Labour Market Impact Assessment (if needed)?</label>
                <select id="jobOffer" v-model="formData.jobOffer">
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
                <small class="form-hint">Note: Job offer points have been removed from CRS as of March 25, 2025, but may still be required for eligibility</small>
              </div>

              <!-- 9. Provincial Nomination -->
              <div class="form-group">
                <label for="provincialNomination">9. Do you have a nomination certificate from a province or territory?</label>
                <select id="provincialNomination" v-model="formData.provincialNomination">
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>

              <!-- 10. Sibling in Canada -->
              <div class="form-group">
                <label for="siblingInCanada">10. Do you or your spouse/common-law partner have at least one brother or sister living in Canada who is a citizen or permanent resident?</label>
                <select id="siblingInCanada" v-model="formData.siblingInCanada">
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>

              <!-- Spouse/Partner Information (if applicable) -->
              <template v-if="(formData.maritalStatus === 'married' || formData.maritalStatus === 'common-law') && formData.spouseAccompany === 'yes'">
                <!-- 11. Spouse Education -->
                <div class="form-group">
                  <label for="spouseEducation">11. What is the highest level of education for which your spouse or common-law partner has earned a Canadian degree/diploma or had an ECA?</label>
                  <select id="spouseEducation" v-model="formData.spouseEducation">
                    <option value="none">None, or less than secondary (high school)</option>
                    <option value="secondary">Secondary diploma (high school graduation)</option>
                    <option value="one-year">One-year program at a university, college, trade or technical school</option>
                    <option value="two-year">Two-year program at a university, college, trade or technical school</option>
                    <option value="bachelor">Bachelor's degree (three or more year program)</option>
                    <option value="two-degrees">Two or more certificates, diplomas or degrees. One must be for a program of three or more years</option>
                    <option value="master">Master's degree, or professional degree needed to practice in a licensed profession</option>
                    <option value="phd">Doctoral level university degree (PhD)</option>
                  </select>
                </div>

                <!-- 12. Spouse Work Experience -->
                <div class="form-group">
                  <label for="spouseWorkExp">12. In the last 10 years, how many years of skilled work experience in Canada does your spouse/common-law partner have?</label>
                  <select id="spouseWorkExp" v-model.number="formData.spouseWorkExp">
                    <option value="0">None or less than a year</option>
                    <option value="1">1 year</option>
                    <option value="2">2 years</option>
                    <option value="3">3 years</option>
                    <option value="4">4 years</option>
                    <option value="5">5 years or more</option>
                  </select>
                </div>

                <!-- 13. Spouse Language -->
                <div class="form-group">
                  <label>13. Did your spouse or common-law partner take a language test?</label>
                  <div class="form-subgroup">
                    <label for="spouseLanguageTest">i) Which language test?</label>
                    <select id="spouseLanguageTest" v-model="formData.spouseLanguageTest">
                      <option value="none">Not applicable</option>
                      <option value="ielts">IELTS</option>
                      <option value="celpip">CELPIP-G</option>
                      <option value="pte">PTE Core</option>
                      <option value="tef">TEF Canada</option>
                      <option value="tcf">TCF Canada</option>
                    </select>
                    <small class="form-hint">Test results must be less than two years old</small>
                  </div>

                  <div v-if="formData.spouseLanguageTest !== 'none'" class="language-scores">
                    <label>ii) Enter the test scores:</label>
                    <div class="score-inputs">
                      <div class="score-input">
                        <label for="spouseSpeaking">Speaking</label>
                        <select id="spouseSpeaking" v-model.number="formData.spouseSpeaking">
                          <option value="">Select...</option>
                          <option v-for="n in 9" :key="n" :value="n">{{ n }}</option>
                        </select>
                      </div>
                      <div class="score-input">
                        <label for="spouseListening">Listening</label>
                        <select id="spouseListening" v-model.number="formData.spouseListening">
                          <option value="">Select...</option>
                          <option v-for="n in 9" :key="n" :value="n">{{ n }}</option>
                        </select>
                      </div>
                      <div class="score-input">
                        <label for="spouseReading">Reading</label>
                        <select id="spouseReading" v-model.number="formData.spouseReading">
                          <option value="">Select...</option>
                          <option v-for="n in 9" :key="n" :value="n">{{ n }}</option>
                        </select>
                      </div>
                      <div class="score-input">
                        <label for="spouseWriting">Writing</label>
                        <select id="spouseWriting" v-model.number="formData.spouseWriting">
                          <option value="">Select...</option>
                          <option v-for="n in 9" :key="n" :value="n">{{ n }}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </template>

              <button type="submit" class="submit-btn">
                Calculate your score
              </button>
            </form>
          </div>

          <!-- Results Section -->
          <div v-if="showResults" class="results-section">
            <div class="results-card">
              <h3 class="results-title">Your results</h3>
              <p class="results-intro">All Express Entry candidates get a score out of 1,200, based on the four parts of the Comprehensive Ranking System formula.</p>
              
              <div class="score-display">
                <span class="score-number">{{ totalScore }}</span>
                <span class="score-label">out of 1,200 points</span>
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
                  <span>Skill Transferability Factors</span>
                  <span class="breakdown-score">{{ transferScore }}</span>
                </div>
                <div class="breakdown-item">
                  <span>Additional Points</span>
                  <span class="breakdown-score">{{ additionalScore }}</span>
                </div>
              </div>

              <div class="eligibility-info">
                <h4>Eligibility Assessment</h4>
                <p v-if="totalScore >= 500" class="eligible">
                  ✅ You have a competitive CRS score! You may be eligible for Express Entry draws.
                </p>
                <p v-else-if="totalScore >= 400" class="moderate">
                  ⚠️ Your score is moderate. Consider improving language scores, gaining more experience, or obtaining provincial nomination.
                </p>
                <p v-else class="needs-improvement">
                  📈 Your score needs improvement. Focus on language proficiency, education, work experience, or consider provincial nominee programs.
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
        maritalStatus: "",
        spouseCitizen: "",
        spouseAccompany: "",
        age: null,
        education: "",
        canadianEdu: "",
        canadianEduLevel: "",
        languageTestRecent: "",
        firstLanguageTest: "",
        firstSpeaking: null,
        firstListening: null,
        firstReading: null,
        firstWriting: null,
        hasSecondLanguage: "no",
        secondLanguageTest: "",
        secondSpeaking: null,
        secondListening: null,
        secondReading: null,
        secondWriting: null,
        canadianWorkExp: 0,
        foreignWorkExp: 0,
        certificateQualification: "no",
        jobOffer: "no",
        provincialNomination: "no",
        siblingInCanada: "no",
        spouseEducation: "none",
        spouseWorkExp: 0,
        spouseLanguageTest: "none",
        spouseSpeaking: null,
        spouseListening: null,
        spouseReading: null,
        spouseWriting: null,
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
    // Convert test scores to CLB levels
    getCLBLevel(test, score) {
      if (!score) return 0;
      
      // Simplified CLB conversion (actual conversion varies by test type)
      // For IELTS: CLB 9 = 8.0-9.0, CLB 8 = 7.0-7.9, etc.
      // For CELPIP: CLB 9 = 9, CLB 8 = 8, etc.
      // This is a simplified version - actual conversion is more complex
      if (test === 'ielts' || test === 'celpip' || test === 'pte') {
        return score; // Assuming score is already CLB level
      }
      return score;
    },

    // Calculate language points based on CLB levels
    calculateLanguagePoints(speaking, listening, reading, writing, isSpouse = false) {
      if (!speaking || !listening || !reading || !writing) return 0;
      
      const minCLB = Math.min(speaking, listening, reading, writing);
      const maxCLB = Math.max(speaking, listening, reading, writing);
      const avgCLB = (speaking + listening + reading + writing) / 4;
      
      const isSingle = this.formData.maritalStatus === 'single' || 
                      this.formData.maritalStatus === 'divorced' || 
                      this.formData.maritalStatus === 'widowed';
      
      // First official language points (simplified)
      let points = 0;
      if (minCLB >= 9 && maxCLB >= 9) {
        points = isSingle ? 160 : 152;
      } else if (minCLB >= 7 && maxCLB >= 7) {
        points = isSingle ? 128 : 121;
      } else if (minCLB >= 5 && maxCLB >= 5) {
        points = isSingle ? 96 : 91;
      }
      
      return points;
    },

    calculatePoints() {
      // Reset scores
      this.coreScore = 0;
      this.spouseScore = 0;
      this.transferScore = 0;
      this.additionalScore = 0;

      const isSingle = this.formData.maritalStatus === 'single' || 
                      this.formData.maritalStatus === 'divorced' || 
                      this.formData.maritalStatus === 'widowed';
      const hasSpouse = !isSingle && this.formData.spouseAccompany === 'yes';

      // 1. Age Points
      let agePoints = 0;
      if (this.formData.age >= 18 && this.formData.age <= 35) {
        agePoints = isSingle ? 110 : 100;
      } else if (this.formData.age === 36) {
        agePoints = isSingle ? 105 : 95;
      } else if (this.formData.age === 37) {
        agePoints = isSingle ? 99 : 90;
      } else if (this.formData.age === 38) {
        agePoints = isSingle ? 94 : 85;
      } else if (this.formData.age === 39) {
        agePoints = isSingle ? 88 : 80;
      } else if (this.formData.age === 40) {
        agePoints = isSingle ? 83 : 75;
      } else if (this.formData.age === 41) {
        agePoints = isSingle ? 77 : 70;
      } else if (this.formData.age === 42) {
        agePoints = isSingle ? 72 : 65;
      } else if (this.formData.age === 43) {
        agePoints = isSingle ? 66 : 60;
      } else if (this.formData.age === 44) {
        agePoints = isSingle ? 61 : 55;
      } else if (this.formData.age === 45) {
        agePoints = isSingle ? 55 : 50;
      } else if (this.formData.age >= 46) {
        agePoints = 0;
      }

      // 2. Education Points
      const educationPoints = {
        secondary: isSingle ? 30 : 28,
        "one-year": isSingle ? 90 : 84,
        "two-year": isSingle ? 98 : 91,
        bachelor: isSingle ? 120 : 112,
        "two-degrees": isSingle ? 128 : 119,
        master: isSingle ? 135 : 126,
        phd: isSingle ? 150 : 140,
      };
      const eduPoints = educationPoints[this.formData.education] || 0;

      // 3. Language Points (First Official Language)
      const firstLangPoints = this.calculateLanguagePoints(
        this.formData.firstSpeaking,
        this.formData.firstListening,
        this.formData.firstReading,
        this.formData.firstWriting
      );

      // Second Official Language Points (max 22 for single, 20 for married)
      let secondLangPoints = 0;
      if (this.formData.hasSecondLanguage === 'yes' && 
          this.formData.secondSpeaking && 
          this.formData.secondListening && 
          this.formData.secondReading && 
          this.formData.secondWriting) {
        const minCLB = Math.min(
          this.formData.secondSpeaking,
          this.formData.secondListening,
          this.formData.secondReading,
          this.formData.secondWriting
        );
        if (minCLB >= 5) {
          secondLangPoints = isSingle ? 22 : 20;
        }
      }

      // 4. Work Experience Points
      const workExpPoints = {
        0: 0,
        1: isSingle ? 40 : 35,
        2: isSingle ? 53 : 46,
        3: isSingle ? 64 : 56,
        4: isSingle ? 72 : 63,
        5: isSingle ? 80 : 70,
      };
      const foreignExpPoints = workExpPoints[this.formData.foreignWorkExp] || 0;

      // Core Human Capital Factors
      this.coreScore = agePoints + eduPoints + firstLangPoints + secondLangPoints + foreignExpPoints;

      // Canadian Work Experience Points
      let canadianExpPoints = 0;
      if (this.formData.canadianWorkExp >= 5) {
        canadianExpPoints = isSingle ? 70 : 64;
      } else if (this.formData.canadianWorkExp >= 3) {
        canadianExpPoints = isSingle ? 55 : 50;
      } else if (this.formData.canadianWorkExp >= 1) {
        canadianExpPoints = isSingle ? 40 : 35;
      }

      // Canadian Education Bonus
      let canadianEduBonus = 0;
      if (this.formData.canadianEdu === 'yes') {
        if (this.formData.canadianEduLevel === 'three-plus') {
          canadianEduBonus = 30;
        } else if (this.formData.canadianEduLevel === 'one-two') {
          canadianEduBonus = 15;
        }
      }

      // Skill Transferability Factors (simplified calculation)
      let transferPoints = 0;
      
      // Education + Language
      if (this.formData.education !== 'secondary' && this.formData.firstSpeaking >= 7) {
        transferPoints += isSingle ? 50 : 25;
      }
      
      // Education + Canadian Work Experience
      if (this.formData.education !== 'secondary' && this.formData.canadianWorkExp >= 1) {
        transferPoints += isSingle ? 50 : 25;
      }
      
      // Foreign Work Experience + Language
      if (this.formData.foreignWorkExp >= 3 && this.formData.firstSpeaking >= 7) {
        transferPoints += isSingle ? 50 : 25;
      }
      
      // Foreign Work Experience + Canadian Work Experience
      if (this.formData.foreignWorkExp >= 3 && this.formData.canadianWorkExp >= 1) {
        transferPoints += isSingle ? 50 : 25;
      }
      
      // Certificate of Qualification + Language
      if (this.formData.certificateQualification === 'yes' && this.formData.firstSpeaking >= 5) {
        transferPoints += isSingle ? 50 : 25;
      }
      
      this.transferScore = Math.min(transferPoints, isSingle ? 100 : 50);

      // Spouse/Partner Factors
      if (hasSpouse) {
        // Spouse Education
        const spouseEduPoints = {
          none: 0,
          secondary: 2,
          "one-year": 6,
          "two-year": 7,
          bachelor: 8,
          "two-degrees": 9,
          master: 10,
          phd: 10,
        };
        this.spouseScore += spouseEduPoints[this.formData.spouseEducation] || 0;

        // Spouse Canadian Work Experience
        if (this.formData.spouseWorkExp >= 5) {
          this.spouseScore += 10;
        } else if (this.formData.spouseWorkExp >= 1) {
          this.spouseScore += 5;
        }

        // Spouse Language
        if (this.formData.spouseLanguageTest !== 'none') {
          const minCLB = Math.min(
            this.formData.spouseSpeaking || 0,
            this.formData.spouseListening || 0,
            this.formData.spouseReading || 0,
            this.formData.spouseWriting || 0
          );
          if (minCLB >= 5) {
            this.spouseScore += 5;
          }
        }
      }

      // Additional Points
      this.additionalScore = canadianExpPoints + canadianEduBonus;

      // Provincial Nomination (600 points)
      if (this.formData.provincialNomination === 'yes') {
        this.additionalScore += 600;
      }

      // Sibling in Canada (15 points)
      if (this.formData.siblingInCanada === 'yes') {
        this.additionalScore += 15;
      }

      // Job offer points removed as of March 25, 2025 (but kept for eligibility purposes)

      this.totalScore = this.coreScore + this.spouseScore + this.transferScore + this.additionalScore;
      this.showResults = true;
    },
    resetCalculator() {
      this.formData = {
        maritalStatus: "",
        spouseCitizen: "",
        spouseAccompany: "",
        age: null,
        education: "",
        canadianEdu: "",
        canadianEduLevel: "",
        languageTestRecent: "",
        firstLanguageTest: "",
        firstSpeaking: null,
        firstListening: null,
        firstReading: null,
        firstWriting: null,
        hasSecondLanguage: "no",
        secondLanguageTest: "",
        secondSpeaking: null,
        secondListening: null,
        secondReading: null,
        secondWriting: null,
        canadianWorkExp: 0,
        foreignWorkExp: 0,
        certificateQualification: "no",
        jobOffer: "no",
        provincialNomination: "no",
        siblingInCanada: "no",
        spouseEducation: "none",
        spouseWorkExp: 0,
        spouseLanguageTest: "none",
        spouseSpeaking: null,
        spouseListening: null,
        spouseReading: null,
        spouseWriting: null,
      };
      this.showResults = false;
      this.totalScore = 0;
      this.coreScore = 0;
      this.spouseScore = 0;
      this.transferScore = 0;
      this.additionalScore = 0;
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
  margin: 0 auto 16px;
  line-height: 1.6;
  font-weight: 400;
}

.hero-note {
  font-size: 0.95rem;
  opacity: 0.9;
  max-width: 750px;
  margin: 0 auto;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  border-left: 3px solid rgba(255, 255, 255, 0.5);
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
  margin-bottom: 28px;
  padding-bottom: 24px;
  border-bottom: 1px solid #f1f5f9;
}

.form-group:last-of-type {
  border-bottom: none;
}

.form-group label {
  display: block;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 8px;
  font-size: 0.95rem;
}

.form-subgroup {
  margin-top: 16px;
  margin-bottom: 16px;
}

.form-subgroup label {
  font-weight: 500;
  font-size: 0.9rem;
  color: var(--text-light);
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
  font-style: italic;
}

.language-scores {
  margin-top: 16px;
  padding: 16px;
  background: #f8fafc;
  border-radius: 8px;
}

.language-scores label {
  display: block;
  margin-bottom: 12px;
  font-weight: 600;
  color: var(--text-dark);
}

.score-inputs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 12px;
}

.score-input {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.score-input label {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-light);
}

.score-input select {
  padding: 8px 12px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: 0.9rem;
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
  margin-bottom: 12px;
  color: var(--text-dark);
}

.results-intro {
  font-size: 1rem;
  color: var(--text-light);
  margin-bottom: 32px;
  line-height: 1.6;
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

  .score-inputs {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

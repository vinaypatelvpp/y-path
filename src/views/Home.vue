<template>
  <div>
    <Hero @open-form="openForm" />
    <Statistics />
    <Services />
    <PointsCalculator />
    <CountryCards @open-form="openForm" />
    <Testimonials />
    <ConsultationForm :isOpen="formOpen" @close="closeForm" />
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
import Statistics from "../components/Statistics.vue";
import Services from "../components/Services.vue";
import PointsCalculator from "../components/PointsCalculator.vue";
import CountryCards from "../components/CountryCards.vue";
import Testimonials from "../components/Testimonials.vue";
import ConsultationForm from "../components/ConsultationForm.vue";

export default {
  name: "Home",
  components: {
    Hero,
    Statistics,
    Services,
    PointsCalculator,
    CountryCards,
    Testimonials,
    ConsultationForm,
  },
  data() {
    return {
      formOpen: false,
    };
  },
  methods: {
    openForm() {
      this.formOpen = true;
    },
    closeForm() {
      this.formOpen = false;
    },
  },
};
</script>

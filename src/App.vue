<template>
  <div id="app">
    <Header @open-form="openForm" />
    <Hero @open-form="openForm" />
    <Statistics />
    <Services />
    <PointsCalculator />
    <CountryCards @open-form="openForm" />
    <Testimonials />
    <Footer />
    <ConsultationForm :isOpen="formOpen" @close="closeForm" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Statistics from "./components/Statistics.vue";
import Services from "./components/Services.vue";
import PointsCalculator from "./components/PointsCalculator.vue";
import CountryCards from "./components/CountryCards.vue";
import Testimonials from "./components/Testimonials.vue";
import Footer from "./components/Footer.vue";
import ConsultationForm from "./components/ConsultationForm.vue";

export default {
  name: "App",
  components: {
    Header,
    Hero,
    Statistics,
    Services,
    PointsCalculator,
    CountryCards,
    Testimonials,
    Footer,
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

<style>
#app {
  overflow-x: hidden;
}
</style>

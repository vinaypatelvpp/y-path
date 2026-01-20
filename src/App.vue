<template>
  <div id="app">
    <Header @open-form="openForm" />
    <router-view @open-form="openForm" />
    <Footer />
    <ConsultationForm :isOpen="formOpen" @close="closeForm" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import ConsultationForm from "./components/ConsultationForm.vue";

export default {
  name: "App",
  components: {
    Header,
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

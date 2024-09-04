<script>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  export default {
    components: {
      Header,
      Footer
    },
    data() {
        return {
        }
    },
    created() {
      this.$store.dispatch('carregarTarefas');
    },
  }
</script>

<template>
  <Header />
  <main class="container d-flex flex-column">
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped>
</style>

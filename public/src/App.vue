<template>
  <section>
  	<NavBar></NavBar>
  </section>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  import NavBar from './components/NavBar.vue';

  export default {
    components: {
      NavBar
    }
  }
</script>

<style lang="sass">
  @import "./sass/app";
  @import "./font-awesome/css/font-awesome.min.css";
</style>

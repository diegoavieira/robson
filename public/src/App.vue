<template>
  <section>
  	<TopBar></TopBar>
    <div class="container">
      <NavTab v-if="isLogged"></NavTab>
      <div :class="{'tabs-content': isLogged}">
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  import TopBar from './components/TopBar.vue';
  import NavTab from './components/NavTab.vue';

  export default {
    components: {
      TopBar, NavTab
    },
    computed: {
      ...mapGetters({
        isLogged: 'isLogged',
      })
    },
    methods: {
      ...mapActions([

      ]),
    }
  }
</script>

<style lang="sass">
  @import "./sass/app";
  @import "./font-awesome/css/font-awesome.min.css";
</style>

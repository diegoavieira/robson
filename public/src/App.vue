<template>
  <div class="main">
  	<TopBar v-if="isLogged"></TopBar>
    <div class="container">
      <NavTab v-if="isLogged"></NavTab>
      <div :class="{'tabs-content': isLogged}">
        <router-view></router-view>
      </div>
    </div>
    <Modal :modal="modal"></Modal>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  import TopBar from './components/TopBar.vue';
  import NavTab from './components/NavTab.vue';
  import Modal from './components/Modal.vue';

  export default {
    components: {
      TopBar, NavTab, Modal
    },
    computed: {
      ...mapGetters({
        isLogged: 'isLogged',
        modal: 'modal'
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

<template>
  <div class="columns is-centered">
    <div class="login column is-one-quarter">
      <!-- <img src="../assets/logo-gim.svg"> -->
      <form>
        <div class="field">
          <div class="control">
            <input type="text" name="login" class="input is-medium" v-model="creds.login" placeholder="Login">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input type="password" name="password" class="input is-medium" v-model="creds.password" placeholder="Senha">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button class="button is-primary is-medium is-fullwidth" v-on:click.stop.prevent="login()">Entrar</button>
          </div>
          <!-- <p v-if="messageBack" class="help is-danger">{{messageBack}}</p> -->
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
	
  export default {
    computed: mapGetters({
      creds: 'creds',
    }),
    created() {
      this.$store.dispatch('clearCreds');
    },
    methods: mapActions([
      'login',
      'clearCreds'
    ])
	};
</script>

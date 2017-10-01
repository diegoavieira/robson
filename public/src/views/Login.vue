<template>
  <div class="columns is-centered">
    <div class="column is-one-quarter-desktop is-one-quarter-tablet">
      <form>
        <div class="field">
          <label class="label">Login</label>
          <div class="control">
            <input type="text" name="login" class="input" v-model="credsLogin.login" @focus="closeMessageBack" :class="{'is-danger': errors.has('login')}" v-validate="'required'">
            <p v-if="errors.has('login')" class="help is-danger">{{errors.first('login')}}</p>
          </div>
        </div>
        <div class="field">
          <label class="label">Senha</label>
          <div class="control">
            <input type="password" name="senha" class="input" v-model="credsLogin.password" @focus="closeMessageBack" :class="{'is-danger': errors.has('senha')}" v-validate="'required'">
            <p v-if="errors.has('senha')" class="help is-danger">{{errors.first('senha')}}</p>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button class="button is-success is-fullwidth" v-on:click.stop.prevent="login($validator)">Entrar</button>
          </div>
          <p v-if="messageBack" class="help is-danger">{{messageBack}}</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
	
  export default {
    mounted() {
      this.clearCredsLogin();
    },
    computed: {
      ...mapGetters({
        credsLogin: 'credsLogin',
        messageBack: 'messageBack'
      })
    },
    methods: {
      ...mapActions([
       'login',
       'closeMessageBack',
       'clearCredsLogin'
      ]),
    }
	}
</script>

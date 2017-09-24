<template>
  <div class="panel is-toggle">
    <button class="button is-fullwidth is-info" v-on:click="toggle = !toggle" :class="{'panel-open': !toggle}">
      <span class="icon">
        <i class="fa fa-plus-circle"></i>
      </span>
      <span>Cadastrar nova entrada</span>
    </button>
    <div class="panel-block" v-if="!toggle">
      <form>
        <div class="field">
          <label class="label">Data</label>
          <div class="control">
            <input class="input" type="text" name="data">
          </div>
        </div>
        <div class="field">
          <label class="label">Valor</label>
          <div class="control">
            <input class="input" type="text" name="valor">
          </div>
        </div>
        <div class="field">
          <label class="label">Descrição</label>
          <div class="control">
            <input class="input" type="text" name="descrição">
          </div>
        </div>
        <div class="field-flex">
          <div class="field">
            <div class="control">
              <button class="button is-info is-fullwidth">Cadastrar entrada</button>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button class="button is-link is-fullwidth">Limpar</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
	
  export default {
    data() {
      return {
        toggle: true,
      }
    },
    computed: {
			...mapGetters({
				user: 'user',
	    })
		},
    methods: {
	    ...mapActions([

	    ]),
    }
	}
</script>

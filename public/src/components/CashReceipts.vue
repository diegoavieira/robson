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
            <input class="input" :class="{'is-danger': errors.has('data')}" type="text" name="data" v-model="newCashReceipt.date" v-validate="'required|date_format:DD/MM/YYYY'" v-mask-date>
            <p v-if="errors.has('data')" class="help is-danger">{{errors.first('data')}}</p>
          </div>
        </div>
        <div class="field">
          <label class="label">Valor</label>
          <div class="control">
            <input class="input" type="text" name="valor" v-model="newCashReceipt.value">
          </div>
        </div>
        <div class="field">
          <label class="label">Descrição</label>
          <div class="control">
            <input class="input" type="text" name="descrição" v-model="newCashReceipt.description">
          </div>
        </div>
        <div class="field-flex">
          <div class="field">
            <div class="control">
              <button class="button is-info is-fullwidth" v-on:click.stop.prevent="createCashReceipt($validator)">Cadastrar entrada</button>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button class="button is-link is-fullwidth" v-on:click.stop.prevent="clearCashReceipt(errors)">Limpar</button>
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
				newCashReceipt: 'newCashReceipt',
	    })
		},
    methods: {
	    ...mapActions([
        'createCashReceipt',
        'clearCashReceipt'
	    ]),
    }
	}
</script>

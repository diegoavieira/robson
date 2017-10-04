<template>
  <div class="panel ">
    <div class="panel-heading has-text-info">
      <span class="icon">
        <i class="fa fa-arrow-circle-right"></i>
      </span>
      <span>Cadastrar entrada</span>
    </div>
    <div class="panel-block">
      <form class="form-flex">
        <div class="field">
          <label class="label">Data</label>
          <div class="control">
            <input class="input" :class="{'is-danger': errors.has('data')}" type="text" name="data" v-model="newCashReceipt.date" v-validate="'required|date_format:DD/MM/YYYY'" v-my-mask="'99/99/9999'">
            <p v-if="errors.has('data')" class="help is-danger">{{errors.first('data')}}</p>
          </div>
        </div>
        <div class="field">
          <label class="label">Valor</label>
          <div class="control">
            <input class="input" :class="{'is-danger': errors.has('valor')}" type="text" name="valor" v-model="newCashReceipt.value" v-validate="'required'" v-my-mask-money="'R$ '">
            <p v-if="errors.has('valor')" class="help is-danger">{{errors.first('valor')}}</p>
          </div>
        </div>
        <div class="field description">
          <label class="label">Descrição</label>
          <div class="control">
            <input class="input" :class="{'is-danger': errors.has('descrição')}" type="text" rows="2" name="descrição" v-model="newCashReceipt.description"  v-validate="'required'">
            <p v-if="errors.has('descrição')" class="help is-danger">{{errors.first('descrição')}}</p>
          </div>
        </div>
        <div class="field">
          <label class="label is-hidden-mobile" style="color: transparent;">Cadastrar</label>
          <div class="control">
            <button class="button is-info is-fullwidth" v-on:click.stop.prevent="createCashReceipt($validator)">Cadastrar</button>
          </div>
        </div>
        <div class="field clear-btn">
          <label class="label is-hidden-mobile" style="color: transparent;">Limpar</label>
          <div class="control">
            <button class="button is-link is-fullwidth" v-on:click.stop.prevent="clearCashReceipt(errors)">Limpar</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
	
  export default {
    mounted() {
      this.setDateCashReceipt();
    },
    computed: {
			...mapGetters({
				newCashReceipt: 'newCashReceipt'
	    })
		},
    methods: {
	    ...mapActions([
        'createCashReceipt',
        'clearCashReceipt',
        'setDateCashReceipt'
	    ]),
    }
	}
</script>

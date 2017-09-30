<template>
  <div class="panel">
    <div class="panel-heading is-flex">
      <span class="has-text-dark">Saídas</span>
      <span class="icon has-text-grey-lighter">
        <i class="fa fa-level-down"></i>
      </span>
    </div>
    <div class="panel-block is-flex">
      <span>Total de hoje</span>
      <span class="subtitle is-4 has-text-dark">R$ 52,10</span>
    </div>
    <div class="panel-block">
      <form>
        <div class="field">
          <label class="label">Data</label>
          <div class="control">
            <input class="input" :class="{'is-danger': errors.has('data')}" type="text" name="data" v-model="newCashOutflow.date" v-validate="'required|date_format:DD/MM/YYYY'" v-my-mask="'99/99/9999'">
            <p v-if="errors.has('data')" class="help is-danger">{{errors.first('data')}}</p>
          </div>
        </div>
        <div class="field">
          <label class="label">Valor</label>
          <div class="control">
            <input class="input" :class="{'is-danger': errors.has('valor')}" type="text" name="valor" v-model="newCashOutflow.value" v-validate="'required'">
            <p v-if="errors.has('valor')" class="help is-danger">{{errors.first('valor')}}</p>
          </div>
        </div>
        <div class="field">
          <label class="label">Descrição</label>
          <div class="control">
            <textarea class="textarea" :class="{'is-danger': errors.has('descrição')}" type="text" rows="2" name="descrição" v-model="newCashOutflow.description"  v-validate="'required'"></textarea>
            <p v-if="errors.has('descrição')" class="help is-danger">{{errors.first('descrição')}}</p>
          </div>
        </div>
        <div class="field-flex">
          <div class="field">
            <div class="control">
              <button class="button is-dark is-fullwidth" v-on:click.stop.prevent="createCashOutflow($validator)">Cadastrar saída</button>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button class="button is-link is-fullwidth" v-on:click.stop.prevent="clearCashOutflow(errors)">Limpar</button>
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
    mounted() {
      this.setDateCashOutflow();
      this.getCashOutflows();
    },
    computed: {
			...mapGetters({
				newCashOutflow: 'newCashOutflow',
	    })
		},
    methods: {
	    ...mapActions([
        'createCashOutflow',
        'clearCashOutflow',
        'setDateCashOutflow',
        'getCashOutflows'
	    ]),
    }
	}
</script>

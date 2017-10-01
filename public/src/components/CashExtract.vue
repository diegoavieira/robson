<template>
  <div class="panel">
    <div class="panel-heading is-flex">
      <span class="has-text-warning">Extrato</span>
      <span class="icon has-text-grey-lighter">
        <i class="fa fa-file-text-o"></i>
      </span>
    </div>
    <div class="panel-block is-flex">
      <span>Total líquido de hoje</span>
      <span class="subtitle is-4 has-text-warning">{{cashExtract.totalLiquid | reais}}</span>
    </div>
    <div class="panel-block">
      <table class="table is-fullwidth is-striped">
        <thead>
          <tr>
            <th>Valor</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cash in listCashExtract">
            <td class="has-text-info" v-if="cash.cashType == 'receipt'">{{cash.value | reais}} <i class="fa fa-level-up"></i></td>
            <td class="has-text-dark" v-else>{{cash.value | reais}} <i class="fa fa-level-down"></i></td>
            <td>{{cash.description}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
	
  export default {
    mounted() {
      this.getCashExtract();
    },
    computed: {
			...mapGetters({
        cashExtract: 'cashExtract',
        listCashExtract: 'listCashExtract',
	    })
		},
    methods: {
	    ...mapActions([
        'getCashExtract'
	    ]),
    }
	}
</script>

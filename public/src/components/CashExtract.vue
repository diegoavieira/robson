<template>
  <div class="panel">
    <div class="panel-heading cash-header">
      <span class="icon has-text-grey-lighter">
        <i class="fa fa-list"></i>
      </span>
      <span class="has-text-dark">Extrato de hoje</span>
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
            <td class="has-text-info" v-if="cash.cashType == 'Entrada'"><i class="fa fa-arrow-circle-right"></i> {{cash.value | reais}}</td>
            <td class="has-text-warning" v-else><i class="fa fa-arrow-circle-left"></i> {{cash.value | reais}}</td>
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
    computed: {
			...mapGetters({
        cashExtract: 'cashExtract',
        listCashExtract: 'listCashExtract',
        cashExtract: 'cashExtract'
	    }),
      totalLiquidClass() {
        if (this.cashExtract.totalLiquid > 0) {
          return 'has-text-warning';
        } else {
          return 'has-text-danger';
        }
      }
		},
    methods: {
	    ...mapActions([
        
	    ]),
    }
	}
</script>

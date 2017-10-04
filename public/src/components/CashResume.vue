<template>
  <div class="columns">
    <div class="column">
      <div class="cash-resume">
        <span>Saldo em caixa</span>
        <span class="total" :class="totalClass">{{cashTotal.total | reais}}</span>
      </div>
    </div>
    <div class="column">
      <div class="cash-resume">
        <span>Entradas de hoje</span>
        <span class="total has-text-info" >{{cashExtract.totalReceipt | reais}}</span>
      </div>
    </div>
    <div class="column">
      <div class="cash-resume">
        <span>Saídas de hoje</span>
        <span class="total has-text-warning">{{cashExtract.totalOutflow | reais}}</span>
      </div>
    </div>
    <div class="column">
      <div class="cash-resume">
        <span>Saldo líquido de hoje</span>
        <span class="total" :class="liquidClass">{{cashExtract.totalLiquid | reais}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
	
  export default {
    computed: {
			...mapGetters({
        cashTotal: 'cashTotal',
        cashExtract: 'cashExtract'
	    }),
      totalClass() {
        if (this.cashTotal.total < 0) {
          return 'has-text-danger';
        } else {
          return 'has-text-success';
        }
      },
      liquidClass() {
        if (this.cashExtract.totalLiquid < 0) {
          return 'has-text-danger';
        } else {
          return 'has-text-dark';
        }
      }
		},
    methods: {
	    ...mapActions([

	    ]),
    }
	}
</script>

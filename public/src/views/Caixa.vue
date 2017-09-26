<template>
  <div class="cash-register">
    <FinancialBalance></FinancialBalance>
    <div class="columns">
      <div class="column">
        <CashReceipts></CashReceipts>
      </div>
      <div class="column">
        
      </div>
      <div class="column">
        
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  import FinancialBalance from '../components/FinancialBalance.vue';
  import CashReceipts from '../components/CashReceipts.vue';
	
  export default {
    components: {
      FinancialBalance, CashReceipts
    },
    computed: {
			...mapGetters({

	    })
		},
    methods: {
	    ...mapActions([

	    ]),
    }
	}
</script>

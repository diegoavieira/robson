<template>
  <div class="cash-register">
    <div class="columns">
      <div class="column">
        <CashResume></CashResume>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <CashReceipts></CashReceipts>
      </div>
      <div class="column">
        <CashOutflows></CashOutflows>
      </div>
      <div class="column">
        <CashExtract></CashExtract>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  import CashReceipts from '../components/CashReceipts.vue';
  import CashOutflows from '../components/CashOutflows.vue';
  import CashExtract from '../components/CashExtract.vue';
  import CashResume from '../components/CashResume.vue';
	
  export default {
    components: {
      CashReceipts, CashOutflows, CashExtract, CashResume
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

<template>
  <div>
    <CashResume></CashResume>
    <CashReceipts></CashReceipts>
    <CashOutflows></CashOutflows>
    <CashExtract></CashExtract>
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

<template>
  <div class="cash-resume is-flex">
    <span>Saldo total em caixa</span>
    <span class="total" :class="totalClass">{{cashTotal.total | reais}}</span>
    <span>{{today}}</span>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
	
  export default {
    mounted() {
      this.getCashTotal();
    },
    data() {
      return {
        today: Moment().format('ddd, DD/MM/YYYY'),
        totalClass: 'has-text-success'
      }
    },
    computed: {
			...mapGetters({
        cashTotal: 'cashTotal'
	    })
		},
    methods: {
	    ...mapActions([
        'getCashTotal'
	    ]),
    }
	}
</script>

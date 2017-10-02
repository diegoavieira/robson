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
    data() {
      return {
        today: Moment().format('ddd, DD/MM/YYYY')
      }
    },
    computed: {
			...mapGetters({
        cashTotal: 'cashTotal'
	    }),
      totalClass() {
        if (this.cashTotal.total > 0) {
          return 'has-text-success';
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

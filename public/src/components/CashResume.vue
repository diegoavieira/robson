<template>
  <div class="cash-resume is-flex">
    <span>Saldo total em caixa</span>
    <span class="total" :class="totalClass">R$ 5.145,25</span>
    <span>{{today}}</span>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
	
  export default {
    data() {
      return {
        today: Moment().format('ddd, DD/MM/YYYY'),
        totalClass: 'has-text-success'
      }
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

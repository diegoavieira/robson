<template>
  <div class="columns">
    <div class="column">
      <div class="notification has-text-info">
        <p>Entradas de hoje</p>
        <p class="subtitle is-3">R$ 52,10</p>
      </div>
    </div>
    <div class="column">
      <div class="notification has-text-warning">
        <p>Saídas de hoje</p>
        <p class="subtitle is-3">R$ 52,10</p>
      </div>
    </div>
    <div class="column">
      <div class="notification has-text-success">
        <p>Saldo em caixa</p>
        <p class="subtitle is-3">R$ 52,10</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
	
  export default {
    computed: {
			...mapGetters({
				user: 'user',
	    })
		},
    methods: {
	    ...mapActions([

	    ]),
    }
	}
</script>

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
      <span class="subtitle is-4 has-text-warning">R$ 52,10</span>
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
          <tr class="has-text-dark">
            <td>R$ 15,45 <i class="fa fa-level-down"></i></td>
            <td>Pagamento da luz</td>
          </tr>
          <tr class="has-text-dark">
            <td>R$ 15,45 <i class="fa fa-level-down"></i></td>
            <td>Pagamento da luz</td>
          </tr>
          <tr class="has-text-info">
            <td>R$ 15,45 <i class="fa fa-level-up"></i></td>
            <td>Solda básica</td>
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

	    })
		},
    methods: {
	    ...mapActions([

	    ]),
    }
	}
</script>

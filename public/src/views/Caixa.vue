<template>
  <div class="columns">
    <div class="column">
      Olá {{user.name}}
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

<template>
	<div class="top-bar">
    <div class="container">
			<img src="../assets/logo-robson-white.svg">
			<div>
				<span>{{today}}</span>
				<a v-if="isLogged" v-on:click.stop.prevent="logout()">Sair</a>
				<router-link v-if="!isLogged" :to="{name: 'login'}">Login</router-link>
			</div>
    </div>
	</div>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex';
	
	export default {
		data() {
      return {
        today: Moment().format('ddd, DD MMM YYYY')
      }
    },
		computed: {
			...mapGetters({
				isLogged: 'isLogged',
	    })
		},
    methods: {
	    ...mapActions([
	     'logout'
	    ]),
    }
	}
</script>
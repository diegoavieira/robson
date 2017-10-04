<template>
	<div :class="{'is-active': modal.open}" class="modal">
	  <div class="modal-background"></div>
	  <div class="modal-message">
	  	<i v-if="modal.icon" class="fa" :class="modal.icon"></i>
  		<h1>{{modal.title}}</h1>
  		<p>{{modal.message}}</p>
  		<button v-if="modal.button" class="button is-link" v-on:click="closeModal()">Fechar</button>
	  </div>
	  <button v-if="modal.button" class="modal-close is-large" v-on:click="closeModal()"></button>
	</div>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex';

	export default {
		props: ['modal'],
    methods: {
	    ...mapActions([
	     'closeModal'
	    ]),
    }
	}
</script>
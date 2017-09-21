<template>
	<div class="tabs is-boxed">
    <ul>
      <router-link :to="{name: 'caixa'}" tag="li">
        <a>
          <span class="icon"><i class="fa fa-money"></i></span>
          <span>Caixa</span>
        </a>
      </router-link>
      <router-link :to="{name: 'estoque'}" tag="li">
        <a>
          <span class="icon"><i class="fa fa-car"></i></span>
          <span>Estoque</span>
        </a>
      </router-link>
      <router-link :to="{name: 'relatorios'}" tag="li">
        <a>
          <span class="icon"><i class="fa fa-line-chart"></i></span>
          <span>Relatórios</span>
        </a>
      </router-link>
      <router-link :to="{name: 'fornecedores'}" tag="li">
        <a>
          <span class="icon"><i class="fa fa-address-card-o "></i></span>
          <span>Fornecedores</span>
        </a>
      </router-link>
    </ul>
  </div>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex';
	
	export default {

	}
</script>
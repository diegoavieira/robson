import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: require('../views/Login.vue'),
    beforeEnter: (to, from, next) => {
      if (!store.getters.isLogged) {
        next();
      } else {
        next(false);
      }
    }
  },
  {
    path: '/caixa',
    name: 'caixa',
    component: require('../views/Caixa.vue'),
    beforeEnter: (to, from, next) => {
      if (store.getters.isLogged) {
        next();
      } else {
        next(false);
      }
    }
  },
  {
    path: '/estoque',
    name: 'estoque',
    component: require('../views/Estoque.vue'),
    beforeEnter: (to, from, next) => {
      if (store.getters.isLogged) {
        next();
      } else {
        next(false);
      }
    }
  },
  {
    path: '/relatorios',
    name: 'relatorios',
    component: require('../views/Relatorios.vue'),
    beforeEnter: (to, from, next) => {
      if (store.getters.isLogged) {
        next();
      } else {
        next(false);
      }
    }
  },
  {
    path: '/fornecedores',
    name: 'fornecedores',
    component: require('../views/Fornecedores.vue'),
    beforeEnter: (to, from, next) => {
      if (store.getters.isLogged) {
        next();
      } else {
        next(false);
      }
    }
  },
  {
    path: '*',
    beforeEnter: (to, from, next) => {
      next(false)
    }
  }
];

export default new VueRouter({
  routes,
  linkActiveClass: 'is-active'
});
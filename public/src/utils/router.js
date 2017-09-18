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
  // {
  //   path: '/dashboard',
  //   name: 'dashboard',
  //   component: require('../views/Dashboard.vue'),
  //   beforeEnter: (to, from, next) => {
  //     if (store.getters.isLogged) {
  //       next();
  //     } else {
  //       next(false);
  //     }
  //   }
  // },
  // {
  //   path: '/comercial',
  //   name: 'comercial',
  //   component: require('../views/Comercial.vue'),
  //   beforeEnter: (to, from, next) => {
  //     if (store.getters.isLogged && store.getters.employee.permissions.comercial) {
  //       next();
  //     } else {
  //       next(false);
  //     }
  //   }
  // },
  // {
  //   path: '/financeiro',
  //   name: 'financeiro',
  //   component: require('../views/Financeiro.vue'),
  //   beforeEnter: (to, from, next) => {
  //     if (store.getters.isLogged && store.getters.employee.permissions.financeiro) {
  //       next();
  //     } else {
  //       next(false);
  //     }
  //   }
  // },
  // {
  //   path: '/operacao',
  //   name: 'operacao',
  //   component: require('../views/Operacao.vue'),
  //   beforeEnter: (to, from, next) => {
  //     if (store.getters.employee.permissions.operacao) {
  //       next();
  //     } else {
  //       next(false);
  //     }
  //   }
  // },
  // {
  //   path: '/gerencia',
  //   name: 'gerencia',
  //   component: require('../views/Gerencia.vue'),
  //   beforeEnter: (to, from, next) => {
  //     if (store.getters.isLogged && store.getters.employee.permissions.gerencia) {
  //       next();
  //     } else {
  //       next(false);
  //     }
  //   }
  // },
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
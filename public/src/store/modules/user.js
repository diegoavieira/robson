import * as types from '../mutationTypes';
import Services from '../../utils/services';
import router from '../../utils/router';
import Axios from 'axios';
import store from '../';

const state = {
  credsLogin: {},
  isLogged: false,
  user: {}
};

const getters = {
  credsLogin: (state) => {
    return state.credsLogin
  },
  isLogged: (state) => {
    return state.isLogged
  },
  user: (state) => {
    return state.user
  }
};

const actions = {
	login({commit, state}, $validator) {
    $validator.validateAll().then(result => {
      if (result) {
        Services.login(state.credsLogin).then(result => {
          if (result.data.success) {
            localStorage.setItem('token', result.data.token);
            Axios.defaults.headers.common = {
              'x-access-token': localStorage.getItem('token')
            };
            commit(types.ISLOGGED, {isLogged: true});
            commit(types.USER, {user: result.data.data});
            store.dispatch('getCashExtract');
            store.dispatch('getCashTotal');
            router.push('/caixa');
          } else {
            console.log(result.data.message)
            commit(types.MESSAGE_BACK, {messageBack: result.data.message});
          };
        });
      }
    });
  },
  logout({commit, state}) {
    Services.logout().then(result => {
      if (result.data.success) {
        localStorage.clear();
        commit(types.ISLOGGED, {isLogged: false});
        commit(types.MESSAGE_BACK, {messageBack: result.data.message});
        router.push('/');
      };
    });
  },
  clearCredsLogin({commit, state}) {
    commit(types.LOGIN_CREDS, {credsLogin: {}})
  }
};

const mutations = {
  [types.ISLOGGED] (state, {isLogged}) {
    state.isLogged = isLogged;
  },
  [types.LOGIN_CREDS] (state, {credsLogin}) {
    state.credsLogin = credsLogin;
  },
  [types.USER] (state, {user}) {
    state.user = user;
  }
};

export default {
	state,
  getters,
	actions,
	mutations
};
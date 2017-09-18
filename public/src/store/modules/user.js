import * as types from '../mutationTypes';
import Services from '../../utils/services';
import router from '../../utils/router';
import Axios from 'axios';
import store from '../';

const state = {
  creds: {},
  isLogged: false,
  user: {}
};

const getters = {
  creds: (state) => {
    return state.creds
  },
  isLogged: (state) => {
    return state.isLogged
  },
  user: (state) => {
    return state.user
  }
};

const actions = {
	login({commit, state}) {
    Services.login(state.creds).then(result => {
      if (result.data.success) {
        localStorage.setItem('token', result.data.data.token);
        Axios.defaults.headers.common = {
          'x-access-token': localStorage.getItem('token')
        };
        commit(types.ISLOGGED, {isLogged: true});
        commit(types.USER, {user: result.data.data});
        // router.push('/dashboard');
      } else {
        // commit(types.MESSAGE_BACK, {messageBack: result.data.message});
      };
    });
  },
  // logout({commit, state}) {
  //   Services.logout().then(result => {
  //     if (result.data.success) {
  //       localStorage.clear();
  //       commit(types.ISLOGGED, {isLogged: false});
  //       commit(types.EMPLOYEE, {employee: {permissions: false}});
  //       commit(types.MESSAGE_BACK, {messageBack: result.data.message});
  //       router.push('/');
  //     };
  //   });
  // },
  clearCreds({commit, state}) {
    commit(types.LOGIN_CREDS, {creds: {}})
  }
};

const mutations = {
  [types.ISLOGGED] (state, {isLogged}) {
    state.isLogged = isLogged;
  },
  [types.LOGIN_CREDS] (state, {creds}) {
    state.creds = creds;
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
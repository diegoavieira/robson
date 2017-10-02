import * as types from '../mutationTypes';
import Services from '../../utils/services';
import store from '../';

const state = {
  cashTotal: {},
};

const getters = {
  cashTotal: (state) => {
    return state.cashTotal;
  }
};

const actions = {
  getCashTotal({commit, state}) {
    Services.getCashTotal().then(result => {
      commit(types.CASH_TOTAL, {cashTotal: result.data});
    });
  }
};

const mutations = {
  [types.CASH_TOTAL] (state, {cashTotal}) {
    state.cashTotal = cashTotal;
  }
};

export default {
	state,
  getters,
	actions,
	mutations
};
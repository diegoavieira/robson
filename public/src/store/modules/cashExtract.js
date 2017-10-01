import * as types from '../mutationTypes';
import Services from '../../utils/services';
import store from '../';

const state = {
  cashExtract: {},
  cashTotal: {}
};

const getters = {
  cashExtract: (state) => {
    return state.cashExtract;
  },
  listCashExtract: (state) => {
    return _.orderBy(state.cashExtract.data, ['cashs_id'], ['desc']);
  },
  cashTotal: (state) => {
    return state.cashTotal;
  },
};

const actions = {
  getCashExtract({commit, state}, payload) {
    let parms;
    if (payload) {
      parms = payload;
    } else {
      parms = {dateInit: Moment().startOf('day'), dateEnd: Moment().endOf('day')}
    }
    Services.getCashExtract(parms).then(result => {
      if (result.data.success) {
        commit(types.CASH_EXTRACT, {cashExtract: result.data});
      } else {
        commit(types.CASH_EXTRACT, {cashExtract: result.data});
      };
    });
  },
  getCashTotal({commit, state}) {
    Services.getCashTotal().then(result => {
      if (result.data.success) {
        commit(types.CASH_TOTAL, {cashTotal: result.data});
      } else {
        commit(types.CASH_TOTAL, {cashTotal: result.data});
      };
    })
  }
};

const mutations = {
  [types.CASH_EXTRACT] (state, {cashExtract}) {
    state.cashExtract = cashExtract;
  },
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
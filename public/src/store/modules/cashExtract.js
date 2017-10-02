import * as types from '../mutationTypes';
import Services from '../../utils/services';
import store from '../';

const state = {
  cashExtract: {},
};

const getters = {
  cashExtract: (state) => {
    return state.cashExtract;
  },
  listCashExtract: (state) => {
    return _.orderBy(state.cashExtract.data, ['cashs_id'], ['desc']);
  }
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
      commit(types.CASH_EXTRACT, {cashExtract: result.data});
    });
  }
};

const mutations = {
  [types.CASH_EXTRACT] (state, {cashExtract}) {
    state.cashExtract = cashExtract;
  }
};

export default {
	state,
  getters,
	actions,
	mutations
};
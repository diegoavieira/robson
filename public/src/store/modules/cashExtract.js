import * as types from '../mutationTypes';
import Services from '../../utils/services';
import store from '../';

const state = {
  listCashExtract: []
};

const getters = {
  listCashExtract: (state) => {
    return _.orderBy(state.listCashExtract, ['cashs_id'], ['desc']);
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
      if (result.data.success) {
        commit(types.LIST_CASH_EXTRACT, {listCashExtract: result.data.data})
        console.log(state.listCashExtract)
      } else {
        commit(types.MESSAGE_BACK, {messageBack: result.data.message});
      };
     
    })
  }
};

const mutations = {
  [types.LIST_CASH_EXTRACT] (state, {listCashExtract}) {
    state.listCashExtract = listCashExtract;
  }
};

export default {
	state,
  getters,
	actions,
	mutations
};
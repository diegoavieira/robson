import * as types from '../mutationTypes';
import Services from '../../utils/services';
import store from '../';

const state = {
  newCashOutflow: {}
};

const getters = {
  newCashOutflow: (state) => {
    return state.newCashOutflow
  }
};

const actions = {
  createCashOutflow({commit, state}, $validator) {
    console.log(state.newCashOutflow)
    $validator.validateAll().then(result => {
      if (result) {
        let parms = state.newCashOutflow;
        parms.date = Moment(parms.date, 'DD/MM/YYYY').format();
        Services.createCashOutflow(parms).then(result => {
          if (result.data.success) {
            console.log(result.data.data)
            store.dispatch('clearCashOutflow');
          } else {
            commit(types.MESSAGE_BACK, {messageBack: result.data.message});
          };
        });
      }
    });
  },
  clearCashOutflow({commit, state}, errors) {
    if (errors) {
      errors.clear();
    };
    commit(types.MESSAGE_BACK, {messageBack: false});
    commit(types.NEW_CASH_OUTFLOW, {newCashOutflow: {}});
  }
};

const mutations = {
  [types.NEW_CASH_OUTFLOW] (state, {newCashOutflow}) {
    state.newCashOutflow = newCashOutflow;
  }
};

export default {
	state,
  getters,
	actions,
	mutations
};
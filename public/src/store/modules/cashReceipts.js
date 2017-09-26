import * as types from '../mutationTypes';
import Services from '../../utils/services';
import store from '../';

const state = {
  newCashReceipt: {}
};

const getters = {
  newCashReceipt: (state) => {
    return state.newCashReceipt
  }
};

const actions = {
  createCashReceipt({commit, state}, $validator) {
    console.log(state.newCashReceipt)
    $validator.validateAll().then(result => {
      if (result) {
        let parms = state.newCashReceipt;
        parms.date = Moment(parms.date, 'DD/MM/YYYY').format();
        Services.createCashReceipt(parms).then(result => {
          if (result.data.success) {
            console.log(result.data.data)
            store.dispatch('clearCashReceipt');
          } else {
            commit(types.MESSAGE_BACK, {messageBack: result.data.message});
          };
        });
      }
    });
  },
  clearCashReceipt({commit, state}, errors) {
    if (errors) {
      errors.clear();
    };
    commit(types.MESSAGE_BACK, {messageBack: false});
    commit(types.NEW_CASH_RECEIPT, {newCashReceipt: {}});
  }
};

const mutations = {
  [types.NEW_CASH_RECEIPT] (state, {newCashReceipt}) {
    state.newCashReceipt = newCashReceipt;
  }
};

export default {
	state,
  getters,
	actions,
	mutations
};
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
    $validator.validateAll().then(result => {
      if (result) {
        let parms = state.newCashReceipt;
        parms.date = Moment(parms.date, 'DD/MM/YYYY').format();
        parms.cashType = 'Entrada';
        let valueNum = parms.value.replace(',', '.');
        parms.value = Number(valueNum);
        Services.createCash(parms).then(result => {
          if (result.data.success) {
            store.dispatch('clearCashReceipt');
            store.dispatch('getCashExtract');
            store.dispatch('getCashTotal');
            commit(types.MESSAGE_BACK, {messageBack: result.data.message});
          } else {
            store.dispatch('setDateCashReceipt');
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
    commit(types.NEW_CASH_RECEIPT_CLEAR, {newCashReceipt: {}});
    store.dispatch('setDateCashReceipt');
  },
  setDateCashReceipt({commit, state}) {
    commit(types.NEW_CASH_RECEIPT, {newCashReceipt: {date: Moment().format('DD/MM/YYYY')}});
  }
};

const mutations = {
  [types.NEW_CASH_RECEIPT] (state, {newCashReceipt}) {
    Object.assign(state.newCashReceipt, newCashReceipt)
  },
  [types.NEW_CASH_RECEIPT_CLEAR] (state, {newCashReceipt}) {
    state.newCashReceipt = newCashReceipt;
  }
};

export default {
	state,
  getters,
	actions,
	mutations
};
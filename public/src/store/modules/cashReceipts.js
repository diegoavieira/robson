import * as types from '../mutationTypes';
import Services from '../../utils/services';
import store from '../';

const state = {
  newCashReceipt: {},
  listCashReceipts: {}
};

const getters = {
  newCashReceipt: (state) => {
    return state.newCashReceipt
  },
  listCashReceipts: (state) => {
    return state.listCashReceipts
  }
};

const actions = {
  createCashReceipt({commit, state}, $validator) {
    $validator.validateAll().then(result => {
      if (result) {
        let parms = state.newCashReceipt;
        parms.date = Moment(parms.date, 'DD/MM/YYYY').format();
        parms.cashType = 'receipt';
        Services.createCash(parms).then(result => {
          if (result.data.success) {
            store.dispatch('clearCashReceipt');
            store.dispatch('getCashReceipts');
            store.dispatch('getCashExtract');
            store.dispatch('getCashTotal');
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
    commit(types.NEW_CASH_RECEIPT_CLEAR, {newCashReceipt: {}});
    store.dispatch('setDateCashReceipt');
  },
  setDateCashReceipt({commit, state}) {
    commit(types.NEW_CASH_RECEIPT, {newCashReceipt: {date: Moment().format('DD/MM/YYYY')}});
  },
  getCashReceipts({commit, state}, payload) {
    let parms;
    if (payload) {
      parms = payload;
    } else {
      parms = {dateInit: Moment().startOf('day'), dateEnd: Moment().endOf('day')}
    }
    Services.getCashReceipts(parms).then(result => {
      if (result.data.success) {
        commit(types.LIST_CASH_RECEIPT, {listCashReceipts: result.data});
      } else {
        commit(types.LIST_CASH_RECEIPT, {listCashReceipts: result.data})
      };
    })
  }
};

const mutations = {
  [types.NEW_CASH_RECEIPT] (state, {newCashReceipt}) {
    Object.assign(state.newCashReceipt, newCashReceipt)
  },
  [types.NEW_CASH_RECEIPT_CLEAR] (state, {newCashReceipt}) {
    state.newCashReceipt = newCashReceipt;
  },
  [types.LIST_CASH_RECEIPT] (state, {listCashReceipts}) {
    state.listCashReceipts = listCashReceipts;
  }
};

export default {
	state,
  getters,
	actions,
	mutations
};
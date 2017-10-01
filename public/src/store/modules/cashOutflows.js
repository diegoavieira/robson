import * as types from '../mutationTypes';
import Services from '../../utils/services';
import store from '../';

const state = {
  newCashOutflow: {},
  listCashOutflows: {}
};

const getters = {
  newCashOutflow: (state) => {
    return state.newCashOutflow
  },
  listCashOutflows: (state) => {
    return state.listCashOutflows
  }
};

const actions = {
  createCashOutflow({commit, state}, $validator) {
    $validator.validateAll().then(result => {
      if (result) {
        let parms = state.newCashOutflow;
        parms.date = Moment(parms.date, 'DD/MM/YYYY').format();
        parms.cashType = 'outflow';
        Services.createCash(parms).then(result => {
          if (result.data.success) {
            store.dispatch('clearCashOutflow');
            store.dispatch('getCashOutflows');
            store.dispatch('getCashExtract');
            store.dispatch('getCashTotal');
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
    commit(types.NEW_CASH_OUTFLOW_CLEAR, {newCashOutflow: {}});
    store.dispatch('setDateCashOutflow');
  },
  setDateCashOutflow({commit, state}) {
    commit(types.NEW_CASH_OUTFLOW, {newCashOutflow: {date: Moment().format('DD/MM/YYYY')}});
  },
  getCashOutflows({commit, state}, payload) {
    let parms;
    if (payload) {
      parms = payload;
    } else {
      parms = {dateInit: Moment().startOf('day'), dateEnd: Moment().endOf('day')}
    }
    Services.getCashOutflows(parms).then(result => {
      if (result.data.success) {
        commit(types.LIST_CASH_OUTFLOW, {listCashOutflows: result.data})
      } else {
        commit(types.LIST_CASH_OUTFLOW, {listCashOutflows: result.data})
      };
     
    })
  }
};

const mutations = {
  [types.NEW_CASH_OUTFLOW] (state, {newCashOutflow}) {
    Object.assign(state.newCashOutflow, newCashOutflow)
  },
  [types.NEW_CASH_OUTFLOW_CLEAR] (state, {newCashOutflow}) {
    state.newCashOutflow = newCashOutflow;
  },
  [types.LIST_CASH_OUTFLOW] (state, {listCashOutflows}) {
    state.listCashOutflows = listCashOutflows;
  }
};

export default {
	state,
  getters,
	actions,
	mutations
};
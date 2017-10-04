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
    $validator.validateAll().then(result => {
      if (result) {
        let parms = state.newCashOutflow;
        parms.date = Moment(parms.date, 'DD/MM/YYYY').format();
        parms.cashType = 'Saída';
        let valueNum = parms.value.replace(',', '.');
        parms.value = Number(valueNum);
        Services.createCash(parms).then(result => {
          if (result.data.success) {
            store.dispatch('clearCashOutflow');
            store.dispatch('getCashExtract');
            store.dispatch('getCashTotal');
            commit(types.MODAL, {
              modal: {
                open: true,
                icon: 'fa-arrow-circle-left warning',
                title: result.data.message,
                button: true
              }
            });
          } else {
            store.dispatch('setDateCashOutflow');
            commit(types.MODAL, {
              modal: {
                open: true,
                icon: 'fa-exclamation danger',
                title: 'Ooops!',
                message: 'Ocorreu um erro. Contate o suporte.',
                button: true
              }
            });
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
  }
};

const mutations = {
  [types.NEW_CASH_OUTFLOW] (state, {newCashOutflow}) {
    Object.assign(state.newCashOutflow, newCashOutflow)
  },
  [types.NEW_CASH_OUTFLOW_CLEAR] (state, {newCashOutflow}) {
    state.newCashOutflow = newCashOutflow;
  }
};

export default {
	state,
  getters,
	actions,
	mutations
};
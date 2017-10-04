import * as types from '../mutationTypes';

const state = {
  modal: {
    open: false,
    icon: false,
    title: false,
    message: false
  }
};

const getters = {
  modal: (state) => {
    return state.modal;
  }
};

const actions = {
  closeModal({commit, state}) {
    commit(types.MODAL, {modal: {open: false}});
  }
};

const mutations = {
  [types.MODAL] (state, {modal}) {
    state.modal = modal;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
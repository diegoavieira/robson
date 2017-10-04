import * as types from '../mutationTypes';

const state = {
  messageBack: false
};

const getters = {
  messageBack: (state) => {
    return state.messageBack
  }
};

const actions = {
  closeMessageBack({commit, state}) {
    commit(types.MESSAGE_BACK, {messageBack: false});
  }
};

const mutations = {
  [types.MESSAGE_BACK] (state, {messageBack}) {
    state.messageBack = messageBack;
  }
};

export default {
	state,
  getters,
	actions,
	mutations
};
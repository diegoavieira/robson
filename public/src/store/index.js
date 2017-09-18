import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

import user from './modules/user';

export default new Vuex.Store({
	modules: {
		user
	},
	strict: debug
});
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

import user from './modules/user';
import messageBack from './modules/messageBack';
import cashReceipts from './modules/cashReceipts';
import cashOutflows from	'./modules/cashOutflows';
import cashExtract from	'./modules/cashExtract';

export default new Vuex.Store({
	modules: {
		user, messageBack, cashReceipts, cashOutflows, cashExtract
	},
	strict: debug
});
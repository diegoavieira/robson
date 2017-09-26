localStorage.clear();
import Vue from 'vue';
import App from './App.vue';
import router from './utils/router';
import store from './store';
import Moment from 'moment';
import VeeValidate, {Validator} from 'vee-validate';
import ptBr from './assets/pt_BR';
import InputMask from 'inputmask';
import Lodash from 'lodash';

window.Moment = Moment;
Moment.locale('pt_BR');

Validator.addLocale(ptBr);
Vue.use(VeeValidate, {
	locale: 'pt_BR',
	events: 'input'
});

window.InputMask = InputMask;

window._ = Lodash;

Vue.filter('reais', value => {
	let options = {
		minimumFractionDigits: 2,
		style: 'currency',
		currency: 'BRL'
	};
  return Number(value).toLocaleString('pt-BR', options).replace(/([$])([\d])/g, '$1 $2');
});

Vue.filter('date', value => {
  return Moment(value).format('DD/MM/YYYY');
});

Vue.directive('maskDate', {
  bind(el, binding) {
    let maskOpts = {
    	showMaskOnFocus: false,
    	showMaskOnHover: false,
    	positionCaretOnClick: 'none',
    };
    InputMask('99/99/9999', maskOpts).mask(el);
  },
  unbind(el) {
    InputMask.remove(el);
  }
});

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
localStorage.clear();
import Vue from 'vue';
import App from './App.vue';
import router from './utils/router';
import store from './store';
import Moment from 'moment';
import VeeValidate, {Validator} from 'vee-validate';
import ptBr from './assets/pt_BR';
import VueTheMask from 'vue-the-mask';
import Lodash from 'lodash';

window.Moment = Moment;
Moment.locale('pt_BR');

Validator.addLocale(ptBr);
Validator.installDateTimeValidators(Moment);

Vue.use(VeeValidate, {
	locale: 'pt_BR',
	events: 'input'
});
Vue.use(VueTheMask);

Vue.filter('number', value => {
  return Number(value).toLocaleString('pt-BR');
});

Vue.filter('capitalize', value => {
  return value.replace(/\w\S*/g, txt => {
  	return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
});

Vue.filter('numberFix', value => {
  return Number(value).toFixed();
});

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

Vue.filter('cnpj', value => {
	return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '\$1.\$2.\$3\/\$4\-\$5');
});

Vue.filter('phone', value => {
  return value.replace(/^(\d{2})(\d)/g,'($1) $2').replace(/(\d)(\d{4})$/,'$1-$2'); 
});

window._ = Lodash;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
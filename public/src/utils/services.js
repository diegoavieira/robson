import Axios from 'axios';
import router from './router';

export default {
	login(data) {
		return Axios.post('/login', data);
	},
	signup(data) {
		return Axios.post('/signup', data);
	},
	logout(data) {
		return Axios.get('/logout');
	},
	createCashReceipt(data) {
		return Axios.post('/createCashReceipt', data);
	},
	createCashOutflow(data) {
		return Axios.post('/createCashOutflow', data);
	}
};

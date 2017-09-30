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
	createCash(data) {
		return Axios.post('/createCash', data);
	},
	getCashReceipts(data) {
		return Axios.post('/getCashReceipts', data);
	},
	getCashOutflows(data) {
		return Axios.post('/getCashOutflows', data);
	},
	getCashExtract(data) {
		return Axios.post('/getCashExtract', data);
	}
};

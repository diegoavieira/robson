import Axios from 'axios';
import router from './router';

export default {
	login(data) {
		return Axios.post('/login', data)
	},
	signup(data) {
		return Axios.post('/signup', data)
	},
};

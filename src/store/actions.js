import { LoginCard } from '../components';

const axios = require('axios')
const apiUrl = 'http://127.0.0.1:3000/'

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const actions = {
	signup(context, payload){
		return new Promise((resolve, reject) => {
			console.log(payload)
			var signupUser = {
				avata: '',
				first: payload.firstname,
				last: payload.lastname,
				username: payload.username,
				email: payload.email,
				password: payload.password,
			}

			axios.post(`${apiUrl}api/auth/signup/`, signupUser).then((res) => {
				console.log(res);
				resolve(res);
			}).catch((err) => {
				console.log(err)
				reject(new Error(err))
			})
		})		
	},

	login(context, payload){
		return new Promise((resolve, reject) => {
			console.log(payload)
			var loginData = {
				username: payload.username,
				password: payload.password,
			}

			axios.post(`${apiUrl}api/auth/signin/`, loginData).then((res) => {
				console.log(res);
				context.commit('UPDATE_SIGNED', true);
				context.commit('UPDATE_USER_INFO', res.data);
				resolve(res);
			}).catch((err) => {
				console.log(err);
				reject(new Error(err));
			})
		})
	}
}

export default actions

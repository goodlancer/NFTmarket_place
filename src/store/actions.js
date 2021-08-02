import { LoginCard } from '../components';
import authHeader from './authHeader';
// const authHeader = require('./authHeader');
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
				axios.defaults.headers.common['x-access-token'] = res.data.accessToken
				resolve(res);
			}).catch((err) => {
				console.log(err);
				reject(new Error(err));
			})
		})
	},

	updateProfileImage(context, payload){
		return new Promise((resolve, reject) => {
			var profileData = {
				profileImg: payload
			}

			axios.post(`${apiUrl}api/user/profileImage`, profileData, { headers: authHeader() }).then((res) => {
				context.commit('UPDATE_USER_INFO', res.data);
				resolve(res);
			}).catch((err) => {
				reject(new Error(err));
			})
		})
	},

	updateProfileData(context, payload)	{
		return new Promise((resolve, reject) => {
			var profileData = {
				email: payload.email,
				firstname: payload.firstname,
				lastname: payload.lastname,
				username: payload.username,
			}

			axios.post(`${apiUrl}api/user/profileUpdate`, profileData, { headers: authHeader() }).then((res) => {
				context.commit('UPDATE_USER_INFO', res.data);
				resolve(res);
			}).catch((err) => {
				reject(new Error(err));
			})
		})
	},

	logout(context){
		return new Promise((resolve) => {
			context.commit('LOGOUT');
			delete axios.defaults.headers.common['Authorization']
			resolve('loged out')
		})
	}
}

export default actions

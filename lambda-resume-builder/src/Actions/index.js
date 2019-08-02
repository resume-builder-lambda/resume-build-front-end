import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'
import axios from 'axios'

const SUCCESS = 'SUCCESS'

const url = 'https://lambda-crp.herokuapp.com/graphql'

const register = user => dispatch => {
	axios.post(url, {
		query: `
      mutation{
        createUser(userInput:{
          email:"${user.email}",
          password:"${user.password}",
          role: "${user.role}"
        }){
          _id
          token
          tokenExp
        }
	  }
	  `
	})
		.then(res => {
			console.log('REGISTERED', res)
			const token = res.data.data.createUser.token
			Cookies.set('token', token)
			dispatch({ type: SUCCESS, payload: res.data })
			if (token) {
				window.location.pathname = '/dashboard/profile'
			}
		})
		.catch(err => console.error({
			status: err.response.status,
			message: err.response.data.errors[0].message
		}))
}

const login = creds => dispatch => {
	axios.post(url, {
		query: `
      query{
        login(email:"${creds.email}", password:"${creds.password}"){
          token
        }
	  }
	  `
	})
		.then(res => {
			console.log('second response', res)
			const { token } = res.data.data.login
			Cookies.set('token', token)
			Cookies.set('creds', JSON.stringify(creds))
			const admin = jwt_decode(token)
			console.log('admin', admin)
			dispatch({ type: SUCCESS, payload: token })
			if (token) {
				window.location.pathname = '/dashboard/profile'
			}
		})
		.catch(err => console.error({
			status: err.response.status,
			message: err.response.data.errors[0].message
		}))
}

const createGoogleUser = google => dispatch => {
	axios.post(url, {
		query: `
      mutation{
        createGoogleUser(googleData:{
          token: "${google.token}", 
          image: "${google.image}", 
          email: "${google.email}", 
          name: "${google.name}", 
          password: "${google.password}"
        }){
          _id
          token
          tokenExp
        }
	  }
	  `
	})
		.then(res => {
			console.log('second response', res)
			const { token } = res.data.data.createGoogleUser
			localStorage.setItem('token', token)
			Cookies.set('token', token)
			const admin = jwt_decode(token)
			console.log('admin', admin)
			dispatch({ type: SUCCESS, payload: token })
			if (token) {
				window.location.pathname = '/dashboard/profile'
			}
		})
		.catch(err => console.error({
			status: err.response.status,
			message: err.response.data.errors[0].message
		}))
}

export { SUCCESS, register, login, createGoogleUser }

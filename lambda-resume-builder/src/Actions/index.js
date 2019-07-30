import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'

const SUCCESS = 'SUCCESS'

const register = (user) => (dispatch) => {
	let requestBody = {
		query : `
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
	}

	fetch('https://lambda-crp.herokuapp.com/graphql', {
		method  : 'POST',
		body    : JSON.stringify(requestBody),
		headers : { 'content-type': 'application/json' }
	})
		.then((res) => {
			return res.json()
		})
		.then((res) => {
			console.log('REGISTERED', res)
			Cookies.set('token', res.data.createUser.token)
			dispatch({ type: SUCCESS, payload: res.data })
		})
		.catch((err) => {
			console.log(err)
		})
}

const login = (creds) => (dispatch) => {
	let requestBody = {
		query : `
      query{
        login(email:"${creds.email}", password:"${creds.password}"){
          token
        }
      }
    `
	}

	fetch('https://lambda-crp.herokuapp.com/graphql', {
		method  : 'POST',
		body    : JSON.stringify(requestBody),
		headers : { 'content-type': 'application/json' }
	})
		.then((res) => {
			console.log('this is the response', res)
			return res.json()
		})
		.then((res) => {
			const { token } = res.data.login
			console.log('second response', res)
			Cookies.set('token', token)
			Cookies.set('creds', JSON.stringify(creds))
			const admin = jwt_decode(token)
			console.log('admin', admin)
			dispatch({ type: SUCCESS, payload: token })
		})
		.catch((err) => console.log(err))
}

const createGoogleUser = (google) => (dispatch) => {
	console.log(google)

	let requestBody = {
		query : `
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
	}

	fetch('https://lambda-crp.herokuapp.com/graphql', {
		method  : 'POST',
		body    : JSON.stringify(requestBody),
		headers : { 'content-type': 'application/json' }
	})
		.then((res) => {
			return res.json()
		})
		.then((res) => {
			console.log('second response', res)
			const { token } = res.data.createGoogleUser
			localStorage.setItem('token', token)
			Cookies.set('token', token)
			const admin = jwt_decode(token)
			console.log('admin', admin)
			dispatch({ type: SUCCESS, payload: token })
		})
}

export { SUCCESS, register, login, createGoogleUser }

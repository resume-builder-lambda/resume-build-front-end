import jwt_decode from 'jwt-decode'

import Cookies from 'js-cookie'

const REGISTER = "REGISTER",
  REGISTER_SUCCESS = "REGISTER_SUCCESS",
  GOOGLE_LOGIN = "GOOGLE_LOGIN"

const register = user => dispatch => {

  dispatch({ type: REGISTER })

  let requestBody = {
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
    `}

  fetch('https://lambda-crp.herokuapp.com/', {
    method: 'POST',
    body: JSON.stringify(requestBody),
    headers: { "content-type": "application/json" }
  })
    .then(res => {
      return res.json()
    })
    .then(res => {
      console.log("REGISTERED", res)
      localStorage.setItem('token', res.data.createUser.token)
      dispatch({ type: REGISTER_SUCCESS, payload: res.data })
    })
    .catch(err => console.log(err))

}

const login = creds => dispatch => {

  let requestBody = {
    query: `
      query{
        login(email:"${creds.email}", password:"${creds.password}"){
          token
        }
      }
    `}

  fetch("https://lambda-crp.herokuapp.com/", {
    method: 'POST',
    body: JSON.stringify(requestBody),
    headers: { "content-type": "application/json" }
  })
    .then(res => {
      console.log('this is the response', res)
      return res.json()
    })
    .then(res => {
      const { token } = res.data.login
      console.log('second response', res)
      localStorage.setItem('token', token)
      Cookies.set('token', token)
      Cookies.set('creds', JSON.stringify(creds))
      const admin = jwt_decode(token)
      console.log('admin', admin)
      dispatch({ type: REGISTER_SUCCESS, payload: token })
    })
    .catch(err => console.log(err))
}

const createGoogleUser = google => dispatch => {

  console.log(google)

  let requestBody = {
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
  `}

  fetch('https://lambda-crp.herokuapp.com/', {
    method: 'POST',
    body: JSON.stringify(requestBody),
    headers: { "content-type": "application/json" }
  })
    .then(res => {
      return res.json()
    })
    .then(res => {
      const { token } = res.data.createGoogleUser
      console.log('second response', res)
      localStorage.setItem('token', token)
      Cookies.set('token', token)
      const admin = jwt_decode(token)
      console.log('admin', admin)
      dispatch({ type: REGISTER_SUCCESS, payload: token })
    })

}

export {
  REGISTER,
  REGISTER_SUCCESS,
  GOOGLE_LOGIN,
  register,
  login,
  createGoogleUser,
}

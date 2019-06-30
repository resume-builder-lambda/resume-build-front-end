import jwt_decode from 'jwt-decode'

import Cookies from 'js-cookie'

const REGISTER = "REGISTER"
const REGISTER_SUCCESS = "REGISTER_SUCCESS"
const LOGGING_IN = "LOGGING_IN"
const LOGIN_FAILURE = "LOGIN_FAILURE"

const register = user => dispatch => {
  console.log("action call, POST", user)
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
    .catch(err => ({ err }))
}

// login action 
const login = creds => dispatch => {

  console.log("action call, LOGGING_IN")

  dispatch({ type: LOGGING_IN })

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
      Cookies.set('creds', JSON.stringify(creds))
      const admin = jwt_decode(token)
      console.log('admin', admin)
      dispatch({ type: REGISTER_SUCCESS, payload: token })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: LOGIN_FAILURE, payload: err })
    })
}

export {
  REGISTER,
  REGISTER_SUCCESS,
  LOGGING_IN,
  LOGIN_FAILURE,
  register,
  login,
}

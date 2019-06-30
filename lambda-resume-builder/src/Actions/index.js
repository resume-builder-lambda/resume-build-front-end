import jwt_decode from 'jwt-decode'

import Cookies from 'js-cookie'

const REGISTER = "REGISTER"
const REGISTER_SUCCESS = "REGISTER_SUCCESS"

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
      Cookies.set('creds', JSON.stringify(creds))
      const admin = jwt_decode(token)
      console.log('admin', admin)
      dispatch({ type: REGISTER_SUCCESS, payload: token })
    })
    .catch(err => console.log(err))
}

export {
  REGISTER,
  REGISTER_SUCCESS,
  register,
  login,
}

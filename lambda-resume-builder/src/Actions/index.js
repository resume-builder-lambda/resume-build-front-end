import axios from 'axios'

export const REGISTER = "REGISTER"
export const REGISTER_SUCCESS ="REGISTER_SUCCESS"
export const LOGGING_IN ="LOGGING_IN"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE ="LOGIN_FAILURE"

export const register = user => dispatch => {
    console.log("action call, POST", user);
    dispatch({ type: REGISTER });
    let requestBody = {query:`
    mutation{
      createUser(userInput:{
        email:"${user.email}",
        password:"${user.password}",
        role: "${user.role}"
      }){
        _id
        email
      }
    }
    `}
      fetch('https://lambda-resume-builder.herokuapp.com/', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {"content-type": "application/json"}
      }) 
      .then(res => {
        console.log("REGISTERED", res);
        dispatch({ type: REGISTER_SUCCESS, payload: res.data });
       
      })
      .catch(err => ({ err }));
  };

  export const login = creds => dispatch => {
    console.log("action call, LOGGING_IN")
    dispatch({ type: LOGGING_IN});
    return axios
        .post("https://school-itc.herokuapp.com/api/accounts/login", creds)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.token});
               
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: LOGIN_FAILURE, payload: err})
        })
}


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
        token
        tokenExp
        
      }
    }
    `}
      fetch('https://lambda-resume-builder.herokuapp.com/', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {"content-type": "application/json"}
      }) 
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log("REGISTERED", res);
        dispatch({ type: REGISTER_SUCCESS, payload: res.data });
        localStorage.setItem('token', res.data.createUser.token);
       
      })
      .catch(err => ({ err }));
  };

  export const login = creds => dispatch => {
    console.log("action call, LOGGING_IN")
    dispatch({ type: LOGGING_IN});
    let requestBody = {query:`
    query{
      login(email:"${creds.email}", password:"${creds.password}"){
        
        token
      }
    }
    `}
        fetch("https://lambda-resume-builder.herokuapp.com/", {
          method: 'POST',
          body: JSON.stringify(requestBody),
          headers: {"content-type" : "application/json"}
        })
        .then(res => {
            console.log('this is the response', res);
            return res.json();
           
               
        })
        .then(res => {
          console.log('second response', res)
           localStorage.setItem('token', res.data.login.token);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.login.token});
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: LOGIN_FAILURE, payload: err})
        })
}

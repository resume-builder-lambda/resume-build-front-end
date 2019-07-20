import jwt_decode from 'jwt-decode'

import Cookies from 'js-cookie'


const SUCCESS = "SUCCESS"

const register = user => dispatch => {

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

  fetch('https://lambda-crp.herokuapp.com/graphql', {
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
      dispatch({ type: SUCCESS, payload: res.data })
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

  fetch("https://lambda-crp.herokuapp.com/graphql", {
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
      Cookies.set('token', token)
      Cookies.set('creds', JSON.stringify(creds))
      const admin = jwt_decode(token)
      console.log('admin', admin)
      dispatch({ type: SUCCESS, payload: token })
    })
    .catch(err => console.log(err))
}

const createLinkedInUser = () => {

  window.location = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.REACT_APP_LINKEDIN_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`
}


const createGithubUser = code => dispatch => {

  if (code) {

    fetch(`https://crp-gatekeeper.herokuapp.com/authenticate/${code}`)
      .then(res => res.json())
      .then(({ token }) => {
        fetch(`https://api.github.com/user?access_token=${token}`,
          { headers: { "content-type": "application/json" } })
          .then(res => res.json())
          .then(res => {
            const user = {
              name: res.name,
              email: res.login,
              password: res.node_id,
              image: res.avatar_url,
              token: res.node_id,
              username: res.login
            }

            let requestBody = {
              query: `
                mutation{
                  createGitHubUser(gitHubData:{
                    token: "${user.token}",
                    image: "${user.image}",
                    email: "${user.email}",
                    name: "${user.name}",
                    password: "${user.password}",
                    username: "${user.username}"
                  }){
                    _id
                    token
                    tokenExp
                  }
                }
            `}

            fetch('https://lambda-crp.herokuapp.com/graphql', {
              method: 'POST',
              body: JSON.stringify(requestBody),
              headers: { "content-type": "application/json" }
            })
              .then(res => {
                return res.json()
              })
              .then(res => {
                console.log('second response', res)
                const { token } = res.data.createGitHubUser
                Cookies.set('token', token)
                const admin = jwt_decode(token)
                console.log('admin', admin)
                dispatch({ type: SUCCESS, payload: token })
              })


          })
      })

  } else {

    Cookies.set('github', true)

    window.location = 'https://lambda-crp.herokuapp.com/auth/github'

  }

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

  fetch('https://lambda-crp.herokuapp.com/graphql', {
    method: 'POST',
    body: JSON.stringify(requestBody),
    headers: { "content-type": "application/json" }
  })
    .then(res => {
      return res.json()
    })
    .then(res => {
      console.log('second response', res)
      const { token } = res.data.createGoogleUser
      localStorage.setItem('token', token)
      Cookies.set('token', token)
      const admin = jwt_decode(token)
      console.log('admin', admin)
      dispatch({ type: SUCCESS, payload: token })
    })

}

export {
  SUCCESS,
  register,
  login,
  createGoogleUser,
  createGithubUser,
  createLinkedInUser,
}

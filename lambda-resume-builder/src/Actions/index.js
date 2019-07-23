import jwt_decode from 'jwt-decode'

import Cookies from 'js-cookie'


const SUCCESS = "SUCCESS",
  LINKEDIN_CLICKED = 'LINKEDIN_CLICKED',
  LINKEDIN_REQUEST = 'LINKEDIN_REQUEST'

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
      Cookies.set('token', res.data.createUser.token)
      dispatch({ type: SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err)
      debugger
    })

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

const createLinkedInUser = code => dispatch => {

  if (!code) {

    const width = 450,
      height = 730,
      left = window.screen.width / 2 - width / 2,
      top = window.screen.height / 2 - height / 2

    var li = window.open(

      `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.REACT_APP_LINKEDIN_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_REGISTER_URI}&scope=r_liteprofile%20r_emailaddress%20w_member_social`,
      'LinkedIn',
      `menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=${width}, height=${height}, top=${top},left=${left}`

    )

    console.log(li)

    dispatch({ type: LINKEDIN_CLICKED })

  } else {

    dispatch({ type: LINKEDIN_REQUEST })

    fetch(`https://lambda-crp.herokuapp.com/auth/linkedin`, {
      method: 'POST',
      headers: {
        code: code
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))

  }


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

    const width = 450,
      height = 730,
      left = window.screen.width / 2 - width / 2,
      top = window.screen.height / 2 - height / 2

    var gh = window.open(

      'https://lambda-crp.herokuapp.com/auth/github',
      'GitHub',
      `menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=${width}, height=${height}, top=${top},left=${left}`

    )

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
  LINKEDIN_CLICKED,
  LINKEDIN_REQUEST,
  register,
  login,
  createGoogleUser,
  createGithubUser,
  createLinkedInUser,
}

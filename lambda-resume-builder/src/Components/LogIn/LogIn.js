import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { login } from "../../Actions"
import { CssBaseline, FormControl, Input, InputLabel, Paper, Button } from '@material-ui/core'
import Logo from '../Images/Lamda_Logo.svg'
import { NavLink } from 'react-router-dom'
import { useForm } from 'customhooks'
import GLogo from '../Images/G-Sign-In-Normal.png'
import linkedin from '../Images/linkedin.png'
import GHLogo from '../Images/GitHub-Logo.png'
import './login.scss'
import GoogleLogin from 'react-google-login'
import Logo1 from '../Images/final.png'

import Cookies from 'js-cookie'

import { login as styles, StyledButton, withStyles, lambdaLogo } from '../../MaterialUI/styles'

function SignIn(props) {

  const { fields, handleChanges, submit } = useForm(handleSubmit)

  const { classes } = props

  const creds = Cookies.get('creds') &&
    JSON.parse(Cookies.get('creds'))

  const gitHubLogin = () => {

    const code = window.location.href.match(/\?code=(.*)/) &&
      window.location.href.match(/\?code=(.*)/)[1]

    if (!code) {

      window.location = 'https://lambda-crp.herokuapp.com/auth/github'

    } else {

      fetch(`https://crp-gatekeeper.herokuapp.com/authenticate/${code}`)
        .then(res => res.json())
        .then(({ token }) => {
          fetch(`https://api.github.com/user?access_token=${token}`,
            { headers: { "content-type": "application/json" } })
            .then(res => res.json())
            .then(res => {
              console.log('login res', res)
              props.login({
                email: res.login,
                password: res.node_id
              })
            })
        })

    }

  }

  const responseGoogle = res => {

    console.log('res', res)

    const google = {
      token: res.accessToken,
      image: res.profileObj.imageUrl,
      name: res.profileObj.name,
      email: res.profileObj.email,
      password: `${res.googleId}${res.profileObj.familyName}`
    }

    console.log(google)

    props.login(google)

  }


  function handleSubmit() {
    props.login(fields)
  }

  // Attempts to log in with creds stored in cookies
  useEffect(() => {
    const attempt = () => {

      if (creds) {
        props.login(creds)
      }

    }

    attempt()

  }, [creds])



  return (

    <main className={classes.main}>

      <CssBaseline />

      <Paper className={classes.paper}>

        {/* <img alt='Lambda Logo' style={lambdaLogo} src={Logo} /> */}
        <img alt='Logo' style={{ height: '150px', width: '150px' }} src={Logo1} />

        {/* <span>Career Readiness Portal</span> */}


        <form
          onSubmit={(e) => submit(e)}
          className={classes.form}
        >

          <FormControl
            margin="normal"
            required
            fullWidth
          >

            <InputLabel htmlFor="email">Email:</InputLabel>

            <Input
              id="email"
              name="email"
              autoComplete="email"
              onChange={handleChanges}
              autoFocus
            />

          </FormControl>

          <FormControl
            margin="normal"
            required
            fullWidth
          >

            <InputLabel htmlFor="password">Password</InputLabel>

            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChanges}
            />

          </FormControl>

          <Button variant="outlined" color="secondary" className={classes.submit} type="submit" fullWidth style={{ padding: '8px' }} >
            Sign in
          </Button>

          <div style={{ marginTop: '25px' }}>

            <img
              className={'oauth'}
              alt='GitHub Logo'
              src={GHLogo}
              id='GitHub'
              onClick={Cookies.get('github') ? gitHubLogin() : () => gitHubLogin()}
            />

            <img
              className={'oauth'}
              alt='LinkedIn Logo'
              src={linkedin}
              onClick={(e) => e.preventDefault()}
            />

            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              render={renderProps => (
                <img className={'oauth'} onClick={renderProps.onClick} alt='Google Logo' src={GLogo} />
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </div>

        </form>

        <p>Don't have an account?</p>

        <NavLink to="/register">Register Here</NavLink>

      </Paper>

    </main>
  )
}

const mapStateToProps = state => ({
  ...state,
  github: state.github
})

export default connect(mapStateToProps, { login })(withStyles(styles)(SignIn))

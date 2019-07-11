import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { login, createGithubUser } from "../../Actions"
import { CssBaseline, FormControl, Input, InputLabel, Paper } from '@material-ui/core'
import Logo from '../Images/Lamda_Logo.svg'
import { NavLink } from 'react-router-dom'
import { useForm } from 'customhooks'
import GLogo from '../Images/G-Sign-In-Normal.png'
import linkedin from '../Images/linkedin.png'
import GHLogo from '../Images/GitHub-Logo.png'
import './login.scss'
import GoogleLogin from 'react-google-login'

import Cookies from 'js-cookie'

import { login as styles, StyledButton, withStyles, lambdaLogo } from '../../MaterialUI/styles'

function SignIn(props) {

  const { fields, handleChanges, submit } = useForm(handleSubmit)

  const { classes } = props

  const creds = Cookies.get('creds') &&
    JSON.parse(Cookies.get('creds'))

  const ghCookie = Cookies.get('github') &&
    Cookies.get('github')

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
    setTimeout(() => window.location.pathname = '/dashboard', 1000)

  }


  function handleSubmit() {
    props.login(fields)
    setTimeout(() => window.location.pathname = '/dashboard', 1000)
  }

  // Attempts to log in with creds stored in cookies
  useEffect(() => {
    const attempt = () => {

      if (creds) {
        props.login(creds)
        setTimeout(() => window.location.pathname = '/dashboard', 1000)
      }

    }

    attempt()

  }, [creds])

  useEffect(() => {
    const github = () => {

      if (ghCookie) {
        const code = window.location.href.match(/\?code=(.*)/) &&
          window.location.href.match(/\?code=(.*)/)[1]
        props.createGithubUser(code)
      }

    }

    github()

  }, [ghCookie])

  return (

    <main className={classes.main}>

      <CssBaseline />

      <Paper className={classes.paper}>

        <img alt='Lambda Logo' style={lambdaLogo} src={Logo} />

        <span>Career Readiness Portal</span>


        <form
          onSubmit={submit}
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

          <StyledButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign in
          </StyledButton>

          <div style={{ marginTop: '25px' }}>

            <img
              className={'oauth'}
              alt='GitHub Logo'
              src={GHLogo}
              id='GitHub'
              onClick={createGithubUser()}
            />

            <img
              className={'oauth'}
              alt='LinkedIn Logo'
              src={linkedin}
              onClick={() => createGithubUser()}
            />

            <GoogleLogin
              clientId="770851102940-n34cdukc3asba2rh5g7l2fo1u1nm0clf.apps.googleusercontent.com"
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

export default connect(mapStateToProps, { login, createGithubUser })(withStyles(styles)(SignIn))

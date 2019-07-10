import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { login } from "../../Actions"
import { CssBaseline, FormControl, Checkbox, Input, InputLabel, Paper, FormControlLabel, Button } from '@material-ui/core'
import Logo from '../Images/Lamda_Logo.svg'
import { NavLink } from 'react-router-dom'
import { useForm } from 'customhooks'
import GLogo from '../Images/G-Sign-In-Normal.png'
import LLogo from '../Images/Sign-in-Large.png'
import GHLogo from '../Images/GitHub-Logo.png'

import GoogleLogin from 'react-google-login'
import { createGithubUser } from '../../Actions'
import Register from '../Register'

import Cookies from 'js-cookie'

import { login as styles, StyledButton, withStyles, lambdaLogo } from '../../MaterialUI/styles'


// const githubapi = "https://github.com/login/oauth/authorize?client_id=8c8935780c16571f5bc8&redirect_uri=https://www.crp.netlify.com"

function SignIn(props) {

  const { fields, handleChanges, submit } = useForm(handleSubmit)

  const { classes } = props

  const creds = Cookies.get('creds') &&
    JSON.parse(Cookies.get('creds'))

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

  if (!Cookies.get('token')) {
    return (
      <Register />
    )
  }

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

          <FormControlLabel
            control={<Checkbox
              value="remember"
              color="primary"
            />}
            label="Remember me"
          />

          <StyledButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign in
          </StyledButton>

          <Button
            id='GitHub'
            onClick={(e) => {
              e.preventDefault()
              createGithubUser()
            }
            }
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            <img alt='GitHub Logo' src={GHLogo} style={{ height: '25px', width: '25px', marginRight: '10px' }} /> Sign in with GitHub
          </Button>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            <img alt='LinkedIn Logo' src={LLogo} style={{ height: '25px', width: '25px', marginRight: '10px' }} />Sign in with LinkedIn
          </Button>
          <GoogleLogin
            clientId="770851102940-n34cdukc3asba2rh5g7l2fo1u1nm0clf.apps.googleusercontent.com"
            render={renderProps => (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <img alt='Google Logo' src={GLogo} style={{
                  height: '25px',
                  width: '25px',
                  marginRight: '10px'
                }} />Sign in with Google
                </Button>


            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />

        </form>



        <p>Don't have an account?</p>

        <NavLink to="/register">Register Here</NavLink>

      </Paper>

    </main>
  )
}

const mapStateToProps = state => ({
  state
})

export default connect(mapStateToProps, { login })(withStyles(styles)(SignIn))

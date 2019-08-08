import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { connect } from "react-redux"
import { CssBaseline, FormControl, Input, InputLabel, Paper, Button } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { useForm } from 'customhooks'

import { login } from "../../Actions"
import { login as styles, withStyles } from '../../MaterialUI/styles'

import GLogo from '../Images/G-Sign-In-Normal.png'
import GoogleLogin from 'react-google-login'
import Logo1 from '../Images/final.png'

import './login.scss'

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

    props.login(google, props.history)

  }

  function handleSubmit() {
    props.login(fields, props.history)
  }


  useEffect(() => {// Attempts to log in with creds stored in cookies

    if (creds) {
      props.login(creds)
    }

  }, [creds])

  return (

    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <img alt='Logo' style={{ height: '150px', width: '150px' }} src={Logo1} />
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

          <Button
            variant="outlined"
            color="secondary"
            className={classes.submit}
            type="submit"
            fullWidth
            style={{ padding: '8px' }}
          >Sign in</Button>

          <div style={{ marginTop: '25px' }}>
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              render={renderProps => (
                <img
                  className={'oauth'}
                  onClick={renderProps.onClick}
                  alt='Google Logo' src={GLogo}
                />
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

export default connect(
  mapStateToProps,
  { login }
)(withStyles(styles)(SignIn))

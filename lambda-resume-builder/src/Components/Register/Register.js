import React from 'react'
import { connect } from "react-redux"
import { register, createGoogleUser } from "../../Actions"
import { CssBaseline, FormControl, Input, InputLabel, Paper, Button } from '@material-ui/core'
import Logo from '../Images/Lamda_Logo.svg'
import { NavLink } from 'react-router-dom'
import { useForm } from 'customhooks'
import GLogo from '../Images/G-Sign-In-Normal.png'
import linkedin from '../Images/linkedin.png'
import GHLogo from '../Images/GitHub-Logo.png'
import './register.scss'
import GoogleLogin from 'react-google-login'

import { login as styles, StyledButton, withStyles, lambdaLogo } from '../../MaterialUI/styles'


const Register = (props) => {

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

    props.createGoogleUser(google)
    setTimeout(() => window.location.pathname = '/dashboard', 1000)

  }

  const { fields, handleChanges, submit } = useForm(handleSubmit)

  const { classes } = props

  function handleSubmit() {
    props.register(fields)
    setTimeout(() => window.location.pathname = '/dashboard', 1000)
  }

  console.log(fields.role)

  return (
    <main className={classes.main}>

      <CssBaseline />

      <p style={{ width: '100%' }}></p>

      <Paper className={classes.paper} >

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
              type="email"
              onChange={handleChanges} autoComplete="email"
              autoFocus
            />

          </FormControl>

          <FormControl
            margin="normal"
            required
            fullWidth
          >

            <InputLabel htmlFor="password">New Password</InputLabel>

            <Input
              name="password"
              type="password"
              onChange={handleChanges}
              id="password"
              autoComplete="current-password"
            />

          </FormControl>


          <StyledButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
            </StyledButton>


          <div style={{marginTop: '25px'}}>
          <img className={'oauth'} alt='GitHub Logo' src={GHLogo} id='GitHub' onClick={(e) => {
              e.preventDefault()
              
            }} />

            <img className={'oauth'}  alt='LinkedIn Logo' src={linkedin} />

          <GoogleLogin
            clientId="770851102940-n34cdukc3asba2rh5g7l2fo1u1nm0clf.apps.googleusercontent.com"
            render={renderProps => (
              <img className={'oauth'} onClick={renderProps.onClick} alt='Google Logo' src={GLogo}  /> 
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>

        </form>

        <p>Already have an account?</p>

        <NavLink to='/'>Log In</NavLink>

      </Paper>

    </main>
  )

}

const mapStateToProps = state => ({
  register: state.register
})



export default connect(mapStateToProps, { register, createGoogleUser })(withStyles(styles)(Register))
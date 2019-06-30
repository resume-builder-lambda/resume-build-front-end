import React from 'react'
import { connect } from "react-redux"
import { login } from "../../Actions"
import { CssBaseline, FormControl, Checkbox, Input, InputLabel, Paper, FormControlLabel } from '@material-ui/core'
import Logo from '../Images/Lamda_Logo.svg'
import { NavLink } from 'react-router-dom'
import { useForm } from 'customhooks'

import { login as styles, StyledButton, withStyles, lambdaLogo } from '../../MaterialUI/styles'

function SignIn(props) {

  let { fields, handleChanges, submit } = useForm(handleSubmit)

  const { classes } = props

  function handleSubmit() {
    props.login(fields)
    setTimeout(() => window.location.pathname = '/dashboard', 1000)
  }

  return (
    <main className={classes.main}>

      <CssBaseline />

      <Paper className={classes.paper}>

        <img style={lambdaLogo} src={Logo} alt='' />

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

        </form>

        <p>Don't have an account?</p>

        <NavLink to="/register" >Register Here</NavLink>

      </Paper>

    </main>
  )
}

const mapStateToProps = state => ({
  login: state.login,
  loggedIn: state.loggedIn
})





export default connect(mapStateToProps, { login })(withStyles(styles)(SignIn))

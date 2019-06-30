import React from 'react'
import { connect } from "react-redux"
import { register } from "../../Actions"
import { CssBaseline, FormControl, Radio, RadioGroup, FormControlLabel, Input, InputLabel, Paper } from '@material-ui/core'
import Logo from '../Images/Lamda_Logo.svg'
import { NavLink } from 'react-router-dom'
import { useForm } from 'customhooks'

import { login as styles, StyledButton, withStyles, lambdaLogo } from '../../MaterialUI/styles'

const Register = (props) => {

  const { fields, handleChanges, submit } = useForm(handleSubmit)

  const { classes } = props

  function handleSubmit() {
    props.register(fields)
    setTimeout(() => window.location.pathname = '/dashboard', 1000)
  }


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

          <FormControl
            margin="normal"
            required
            fullWidth
            style={{ color: "green" }}
          >

            <RadioGroup

              aria-label="Role"
              name="role"
              className={classes.group}
              onChange={handleChanges}
              inputprops={{
                name: 'role',
                id: 'role',
              }}
            >

              <FormControlLabel
                value="Student"
                control={<Radio />}
                label="Student"
              />

              <FormControlLabel
                value="Career Coach"
                control={<Radio />}
                label="Career Coach"
              />

            </RadioGroup>

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

        </form>

        <span style={{ marginTop: '1rem' }}>Or if you already have an account</span>

        <NavLink to='/'>Log In</NavLink>

      </Paper>

    </main>
  )

}

const mapStateToProps = state => ({
  register: state.register
})



export default connect(mapStateToProps, { register })(withStyles(styles)(Register))
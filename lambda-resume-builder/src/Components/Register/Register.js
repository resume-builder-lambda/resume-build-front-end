import React from 'react'
import { connect } from "react-redux"
import { register } from "../../Actions"
import { CssBaseline, FormControl, Radio, RadioGroup, FormControlLabel, Input, InputLabel, Paper, Button } from '@material-ui/core'
import Logo from '../Images/Lamda_Logo.svg'
import { NavLink } from 'react-router-dom'
import { useForm } from 'customhooks'
import GLogo from '../Images/G-Sign-In-Normal.png'
import LLogo from '../Images/Sign-in-Large.png'
import GHLogo from '../Images/GitHub-Logo.png'

import { login as styles, StyledButton, withStyles, lambdaLogo } from '../../MaterialUI/styles'

const Register = (props) => {

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

            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            <img src={GHLogo} style={{height:'25px', width:'25px', marginRight: '10px'}}/> Register in with GitHub
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            <img src={LLogo} style={{height:'25px', width:'25px', marginRight: '10px'}}/>Register in with LinkedIn
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            <img src={GLogo} style={{height:'25px', width:'25px', marginRight: '10px'}}/>Register in with Google
          </Button>

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
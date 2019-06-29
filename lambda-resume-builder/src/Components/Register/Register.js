import React from 'react'
import { connect } from "react-redux"
import { register } from "../../Actions"
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControl from '@material-ui/core/FormControl'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Logo from '../Images/Lamda_Logo.svg'
import Paper from '@material-ui/core/Paper'
import withStyles from '@material-ui/core/styles/withStyles'
import { NavLink } from 'react-router-dom'

import { register as styles } from '../../MaterialUI/styles'




const StyledButton = withStyles({
  root: {
    background: '#bb1333',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px #D0CECF',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button)

const lambdaLogo = {
  height: '40px',
  width: '120px',
  padding: '5px'
}

const Register = (props) => {



  const [state, setState] = React.useState(
    {
      role: "",
      email: "",
      password: ""
    })

  const { classes } = props

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value })
  }

  const redirect = () => {
    console.log('Props', props)
    window.location.pathname = '/dashboard'

  }

  const handleSubmit = event => {
    event.preventDefault()
    props.register(state)
    setTimeout(() => redirect(), 1000)


  }


  return (
    <main className={classes.main}>

      <CssBaseline />
      <p style={{ width: '100%' }}>
      </p>
      <Paper className={classes.paper} >

        <img alt='' style={lambdaLogo} src={Logo} />
        <span>Career Readiness Portal</span>


        <form onSubmit={handleSubmit} className={classes.form} >

          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email:</InputLabel>
            <Input id="email" name="email" type="email" value={state.email} onChange={handleChange} autoComplete="email" autoFocus />
          </FormControl>

          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">New Password</InputLabel>
            <Input name="password" type="password" value={state.password} onChange={handleChange} id="password" autoComplete="current-password" ></Input>
          </FormControl>
          <FormControl margin="normal" required fullWidth style={{ color: "green" }}>

            <RadioGroup

              aria-label="Role"
              name="role"
              className={classes.group}
              value={state.role}
              onChange={handleChange}
              inputProps={{
                name: 'role',
                id: 'role',
              }}
            >
              <FormControlLabel value="Student" control={<Radio />} label="Student" />
              <FormControlLabel value="Career Coach" control={<Radio />} label="Career Coach" />
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

const mapStateToProps = state => (

  {
    register: state.register
  }
)



export default connect(mapStateToProps, { register })(withStyles(styles)(Register))
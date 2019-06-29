import React from 'react';
import { connect } from "react-redux";
import {login} from "../../Actions";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Logo from '../Images/Lamda_Logo.svg'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link, NavLink, Redirect } from 'react-router-dom'


const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

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
  })(Button);

  const lambdaLogo={
    height: '40px',
    width: '120px',
    padding: '5px'
}

function SignIn(props) {
  const { classes } = props;
  const [state, setState]= React.useState(
    {
    
    email: "",
    password: ""})


    
   function handleChange(event) {
    setState({...state, [event.target.name]:event.target.value});
  }

  const redirect = () => {
    console.log('Props', props)
    window.location.pathname = '/dashboard';
    
   }

  const handleSubmit = event => {
    event.preventDefault();
    props.login(state)
    setTimeout( () => redirect(), 1000)

    }




  

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        
        <img style={lambdaLogo} src={Logo}/>
        <span>Career Readiness Portal</span>
       
    
        <form onSubmit={handleSubmit} className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email:</InputLabel>
            <Input id="email" name="email" autoComplete="email" onChange={handleChange} autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" onChange={handleChange}/>
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
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
  );
}

const mapStateToProps = state => (
    
  {
    login: state.login,
    loggedIn: state.loggedIn
  }
);





export default connect (mapStateToProps, {
  login
})
  (withStyles(styles)(SignIn));
import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Logo from '../Images/Lamda_Logo.svg'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';



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

const Register = (props) =>  {
  
   
  
    const [state, setState]= React.useState(
    {first_name:"",
    last_name:"",
    section: "",
    role: "",
    email: "",
    password: ""})
    const { classes } = props;
    const [section, setSection] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [role, setRole] = React.useState('');



  function handleChange(event) {
   
    
    setState({...state, [event.target.name]:event.target.value});
  }

  
  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }
  
  return (
    <main className={classes.main}>
     
      <CssBaseline />
      <p style={{width: '100%'}}>Welcome to Lambda's resume builder, if you are a new user, please take a moment to create an account.  Once your account is created you will be taken
        to the quick and easy onboarding process.  Here you will answer questions based on your schooling, work history and basic information about yourself that will
        help to speed up the process of building you a resume that will get you noticed.
      </p>
      <Paper className={classes.paper}>
        
        <img style={lambdaLogo} src={Logo}/>
        <span>Resume Builder User Registration</span>
       

        <form className={classes.form}>
            
          <FormControl margin="normal" required fullWidth> 
            <InputLabel htmlFor="email">Email:</InputLabel>
            <Input id="email" name="email" type="email" autoComplete="email" autoFocus />
          </FormControl>
          
          <FormControl margin="normal" required fullWidth> 
            
            <RadioGroup
          aria-label="Role"
          name="role"
          className={classes.group}
          value={role}
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

          <FormControl margin="normal" required fullWidth> 
            <InputLabel htmlFor="section">Section:</InputLabel>
            <Select
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={section}
                onChange={handleChange}
                inputProps={{
                name: 'section',
                id: 'section',
                }}
        > 
        
          <MenuItem value="">  
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Web18'}>Web18</MenuItem>
          <MenuItem value={'Web19'}>Web19</MenuItem>
          <MenuItem value={'Web20'}>Web20</MenuItem>
          <MenuItem value={'Web21'}>Web21</MenuItem>
        </Select>
          </FormControl> 

          <FormControl margin="normal" required fullWidth> 
            <InputLabel htmlFor="username"> New Username:</InputLabel>
            <Input id="username" name="username" autoComplete="username" autoFocus />
          </FormControl>

          <FormControl margin="normal" required fullWidth> 
            <InputLabel htmlFor="password">New Password</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" ></Input>
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
        <span style={{marginTop: '1rem'}}>Or if you already have an account</span>
        <a style={{textDecoration:'none'}} href='#'>Log In</a>
      </Paper>
    </main>
  );

}


export default withStyles(styles)(Register);
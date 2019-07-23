import React, { useState } from 'react'
import classNames from 'classnames'
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import avatar from '../Images/avataaars.png'
import {assignments} from '../Assignments/AssignmentList'
import Accord from '../Accordian/Accordian'
import { makeStyles } from '@material-ui/styles';




const Profile = (props) => {
  const [checkState, setCheckState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    
  });

  const handleChange = name => event => {
    event.stopPropagation()
    setCheckState({ ...checkState, [name]: event.target.checked });
  };

  const useStyles = makeStyles(theme => ({
    root: {
     
    },
  }));
  
  
    const classes = useStyles();

 

    return(
        <div  style={{marginBottom: '100px'}}>
          
          <div style={{marginBottom:'30px'}}>
           
            <img src={avatar} style={{ height: '200px', width:'200px', marginBottom:'30px'}}/>
            <p>Student McStudent</p>
            <p>Web18</p>
           
          </div>
          <div style={{display:'flex'}}>
            <div style={{width:'48%', marginTop: '5px'}}>
          <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper} style={{padding:'10px', margin:'5px', background:'#BB1333', color:'white'}}>Career Goal Checkup</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} style={{padding:'10px', margin:'5px'}}><b>SMART Goals</b></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} style={{padding:'10px', margin:'5px'}}><b>Placeholder</b></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} style={{padding:'10px', margin:'5px'}}>Goal #1 <Checkbox
        checked={checkState.checkedA}
        onChange={handleChange('checkedA')}
        value="checkedA"
        color="primary"
        inputProps={{
          'aria-label': 'secondary checkbox',
        }}
      /></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} style={{padding:'10px', margin:'5px', visibility:'hidden'}}></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} style={{padding:'10px', margin:'5px'}}>Goal #2 <Checkbox
        checked={checkState.checkedB}
        onChange={handleChange('checkedB')}
        value="checkedB"
        color="primary"
        inputProps={{
          'aria-label': 'secondary checkbox',
        }}
      /></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} style={{padding:'10px', margin:'5px', visibility:'hidden'}}></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} style={{padding:'10px', margin:'5px'}}>Goal #3 <Checkbox
        checked={checkState.checkedC}
        onChange={handleChange('checkedC')}
        value="checkedC"
        color="primary"
        inputProps={{
          'aria-label': 'secondary checkbox',
        }}
      /></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} style={{padding:'10px', margin:'5px', visibility:'hidden'}}></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} style={{padding:'10px', margin:'5px'}}>Goal #4 <Checkbox
        checked={checkState.checkedD}
        onChange={handleChange('checkedD')}
        value="checkedD"
        color="primary"
        inputProps={{
          'aria-label': 'secondary checkbox',
        }}
      /></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} style={{padding:'10px', margin:'5px', visibility:'hidden'}}></Paper>
        </Grid>
      </Grid>
      </div>
      <div style={{width:'48%'}}>
          {assignments.map( (assignment, index) => <Accord key={index} assigns={assignment.assigns} title={assignment.name}/> )}
        </div>
          </div>
        </div>

    )


}

export default Profile

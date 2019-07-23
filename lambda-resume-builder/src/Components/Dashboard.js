import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Badge, IconButton, Divider, Typography, List, Toolbar, AppBar, Drawer, CssBaseline} from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { mainListItems, secondaryListItems } from './listItems'
import Calendar from './Calendar'
import ColdOutreach from './Assignments/ColdOutreach/ColdOutreach'
import ComingSoon from './Assignments/ComingSoon/ComingSoon'
import AssignmentList from './Assignments/AssignmentList'
import Endorsement from './EndorsementChecklist/EndorsementChecklist'
import { AssignmentUpload } from './AssignmentUpload/AssignmentUpload.js'
import { dashboard as styles, withStyles } from '../MaterialUI/styles'
import avatar from './Images/avataaars.png'
import CookieConsent from "react-cookie-consent";
import {assignments} from '../Components/Assignments/AssignmentList'
import Accord from '../Components/Accordian/Accordian'



const Dashboard = props => {
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

  const [state, setState] = useState({
    open: false,
    path: window.location.pathname.split('/')[2]
  })

  const handleDrawer = () => {
    setState({
      ...state,
      open: !state.open
    })
  }

  const { classes } = props

  return (
    <div className={classes.root}>

      <CssBaseline />

      <AppBar
        position="absolute"
        // color="secondary"
        className={classNames(
          classes.appBar,
          state.open && classes.appBarShift
        )}
      >

        <Toolbar
          disableGutters={!state.open}
          className={classes.toolbar}
        >

          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawer}
            className={classNames(
              classes.menuButton,
              state.open && classes.menuButtonHidden,
            )}
          >
            <MenuIcon />

          </IconButton>

          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Career Readiness Portal Dashboard
            </Typography>

          <IconButton color="inherit">

            <Badge
              badgeContent={99}
              color="primary"
            >

              <NotificationsIcon />

            </Badge>

          </IconButton>

        </Toolbar>

      </AppBar>

      <Drawer
        variant="permanent"
        classes={{
          paper: classNames(
            classes.drawerPaper,
            !state.open && classes.drawerPaperClose),
        }}
        open={state.open}
      >
        <div className={classes.toolbarIcon}>

          <IconButton onClick={handleDrawer}>

            <ChevronLeftIcon />

          </IconButton>

        </div>

        <Divider />

        <List>{mainListItems}</List>

        <Divider />

        <List>{secondaryListItems}</List>

      </Drawer>

      <main className={classes.content}>

        <div className={classes.appBarSpacer} />

        {(() => {
          switch (window.location.pathname.split('/')[2]) {
            case 'assignments':
              return <AssignmentList />
            case 'calendar':
              return <Calendar />
            case 'endorsement':
              return <Endorsement />
            case 'assignment-upload':
              return <AssignmentUpload />
            case 'cold-outreach':
              return <ColdOutreach/>
              case 'coming-soon':
                return<ComingSoon/>
            default:
              return
          }
        })()}

        <div className={classes.tableContainer} style={{marginBottom: '100px'}}>
          
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


      </main>
            <CookieConsent
                  location="bottom"
                  enableDeclineButton={true}
                  // debug={true}
                  declineButtonText="I decline"
                  buttonText="I understand"
                  cookieName="cookieConsent"
                  style={{ background: "#BB1333" , marginBottom:'15px'}}
                  buttonStyle={{ color: "#BB1333", fontSize: "13px", background:'white' }}
                  expires={150}
                  >
                  This website uses cookies to enhance the user experience.{" "}
                  <span style={{ fontSize: "10px" }}>
                  
                  </span>
            </CookieConsent>

    </div>
  )

}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Dashboard)
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { mainListItems, secondaryListItems } from './listItems'
// import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Calendar from '../Components/Calendar/Calendar'
import Assignments from '../Components/Assignments/Assignments'
// import Endorsement from '../Components/EndorsementChecklist/EndorsementChecklist'

import { dashboard as styles } from '../MaterialUI/styles'

class Dashboard extends React.Component {
  state = {
    open: true,
    path: window.location.pathname.split('/')[2],
  }

  handleDrawerOpen = () => {
    this.setState({ open: true })
  }

  handleDrawerClose = () => {
    this.setState({ open: false })
  }



  render() {

    const { classes } = this.props

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="absolute"
          color="default"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(
                classes.menuButton,
                this.state.open && classes.menuButtonHidden,
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
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={this.handleDrawerClose}>
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
                return <Assignments />
              case 'calendar':
                return <Calendar />
              default:
                return
            }
          })()}

          {/* <Router>
            <Route exact path="/dashboard/assignments" render={props => {
              return (<Assignments {...props} />)
            }} />
            <Route exact path="/dashboard/calendar" render={props => {
              return (<Calendar {...props} />)
            }} />

          </Router> */}
          <div className={classes.tableContainer}>

          </div>
        </main>
      </div>
    )

  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Dashboard)
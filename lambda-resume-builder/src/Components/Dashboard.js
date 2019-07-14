import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Badge, IconButton, Divider, Typography, List, Toolbar, AppBar, Drawer, CssBaseline } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { mainListItems, secondaryListItems } from './listItems'
import Calendar from '../Components/Calendar'
import AssignmentList from '../Components/Assignments/AssignmentList'
import Endorsement from '../Components/EndorsementChecklist/EndorsementChecklist'
import {AssignmentUpload} from '../Components/AssignmentUpload/AssignmentUpload.js'
import { dashboard as styles, withStyles } from '../MaterialUI/styles'



const Dashboard = props => {

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
              badgeContent={69}
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
              return <Endorsement/>
              case 'assignment-upload':
                return <AssignmentUpload/>
            default:
              return
          }
        })()}

        <div className={classes.tableContainer}>
        <div id='sample'></div>
        </div>

      </main>

    </div>
  )

}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Dashboard)
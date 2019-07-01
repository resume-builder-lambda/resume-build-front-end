import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles, CssBaseline, Drawer, AppBar, Toolbar, List, Typography, Divider, IconButton, Badge } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { mainListItems, secondaryListItems, adminDashboard as styles } from './listItems'

const CareerCoachDashboard = props => {
  const [state, setState] = useState({ open: true })

  const { classes } = props

  handleDrawer = () => setState({ open: !state.open })

  return (

    <div className={classes.root}>

      <CssBaseline />

      <AppBar
        position="absolute"
        color="default"
        className={classNames(
          classes.appBar,
          state.open && classes.appBarShift
        )}
      >

        <Toolbar disableGutters={!state.open} className={classes.toolbar}>

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
            Builder
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
          paper: classNames(classes.drawerPaper, !state.open && classes.drawerPaperClose),
        }}
        open={state.open}
      >

        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
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

        <Typography variant="h4" gutterBottom component="h2">
          Placeholder
          </Typography>

        <Typography component="div" className={classes.chartContainer} />

        <Typography variant="h4" gutterBottom component="h2">
          Placeholder
          </Typography>

        <div className={classes.tableContainer}>

        </div>

      </main>

    </div>

  )

}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CareerCoachDashboard)

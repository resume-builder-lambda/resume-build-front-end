import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { IconButton, Divider, List, Drawer, CssBaseline } from '@material-ui/core'
import { Switch, Route } from 'react-router-dom'
import CookieConsent from 'react-cookie-consent'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

import { dashboard as styles, withStyles } from '../MaterialUI/styles'
import AppBar from '../MaterialUI/appbar'
import { mainListItems, secondaryListItems } from './listItems'
import Endorsement from './EndorsementChecklist'
import Calendar from './Calendar'

const AdminDashboard = props => {

    const [state, setState] = useState({
        open: true
    })

    const handleDrawer = () => setState({ open: !state.open })

    useEffect(() => {
        if (state.open) setTimeout(() => { handleDrawer() }, 5000)
    }, [state.open])

    const { classes } = props

    return (

        <div className={classes.root}>
            <CssBaseline />

            <AppBar {...props}
                classes={classes}
                state={state}
                handleDrawer={handleDrawer}
            />

            <Drawer
                variant="permanent"
                classes={{
                    paper: classNames(classes.drawerPaper, !state.open && classes.drawerPaperClose)
                }}
                open={state.open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>

                <Divider />

                <List>{mainListItems(props.admin)}</List>

                <Divider />

                <List>{secondaryListItems}</List>
            </Drawer>

            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Switch>
                    <Route path='/admin/dashboard/calendar' component={Calendar} />
                    <Route path='/admin/dashboard/endorsement' component={Endorsement} />
                </Switch>
            </main>

            <CookieConsent
                location="bottom"
                enableDeclineButton={true}
                // debug={true}
                declineButtonText="I decline"
                buttonText="I understand"
                cookieName="cookieConsent"
                style={{ background: '#BB1333', marginBottom: '15px' }}
                buttonStyle={{ color: '#BB1333', fontSize: '13px', background: 'white' }}
                expires={150}
            >
                This website uses cookies to enhance the user experience. <span style={{ fontSize: '10px' }} />
            </CookieConsent>
        </div>

    )

}

AdminDashboard.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AdminDashboard)

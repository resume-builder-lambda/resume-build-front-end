import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Badge, IconButton, Divider, Typography, List, Toolbar, AppBar, Drawer, CssBaseline } from '@material-ui/core'
import moment from 'moment-timezone'
import CookieConsent from 'react-cookie-consent'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import NotificationsIcon from '@material-ui/icons/Notifications'

import Applied from './JobSearch/AppliedJobs.js'
import ComingSoon from './Assignments/ComingSoon/ComingSoon'
import AssignmentList from './Assignments/AssignmentList'
import Profile from './Profile/Profile'
import Feedback from './Feedback'
import Endorsement from './EndorsementChecklist/EndorsementChecklist'
import { AssignmentUpload } from './AssignmentUpload/AssignmentUpload.js'
import { dashboard as styles, withStyles } from '../MaterialUI/styles'
import ColdOutreach from './Assignments/ColdOutreach/ColdOutreach'
import { mainListItems, secondaryListItems } from './listItems'
import Calendar from './Calendar'

import Logo from '../Components/Images/Lambda_Logo_White.png'

const Dashboard = (props) => {
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
				className={classNames(classes.appBar, state.open && classes.appBarShift)}
			>
				<Toolbar disableGutters={!state.open} className={classes.toolbar}>
					<IconButton
						color="inherit"
						aria-label="Open drawer"
						onClick={handleDrawer}
						className={classNames(classes.menuButton, state.open && classes.menuButtonHidden)}
					>
						<MenuIcon />
					</IconButton>

					<Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
						<img alt="Lambda Logo" src={Logo} style={{ height: 'auto', width: '100px' }} />
						<p> {moment().tz('America/Los_Angeles').format('MMMM Do YYYY, h:mm:ss a')}</p>
					</Typography>

					<IconButton color="inherit">
						<Badge badgeContent={1} color="primary">
							<NotificationsIcon />
						</Badge>
					</IconButton>
				</Toolbar>
			</AppBar>

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

				<List>{mainListItems}</List>

				<Divider />

				<List>{secondaryListItems}</List>
			</Drawer>

			<main className={classes.content}>
				<div className={classes.appBarSpacer} />
				{(() => {
					switch (window.location.pathname.split('/')[2]) {
						case 'profile':
							return <Profile />
						case 'assignments':
							return <AssignmentList />
						case 'calendar':
							return <Calendar />
						case 'endorsement':
							return <Endorsement />
						case 'assignment-upload':
							return <AssignmentUpload />
						case 'applied-jobs':
							return <Applied />
						case 'cold-outreach':
							return <ColdOutreach />
						case 'coming-soon':
							return <ComingSoon />
						case 'feedback':
							return <Feedback />
						default:
							return
					}
				})()}
			</main>

			{/* <CookieConsent
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
			</CookieConsent> */}

		</div>
	)
}

Dashboard.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Dashboard)

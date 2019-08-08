import React from 'react'
import { ListItem, ListItemIcon, ListItemText, Tooltip } from '@material-ui/core'
import AssignmentIcon from '@material-ui/icons/AssignmentOutlined'
import CalendarIcon from '@material-ui/icons/DateRangeOutlined'
import CheckIcon from '@material-ui/icons/VerifiedUserOutlined'
import CancelIcon from '@material-ui/icons/ExitToApp'
import AppliedIcon from '@material-ui/icons/WorkOutline'
import HomeIcon from '@material-ui/icons/HomeOutlined'
import FeedbackIcon from '@material-ui/icons/FeedbackOutlined'
import { Link } from 'react-router-dom'

import Cookies from 'js-cookie'

const mainListItems = bool => (
  <div>

    {!bool && (<Link style={{ textDecoration: 'none' }} to="/dashboard/profile">
      <ListItem button >
        <ListItemIcon style={{ color: "#bb1333" }}>
          <Tooltip title="Home" placement='right'>
            <HomeIcon />
          </Tooltip>
        </ListItemIcon >
        <ListItemText primary="Home" />
      </ListItem>
    </Link>)}

    {!bool && (<Link style={{ textDecoration: 'none' }} to="/dashboard/assignments">
      <ListItem button >
        <ListItemIcon style={{ color: "#bb1333" }}>
          <Tooltip title="Training Modules" placement='right'>
            <AssignmentIcon />
          </Tooltip>
        </ListItemIcon >
        <ListItemText primary="Training Modules" />
      </ListItem>
    </Link>)}

    <Link style={{ textDecoration: 'none' }} to={bool ? '/admin/dashboard/calendar' : "/dashboard/calendar"}>
      <ListItem button>
        <ListItemIcon style={{ color: "#bb1333" }}>
          <Tooltip title='Calendar' placement='right'>
            <CalendarIcon />
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary="Calendar" />
      </ListItem>
    </Link>

    {!bool && (<Link style={{ textDecoration: 'none' }} to="/dashboard/applied-jobs">
      <ListItem button>
        <ListItemIcon style={{ color: "#bb1333" }}>
          <Tooltip title='Job Tracker' placement='right'>
            <AppliedIcon />
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary="Job Tracker" />
      </ListItem>
    </Link>)}

    <Link style={{ textDecoration: 'none' }} to={bool ? '/admin/dashboard/endorsement' : "/dashboard/endorsement"}>
      <ListItem button>
        <ListItemIcon style={{ color: "#bb1333" }}>
          <Tooltip title='Endorsement Verification' placement='right'>
            <CheckIcon />
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary="Endorsement " />
      </ListItem>
    </Link>
  </div>
)

const secondaryListItems = (
  <div>
    <ListItem button onClick={handleLogOut}>
      <ListItemIcon>
        <Tooltip title='LogOut' placement='right'>
          <CancelIcon style={{ transform: 'rotate(180deg)' }} />
        </Tooltip>
      </ListItemIcon>
      <ListItemText primary="Log Out" />
    </ListItem>

    <Link style={{ textDecoration: 'none' }} to="/dashboard/feedback">
      <ListItem button>
        <ListItemIcon style={{ color: "#bb1333" }}>
          <Tooltip title='User Feedback' placement='right'>
            <FeedbackIcon />
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary="Feedback" />
      </ListItem>
    </Link>

  </div>
)



function handleLogOut() {
  Cookies.remove('github')
  Cookies.remove('creds')
  Cookies.remove('token')
  window.location.pathname = '/'
}

export {
  mainListItems,
  secondaryListItems
}

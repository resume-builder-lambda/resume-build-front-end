import React from 'react'
import { ListItem, ListItemIcon, ListItemText, Tooltip } from '@material-ui/core'
import AssignmentIcon from '@material-ui/icons/AssignmentOutlined'
import CalendarIcon from '@material-ui/icons/DateRangeOutlined'
import CheckIcon from '@material-ui/icons/VerifiedUserOutlined'
import CancelIcon from '@material-ui/icons/ExitToApp'
import { Link } from 'react-router-dom'

import Cookies from 'js-cookie'

const mainListItems = (
  <div>
    
    <Link style={{textDecoration: 'none'}} to="/dashboard/assignments">
      <ListItem button >
        <ListItemIcon style={{color: "#bb1333"}}>
        <Tooltip title="Training" placement='right'>
          <AssignmentIcon />
          </Tooltip>
        </ListItemIcon >
        <ListItemText primary="Training Modules" />
      </ListItem>
    </Link>
    
    <Link style={{textDecoration: 'none'}} to="/dashboard/calendar">
      <ListItem button>
        <ListItemIcon style={{color: "#bb1333"}}>
          <CalendarIcon />
        </ListItemIcon>
        <ListItemText primary="Calendar" />
      </ListItem>
    </Link>
    <Link style={{textDecoration: 'none'}} to="/dashboard/endorsement">
      <ListItem button>
        <ListItemIcon style={{color: "#bb1333"}}>
          <CheckIcon />
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
        <CancelIcon style={{ transform: 'rotate(180deg)'}} />
      </ListItemIcon>
      <ListItemText primary="Log Out" />
    </ListItem>
  </div>
)

function handleLogOut() {
  localStorage.removeItem('token')
  window.location.pathname = '/'
  Cookies.remove('creds')
}

export {
  mainListItems,
  secondaryListItems
}

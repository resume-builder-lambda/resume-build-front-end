import React from 'react'
import { ListItem, ListItemIcon, ListItemText, Tooltip } from '@material-ui/core'
import AssignmentIcon from '@material-ui/icons/AssignmentOutlined'
import AddBoxIcon from '@material-ui/icons/AddOutlined'
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
        <Tooltip title="Training Modules" placement='right'>
          <AssignmentIcon />
          </Tooltip>
        </ListItemIcon >
        <ListItemText primary="Training Modules" />
      </ListItem>
    </Link>
    
    <Link style={{textDecoration: 'none'}} to="/dashboard/calendar">
      <ListItem button>
        <ListItemIcon style={{color: "#bb1333"}}>
        <Tooltip title='Calendar' placement='right'>
          <CalendarIcon />
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary="Calendar" />
      </ListItem>
    </Link>
    <Link style={{textDecoration: 'none'}} to="/dashboard/assignment-upload">
      <ListItem button>
        <ListItemIcon style={{color: "#bb1333"}}>
        <Tooltip title='Upload' placement='right'>
          <AddBoxIcon />
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary="Upload" />
      </ListItem>
    </Link>
    <Link style={{textDecoration: 'none'}} to="/dashboard/endorsement">
      <ListItem button>
        <ListItemIcon style={{color: "#bb1333"}}>
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
        <CancelIcon style={{ transform: 'rotate(180deg)'}} />
        </Tooltip>
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

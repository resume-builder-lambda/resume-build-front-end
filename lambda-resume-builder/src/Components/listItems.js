import React from 'react'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import AssignmentIcon from '@material-ui/icons/Assignment'
import CalendarIcon from '@material-ui/icons/CalendarToday'
import CancelIcon from '@material-ui/icons/Cancel'
import { Link } from 'react-router-dom'

function handleLogOut() {
  localStorage.removeItem('token')
  window.location.pathname = '/'
}



const mainListItems = (
  <div>
    <Link to="/dashboard/assignments">
      <ListItem button >
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Assignments" />
      </ListItem>
    </Link>
    <Link to="/dashboard/calendar">
      <ListItem button>
        <ListItemIcon>
          <CalendarIcon />
        </ListItemIcon>
        <ListItemText primary="Calendar" />
      </ListItem>
    </Link>
  </div>
)

const secondaryListItems = (
  <div>
    <ListItem button onClick={handleLogOut}>
      <ListItemIcon>
        <CancelIcon />
      </ListItemIcon>
      <ListItemText primary="Log Out" />
    </ListItem>
  </div>
)

export {
  mainListItems,
  secondaryListItems
}

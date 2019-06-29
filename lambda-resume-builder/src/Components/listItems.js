import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import DashboardIcon from '@material-ui/icons/Dashboard';
// import CreateIcon from '@material-ui/icons/Create';
// import SendIcon from '@material-ui/icons/Send';
// import BarChartIcon from '@material-ui/icons/BarChart';
// import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import CancelIcon from '@material-ui/icons/Cancel';
import { Link } from 'react-router-dom'

function handleLogOut() {

  localStorage.removeItem('token')
  window.location.pathname = '/';

}



export const mainListItems = (
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
);

export const secondaryListItems = (
  <div>


    <ListItem button onClick={handleLogOut}>
      <ListItemIcon>
        <CancelIcon />
      </ListItemIcon>
      <ListItemText primary="Log Out" />
    </ListItem>
  </div>
);
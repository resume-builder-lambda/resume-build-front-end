import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { ExpansionPanelSummary, ExpansionPanel, ExpansionPanelDetails, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AssignCheck from '../Assignments/AssignmentCheck'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    margin: '5px'
  },
}))

export default function Accord(props) {

  console.log(props)
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            className={classes.heading}
            style={{ fontSize: '16px' }}
          >{props.title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography style={{ marginLeft: '0' }}>
            {props.assigns.map((assignment, index) => <AssignCheck
              key={index}
              assignment={assignment}
            />)}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

    </div>
  )

}


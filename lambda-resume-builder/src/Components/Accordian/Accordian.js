import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AssignCheck from '../Assignments/AssignmentCheck'


console.log('makestyles', makeStyles)

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      margin:'5px'
    },
    // heading: {
    //   fontSize: theme.typography.pxToRem(15),
    //   fontWeight: theme.typography.fontWeightRegular,
    // },
  }));

export default function Accord(props) {
    console.log(props)
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography className={classes.heading} style={{fontSize:'16px'}}>{props.title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Typography style={{marginLeft:'0'}}>
        {props.assigns.map( (assignment, index) => <AssignCheck key={index} assignment={assignment}/> )}
        </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
     
    </div>
  );
}


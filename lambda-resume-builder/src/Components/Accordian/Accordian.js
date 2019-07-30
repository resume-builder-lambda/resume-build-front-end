import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { ExpansionPanelSummary, ExpansionPanel, ExpansionPanelDetails, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AssignCheck from '../Assignments/AssignmentCheck';

const useStyles = makeStyles((theme) => ({
	root : {
		width  : '100%',
		margin : '5px'
	}
}));

export default function Accord(props) {
	console.log(props);
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<ExpansionPanel>
				<ExpansionPanelSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography className={classes.heading} style={{ fontSize: '16px' }}>
						{props.title}
					</Typography>
				</ExpansionPanelSummary>

				<ExpansionPanelDetails style={{ display: 'flex', flexDirection: 'column' }}>
					<Typography style={{ marginLeft: '0', width: '100%' }}>
						{props.assigns.map((assignment, index) => (
							<AssignCheck
								key={index}
								complete={assignment.complete}
								assignment={assignment.name}
								link={assignment.link}
							/>
						))}
					</Typography>

					<p style={{ fontSize: '10px' }}>
						<Link style={{ color: '#BB1333' }} to={`${props.link}`}>
							Go To Module
						</Link>
					</p>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</div>
	);
}

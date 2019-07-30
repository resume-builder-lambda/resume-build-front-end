import React from 'react';
import { Link } from 'react-router-dom';

const AssignmentCheck = (props) => {
	return (
		<div
			style={{
				color          : props.complete ? 'green' : 'black',
				textDecoration : props.complete ? 'line-through' : 'none',
				textAlign      : 'left',
				height         : 'auto',
				display        : 'flex',
				flexDirection  : 'column',
				flexWrap       : 'wrap',
				margin         : '10px auto',
				overflow       : 'hidden'
			}}
		>
			<p
				style={{
					wordWrap : 'break-word',

					fontSize : '13px'
				}}
			>
				{props.assignment}
			</p>
		</div>
	);
};

export default AssignmentCheck;

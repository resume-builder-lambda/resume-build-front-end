import React from 'react';

const AssignmentCheck = (props) => {
	return (
		<div
			style={{
				color          : props.complete ? 'green' : 'red',
				textDecoration : props.complete ? 'line-through' : 'none',
				textAlign      : 'left',
				height         : 'auto',
				margin         : '10px'
			}}
		>
			<span
				style={{
					width    : '100%',
					fontSize : '13px'
				}}
			>
				{props.assignment}
			</span>
		</div>
	);
};

export default AssignmentCheck;

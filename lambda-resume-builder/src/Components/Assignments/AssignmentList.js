import React from 'react'
import Assignments from './Assignments'
import { assignments } from './list'

const AssignmentsList = () => {
	return (
		<div>
			{assignments.map((assignment) => (
				<Assignments assignments={assignment} image={assignment.img} link={assignment.link} />
			))}
		</div>
	)
}

export { assignments }
export default AssignmentsList;

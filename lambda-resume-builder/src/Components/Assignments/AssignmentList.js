import React from 'react'
import Assignments from './Assignments'
import { assignments } from './list'

const AssignmentsList = () => {

    console.log(assignments)
    return (
        <div>
            {assignments.map(assignment => <Assignments assignments={assignment} image={assignment.img} link={assignment.link} />)}
        </div>
    )

}


export { assignments }
export default AssignmentsList
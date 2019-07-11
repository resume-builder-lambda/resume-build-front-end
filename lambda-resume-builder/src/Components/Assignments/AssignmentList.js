import React from 'react';
import Assignments from './Assignments';

const assignments = [
    {name: 'assignment1', type: 'meeting'},
    {name: 'assignment2', type: 'meeting'},
    {name: 'assignment1', type: 'meeting'},
    {name: 'assignment2', type: 'meeting'},
    {name: 'assignment1', type: 'meeting'},
    {name: 'assignment2', type: 'meeting'},
    {name: 'assignment1', type: 'meeting'},
    {name: 'assignment2', type: 'meeting'},
   
]

const AssignmentsList = () => {
    
        console.log (assignments)
        return (
            <div>
                {assignments.map(assignment => {
                    return <Assignments assignments={assignment} />
                })}
            </div>
        )
    }



export default AssignmentsList;
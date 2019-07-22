import React from 'react';
import Assignments from './Assignments';
import networking from '../Images/networking.jpg'
import social from '../Images/social.jpg'
import interview from '../Images/interview.jpg'
import resume from '../Images/resume.jpg'
import imposter from '../Images/imposter.jpg'
import productivity from '../Images/productivity.jpg'


const assignments = [

    {name: 'Cold Outreach', description: '', img: `${social}` },
    {name: 'Mastering The Job Interview', description: 'How to walk into an interview prepared and full of confidence.', img: `${interview}` },
    {name: 'Resume', description: 'How to write an attention getting resume that no HR can pass up pulling.', img: `${resume}` },
    {name: 'Networking', description: 'Growing you career network through social media and meetups', img: `${networking}` },
    {name: 'Imposter Syndrome', description: 'Overcoming imposter syndrome and understanding you belong.', img: `${imposter}` },
    {name: 'Productivity', description: 'Learning how to manage your time and avoid burnout as a developer.', img: `${productivity}` },
    
   
]

const AssignmentsList = () => {
    
        console.log (assignments)
        return (
            <div>
                {assignments.map(assignment => {
                    return <Assignments assignments={assignment} image={assignment.img} />
                })}
            </div>
        )
    }



export default AssignmentsList;
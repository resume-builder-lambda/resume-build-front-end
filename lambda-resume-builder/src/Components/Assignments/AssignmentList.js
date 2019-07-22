import React from 'react';
import Assignments from './Assignments';
import networking from '../Images/networking.jpg'
import social from '../Images/social.jpg'
import group from '../Images/group.jpg'
import financial from '../Images/financial.jpg'
import story from '../Images/story.jpg'
import interview from '../Images/interview.jpg'
import resume from '../Images/resume.jpg'
import imposter from '../Images/imposter.jpg'
import productivity from '../Images/productivity.jpg'


const assignments = [

    {name: 'Cold Outreach',  img: `${social}` },
    {name: 'Intro to Careers and the Tech Field', img: `${interview}` },
    {name: 'Financial Planning and Knowing Your Worth', img: `${financial}` },
    {name: 'Team Dynamics and Feedback: success working in a group',img: `${group}` },
    {name: 'Networking Strategies', img: `${networking}` },
    {name: 'Portfolios and Artifacts', img: `${productivity}` },
    {name: 'Sharing Your Story', img: `${story}` },
    {name: 'Intro to Resumes',  img: `${resume}` },
   
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
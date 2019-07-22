import React from 'react';
import Assignments from './Assignments';
import networking from '../Images/networking.jpg'
import social from '../Images/social.jpg'
import group from '../Images/group.jpg'
import financial from '../Images/financial.jpg'
import story from '../Images/story.jpg'
import tech from '../Images/tech.jpg'
import resume from '../Images/resume.jpg'
import linkedin from '../Images/linkedin.jpg'
import interviewstrat from '../Images/interviewstrat.jpg'
import negotiate from '../Images/negotiate.jpg'
import productivity from '../Images/productivity.jpg'
import jobsearch from '../Images/jobsearch.jpg'
import behavior from '../Images/behavior.jpg'


const assignments = [

    
    {name: 'Intro to Careers and the Tech Field', img: `${tech}` },
    {name: 'Financial Planning and Knowing Your Worth', img: `${financial}` },
    {name: 'Team Dynamics and Feedback: success working in a group',img: `${group}` },
    {name: 'Social Media in Tech',  img: `${social}` },
    {name: 'Linkedin',  img: `${linkedin}` },
    {name: 'Networking Strategies', img: `${networking}` },
    {name: 'Portfolios and Artifacts', img: `${productivity}` },
    {name: 'Sharing Your Story', img: `${story}` },
    {name: 'Intro to Resumes',  img: `${resume}` },
    {name: 'Behavoiral Interviewing and Star Stories',  img: `${behavior}` },
    {name: 'Interview Etiquette and Strategies',  img: `${interviewstrat}` },
    {name: `Offer, Negotiations, NDA's`,  img: `${negotiate}`},
    {name: 'Job Search Strategy',  img: `${jobsearch}` },
   
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
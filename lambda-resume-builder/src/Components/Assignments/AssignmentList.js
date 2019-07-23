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

    
    {name: 'Intro to Careers and the Tech Field', img: `${tech}`, link:'/dashboard/coming-soon' },
    {name: 'Financial Planning and Knowing Your Worth', img: `${financial}`, link:'/dashboard/coming-soon' },
    {name: 'Team Dynamics and Feedback: success working in a group',img: `${group}`, link:'/coming-soon'},
    {name: 'Social Media in Tech',  img: `${social}`, link:'/dashboard/cold-outreach'},
    {name: 'Linkedin',  img: `${linkedin}`,link:'/dashboard/cold-outreach' },
    {name: 'Networking Strategies', img: `${networking}`,link:'/dashboard/cold-outreach' },
    {name: 'Portfolios and Artifacts', img: `${productivity}`,link:'/dashboard/coming-soon' },
    {name: 'Sharing Your Story', img: `${story}`,link:'/dashboard/coming-soon' },
    {name: 'Intro to Resumes',  img: `${resume}`,link:'/dashboard/coming-soon' },
    {name: 'Behavoiral Interviewing and Star Stories',  img: `${behavior}`,link:'/dashboard/coming-soon' },
    {name: 'Interview Etiquette and Strategies',  img: `${interviewstrat}`,link:'/dashboard/coming-soon' },
    {name: `Offer, Negotiations, NDA's`,  img: `${negotiate}`,link:'/dashboard/coming-soon'},
    {name: 'Job Search Strategy',  img: `${jobsearch}`,link:'/dashboard/coming-soon' },
   
]

const AssignmentsList = () => {
    
        console.log (assignments)
        return (
            <div>
                {assignments.map(assignment => {
                    return <Assignments assignments={assignment} image={assignment.img} link={assignment.link} />
                })}
            </div>
        )
    }



export default AssignmentsList;
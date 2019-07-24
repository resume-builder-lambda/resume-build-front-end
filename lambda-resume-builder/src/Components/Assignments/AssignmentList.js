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


export const assignments = [

    
    {name: 'Intro to Careers and the Tech Field', img: `${tech}`, link:'/dashboard/coming-soon', assigns:['1: Use Evernote, a Google Sheet, or other organizer of your choice to start setting weekly goals for your job search.','2: Write our a paragrapg describing your priorities in a company and what type of environment would be the best fit for you.',"3: If you haven't already, joing #career_help to get career tips from peers and be in the know about Career Coach-led office hours."] },
    {name: 'Financial Planning and Knowing Your Worth', img: `${financial}`, link:'/dashboard/coming-soon', assigns:['Do Things'] },
    {name: 'Team Dynamics and Feedback: success working in a group',img: `${group}`, link:'/coming-soon', assigns:['Do Things','Do Stuff','Do More']},
    {name: 'Social Media in Tech',  img: `${social}`, link:'/dashboard/cold-outreach', assigns:['Do Things','Do Stuff','Do More']},
    {name: 'LinkedIn',  img: `${linkedin}`,link:'/dashboard/cold-outreach', assigns:['Do Things','Do Stuff','Do More'] },
    {name: 'Networking Strategies', img: `${networking}`,link:'/dashboard/cold-outreach', assigns:['Do Things','Do Stuff','Do More'] },
    {name: 'Portfolios and Artifacts', img: `${productivity}`,link:'/dashboard/coming-soon', assigns:['Do Things','Do Stuff','Do More'] },
    {name: 'Sharing Your Story', img: `${story}`,link:'/dashboard/coming-soon', assigns:['Do Things','Do Stuff','Do More'] },
    {name: 'Intro to Resumes',  img: `${resume}`,link:'/dashboard/coming-soon', assigns:['Do Things','Do Stuff','Do More'] },
    {name: 'Behavioral Interviewing and Star Stories',  img: `${behavior}`,link:'/dashboard/coming-soon', assigns:['Do Things','Do Stuff','Do More'] },
    {name: 'Interview Etiquette and Strategies',  img: `${interviewstrat}`,link:'/dashboard/coming-soon', assigns:['Do Things','Do Stuff','Do More'] },
    {name: `Offer, Negotiations, NDA's`,  img: `${negotiate}`,link:'/dashboard/coming-soon', assigns:['Do Things', 'Do Stuff','Do More']},
    {name: 'Job Search Strategy',  img: `${jobsearch}`,link:'/dashboard/coming-soon' , assigns:['Do Things','Do Stuff','Do More']},
   
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
import React from 'react'
import Logo from './Logo'

const EndorsementChecklist = props => {
   
    return (

        <div>
            <h2>Careers Endorsement: Web Dev</h2>
            <p>By the time you finish Labs, your career materials should be “endorsed” by a Lambda career coach. Career endorsement means you have completed all requisite materials associated with your career lessons to date, and is a signal that you are ready for more in-depth technical interview preparation. Once you have earned your careers endorsement, along with your technical endorsement and teamwork and collaboration endorsement, you will gain access to our pipeline of partners who want to meet, interview, and hire Lambda grads. </p>
            <div style={{display:'flex'}}>
            <div style={{width: '40%', textAlign:'left'}}>
            <p>
                <h5 style={{color:'#032678'}}> CHECKLIST FOR ARTIFACTS NEEDED FOR CAREERS ENDORSEMENT: </h5>

<p><b>❏ An updated and edited resume (1 page) tailored to your career track. Resume should have:</b></p>
<ul style={{listStyleType:'none'}}> 
<li>❏ “Skills” section with all the technologies you have learned listed</li>
<li>❏ “Projects” section featuring the following information:</li>
<li>Project Title (hyperlink to deployed project) One sentence to describe what the project does 
Tech Stack | Tech | Tech | Tech </li>
<ul>
<li>  Sentence describing deadline (# of weeks), how many people on the team, and your contributions </li>
<li>  Sentence describing how you used a technology </li>
<li>  GitHub Repo/front end/back end link</li>
</ul>
<li>❏ “Employment” section with power statements describing transferable skills from previous jobs</li>
<li>❏ “Education” section featuring Lambda School and previous schooling </li>
<li>❏ Additional sections deemed necessary by coach, such as summary, achievements, activities, etc.</li>
</ul>
❏ Updated LinkedIn profile, including: 
❏ A clear headshot and cover photo 
❏ Personal summary to let people get to know you- reference your portfolio site here 
❏ Work experiences, with descriptions (only include Lambda under work if you were a PM) 
❏ Projects, which LI categorizes under “accomplishments” section. Highlight personal, build 
 week, and labs projects, with a link for any deployed projects 
❏ Education, featuring Lambda School and any previous schooling 

❏ Green GitHub with quality contributions, including: 
❏ A clear headshot and professional user handle 
❏ Top six pinned projects should include any open source contributions and your Build Week or Labs projects 
❏ Weekly contributions to show ongoing commitment to skills-building

❏ Original portfolio website (no templates from drag & drop website builders like wix), including:
❏ Your own domain name (no subdomains), purchased through namecheap or other site.  Ask a career coach for a free purchase code to namecheap.com. 
❏ Long-form written descriptions of your projects and technical learning/progress
❏ Links to LinkedIn, GitHub, Medium, and any other relevant artifacts
❏ All Build Weeks and Labs projects with links to code in GitHub

OTHER STEPS TO EARN YOUR CAREERS ENDORSEMENT:

❏ All careers assignments have been completed and met expectations
❏ Passed one SkilledInc. interview and completed three Pramp interviews
❏ Social media and other online presence is relevant and professional</p>
            </div>
            <div style={{width:'50%'}}>
            <Logo className='logo '/>
            </div>
           
            </div>
      
        </div>
    )

}

export default EndorsementChecklist

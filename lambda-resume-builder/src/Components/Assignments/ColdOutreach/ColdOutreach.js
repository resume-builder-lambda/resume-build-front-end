import React from 'react';
import {AssignmentUpload} from '../../AssignmentUpload/AssignmentUpload'

const ColdOutreach = () => {
    
   
    return (
        <div>
           <iframe width="560" height="315" src="https://www.youtube.com/embed/2uqgQ3i1EEU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <h5>FOR FRIDAY, please complete the following:</h5>
        <p>1: Send at least three cold outreach messages to someone on LinkedIn (or via email if you have their email addresses)
            > - Links to templates and resources to get you started are in thread
            > - Submit screenshots of your outreach messages to your PM on Friday
        </p>

        <p>2: Identify three upcoming networking events that you can attend over the next month or two. If you live in an area without many events like this, then instead join three online groups relevant to your field and interests and post an introduction.
            > - Links to templates and resources to get you started are in thread
            > - Submit screenshots of your event RSVPs or your group posts to your PM on Friday.
        </p> 

        <h5>Additional resources to help with all of the above in thread!</h5>
        <div style={{marginTop: '50px'}}>
        <AssignmentUpload/>
        </div>
        </div>
    )
}



export default ColdOutreach;
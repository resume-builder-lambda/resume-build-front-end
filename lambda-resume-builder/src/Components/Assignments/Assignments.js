import React from 'react'
import './Assignments.scss'

const Assignments = props => {
    
    console.log('props', props)
    return (
        
        <div className={'card-1'}>
            <h2>Name: {props.assignments.name} </h2>
            
            
        </div>
        
   
    )

}

export default Assignments

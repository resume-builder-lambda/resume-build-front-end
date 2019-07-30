import React from 'react'



const AssignmentCheck = props => {

    return (

        <div style={{
            textAlign: 'left',
            height: 'auto',
            margin: '10px'
        }}>

            <span style={{
                width: '100%',
                fontSize: '13px'
            }}>{props.assignment}</span>

        </div>

    )
}

export default AssignmentCheck
import React from 'react'
import './Assignments.scss'
import {Link} from 'react-router-dom'

const Assignments = props => {

    console.log('props', props)
    return (

        <div className={'card-1'}>
            <Link to={props.link}>
            <img alt='' src={props.image} style={{ height: '250PX', width: '98.5%', margin: '.5%', borderRadius: '15px 15px 0 0 ', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)' }} />
            <hr />
            <h4 ><strong>{props.assignments.name}</strong> </h4>
           
            </Link>

        </div>


    )

}

export default Assignments

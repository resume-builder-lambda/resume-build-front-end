import React from 'react'

export default props => {

    return (
        <div className='property-panel-section'>
            <div className="property-panel-header">
                {props.title}
            </div>
            <div className="property-panel-content">
                {props.children}
            </div>
        </div>
    )

}

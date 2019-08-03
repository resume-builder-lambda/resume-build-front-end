import React from 'react'
import Form from './Form'

import './modal.css'



const Modal = props => {

    const showHideClassName = props.show ? "modal display-block" : "modal display-none"

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <Form
                    addRow={props.addRow}
                    setShow={props.setShow}
                    show={props.show}
                />
                <button
                    type="button"
                    onClick={() => props.setShow(!props.show)}
                    style={{
                        marginTop: '25px',
                        background: '#0B3D91',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        padding: '7px',
                        marginBottom: '15px'
                    }}>close</button>
            </section>
        </div>
    )
}

export default Modal
import React from 'react'
import LinkedIn from 'linkedin-login-for-react'
import linkedin from '../Images/linkedin.png'

export default () => {
    const cbLi = (error, code, redirectUri) => {
        if (error) {
            console.log('FAILED')
        } else {
            console.log('code', code)
            console.log('redirectUri', redirectUri)
        }
    }
    return <LinkedIn
        clientId={process.env.REACT_APP_LINKEDIN_CLIENT_ID}
        callback={process.env.REACT_APP_REDIRECT_URI}
        text='Log In with LinkedIn'><img
            className={'oauth'}
            alt='LinkedIn Logo'
            src={linkedin}
            onClick={(e) => e.preventDefault()}
        /></LinkedIn>
}

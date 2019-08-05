import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'
import decode from 'jwt-decode'


const PrivateRoute = ({ component: Component, path }) => {

    const token = Cookies.get('token')
    const decoded = decode(token)

    return (

        <Route {...path} render={props => {
            if (!token || Date.now() > decoded.exp * 1000) return <Redirect to="/" />
            else return <Component {...props} />
        }} />
    )

}


export default PrivateRoute

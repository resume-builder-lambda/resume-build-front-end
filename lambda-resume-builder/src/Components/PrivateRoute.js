import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'
import decode from 'jwt-decode'
import AdminDashboard from './AdminDashboard'


const PrivateRoute = ({ component: Component, path }) => {

    const token = Cookies.get('token')
    const decoded = token && decode(token)

    return (

        <Route {...path} render={props => {
            if (!token || Date.now() > decoded.exp * 1000) return <Redirect to="/" />
            else if (decoded.role === 'Admin') return <AdminDashboard {...props} admin={true} />
            else return <Component {...props} />
        }} />
    )

}


export default PrivateRoute

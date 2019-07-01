import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import Logo from '../Images/Lamda_Logo.svg'

import { lambdaLogo } from '../../MaterialUI/styles'

const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit"></Typography>
                    <img alt='Lambda Logo' style={lambdaLogo} src={Logo} />
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar
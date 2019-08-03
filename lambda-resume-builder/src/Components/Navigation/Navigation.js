import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

import { lambdaLogo } from '../../MaterialUI/styles'

import Logo from '../Images/Lamda_Logo.svg'

const NavBar = props => {

    return (

        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="title"
                        color="inherit"
                    />
                    <img
                        alt='Lambda Logo'
                        style={lambdaLogo}
                        src={Logo}
                    />
                </Toolbar>
            </AppBar>
        </div>

    )
}

export default NavBar

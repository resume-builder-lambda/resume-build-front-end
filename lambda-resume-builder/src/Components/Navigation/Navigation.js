import AppBar from '@material-ui/core/AppBar'
import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Logo from '../Images/Lamda_Logo.svg'

const lambdaLogo={
    height: '60px',
    padding: '5px'
}

const NavBar = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
              
                </Typography>
                <img style={lambdaLogo} src={Logo}/>
            </Toolbar>
           
        </AppBar>
        
        </div>
    )
}
export default NavBar;
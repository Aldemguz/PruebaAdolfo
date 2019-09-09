import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography} from '@material-ui/core';

function AppNav(props){
    return (
        <AppBar position = "static">
            <Toolbar variant = "dense">
                <Typography variant = "h3" component = "p" >WIZARD APP</Typography>
            </Toolbar>
        </AppBar>
    );

}



export default (AppNav);
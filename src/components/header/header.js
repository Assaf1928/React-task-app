import React from 'react';
import classes from './header.module.css';
import DrawerToggle from '../drawerToggle/drawerToggle'
const header = () => {
    return (
<div className={classes.container}>
    <div><DrawerToggle></DrawerToggle></div>
    <div className={classes.text}>Grocery List</div>
    </div>
    )
}

export default header;
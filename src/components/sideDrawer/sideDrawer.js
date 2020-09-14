import classes from './sideDrawer.module.css'
import React from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import { NavLink } from 'react-router-dom';

const sideDrawer = () => {
    return (
        <Auxiliary>
        <div className={classes.side__drawer}>
        <div>
          <NavLink activeClassName={classes.active}to="/Orders">  Orders</NavLink>
        </div>
        <div>
        <NavLink activeClassName={classes.active} to="/neworder"> New Order </NavLink>
        </div>

        </div>
        </Auxiliary>

    )
}
export default sideDrawer;
import React, { Component }  from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import Header from '../../components/header/header';
import SideDrawer from '../../components/sideDrawer/sideDrawer'
import classes from './Layout.module.css'
class Layout extends Component {
        
    render () {
    return (
        <Auxiliary>
            <Header/>
            <SideDrawer/>
            <div className={classes.relative}>
          <main>{this.props.children}</main>
        </div>
        </Auxiliary>
    )
    }
}
export default Layout;
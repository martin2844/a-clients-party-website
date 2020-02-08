import React from 'react';
import Navbar from '../components/Navbar.js';

const Layout = (props) => {
    return (
        <React.Fragment>
            <Navbar/>
            <div>
            {props.children}
            </div>
        </React.Fragment>
    )
}

export default Layout

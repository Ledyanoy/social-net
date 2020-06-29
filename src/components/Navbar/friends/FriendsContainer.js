import React from 'react';

import {connect} from "react-redux";
import Friends from "./friends";



const mapStateToProps = (state) => {
    return {
        friends: state.navBar.friends
    }
}


const NavMenuContainer = connect(mapStateToProps)(Friends)

export default NavMenuContainer;
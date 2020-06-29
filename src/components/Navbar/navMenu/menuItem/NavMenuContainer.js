import React from 'react';
import NavMenu from "../navMenu";
import {connect} from "react-redux";



const mapStateToProps = (state) => {
    return {
        navigation: state.navBar.menu
    }
}


const NavMenuContainer = connect(mapStateToProps)(NavMenu)

export default NavMenuContainer;
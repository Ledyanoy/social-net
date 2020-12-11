import React from 'react';
import NavMenu from "../navMenu";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";



const mapStateToProps = (state:AppStateType) => {
    return {
        navigation: state.navBar.menu
    }
}


const NavMenuContainer = connect(mapStateToProps)(NavMenu)

export default NavMenuContainer;

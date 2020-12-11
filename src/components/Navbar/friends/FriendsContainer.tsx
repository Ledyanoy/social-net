import React from 'react';

import {connect} from "react-redux";
import Friends from "./friends";
import {AppStateType} from "../../../redux/redux-store";


const mapStateToProps = (state: AppStateType) => {
    return {
        friends: state.navBar.friends
    }
}

const NavMenuContainer = connect(mapStateToProps)(Friends)

export default NavMenuContainer;

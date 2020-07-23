import React, {Component} from "react";

import Header from "./Header";
import {loginTC } from "../../redux/auth-reducer";
import {connect} from "react-redux";



class HeaderContainer extends Component  {

    componentDidMount() {
        this.props.loginTC();
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        userId: state.auth.userId,
        email: state.auth.email,
    }
}

export default connect(mapStateToProps, {loginTC})(HeaderContainer);
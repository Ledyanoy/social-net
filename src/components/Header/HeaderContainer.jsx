import React, {Component} from "react";

import Header from "./Header";
import {setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {authApi} from "../api/api";


class HeaderContainer extends Component  {

    componentDidMount() {
        authApi.auth().then(data => {
            if (data.resultCode !== 0) return;
            let {id, login, email} = data.data;
            this.props.setAuthUserData(id, email, login);
        });
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
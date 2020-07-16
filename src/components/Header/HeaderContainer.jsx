import React, {Component} from "react";

import Header from "./Header";
import * as axios from "axios";
import {setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";


class HeaderContainer extends Component  {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            console.log(response);
            if (response.data.resultCode !== 0) return;
            let {id, login, email} = response.data.data;
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
    console.log(state.auth);
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        userId: state.auth.userId,
        email: state.auth.email,
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
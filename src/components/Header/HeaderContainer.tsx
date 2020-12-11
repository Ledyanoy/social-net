import React, {Component} from "react";
import Header, {MapPropsType, DispatchPropsType} from "./Header";
import {tryLogOut} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


class HeaderContainer extends Component<MapPropsType & DispatchPropsType>  {

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state:AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        userId: state.auth.userId,
        email: state.auth.email,
    }
}

export default connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {tryLogOut})(HeaderContainer);

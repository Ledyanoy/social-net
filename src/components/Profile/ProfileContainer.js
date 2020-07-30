import React, {Component} from 'react';

import Profile from "./Profile";
import {connect} from "react-redux";
import {changeProfile, getUserStatus, setUserStatus} from '../../redux/profile-reducer';
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";



class ProfileContainer extends Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 9339;
        }
        this.props.changeProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
}


export default compose(
    connect(mapStateToProps, {changeProfile, getUserStatus, setUserStatus}),
    withAuthRedirect,
    withRouter,
)(ProfileContainer);
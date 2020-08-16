import React, {Component} from 'react';

import Profile from "./Profile";
import {connect} from "react-redux";
import {changeProfile, getUserStatus, setUserStatus} from '../../redux/profile-reducer';
import {withRouter} from "react-router-dom";
import {compose} from "redux";


class ProfileContainer extends Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.me;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.changeProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile {...this.props} isOwner={!this.props.match.params.userId}/>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        me: state.auth.userId,
        isAuth: state.auth.isAuth,
    }
}


export default compose(
    connect(mapStateToProps, {changeProfile, getUserStatus, setUserStatus}),
    withRouter,
)(ProfileContainer);
import React, {Component} from 'react';

import Profile from "./Profile";
import {connect} from "react-redux";
import {changeProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.changeProfile(userId);
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
    }
}

export default connect(mapStateToProps, {changeProfile})(withRouter(ProfileContainer));
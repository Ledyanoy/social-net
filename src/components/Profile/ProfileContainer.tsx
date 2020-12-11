import React, {Component} from 'react';

import Profile from "./Profile";
import {connect} from "react-redux";
import {changeProfile, getUserStatus, setUserStatus, savePhoto, saveProfile} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {ProfileType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";

export type MapProps = ReturnType<typeof mapStateToProps>

export type MapDispatchPropsType = {
    changeProfile: (userId: number)=> void
    getUserStatus: (userId: number)=> void
    setUserStatus: (text: string)=> void
    savePhoto: (file: File)=> void
    saveProfile: (profile: ProfileType)=> Promise<any>
}

type PathParamsType = {
    userId: string
}

type PropsType = MapProps & MapDispatchPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends Component<PropsType> {

    refreshProfile() {
        let userId: number | null = +this.props.match.params.userId;
        if (!userId) {
            userId = this.props.me;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.changeProfile(Number(userId));
        this.props.getUserStatus(Number(userId));
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps:PropsType, prevState:PropsType, snapshot: any) {
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

const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        me: state.auth.userId,
        isAuth: state.auth.isAuth,
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {changeProfile, getUserStatus, setUserStatus, savePhoto, saveProfile}),
    withRouter,
)(ProfileContainer);

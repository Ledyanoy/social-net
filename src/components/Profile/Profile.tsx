import React from 'react';
// @ts-ignore
import {content} from './Profile.module.css';

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/myPostsContainer";
import {ProfileType} from "../../types/types";
import {MapDispatchPropsType, MapProps} from "./ProfileContainer";

type PropsType = {
    profile: ProfileType | null
    status: string
    setUserStatus:(status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType)=> Promise<any>
}

const Profile: React.FC<PropsType> = (props) => {
    return (
        <div className={content}>
            <ProfileInfo {...props}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;

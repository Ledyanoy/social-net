import React from 'react';
import {content} from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = ({state}) => {
    return (
        <div className={content}>
            <ProfileInfo/>
            <MyPosts postsData={state.postsData}/>
        </div>

    )
}

export default Profile;
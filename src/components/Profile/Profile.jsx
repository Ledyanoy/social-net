import React from 'react';
import {content} from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = ({postsData}) => {
    return (
        <div className={content}>
            <ProfileInfo/>
            <MyPosts postsData={postsData}/>
        </div>

    )
}

export default Profile;
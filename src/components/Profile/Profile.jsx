import React from 'react';
import {content} from './Profile.module.css';

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/myPostsContainer";


const Profile = ({store}) => {
    return (
        <div className={content}>
            <ProfileInfo/>
            <MyPostsContainer store={store}/>
        </div>

    )
}

export default Profile;
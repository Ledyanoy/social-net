import React from 'react';
import {content} from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={content}>
            <div className='content__header'>
                <img src="https://pro.eski.mobi/mobile/tez-tour-com/eski/img/TEZ_TOUR_logo_horizontal_cmyk.png" alt="content-header-image"/>
            </div>
            <div>
                <img src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg" alt="avatar"/>
                <p>Description</p>
            </div>
            <MyPosts />
        </div>

    )
}

export default Profile;
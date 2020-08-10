import React from 'react';
import {backPic, avatar} from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusHooks from "./ProfileStatusHooks";
import noPhoto from "../../../assets/images/no-photo.jpg";


const ProfileInfo = ({profile, status, setUserStatus}) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src={profile.photos.large ? profile.photos.large : noPhoto}
                     className={avatar} alt="avatar"/>
                <p>Description</p>
            </div>
            <ProfileStatusHooks status={status} setUserStatus={setUserStatus}/>
        </div>
    )
}

export default ProfileInfo;
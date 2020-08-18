import React from 'react';
import {backPic, avatar} from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusHooks from "./ProfileStatusHooks";
import noPhoto from "../../../assets/images/no-photo.jpg";


const ProfileInfo = ({profile, status, setUserStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoChange = (evt) => {
        if (!evt.target.files.length) return;
        savePhoto(evt.target.files[0]);
    };

    return (
        <div>
            <div>
                <img src={profile.photos.large ? profile.photos.large : noPhoto}
                     className={avatar} alt="avatar"/>
                {isOwner && <input type='file' onChange={onMainPhotoChange}/>}
                <p>Description</p>
            </div>
            <ProfileStatusHooks status={status} setUserStatus={setUserStatus}/>
        </div>
    )
}

export default ProfileInfo;
import React, {useState} from 'react';
import {backPic, avatar} from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusHooks from "./ProfileStatusHooks";
import noPhoto from "../../../assets/images/no-photo.jpg";
import ProfileDataReduxForm from "./ProfileDataForm";


const ProfileInfo = ({profile, status, setUserStatus, isOwner, savePhoto, saveProfile }) => {
    const [isChanging, setisChanging] = useState(false);

    const onSubmit =(formData) => {
        saveProfile(formData).then(()=> setisChanging(false));
    }

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoChange = (evt) => {
        if (!evt.target.files.length) return;
        savePhoto(evt.target.files[0]);
    };

    const Contact = ({title, value}) => {
        return <li>{title} : {value ? value : 'empty'}</li>
    };
    const toEditMode =() => {
        setisChanging(true);
    }

    const ProfileData = ({profile, isOwner, toEditMode}) => {
        return (
            <div>
                {isOwner &&  <button onClick={toEditMode} >Edit Profile</button> }
                <ul>
                    <li>Name : {profile.fullName ? profile.fullName : 'empty'}</li>
                    <li>About : {profile.aboutMe ? profile.aboutMe : 'empty'} </li>
                    <li>Looking for a Job : {profile.lookingForAJob ? 'yes' : 'no'}</li>
                    <li>My professional
                        skills : {profile.lookingForAJobDescription ? profile.lookingForAJobDescription : 'empty'}</li>
                    <li>Contacts :
                        <ul>
                            {Object.keys(profile.contacts).map(key => <Contact key={key} title={key}
                                                                               value={profile.contacts[key]}/>)}
                        </ul>
                    </li>
                </ul>

            </div>
        )
    };


    return (
        <div>
            <div>
                <img src={profile.photos.large ? profile.photos.large : noPhoto}
                     className={avatar} alt="avatar"/>
                {isOwner && <input type='file' onChange={onMainPhotoChange}/>}
                <div>Status:
                    <ProfileStatusHooks status={status} setUserStatus={setUserStatus}/>
                </div>
                {isChanging
                    ? <ProfileDataReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile}
                                   isOwner={isOwner}
                                   toEditMode={toEditMode}/>}

            </div>

        </div>
    )


}

export default ProfileInfo;
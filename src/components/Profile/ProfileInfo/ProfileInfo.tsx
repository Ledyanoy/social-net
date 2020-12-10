import React, {ChangeEvent, useState} from 'react';
// @ts-ignore
import {avatar, imageOuter, statusOuter, aboutList} from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusHooks from "./ProfileStatusHooks";
import noPhoto from "../../../assets/images/no-photo.jpg";
import ProfileDataReduxForm from "./ProfileDataForm";
import {ProfileContactsType, ProfileType} from "../../../types/types";

type PropsProfileInfoType = {
    profile: ProfileType
    status: string
    setUserStatus:(status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType)=> Promise<any>
}

type PropsProfileDataType = {
    profile: ProfileType
    isOwner: boolean
    toEditMode: ()=> void
}


const ProfileInfo: React.FC<PropsProfileInfoType> = ({profile, status, setUserStatus, isOwner, savePhoto, saveProfile }) => {
    const [isChanging, setisChanging] = useState(false);

    const onSubmit =(formData: ProfileType) => {
        saveProfile(formData).then(()=> setisChanging(false));
    }

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoChange = (evt: ChangeEvent<HTMLInputElement>) => {
        if (!evt.target.files?.length) return;
        savePhoto(evt.target.files[0]);
    };



    const Contact: React.FC<{title : string, value: string }> = ({title, value}) => {
        return <li>{title} : {value ? value : 'empty'}</li>
    };

    const toEditMode =() => {
        setisChanging(true);
    }

    const ProfileData: React.FC<PropsProfileDataType> = ({profile, isOwner, toEditMode}) => {
        return (
            <div>
                {isOwner &&  <button className='btn' onClick={toEditMode} >Изменить профиль</button> }
                <ul className={aboutList}>
                    <li>Имя : {profile.fullName ? profile.fullName : 'empty'}</li>
                    <li>О себе : {profile.aboutMe ? profile.aboutMe : 'empty'} </li>
                    <li>Ищу работу : {profile.lookingForAJob ? 'yes' : 'no'}</li>
                    <li>Мои навыки : {profile.lookingForAJobDescription ? profile.lookingForAJobDescription : 'empty'}</li>
                    <li>Контакты :
                        <ul>
                            {Object.keys(profile.contacts).map(key => <Contact key={key} title={key}
                                                                               value={profile.contacts[key as keyof ProfileContactsType]}/>)}
                        </ul>
                    </li>
                </ul>

            </div>
        )
    };


    return (
        <div>
            <div>
                <div className={imageOuter}>
                    <img src={profile.photos.large ? profile.photos.large : noPhoto}
                         className={avatar} alt="avatar"/>
                    {isOwner && <input type='file' onChange={onMainPhotoChange}/>}
                </div>
                <div className={statusOuter}>
                    <p>Ваш статус:</p>
                    <ProfileStatusHooks status={status} setUserStatus={setUserStatus}/>
                    <p>Чтобы сменить статус, нажмите 2 раза по статусу</p>
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

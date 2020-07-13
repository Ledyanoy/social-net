import React from 'react';
import {backPic, avatar} from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img className={backPic}
                     src="https://pro.eski.mobi/mobile/tez-tour-com/eski/img/TEZ_TOUR_logo_horizontal_cmyk.png"
                     alt="content-header-image"/>
            </div>
            <div>
                <img src={props.profile.photos.large}
                     className={avatar} alt="avatar"/>
                <p>Description</p>
            </div>
        </div>
    )
}

export default ProfileInfo;
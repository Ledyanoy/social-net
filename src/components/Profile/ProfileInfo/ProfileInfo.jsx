import React from 'react';
import {backPic, avatar} from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={backPic}
                     src="https://pro.eski.mobi/mobile/tez-tour-com/eski/img/TEZ_TOUR_logo_horizontal_cmyk.png"
                     alt="content-header-image"/>
            </div>
            <div>
                <img src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"
                     className={avatar} alt="avatar"/>
                <p>Description</p>
            </div>
        </div>
    )
}

export default ProfileInfo;
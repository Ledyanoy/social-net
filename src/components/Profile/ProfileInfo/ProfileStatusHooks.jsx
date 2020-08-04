import React, {useEffect, useState} from 'react';

import {status} from './ProfileInfo.module.css';

const ProfileStatusHooks = (props) => {

    const [isChanging, setisChanging] = useState(false);
    const [statusValue, setstatusValue] = useState(props.status);


    const activateChangeStatus = () => {
        setisChanging(true);
    }

    const deActivateChangeStatus = () => {
        setisChanging(false);
        props.setUserStatus(statusValue);
    }

    const onStatusChange = (evt) => {
        setstatusValue(evt.currentTarget.value);
    }


    useEffect(()=> {
        setstatusValue(props.status);
    }, [props.status])


    return (
        <div>
            {isChanging
                ? <div><input className={status} autoFocus={true} type="text"
                              value={statusValue}
                    onBlur={deActivateChangeStatus}
                    onChange={onStatusChange}
                /></div>
                : <div><span className={status}
                             onDoubleClick={activateChangeStatus}>
                    {props.status}
                </span>
                </div>}

        </div>
    )
}

export default ProfileStatusHooks;
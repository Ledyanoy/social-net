import React, {ChangeEvent, useEffect, useState} from 'react';

// @ts-ignore
import {status} from './ProfileInfo.module.css';

type PropsType = {
    status: string
    setUserStatus: (statusValue: string)=> void
}

const ProfileStatusHooks: React.FC<PropsType> = (props) => {

    const [isChanging, setisChanging] = useState(false);
    const [statusValue, setstatusValue] = useState(props.status);


    const activateChangeStatus = () => {
        setisChanging(true);
    }

    const deActivateChangeStatus = () => {
        setisChanging(false);
        props.setUserStatus(statusValue);
    }

    const onStatusChange = (evt: ChangeEvent<HTMLInputElement>) => {
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

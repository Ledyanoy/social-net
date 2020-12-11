import React from 'react';
// @ts-ignore
import {list} from './friends.module.css';
import Friend from './friend/friend'
import {FriendType} from "../../../redux/navbar-reucer";

type PropsType = {
    friends: Array<FriendType>
}

const Friends:React.FC<PropsType> = ({friends}) => {
    const friendItems = friends.map((item) => <Friend key={item.id} state={item}/>);
    return (
        <ul className={list}>
            {friendItems}
        </ul>
    )
}

export default Friends;

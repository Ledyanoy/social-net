import React from 'react';
import {list} from './friends.module.css';
import Friend from './friend/friend'

const Friends = ({friends}) => {
    const friendItems = friends.map((item) => <Friend key={item.id} state={item}/>);
    return (
        <ul className={list}>
            {friendItems}
        </ul>
    )
}

export default Friends;
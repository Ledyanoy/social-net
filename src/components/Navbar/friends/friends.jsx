import React from 'react';
import {list} from './friends.module.css';
import Friend from './friend/friend'

const Friends = ({state}) => {
    const friendItems = state.map((item) => <Friend state={item}/>);
    return (
        <ul className={list}>
            {friendItems}
        </ul>
    )
}

export default Friends;
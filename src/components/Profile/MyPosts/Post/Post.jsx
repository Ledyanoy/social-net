import React from 'react';
import {item, like} from './Post.module.css';

const Post = ({message, likesCount}) => {
    return (
        <li className={item}>
            <img src="https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg" alt=""/>
            {message}
            <button>like</button>
            <button>disLike</button>
            <span className={like}>Like: {likesCount}</span>
        </li>
    )
}

export default Post;
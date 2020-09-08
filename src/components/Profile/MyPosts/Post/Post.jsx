import React from 'react';
import {item, like, postDesc} from './Post.module.css';

const Post = ({message, likesCount}) => {
    return (
        <li className={item}>
            <img src="https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg" alt=""/>
            <div className={postDesc}>
                <p>{message}</p>
                <button>like</button>
                <button>disLike</button>
                <span className={like}>Like: {likesCount}</span>
            </div>

        </li>
    )
}

export default Post;
import React from 'react';
import {item} from './Post.module.css';

const Post = () => {
    return (
        <li className={item}>
            <img src="https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg" alt=""/>
            Post
            <button>like</button>
            <button>disLike</button>
        </li>
    )
}

export default Post;
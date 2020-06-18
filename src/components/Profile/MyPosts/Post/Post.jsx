import React from 'react';
import s from './Post.module.css';

const Post = ({message, likes}) => {
    return (
        <li className={s.item}>
            <img src="https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg" alt=""/>
            {message}
            <button>like</button>
            <button>disLike</button>
            <span className={s.like}>{likes}</span>
        </li>
    )
}

export default Post;
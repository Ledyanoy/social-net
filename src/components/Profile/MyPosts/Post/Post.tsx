import React from 'react';
// @ts-ignore
import {item, like, postDesc} from './Post.module.css';

type PropsType = {
    message: string
    likesCount: number
}

const Post: React.FC<PropsType> = ({message, likesCount}) => {
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

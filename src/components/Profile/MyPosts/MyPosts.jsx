import React from 'react';
import Post from './Post/Post'
import {postList} from './MyPosts.module.css'

const MyPosts = () => {

    const postData = [
        {id: 1, message: `Hi, world!`, likesCount: 2},
        {id: 2, message: 'Bruh', likesCount: 1000},
        {id: 3, message: 'Falling in Reverse are cool!', likesCount: -100},
    ];

    const Posts = postData.map(({message, likesCount}) => <Post message={message} likesCount={likesCount}/>)

    return (
        <div>
            <h3>My Posts</h3>
            <div><input type="text"/></div>
            <div>
                <button>Добавить</button>
            </div>
            <ul className={postList}>
                {Posts}
            </ul>
        </div>
    )
}

export default MyPosts;
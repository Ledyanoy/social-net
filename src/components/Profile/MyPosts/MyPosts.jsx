import React from 'react';
import Post from './Post/Post'
import {postList} from './MyPosts.module.css'

const MyPosts = ({postsData}) => {

    const Posts = postsData.map(({message, likesCount}) => <Post message={message} likesCount={likesCount}/>)

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
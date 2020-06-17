import React from 'react';
import Post from './Post/Post'


const MyPosts = () => {
    return (
        <div>
            My Posts
            <input type="text"/>
            <ul>
                <Post />
                <Post />
                <Post />


            </ul>
        </div>
    )
}

export default MyPosts;
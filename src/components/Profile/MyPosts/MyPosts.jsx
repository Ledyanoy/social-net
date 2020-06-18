import React from 'react';
import Post from './Post/Post'


const MyPosts = () => {
    return (
        <div>
            My Posts
            <input type="text"/>
            <ul>
                <Post message={`Hi, world!`} likesCount={2}/>
                <Post message={`Bruh`} likesCount={1000}/>
                <Post />
            </ul>
        </div>
    )
}

export default MyPosts;
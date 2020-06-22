import React from 'react';
import Post from './Post/Post'
import {postList} from './MyPosts.module.css'

const MyPosts = ({postsData, stateAddPost}) => {

    const Posts = postsData.map(({message, likesCount}) => <Post message={message} likesCount={likesCount}/>)

    const newPost = React.createRef();

    const addPost = () => {
        const text = newPost.current.value;
        stateAddPost(text);
        newPost.current.value = '';
    }

    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <input type="text" ref={newPost}/>
            </div>
            <div>
                <button onClick={addPost}>Добавить</button>
            </div>
            <ul className={postList}>
                {Posts}
            </ul>
        </div>
    )
}

export default MyPosts;
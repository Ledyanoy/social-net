import React from 'react';
import Post from './Post/Post'
import {postList} from './MyPosts.module.css'

const MyPosts = ({postsData, newPostText, addPost, PostInputChange}) => {

    const Posts = postsData.map(({message, likesCount, id}) => <Post message={message} key={id} likesCount={likesCount}/>)

    const newPost = React.createRef();

    const onAddPost = () => {
        addPost();
    }

    const onPostInputChange =() => {
        const text = newPost.current.value;
        PostInputChange(text);
    }

    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <input type="text"
                       value={newPostText}
                       ref={newPost}
                       onChange={onPostInputChange}
                />
            </div>
            <div>
                <button onClick={onAddPost}>Добавить</button>
            </div>
            <ul className={postList}>
                {Posts}
            </ul>
        </div>
    )
}

export default MyPosts;
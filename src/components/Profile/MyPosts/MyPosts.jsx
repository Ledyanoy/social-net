import React from 'react';
import Post from './Post/Post'
import {postList} from './MyPosts.module.css'

const MyPosts = ({postsData, newPostText, dispatch}) => {

    const Posts = postsData.map(({message, likesCount}) => <Post message={message} likesCount={likesCount}/>)

    const newPost = React.createRef();

    const addPost = () => {
        dispatch({type: 'ADD-POST'})
    }

    const onPostInputChange =() => {
        const text = newPost.current.value;
        const action = {type: 'CHANGE-POST-VALUE', value: text};
        dispatch(action);
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
                <button onClick={addPost}>Добавить</button>
            </div>
            <ul className={postList}>
                {Posts}
            </ul>
        </div>
    )
}

export default MyPosts;
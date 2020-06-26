import React from 'react';
import Post from './Post/Post'
import {postList} from './MyPosts.module.css'
import {addPostActionCreator, changePostValueActionCreator} from "../../../redux/state";

const MyPosts = ({postsData, newPostText, dispatch}) => {

    const Posts = postsData.map(({message, likesCount}) => <Post message={message} likesCount={likesCount}/>)

    const newPost = React.createRef();

    const addPost = () => {
        dispatch(addPostActionCreator());
    }

    const onPostInputChange =() => {
        const text = newPost.current.value;
        dispatch(changePostValueActionCreator(text));
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
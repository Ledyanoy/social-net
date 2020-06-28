import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreator, changePostValueActionCreator} from "../../../redux/profile-reducer";

const MyPostsContainer = ({store}) => {

    let state = store.getState();


    const addPost = () => {
        store.dispatch(addPostActionCreator());
    }

    const PostInputChange =(value) => {
        const text = value;
        store.dispatch(changePostValueActionCreator(text));
    }

    return (

        <MyPosts addPost={addPost} PostInputChange={PostInputChange} postsData={state.profilePage.postsData} newPostText={state.profilePage.newPostText}/>

    )
}

export default MyPostsContainer;
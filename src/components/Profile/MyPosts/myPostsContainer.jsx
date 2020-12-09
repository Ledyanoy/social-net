import React from 'react';
import MyPosts from "./MyPosts";
import {actions} from "../../../redux/profile-reducer";
import {connect} from "react-redux";

const addPostActionCreator = actions.addPostActionCreator


const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
    }
}


const MyPostsContainer = connect(mapStateToProps, {addPostActionCreator} )(MyPosts)

export default MyPostsContainer;
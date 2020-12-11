import React from 'react';
import MyPosts, {DispatchPropsType, MapPropsType} from "./MyPosts";
import {actions} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";


const mapStateToProps = (state: AppStateType) => {
    return {
        postsData: state.profilePage.postsData,
    }
}

const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {} , AppStateType>(mapStateToProps,
    {addPost: actions.addPostActionCreator} )(MyPosts)

export default MyPostsContainer;

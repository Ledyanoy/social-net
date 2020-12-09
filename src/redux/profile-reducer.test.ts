import profileReducer, {actions} from "./profile-reducer";
import 'jest'
import '@testing-library/jest-dom/extend-expect'


import React from 'react';


const initialState = {
    postsData: [
        {id: 1, message: `Hi, world!`, likesCount: 2},
        {id: 2, message: 'Bruh', likesCount: 1000},
        {id: 3, message: 'Falling in Reverse are cool!', likesCount: -100},
        {id: 4, message: 'Limp Bizkit', likesCount: 777},
    ],
    profile: null,
    status: 'This is Heaven',

}

it('new post should be added', () => {
    let action = actions.addPostActionCreator('yyyyyyyy');
    let newState = profileReducer(initialState, action);
    expect(newState.postsData.length).toBe(5);
});

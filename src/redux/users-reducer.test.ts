import 'jest'
import '@testing-library/jest-dom/extend-expect'

import usersReducer, {actions, InitialStateType} from "./users-reducer";


let State: InitialStateType

beforeEach(()=> {
    State = {
        users: [
            {
                id: 0,
                name: 'my name 0',
                status: 'hhhhh',
                photos: {
                    small: null,
                    large: null,
                },
                followed: false
            }, {
                id: 1,
                name: 'my name 1',
                status: 'hhhhh',
                photos: {
                    small: null,
                    large: null,
                },
                followed: false
            }, {
                id: 2,
                name: 'my name 2',
                status: 'hhhhh',
                photos: {
                    small: null,
                    large: null,
                },
                followed: true
            }, {
                id: 3,
                name: 'my name 3',
                status: 'hhhhh',
                photos: {
                    small: null,
                    large: null,
                },
                followed: true
            },


        ],
        pageSize: 20,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        isButtonDisabled: [],
    }
})



test('Follow Success', () => {

    const newState = usersReducer(State, actions.follow(1))

    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeTruthy()
    expect(newState.users[2].followed).toBeTruthy()
    expect(newState.users[3].followed).toBeTruthy()
})

test('UnFollow Success', () => {

    const newState = usersReducer(State, actions.unfollow(2))

    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeFalsy()
    expect(newState.users[2].followed).toBeFalsy()
    expect(newState.users[3].followed).toBeTruthy()
})

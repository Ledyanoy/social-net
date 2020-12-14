import 'jest'
import '@testing-library/jest-dom/extend-expect'
import {usersApi} from '../components/api/users-api'
import {actions, followTC, unfollowTC} from "./users-reducer"
import {ApiResponseType, ResultCodeEnum} from "../components/api/api";

jest.mock('../components/api/users-api')
const userApiMock = usersApi as jest.Mocked<typeof usersApi>

const result: ApiResponseType = {
    resultCode: ResultCodeEnum.Success,
    messages: [],
    data: {}
}

const fakeDispatch = jest.fn();
const getStateMock = jest.fn();

beforeEach(()=> {
    fakeDispatch.mockClear()
    getStateMock.mockClear()
})


// Это чтобы при вызове метода userApiMock.followUser или userApiMock.unfollowUser был результат наш - моковый
userApiMock.followUser.mockReturnValue(Promise.resolve(result))
userApiMock.unfollowUser.mockReturnValue(Promise.resolve(result))

test('success Follow Thunk', async () => {
    const thunk = followTC(1);

    await thunk(fakeDispatch, getStateMock, {})

    expect(fakeDispatch).toBeCalledTimes(3)
    expect(fakeDispatch).toHaveBeenNthCalledWith(1, actions.setButtonDisabled(true, 1))
    expect(fakeDispatch).toHaveBeenNthCalledWith(2, actions.follow(1))
    expect(fakeDispatch).toHaveBeenNthCalledWith(3, actions.setButtonDisabled(false, 1))
})

test('success UnFollow Thunk', async () => {
    const thunk = unfollowTC(1);

    await thunk(fakeDispatch, getStateMock, {})

    expect(fakeDispatch).toBeCalledTimes(3)
    expect(fakeDispatch).toHaveBeenNthCalledWith(1, actions.setButtonDisabled(true, 1))
    expect(fakeDispatch).toHaveBeenNthCalledWith(2, actions.unfollow(1))
    expect(fakeDispatch).toHaveBeenNthCalledWith(3, actions.setButtonDisabled(false, 1))
})

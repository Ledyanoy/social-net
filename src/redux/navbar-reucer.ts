type MenuLinkType = {
    link: string
    name: string
    id: number
}

type FriendType = {
    id: number
    name: string
    img: string
}

const initialState = {
    menu: [
        {link: '/profile', name: 'Profile', id: 1},
        {link: '/dialogs', name: 'Dialogs', id: 2},
        {link: '/news', name: 'News', id: 3},
        {link: '/bookmarks', name: 'Bookmarks', id: 4},
        {link: '/users', name: 'Users', id: 5},
    ] as Array<MenuLinkType>,
    friends: [
        {id: 1, name: 'Misha', img: 'http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png'},
        {id: 2, name: 'Yan', img: 'http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png'},
        {id: 3, name: 'Artem', img: 'http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png'},
    ] as Array<FriendType>,
}

export type InitialStateType = typeof initialState

const navbarReducer = (state = initialState, action: any): InitialStateType => {
    return state;
}

export default navbarReducer;

const initialState = {
        menu: [
            {link: '/profile', name: 'Profile', id:1},
            {link: '/dialogs', name: 'Dialogs', id:2},
            {link: '/news', name: 'News', id:3},
            {link: '/bookmarks', name: 'Bookmarks', id:4},
        ],
        friends: [
            {id: 1, name: 'Misha', img: 'http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png'},
            {id: 2, name: 'Yan', img: 'http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png'},
            {id: 3, name: 'Artem', img: 'http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png'},
        ],
}

const navbarReducer = (state = initialState, action) => {
    return state;
}

export default navbarReducer;

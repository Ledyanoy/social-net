import dialogReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import navbarReducer from "./navbar-reucer";


const store = {
    _state: {
        navBar: {
            menu: [
                {link: '/profile', name: 'Profile'},
                {link: '/dialogs', name: 'Dialogs'},
                {link: '/news', name: 'News'},
                {link: '/bookmarks', name: 'Bookmarks'},
            ],
            friends: [
                {id: 1, name: 'Misha', img: 'http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png'},
                {id: 2, name: 'Yan', img: 'http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png'},
                {id: 3, name: 'Artem', img: 'http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png'},
            ],
        },
        profilePage: {
            postsData: [
                {id: 1, message: `Hi, world!`, likesCount: 2},
                {id: 2, message: 'Bruh', likesCount: 1000},
                {id: 3, message: 'Falling in Reverse are cool!', likesCount: -100},
                {id: 3, message: 'Limp Bizkit', likesCount: 777},
            ],
            newPostText: 'it-kamasutra',
        },
        dialogsPage: {
            dialogsData: [
                {
                    id: 1,
                    name: 'Artemiy',
                    img: 'https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png'
                },
                {
                    id: 2,
                    name: 'Arina',
                    img: 'https://cdn5.vectorstock.com/i/thumb-large/61/44/avatar-business-woman-graphic-vector-9646144.jpg'
                },
                {
                    id: 3,
                    name: 'Kseniya',
                    img: 'https://cdn5.vectorstock.com/i/thumb-large/61/44/avatar-business-woman-graphic-vector-9646144.jpg'
                },
                {
                    id: 4,
                    name: 'Babushka',
                    img: 'https://cdn5.vectorstock.com/i/thumb-large/61/44/avatar-business-woman-graphic-vector-9646144.jpgg'
                },
                {
                    id: 5,
                    name: 'Ded',
                    img: 'https://image.flaticon.com/icons/svg/147/147144.svg'
                },
                {id: 13, name: 'Cat'},
                {id: 7, name: 'Mishka'},
                {id: 22, name: 'Malishka'},
            ],
            messageData: [
                {id: 1, message: 'hello my friend'},
                {id: 2, message: 'Bruh', me: true},
                {id: 3, message: 'What are you doing?'},
                {id: 5, message: 'You betrying my head, again...', me: true},
                {id: 6, message: 'Khe Khe ;)'},
            ],
            newMessageText: '',
        },
    },

    _callSubscriber(observer) {
        this.re = observer;
    },

    re() {
        console.log('no observer subscribed')
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.navBar = navbarReducer(this._state.navBar, action);
        this.re(this._state);
    },
}

export default store;
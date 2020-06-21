const state = {
    navBar: {
        menu: [
            {link: '/profile', name: 'Profile'},
            {link: '/dialogs', name: 'Dialogs'},
            {link: '/news', name: 'News'},
            {link: '/bookmarks', name: 'Bookmarks'},
        ],
    },
    profilePage: {
        postsData: [
            {id: 1, message: `Hi, world!`, likesCount: 2},
            {id: 2, message: 'Bruh', likesCount: 1000},
            {id: 3, message: 'Falling in Reverse are cool!', likesCount: -100},
            {id: 3, message: 'Limp Bizkit', likesCount: 777},
        ],
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
                img: 'https://cdn.icon-icons.com/icons2/1736/PNG/512/4043251-avatar-female-girl-woman_113291.png'
            },
            {
                id: 3,
                name: 'Kseniya',
                img: 'https://cdn.icon-icons.com/icons2/1736/PNG/512/4043251-avatar-female-girl-woman_113291.png'
            },
            {
                id: 4,
                name: 'Babushka',
                img: 'https://cdn.icon-icons.com/icons2/1736/PNG/512/4043251-avatar-female-girl-woman_113291.png'
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
    },
}
export default state;
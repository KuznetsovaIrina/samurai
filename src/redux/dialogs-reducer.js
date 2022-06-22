const ADD_MESSAGE = 'dialog/ADD-MESSAGE';

const initialState = {
    dialogs: [
        {
            id: 'dima',
            name: 'Дима',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-twitch-96.jpg'
        },
        {
            id: 'anna',
            name: 'Аня',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-twitch-96.jpg'
        },
        {
            id: 'sasha',
            name: 'Саша',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-twitch-96.jpg'
        },
        {
            id: 'sashab',
            name: 'Саша Б.',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-twitch-96.jpg'
        },
        {
            id: 'oleg',
            name: 'Олег',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-twitch-96.jpg'
        },
    ],
    messages: [
        {
            id: '1',
            type: 'in',
            text: 'Какая разница, как другие относятся ко мне? Главное - как я отношусь к ним!',
            name: 'Саша',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-twitch-96.jpg'
        },
        {
            id: '2',
            type: 'in',
            text: 'Не называй чужие вещи своими именами!',
            name: 'Саша',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-twitch-96.jpg'
        },
        {
            id: '3',
            type: 'in',
            text: 'К своему стыду мне никогда не стыдно.',
            name: 'Саша',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-twitch-96.jpg'
        },
        {
            id: '4',
            type: 'in',
            text: 'Пришел, увидел, забыл победить.',
            name: 'Саша',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-twitch-96.jpg'
        },
        {
            id: '5',
            type: 'in',
            text: 'Все думают о себе. И лишь я один думаю обо мне.',
            name: 'Саша',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-twitch-96.jpg'
        },
        {
            id: '6',
            type: 'in',
            text: 'Как жаль, что ты наконец-то уходишь.',
            name: 'Саша',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-twitch-96.jpg'
        },
        {
            id: '7',
            type: 'to',
            text: 'Будь проще и микробиологи к тебе потянуться.',
            name: 'Ира',
            avatar: 'https://avatars.mds.yandex.net/i?id=61cabaa529af9c22f1217a68d0cfcc37-5332625-images-thumbs&n=13'
        },
        {
            id: '8',
            type: 'in',
            text: 'В голове головоломка, человек голова-ластик.',
            name: 'Саша',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-twitch-96.jpg'
        }
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: Date.now(),
                type: action.newMessage.type,
                text: action.newMessage.text,
                name: action.newMessage.name,
                avatar: action.newMessage.avatar
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: '',
            }
        default:
            return state;
    }
};

export const addMessage = newMessage => ({type: ADD_MESSAGE, newMessage});

export default dialogsReducer;
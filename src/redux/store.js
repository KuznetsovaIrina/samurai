import profileReducer from "./profile-reducer";
import dialogsReducer from './dialogs-reducer';

const store = {
    _callSubscriber() {
        console.log('Subscribers not found');
    },
    _state: {
        profilePage: {
            posts: [
                {
                    id: '1',
                    text: 'Задумчивая душа склоняется к одиночеству.',
                    image: 'https://stihi.ru/pics/2021/07/07/4171.jpg'
                },
                {
                    id: '2',
                    text: 'Вода… Я пил её однажды. Она не утоляет жажды.',
                    image: 'https://avatars.mds.yandex.net/i?id=53d4ea0f6b2278af06fb661e65bae8bb-4115767-images-thumbs&n=13'
                },
                {
                    id: '3',
                    text: 'Капля стала плакать, что рассталась с морем, Море засмеялось над наивным горем.',
                    image: 'https://avatars.mds.yandex.net/get-zen_gallery/1989171/pub_60560460a331e86267a0152e_6056074c89855f0fdeb59eb1/scale_720'
                },
                {
                    id: '4',
                    text: '«Будешь в обществе гордых ученых ослов, Постарайся ослом притвориться без слов, Ибо каждого, кто не осел, эти дурни Обвиняют немедля в подрыве основ.»',
                    image: 'https://avatars.mds.yandex.net/i?id=5e0be5ba66142cb397af0051aff1d24d-5896019-images-thumbs&n=13'
                },
                {
                    id: '5',
                    text: 'О будущем и прошлом не печалься, Сегодняшнему счастью цену знай.',
                    image: 'https://vmnews.ru/img/news/22/2-370x370_1ef529ea28b8.jpg'
                },
                {
                    id: '6',
                    text: 'Ты знаешь сам давно, что жизнь — одно мгновенье.',
                    image: 'https://stihi.ru/pics/2008/05/08/2919.jpg'
                },
            ],
            newPostText: '',
        },
        dialogsPage: {
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
            newMessageText: '',
        }
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber();
    },
};

export default store;
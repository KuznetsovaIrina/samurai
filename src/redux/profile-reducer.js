const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
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
};

// В редьюсере меняем только то, что изменилось!

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: Date.now(),
                text: action.newPost.text,
                image: action.newPost.image
            };
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText,
            }
        default:
            return state;
    }
};

export const addPostActionCreator = newPost => ({type: ADD_POST, newPost});
export const updateNewPostTextActionCreator = newText => ({type: UPDATE_NEW_POST_TEXT, newPostText: newText});

export default profileReducer;
import { UsersAPI } from './../api/api';

// укзывать префиксы _prefix

const ADD_POST = 'profile/ADD_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';

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
    profile: null,
    status: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: Date.now(),
                text: action.newPost.text,
                image: ''
            };
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => +p.id !== +action.id)
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status ? action.status : ''
            }
        default:
            return state;
    }
};

export const addPost = newPost => ({type: ADD_POST, newPost});
export const deletePost = id => ({type: DELETE_POST, id});
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});
export const setStatus = status => ({type: SET_STATUS, status});

export const getProfileData = (userId) => async (dispatch) => {
    const result = await UsersAPI.getProfileData(userId);
    dispatch(setUserProfile(result));
}

export const getStatus = (userId) => async (dispatch) => {
    const result = await UsersAPI.getStatus(userId);
    dispatch(setStatus(result));
}

export const updateStatus = (status) => async (dispatch) => {
    const result = await UsersAPI.updateStatus(status);
    result.resultCode === 0 && dispatch(setStatus(status));
}

export default profileReducer;
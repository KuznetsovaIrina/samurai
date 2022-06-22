import profileReducer, {addPost, deletePost} from "./profile-reducer";

it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPost({text: 'new post'});
    const state = {
        posts: [
            {
                id: '1',
                text: 'Задумчивая душа склоняется к одиночеству.',
                image: 'https://stihi.ru/pics/2021/07/07/4171.jpg'
            },
        ],
        profile: null,
        status: null,
    };

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(2)
    expect(newState.posts[0].text).toBe('new post');
});

it('text post 2 - new post', () => {
    // 1. test data
    let action = addPost({text: 'new post'});
    const state = {
        posts: [
            {
                id: '1',
                text: 'Задумчивая душа склоняется к одиночеству.',
                image: 'https://stihi.ru/pics/2021/07/07/4171.jpg'
            },
        ],
        profile: null,
        status: null,
    };

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[0].text).toBe('new post');
});

it('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1);
    const state = {
        posts: [
            {
                id: '1',
                text: 'Задумчивая душа склоняется к одиночеству.',
                image: 'https://stihi.ru/pics/2021/07/07/4171.jpg'
            },
            {
                id: '2',
                text: '2',
                image: 'https://stihi.ru/pics/2021/07/07/4171.jpg'
            },
        ],
        profile: null,
        status: null,
    };

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(1);
});


it('after deleting length should`t bt decrement if id is incorrect', () => {
    // 1. test data
    let action = deletePost(1000);
    const state = {
        posts: [
            {
                id: '1',
                text: 'Задумчивая душа склоняется к одиночеству.',
                image: 'https://stihi.ru/pics/2021/07/07/4171.jpg'
            },
            {
                id: '2',
                text: '2',
                image: 'https://stihi.ru/pics/2021/07/07/4171.jpg'
            },
        ],
        profile: null,
        status: null,
    };

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(2);
});
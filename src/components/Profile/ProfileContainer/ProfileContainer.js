import React from 'react';
import UserInfo from '../UserInfo/UserInfo';
import AddPost from '../AddPost/AddPost';
import PostsList from '../PostList/PostList';
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../redux/profile-reducer';
import StoreContext from './../../../StoreContext';

const ProfileContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
          const state = store.getState().profilePage;

          const addPost = (newPost) => {
            store.dispatch(addPostActionCreator(newPost));
          };

          const updateNewPostText = (text) => {
            store.dispatch(updateNewPostTextActionCreator(text));
          };

          return (
            <div className="content-paddings">
              <UserInfo />
              <AddPost newPostText={state.newPostText} addPost={addPost} updateNewPostText={updateNewPostText} />
              <PostsList posts={state.posts} />
            </div>
          );
      }}
    </StoreContext.Consumer>
  );
}

export default ProfileContainer;
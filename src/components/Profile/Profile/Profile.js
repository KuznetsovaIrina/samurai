import React from 'react';
import UserInfo from '../UserInfo/UserInfo';
import AddPost from '../AddPost/AddPost';
import PostsList from '../PostList/PostList';

const Profile = (props) => {
  return (
    <div className="content-paddings">
        <UserInfo />
        <AddPost newPostText={props.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />
        <PostsList posts={props.posts} />
    </div>
  );
}

export default Profile;
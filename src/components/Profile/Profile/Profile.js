import React from 'react';
import UserInfo from '../UserInfo/UserInfo';
import AddPostForm from '../AddPostForm/AddPostForm';
import PostsList from '../PostList/PostList';

const Profile = (props) => {
  const onSubmit = (formData) => {
    props.addPost(formData);
  }
  return (
    <div className="content-paddings">
        <UserInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
        <AddPostForm onSubmit={onSubmit} />
        <PostsList posts={props.posts} />
    </div>
  )
}

export default Profile;
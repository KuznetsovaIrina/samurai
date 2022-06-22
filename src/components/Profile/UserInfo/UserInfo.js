import React from 'react';
import s from './UserInfo.module.css';
import Preloader from './../../Common/Preloader/Preloader';
import StatusHooks from './StatusHooks';
import defaultAvatar from './../../../assets/images/avatar-default.jpg';

const UserInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <>
      <figure className={s.intro}>
        <img width="140" src={props.profile.photos.large ? props.profile.photos.large : defaultAvatar} alt={props.profile.fullName} />
        <figcaption>
          <span className={s.name}>{props.profile.fullName}</span>
          <StatusHooks status={props.status} updateStatus={props.updateStatus} />
          <ul>
            <li className={s.contacts}>
              {props.profile.contacts.github ? <a href={props.profile.contacts.github}>Github</a> : ''}
              {props.profile.contacts.vk ? <a href={props.profile.contacts.vk}>VK</a> : ''}
              {props.profile.contacts.instagram ? <a href={props.profile.contacts.instagram}>Instagram</a> : ''}
              {props.profile.contacts.facebook ? <a href={props.profile.contacts.facebook}>Facebook</a> : ''}
            </li>
            <li className={s.job}>
              <b>{props.profile.lookingForAJob ? 'Searching for a job' : ''}</b>
              {props.profile.lookingForAJob ? <span>({props.profile.lookingForAJobDescription})</span> : ''}
            </li>
          </ul>
          <p>{props.profile.aboutMe}</p>
        </figcaption>
      </figure>
      <hr />
    </>
  );
}

export default UserInfo;
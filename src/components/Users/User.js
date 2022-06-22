import React from 'react';
import s from './Users.module.css';
import { NavLink } from 'react-router-dom';

const User = ({
        followingInProgress,
        isAuth,
        user,
        unfollow,
        follow }) => {

    const userDefaultPhoto = 'https://loremflickr.com/180/180/?random=' + user.id;

    return (
        <li className={s.item}>
            <div className={s.avatar}>
                <img width="90" height="90" src={user.photos.small ? user.photos.small : userDefaultPhoto} alt={user.name} />
            </div>
            <div>
                <NavLink to={`/profile/${user.id}`} className={s.name}>
                    {user.name}
                </NavLink>
                <p className={s.status}>
                    {user.status}        
                </p>
            </div>
            { isAuth ? user.followed
                ? <button className={`button ${s.button}`}
                    disabled={followingInProgress.some(id => id === user.id)}
                    onClick={() => { unfollow(user.id)}}>Unfollow</button>
                : <button className={`button ${s.button}`}
                    disabled={followingInProgress.some(id => id === user.id)}
                    onClick={() => { follow(user.id)}}>Follow</button> : '' }
        </li>
    )
}

export default User;
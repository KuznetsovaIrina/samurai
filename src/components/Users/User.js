import React from 'react';
import s from './Users.module.css';
// import userPhoto from './../../assets/images/avatar-default.jpg';

const User = (props) => {
    const userPhoto = 'https://loremflickr.com/180/180/?random=' + props.user.id;
    return (
        <li className={s.item}>
            <div className={s.avatar}>
                <img width="90" height="90" src={props.user.photos.small ? props.user.photos.small : userPhoto} alt={props.user.name} />
            </div>
            <div>
                <div className={s.name}>
                    {props.user.name}
                </div>
                <p className={s.status}>
                    {props.user.status}        
                </p>
            </div>
            { props.user.followed
                ? <button className={`button ${s.button}`} onClick={() => { props.unfollow(props.user.id) }}>Unfollow</button>
                : <button className={`button ${s.button}`} onClick={() => { props.follow(props.user.id) }}>Follow</button> }
        </li>
    );
}

export default User;
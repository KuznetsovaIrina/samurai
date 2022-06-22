import React from 'react';
import Paginatror from './Paginator';
import User from './User';
import s from './Users.module.css';

const Users = (props) => {
    return (
        <>
            <ul className={s.list}>
                { props.users.map(u =>
                    <User
                        isAuth={props.isAuth}
                        followingInProgress={props.followingInProgress}
                        key={u.id}
                        user={u}
                        follow={props.follow}
                        unfollow={props.unfollow}
                    />
                )}
            </ul>

            <Paginatror
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}
                totalItemsCount={props.totalUsersCount}
                pageSize={props.pageSize}
            />
        </>
    );
}

export default Users;
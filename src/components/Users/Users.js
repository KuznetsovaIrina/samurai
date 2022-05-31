import React from 'react';
import User from './User';
import s from './Users.module.css';

const Users = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <>
            <ul className={s.list}>
                { props.users.map(u => <User key={u.id} user={u} follow={props.follow} unfollow={props.unfollow} />) }
            </ul>

            <div className={s.pages}>
                { pages.map(page => 
                    <span onClick={ () => { props.onPageChanged(page) } } key={page} className={props.currentPage === page ? s.selectedPage : ''}>
                        {page}
                    </span>
                ) }
            </div>

            <div className='text-center'>
                <button className='button big'>Show more</button>
            </div>
        </>
    );
}

export default Users;
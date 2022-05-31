import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import * as axios from 'axios';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount,toggleIsFetching } from './../../redux/users-reducer';
import Preloader from './../Common/Preloader/Preloader';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
            this.props.toggleIsFetching(false);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.toggleIsFetching(false);
        });
        this.props.setCurrentPage(pageNumber);
    }
    
    render() {
        return (
            <div className="content-paddings">
                <h1>Users</h1>
                { this.props.isFetching
                    ? <Preloader />
                    : <Users
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        isFetching={this.props.isFetching}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        onPageChanged={this.onPageChanged} /> }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
});

// const mapDispatchToProps = (dispatch) => ({
//     follow: (userId) => {
//         dispatch(followAC(userId))
//     },
//     unfollow: (userId) => {
//         dispatch(unfollowAC(userId))
//     },
//     setUsers: (users) => {
//         dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (pageNumber) => {
//         dispatch(setCurrentPageAC(pageNumber))
//     },
//     setTotalUsersCount: (totalCount) => {
//         dispatch(setTotalUsersCountAC(totalCount))
//     },
//     toggleIsFetching: (isFetching) => {
//         dispatch(toggleIsFetchingAC(isFetching))
//     }
// });

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContainer);
import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import { requestUsers, createFollow, deleteFollow } from './../../redux/users-reducer';
import Preloader from './../Common/Preloader/Preloader';
import { getUsers, getUsersWithPhotoAndStatus,
         getPageSize,
         getTotalUsersCount,
         getCurrentPage,
         getIsFetching,
         getIsAuth,
         getFollowingInProgress } from '../../redux/users-selectors';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }
    follow = (userId) => {
        if (this.props.isAuth) {
            this.props.createFollow(userId);
        }
    }
    unfollow = (userId) => {
        if (this.props.isAuth) {
            this.props.deleteFollow(userId);
        }
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
                        followingInProgress={this.props.followingInProgress}
                        isAuth={this.props.isAuth}
                        users={this.props.users}
                        follow={this.follow}
                        unfollow={this.unfollow}
                        onPageChanged={this.onPageChanged} /> }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    isAuth: getIsAuth(state),
    followingInProgress: getFollowingInProgress(state),
});

export default connect(mapStateToProps, {
    requestUsers,
    createFollow,
    deleteFollow,
})(UsersContainer);
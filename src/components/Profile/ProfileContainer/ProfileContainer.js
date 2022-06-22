import React from 'react';
import Profile from './../Profile/Profile';
import { addPost, getProfileData, getStatus, updateStatus } from './../../../redux/profile-reducer';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.router.params.userId ? this.props.router.params.userId : this.props.authUserId;
    this.props.getProfileData(userId);
    this.props.getStatus(userId);
  }

  componentDidUpdate(prevProps, prevNext) {
    if (prevProps.router.params.userId !== this.props.router.params.userId) {
      this.props.getProfileData(this.props.router.params.userId);
      this.props.getStatus(this.props.router.params.userId);
    }
  }

  render() {
    return <Profile {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    authUserId: state.auth.userId,
    status: state.profilePage.status
  };
};

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }

  return ComponentWithRouterProp;
}

export default compose(
  connect(mapStateToProps, {addPost, getProfileData, getStatus, updateStatus}),
  withRouter,
)(ProfileContainer);
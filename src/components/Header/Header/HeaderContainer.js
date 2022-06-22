import React from 'react';
import Header from './Header';
import {logout} from './../../../redux/auth-reducer';
import {connect} from 'react-redux';

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
    userId: state.auth.userId
});

export default connect(mapStateToProps, {logout})(HeaderContainer);
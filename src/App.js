import React, {Fragment} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {connect} from 'react-redux';
import {initializeApp} from './redux/app-reducer';
import Sidebar from './components/Sidebar/Sidebar/Sidebar';
import HeaderContainer from './components/Header/Header/HeaderContainer';
import News from './components/News/News/News';
import Music from './components/Music/Music/Music';
import SettingsContainer from './components/Settings/Settings';
import Login from './components/Login/Login';
import Preloader from './components/Common/Preloader/Preloader';
import store from './redux/redux-store';
import { Provider } from 'react-redux';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <BrowserRouter>
        <Fragment>
          <div className="layout">
            <HeaderContainer />
            <Sidebar />
            <div className="content">
              <Routes>
                  <Route path="/profile/:userId" element={
                    <React.Suspense fallback={<div>Loading</div>}>
                      <ProfileContainer />
                    </React.Suspense>
                  } />
                  <Route path="/dialogs/*" element={
                    <React.Suspense fallback={<div>Loading</div>}>
                      <DialogsContainer />
                    </React.Suspense>
                  } />
                  <Route path="/users" element={
                    <React.Suspense fallback={<div>Loading</div>}>
                      <UsersContainer />
                    </React.Suspense>
                  } />
                  <Route path="/news" element={<News />} />
                  <Route path="/music" element={<Music />} />
                  <Route path="/settings" element={<SettingsContainer />} />
                  <Route path="/login" element={<Login />} />
              </Routes>
            </div>
          </div>
        </Fragment>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

const AppContainer =  connect(mapStateToProps, {initializeApp})(App);

const SamuraiApp = (props) => {
  return (
    // <React.StrictMode>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    // </React.StrictMode>
  )
}

export default SamuraiApp;
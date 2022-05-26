import React, {Fragment} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header/Header';
import Sidebar from './components/Sidebar/Sidebar/Sidebar';
import ProfileContainer from './components/Profile/ProfileContainer/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer/DialogsContainer';
import News from './components/News/News/News';
import Music from './components/Music/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
      <Fragment>
        <div className="layout">
          <Header />
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<ProfileContainer />} />
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;

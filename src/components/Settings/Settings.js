import React from 'react';
import {withAuthRedirect} from './../../hoc/withAuthRedirect';
import {connect} from 'react-redux';

const Settings = () => {
    return (
        <div className="content-paddings">
            <h1>Settings</h1>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {}
}

const SettingsContainer = connect(mapStateToProps)(withAuthRedirect(Settings));

export default SettingsContainer;
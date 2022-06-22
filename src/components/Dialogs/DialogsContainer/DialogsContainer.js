import React from 'react';
import Dialogs from './../Dialogs/Dialogs';
import { connect } from 'react-redux';
import { addMessage } from '../../../redux/dialogs-reducer';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {addMessage})
)(Dialogs);
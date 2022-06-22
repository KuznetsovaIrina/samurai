import React from 'react';
import s from './UserInfo.module.css';

class Status extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activeEditMode = () => {
        this.setState({ editMode: true });
    }
    deactiveEditMode = () => {
        this.setState({ editMode: false });
        this.props.updateStatus(this.state.status);
    }
    onChangeStatus = (e) => {
        this.setState({ status: e.target.value });
    }
    componentDidUpdate(prevProps, prevNext) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status});
        }
    }
    render() {
        return (
            <div className={s.status}>
                { this.state.editMode
                    ? <input autoFocus onBlur={this.deactiveEditMode} value={this.state.status} onChange={this.onChangeStatus} />
                    : <span onDoubleClick={this.activeEditMode}>{this.props.status || '---'}</span> }
            </div>
        )
    }
}

export default Status;
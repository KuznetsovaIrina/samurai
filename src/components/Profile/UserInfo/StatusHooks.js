import React, {useState, useEffect} from 'react';
import s from './UserInfo.module.css';

const StatusHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status] );

    const deactiveEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onChangeStatus = (e) => {
        setStatus(e.target.value);
    }

    return (
        <div className={s.status}>
            { editMode
                ? <input autoFocus={true} onBlur={deactiveEditMode} value={status} onChange={onChangeStatus} />
                : <span onDoubleClick={() => {setEditMode(true)}}>{props.status || '---'}</span> }
        </div>
    )
}

export default StatusHooks;
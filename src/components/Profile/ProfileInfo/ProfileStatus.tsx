import React, {ChangeEvent, Component} from 'react';
import style from './ProfileInfo.module.css';

type PropsType = {
    status: string
    setUserStatus: (newStatus:string)=> void
}

type StateType = {
    isChanging: boolean,
    status: string,
}

class ProfileStatus extends Component<PropsType, StateType> {

    state = {
        isChanging: false,
        status: this.props.status,
    }


    activateChangeStatus = () => {
        this.setState({
            isChanging: true,
        });
    }

    deActivateChangeStatus = () => {
        this.setState({
            isChanging: false,
        });
        this.props.setUserStatus(this.state.status)
    }

    onStatusChange = (evt:ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: evt.currentTarget.value,
        });
    }

    componentDidUpdate(prevProps: PropsType, prevState: StateType) {
        if(prevProps.status === this.props.status) return;
        this.setState({
            status: this.props.status
        });
    }


    render() {
        return (
            <div>
                {this.state.isChanging
                    ? <div><input className={style.status} autoFocus={true} type="text"
                                  value={this.state.status}
                                  onBlur={this.deActivateChangeStatus}
                                  onChange={this.onStatusChange}
                    /></div>
                    : <div><span className={status} onDoubleClick={this.activateChangeStatus}>{this.props.status}</span>
                    </div>}

            </div>
        )
    }
}

export default ProfileStatus;
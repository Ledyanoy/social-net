import React, {Component} from 'react';

import {status} from './ProfileInfo.module.css';

class ProfileStatus extends Component {

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

    onStatusChange = (evt) => {
        this.setState({
            status: evt.currentTarget.value,
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status === this.props.status) return;
        this.setState({
            status: this.props.status
        });
    }


    render() {
        return (
            <div>
                {this.state.isChanging
                    ? <div><input className={status} autoFocus={true} type="text"
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
import React, {Component} from 'react';
import User from "./User";
import * as axios from "axios";


class Users extends Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users/').then(response => {
            console.log(response.data.items);
            this.props.addUsers(response.data.items);
        });
    }


    render() {
        const userlist = this.props.users.map(user => <User key={user.id} user={user} follow={this.props.follow}
                                                            unfollow={this.props.unfollow}/>)
        return (
            <div>
                <ul>
                    {userlist}
                </ul>
            </div>
        )
    }
}


export default Users;
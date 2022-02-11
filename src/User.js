import React, { Component } from 'react';
class User extends Component {
    constructor() {
        super();
        this.state = {
            User: [
                { u_id: 1, u_name: "rajkumar", status: 'active' },
                { u_id: 2, u_name: "hetkumar", status: 'disabled' },
                { u_id: 3, u_name: "mahesh", status: 'active' },
                { u_id: 4, u_name: "kanishk", status: 'disabled' },
                { u_id: 5, u_name: "divya", status: 'active' },
            ]
        }
    }
    render() {
        return (
            <div>
                <h1>Table for User</h1>
                <table className='table table-striped'>
                    <tbody>
                        <tr>
                            <th>UserId</th>
                            <th>User Name</th>
                            <th>Select</th>
                        </tr>
                        {
                            this.state.User.map((user, id) => {
                                return (<tr key={id}>

                                    <td>{user.u_id}</td>
                                    <td>{user.u_name}</td>
                                    <td><button className="btn btn-info" onClick={() => {
                                        alert(user.status)
                                    }}>Select</button></td>
                                </tr>)
                            })
                        }
                    </tbody>

                </table>
            </div>
        )
    }
}
export default User;
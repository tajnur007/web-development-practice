import React, { useEffect, useState } from 'react';
import User from '../User/User';
import './Users.css';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp => resp.json())
            .then(user => setUsers(user))
    }, []);

    return (
        <div className="users">
            {
                users.map(user => <User value={user}></User>)
            }

        </div>
    );
};

export default Users;
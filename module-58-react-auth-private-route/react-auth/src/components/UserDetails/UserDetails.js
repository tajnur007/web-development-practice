import React from 'react';
import useAuth from '../../hooks/useAuth';

const UserDetails = () => {
    const { user } = useAuth();

    return (
        <div>
            <h2>Hello {user.displayName}!</h2>
            <h4>Email: {user.email}</h4>
        </div>
    );
};

export default UserDetails;
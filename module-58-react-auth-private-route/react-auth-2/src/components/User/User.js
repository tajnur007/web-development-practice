import React from 'react';
import { Link } from 'react-router-dom';

const User = (props) => {
    const { id, name } = props.value;
    return (
        <div style={{ padding: "20px", border: "solid 2px orange", borderRadius: "10px" }}>
            <h4>ID: {id}</h4>
            <h2>{name}</h2>
            <Link to="/userDetails" id={id}>View Details</Link>
        </div>
    );
};

export default User;
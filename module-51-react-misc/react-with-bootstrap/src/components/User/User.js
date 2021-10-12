import React from 'react';
import { Card } from 'react-bootstrap';

const User = (props) => {
    const { name, email, address, phone, website } = props.value;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
                <Card.Text>
                    <p>Address: {address.suite}, {address.street}, {address.city}</p>
                    <p>Phone: {phone}</p>
                </Card.Text>
                <Card.Link href={website}>View Website</Card.Link>
            </Card.Body>
        </Card>
    );
};

export default User;
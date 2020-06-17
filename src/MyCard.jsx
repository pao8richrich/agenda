import React from 'react';
import { Card, Button, } from 'react-bootstrap';
import avatarcito from './img/avatar1.jpeg'

function MyCard({ nombre, apellido, ciudad, empleo, fechaInicio }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={avatarcito} />
            <Card.Body>
                <Card.Title>{nombre} {apellido}</Card.Title>
                <Card.Text>
                    {ciudad}
                </Card.Text>
                <Card.Text>
                    {empleo}
                </Card.Text>
                <small className="text-muted">{fechaInicio}</small>
            </Card.Body>
        </Card>
    );
}
export default MyCard;
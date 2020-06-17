import React from 'react';
import { Card , Button, } from 'react-bootstrap';
import avatarcito from './img/avatar1.jpeg'

function MyCard() {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={avatarcito} />
        <Card.Body>
            <Card.Title>Armando paredes</Card.Title>
            <Card.Text>
            Esta es mi descripcion
            </Card.Text>
            <Card.Text>
            Esta es mi descripcion
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    );
  }
export default MyCard;
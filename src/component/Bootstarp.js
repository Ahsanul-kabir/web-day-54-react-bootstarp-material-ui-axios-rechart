import React from 'react';
import { Button,Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const bootstrap = () => {
    return (
        <div>
            <Button variant="primary" className='ml-5'>Primary</Button>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
            </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </div>
    );
};

export default bootstrap;
import React from 'react';
import { Button,Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const bootstrap = (props) => {
    const {title,description} = props.article;
    return (
        <div>
            <Button variant="primary" className='ml-5'>Primary</Button>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </div>
    );
};

export default bootstrap;
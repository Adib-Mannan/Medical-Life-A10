import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Service = (props) => {
    const { name, img, shortDescription, id } = props.service;
    return (
        <div>

            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {shortDescription}
                        </Card.Text>
                        <NavLink to={`/service/${id}`}>More Details</NavLink>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;
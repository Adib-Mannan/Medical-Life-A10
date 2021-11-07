import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Doctor = (props) => {
    const { name, img, specialized } = props.doctor;
    return (
        <div>

            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {specialized}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Doctor;
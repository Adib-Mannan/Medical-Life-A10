import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospital, faClock } from '@fortawesome/free-solid-svg-icons';
import './Contact.css'
import { Button, Col, Form, Row } from 'react-bootstrap';

const Contact = () => {
    const Hospital = <FontAwesomeIcon icon={faHospital} />
    const Clock = <FontAwesomeIcon icon={faClock} />
    return (
        <div>
            <div className='row mt-5 pt-5'>
                <div className="col-lg-6 shadow-lg p-5">
                    <Form.Floating className="mb-3">
                        <Form.Control
                            id="floatingInputCustom"
                            type="name"
                            placeholder="Name"
                        />
                        <label htmlFor="floatingInputCustom">Name</label>
                    </Form.Floating>
                    <Row className='mb-3'>
                        <Col>
                            <Form.Control placeholder="Email" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Phone" />
                        </Col>
                    </Row>
                    <Form.Floating>
                        <Form.Control
                            id="floatingPasswordCustom"
                            type="subject"
                            placeholder="subject"
                        />
                        <label htmlFor="floatingPasswordCustom">Subject</label>
                    </Form.Floating>
                    <Form.Floating className='mt-3'>
                        <Form.Control
                            id="floatingPasswordCustom"
                            type="message"
                            placeholder="message"
                            style={{ height: '100px' }}
                        />
                        <label htmlFor="floatingPasswordCustom">Message</label>
                    </Form.Floating>
                    <Button className='mt-4 custom-bg-color text-white' variant="custom-bg-color" type="submit">
                        Submit
                    </Button>
                </div>
                <div className="col-lg-6 mt-5">
                    <h5>Contact Us</h5>
                    <h2>Let's Get In Touch</h2>
                    <p>A service is a transaction in which no physical goods are transferred from the seller to the buyer. The benefits of such a service are held to be demonstrated by the buyer's willingness to make the exchange. </p>
                    <div className='d-flex ms-lg-5'>
                        <div className='ps-lg-5'>
                            <h1 className='custom-color ' >{Hospital}</h1>
                            <h5 >Mirpur-10 , Dhaka</h5>
                        </div>
                        <div className='ps-lg-5'>
                            <h1 className='custom-color '>{Hospital} </h1>
                            <h5>Dhanmondi-32 , Dhaka</h5>
                        </div>
                    </div>
                    <hr className='me-5 ' />
                    <div>
                        <div>
                            <h3>Working Hour</h3>
                            <div className='d-lg-flex'>
                                <h6><span className='custom-color'>{Clock}</span>  Mon - Thurs : 9.00 A.M - 5.00 P.M</h6>

                                <h6 className='ms-4'><span className='custom-color'>{Clock}</span>  Mon - Thurs : 9.00 A.M - 5.00 P.M</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
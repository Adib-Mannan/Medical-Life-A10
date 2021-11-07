import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faHeartbeat, faCalendarCheck, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import './Help.css';
import { Link } from 'react-router-dom';
import { Accordion, Button } from 'react-bootstrap';

const Help = () => {
    const UserMd = <FontAwesomeIcon icon={faUserMd} />
    const Heartbeat = <FontAwesomeIcon icon={faHeartbeat} />
    const CalendarCheck = <FontAwesomeIcon icon={faCalendarCheck} />
    const PhoneAlt = <FontAwesomeIcon icon={faPhoneAlt} />
    return (
        <div className='help-container'>
            <div className='row ms-5 me-5'>
                <div className="col-lg-4 shadow pt-5">
                    <h1 className='custom-color '>{UserMd}</h1>
                    <h2>Doctors Timetable</h2>
                    <p>You can call us and say the Doctor name .Then we will Give you the doctor timetable</p>
                    <Link className='text-dark' to='/'>More</Link>

                </div>
                <div className="col-lg-4 text-white custom-background-1">
                    <h1 className='custom-color'>{Heartbeat}</h1>
                    <h2>Emergency Call</h2>
                    <p>In any Help you can call us .we will try our best to help you .</p>
                    <Button className=' custom-bg-color text-white' variant="custom-bg-color">{PhoneAlt}  +880 1716900000</Button>
                </div>
                <div className="col-lg-4 custom-background text-white">
                    <h1>{CalendarCheck}</h1>
                    <h2>Make An Appointment</h2>
                    <p>Go to contact Section and take your Appointment</p>
                    <Link className='text-white' to='/contact'> Contact us</Link>
                </div>
            </div>
            <div className='m-lg-5'>
                <h5 className='custom-color'>Help and FAQ</h5>
                <h1>General Question</h1>
                <p> Being a healthcare provider demands dedication and passion, which you likely gained because of personal life experiences. Explain your educational background and work experience, but also include a personal life experience or a passion that fits with the healthcare position.</p>
                <div>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Can I Personally Meet a Doctor at Clinic?</Accordion.Header>
                            <Accordion.Body>
                                Yea ,You can .But First you have to take Appointment for this . so at first take appointment.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header> How to Make an Appointment For Medical Check Up?</Accordion.Header>
                            <Accordion.Body>
                                Go to the contact page to make appointment or call us to appointment.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header> How I Can Find a Nearby Hospital?</Accordion.Header>
                            <Accordion.Body>
                                We have 2 branch . You have to find our which branch is close to your location .then go to that branch.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header> What Payment Methods Are Available? </Accordion.Header>
                            <Accordion.Body>
                                you can give us payment in Cash , Bkash , Nogod , card .
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    );

};

export default Help;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faClock, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const Envelope = <FontAwesomeIcon icon={faEnvelope} />
    const MapMarkerAlt = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const Clock = <FontAwesomeIcon icon={faClock} />
    const PhoneAlt = <FontAwesomeIcon icon={faPhoneAlt} />
    return (
        <div className='bg-dark text-white mt-5 pt-1 pb-3'>
            <div className="row mt-lg-5  ">
                <div className="col-lg-6 ">
                    <h1>MEDICAL-LIFE</h1>
                    <p>we are Always here to help you.</p>
                    <p>Stay with us </p>
                    <p>Be Connected</p>
                </div>
                <div className="col-lg-6">
                    <h5>Contact Detail</h5>
                    <hr className='ms-lg-5' />
                    <h6>{MapMarkerAlt} Mirpur-10,Dhaka</h6>
                    <h6> {Envelope}  medical@gmail.com </h6>
                    <h6> {Clock} 8 AM - 5 PM , Monday - Saturday  </h6>
                    <h6> {PhoneAlt}  +880 1716900000 </h6>

                </div>
            </div>
            <hr className='ms-5 me-5' />
            <p>Copyright © 2021 All rights reserved.</p>
        </div>
    );
};

export default Footer;
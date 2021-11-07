import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faStethoscope, faNotesMedical, faHeartbeat } from '@fortawesome/free-solid-svg-icons'
import './About.css'

const About = () => {
    const stethoscope = <FontAwesomeIcon icon={faStethoscope} />
    const UserMd = <FontAwesomeIcon icon={faUserMd} />
    const NotesMedical = <FontAwesomeIcon icon={faNotesMedical} />
    const Heartbeat = <FontAwesomeIcon icon={faHeartbeat} />
    return (
        <div className='mt-5 p-3 color text-white'>
            <div className="row">
                <div className='col-lg-6 text-center'>
                    <br />
                    <br />
                    <br />
                    <h1>Trust Us To Be There To Help All and Make Things Well Again</h1>
                    <p>Health care (also health-care or healthcare) is the maintenance or improvement of health via the prevention, diagnosis, treatment, amelioration, or cure of disease, illness, injury, and other physical and mental impairments in people. </p>
                </div>
                <div className='col-lg-6'>
                    <div className='row g-4 '>
                        <div className='col-lg-6 border border-light pt-1'>
                            <h2>{UserMd}</h2>
                            <h3>Medical Advices and Check Ups</h3>
                        </div>
                        <div className='col-lg-6 border border-light pt-1'>
                            <h2>{NotesMedical}</h2>
                            <h3>
                                Trusted Medical Treatment</h3>
                        </div>
                        <div className='col-lg-6 border border-light pt-1'>
                            <h2>{Heartbeat}</h2>
                            <h3>Emergency Help Available 24/7</h3>
                        </div>
                        <div className='col-lg-6 border border-light pt-1'>
                            <h2>{stethoscope}</h2>
                            <h3>
                                Medical Research Professionals</h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;
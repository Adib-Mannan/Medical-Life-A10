import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('/doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])
    return (
        <div id='doctors'>
            <h5 className='text-info'>Our Doctors</h5>
            <h1 className='pb-3'>Meet With Our Doctor</h1>

            <Row xs={1} md={3} className="g-4">
                {doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)}
            </Row>
        </div>
    );
};

export default Doctors;
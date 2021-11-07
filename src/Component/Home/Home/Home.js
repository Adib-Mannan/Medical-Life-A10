import React from 'react';
import Banner from '../Banner/Banner';
import './Home.css';
import Services from '../Services/Services';
import Doctors from '../Doctors/Doctors';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='mt-5 pt-4'>
                <Services></Services>
            </div>
            <div className='mt-5 pt-4'>
                <Doctors></Doctors>
            </div>
            <div className='mt-3'>
                <h4>Best Medical and Healthcare</h4>
                <About></About>
            </div>

        </div>
    );
};

export default Home;
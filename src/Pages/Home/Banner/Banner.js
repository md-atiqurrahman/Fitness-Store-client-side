import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css';
import 'animate.css';

const Banner = () => {
    return (
        <div className='banner'>
            <Container className='animate__animated animate__slideInLeft container'>
                <div className='banner-text'>
                    <h2 >We Have All GYM Equipment</h2>
                    <h1 className='upper-title'>RUN MORE: WHY RUNNING </h1>
                    <h1 className='lower-title'>IS SUCH PERFECT</h1>
                </div>
                <button className='banner-btn'>READ MORE</button>
            </Container>
        </div>
    );
};

export default Banner;
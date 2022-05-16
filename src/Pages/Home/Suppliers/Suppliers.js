import React from 'react';
import './Suppliers.css';
import image1 from '../../../images/Suppliers/brand2.png';
import image2 from '../../../images/Suppliers/brand3.png';
import image3 from '../../../images/Suppliers/brand4.png';
import image4 from '../../../images/Suppliers/brand5.png';
import image5 from '../../../images/Suppliers/brand6.png';
import image6 from '../../../images/Suppliers/brand7.png';

const Suppliers = () => {
    return (
        <div className='suppliers'>
            <h2>Our Suppliers</h2>
            <div className='logo-container'>
                <div>
                    <img src={image1} alt="" />
                </div>
                <div>
                    <img src={image2} alt="" />
                </div>
                <div>
                    <img src={image3} alt="" />
                </div>
                <div>
                    <img src={image4} alt="" />
                </div>
                <div>
                    <img src={image5} alt="" />
                </div>
                <div>
                    <img src={image6} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Suppliers;
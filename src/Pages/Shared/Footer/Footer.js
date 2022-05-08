import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='footer'>
            <div className='d-flex justify-content-around text-white pt-5'>
                <div>
                    <p>this is footer</p>
                    <p>this is footer</p>
                    <p>this is footer</p>
                    <p>this is footer</p>
                    <p>this is footer</p>
                </div>
                <div>
                    <p>this is footer</p>
                    <p>this is footer</p>
                    <p>this is footer</p>
                    <p>this is footer</p>
                    <p>this is footer</p>
                </div>
                <div>
                    <p>this is footer</p>
                    <p>this is footer</p>
                    <p>this is footer</p>
                    <p>this is footer</p>
                    <p>this is footer</p>
                </div>
                <div>
                    <p>this is footer</p>
                    <p>this is footer</p>
                    <p>this is footer</p>
                    <p>this is footer</p>
                    <p>this is footer</p>
                </div>
            </div>
             <div className='d-flex justify-content-around text-white mt-5'>
                 <p>Copyright © {year} Fitness Store all rights reserverd</p>
                 <p>Payment method</p>
             </div>
        </footer>
    );
};

export default Footer;
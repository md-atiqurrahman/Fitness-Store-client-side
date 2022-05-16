import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhone, faEnvelope, faClock,  faHeadset,   faBuildingShield, faWarehouse, faFireExtinguisher } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF,  faGooglePlusG, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='footer'>
            <div className='footer-container d-lg-flex justify-content-around text-white pt-5'>
                <div className='store-info'>
                    <button>
                        Fitness Store
                    </button>
                    <div className='d-flex align-items-baseline'>
                        <FontAwesomeIcon style={{ marginRight: '10px', color: 'white' }} icon={faHome} />
                        <p>6688Princess Road, London,<br />
                            Greater London BAS 23JK, UK</p>
                    </div>
                    <p>
                        <FontAwesomeIcon style={{ marginRight: '10px', color: 'white' }} icon={faPhone} />
                        (012) 800 456 789-987
                    </p>
                    <p>
                        <FontAwesomeIcon style={{ marginRight: '10px', color: 'white' }} icon={faEnvelope} />
                        support@FitnessStore.com
                    </p>
                    <p>
                        <FontAwesomeIcon style={{ marginRight: '10px', color: 'white' }} icon={faClock} />
                        Work time: 8.00 -22.00
                    </p>
                    <p style={{ marginTop: '10px', fontSize: '20px' }}>
                        <FontAwesomeIcon style={{ marginRight: '25px' }} icon={faFacebookF} />
                        <FontAwesomeIcon style={{ marginRight: '25px' }} icon={faTwitter} />
                        <FontAwesomeIcon style={{ marginRight: '25px' }} icon={faGooglePlusG} />
                        <FontAwesomeIcon style={{ marginRight: '25px' }} icon={faInstagram} />
                        <FontAwesomeIcon style={{ marginRight: '25px' }} icon={faYoutube} />

                    </p>
                </div>
                <div className='information'>
                    <h5>Information</h5>
                    <p>About us</p>
                    <p>Stock Information</p>
                    <p>Privacy Policy</p>
                    <p>Terms and Conditions</p>
                    <p>Returns</p>
                    <p>Site map</p>
                    <p>Gift certificates</p>
                </div>
                <div className='account-information'>
                    <h5>My Account</h5>
                    <p>My Account</p>
                    <p>Stock History</p>
                    <p>Wish List</p>
                    <p>Newsletter</p>
                    <p>Affiliate</p>
                    <p>Specials</p>
                    <p>International Products</p>
                </div>
                <div className='support'>
                    <div style={{marginTop: '5px'}} className='d-flex '>
                        <FontAwesomeIcon className='icon' icon={faWarehouse} />
                        <p>
                            Our Store<br />
                            <span className='under-text' >We always keep our store full with products</span>
                        </p>
                    </div>
                    <div className='d-flex'>
                        <FontAwesomeIcon className='icon' icon={faHeadset} />
                        <p>
                            Support 24/7 <br />
                            <span className='under-text'>Contact us 24 hours a day, 7 days a week</span>
                        </p>
                    </div>
                    <div className='d-flex'>
                        <FontAwesomeIcon className='icon' icon={faFireExtinguisher} />
                        <p>
                            Prevent Fire Accident<br />
                            <span className='under-text'>We have the latest fire prevent system</span>
                        </p>
                    </div>
                    <div className='d-flex'>
                        <FontAwesomeIcon className='icon' icon={faBuildingShield} />
                        <p>
                            Our Store is 100% Secure <br />
                            <span className='under-text'>We ensure security first</span>
                        </p>
                    </div>
                </div>
            </div>
            <hr style={{color: '#999999',marginTop: '40px'}} className='w-90' />
            <div className='copyright-info text-white text-center '>
                <div>
                    <p className='mb-0'>Copyright © {year} <span style={{ color: ' #ec3642' }}>Fitness Store</span> all rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
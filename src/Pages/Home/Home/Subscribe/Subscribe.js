import React from 'react';
import './Subscribe.css';

const Subscribe = () => {
    return (
        <div className='subscribe'>
            <div className='store-details'>
                <div className="details-text">
                    <h1>Fitness Store</h1>
                    <h6>We have 100% products of Gym equipment in our stock.Which  quality and type is international.</h6>
                </div>
                <div>

                </div>
            </div>
            <div className='subscribe-field'>
                <div className='subscribe-details'>
                    <h3>Sign up for</h3>
                    <h1>SEND</h1>
                    <h2>Newsletter</h2>
                    <input type="email" name="email" placeholder=' Enter your email' autoComplete='off' id="" />
                    <br />
                    <button>SUBSCRIBE!</button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
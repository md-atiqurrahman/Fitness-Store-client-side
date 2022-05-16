import React from 'react';
import './NewProducts.css';
import image1 from '../../../../images/Newproducts/bag.png';
import image2 from '../../../../images/Newproducts/tool.png';
import image3 from '../../../../images/Newproducts/gloves.png';
import image4 from '../../../../images/Newproducts/cycle.png';
import image5 from '../../../../images/Newproducts/chair.png';
import image6 from '../../../../images/Newproducts/speed box.png';

const NewProducts = () => {
    return (
        <div className='new-products'>
            <h2 className='text-center'>
                New Arrivals
            </h2>
            <p>IN STORE</p>
            <div className='new-products-container'>
                <div className='product-container'>
                    <div>
                        <img src={image1} alt="" />
                    </div>
                    <div className='product-info'>
                        <h5>Gym equipment Bag</h5>
                        <h5><small>Quantity: <span style={{ color: '#ec3642' }}>114</span></small></h5>
                        <h5 style={{ color: '#ec3642' }}>$21.48-$23.99</h5>
                    </div>
                </div>
                <div className='product-container'>
                    <div>
                        <img src={image2} alt="" />
                    </div>
                    <div className='product-info'>
                        <h5> Stress Tool Red</h5>
                        <h5><small>Quantity: <span style={{ color: '#ec3642' }}>139</span></small></h5>
                        <h5 style={{ color: '#ec3642' }}>$35.79-$39.04</h5>
                    </div>
                </div>
                <div className='product-container'>
                    <div>
                        <img src={image3} alt="" />
                    </div>
                    <div className='product-info'>
                        <h5>Punching Hand Gloves</h5>
                        <h5><small>Quantity: <span style={{ color: '#ec3642' }}>156</span></small></h5>
                        <h5 style={{ color: '#ec3642' }}>$15.67-$17.25</h5>
                    </div>
                </div>
                <div className='product-container'>
                    <div>
                        <img src={image4} alt="" />
                    </div>
                    <div className='product-info'>
                        <h5>Electrical LCD Machine</h5>
                        <h5><small>Quantity: <span style={{ color: '#ec3642' }}>255</span></small></h5>
                        <h5 style={{ color: '#ec3642' }}>$511.99-$523.31</h5>
                    </div>
                </div>
                <div className='product-container'>
                    <div>
                        <img src={image5} alt="" />
                    </div>
                    <div className='product-info'>
                        <h5>Stressing Chair Red</h5>
                        <h5><small>Quantity: <span style={{ color: '#ec3642' }}>173</span></small></h5>
                        <h5 style={{ color: '#ec3642' }}>$284.52-$297.56</h5>
                    </div>
                </div>
                <div className='product-container'>
                    <div>
                        <img src={image6} alt="" />
                    </div>
                    <div className='product-info'>
                        <h5>Boxing Speed Ball</h5>
                        <h5><small>Quantity: <span style={{ color: '#ec3642' }}>189</span></small></h5>
                        <h5 style={{ color: '#ec3642' }}>$8.43-$13.34</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProducts;
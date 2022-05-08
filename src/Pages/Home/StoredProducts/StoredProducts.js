import React from 'react';
import './StoredProducts.css';
import img from '../../../images/Products/chair.png';

const StoredProducts = () => {
    return (
        <div className='stored-products text-center'>
            <p className='sub-title'>MADE THE HARD WAY</p>
            <h1 className='title'>Our Stored Products</h1>
            <div className='horizontal-line d-flex justify-content-center align-items-stretch '>
                <hr />
                <p className='hr-text mx-2'>X</p>
                <hr />
            </div>
            <div className='products-container '>
                <div className='card-container'>
                    <img src={img} alt="" />
                    <div className='product-details'>
                        <h6>Name: Chair</h6>
                        <p>This chair is very wellBuild Chair and quality is international type</p>
                        <p>Price: <span style={{color: '#003300'}}>$150</span></p>
                        <p>Quantity: <span style={{color: '#003300'}}>5</span></p>
                        <p>Supplier name: acesporter</p>
                        <button>Stock update</button>
                    </div>
                </div>
                <div className='card-container'>
                    <img src={img} alt="" />
                    <div className='product-details'>
                        <h6>Name: Chair</h6>
                        <p>This chair is very wellBuild Chair and quality is international type</p>
                        <p>Price: $150</p>
                        <p>Quantity: 5</p>
                        <p>Supplier name: acesporter</p>
                        <button >Stock update</button>
                    </div>
                </div>
                <div className='card-container'>
                    <img src={img} alt="" />
                    <div className='product-details'>
                        <h6>Name: Chair</h6>
                        <p>This chair is very wellBuild Chair and quality is international type</p>
                        <p>Price: $150</p>
                        <p>Quantity: 5</p>
                        <p>Supplier name: acesporter</p>
                        <button>Stock update</button>
                    </div>
                </div>
                <div className='card-container'>
                    <img src={img} alt="" />
                    <div className='product-details'>
                        <h6>Name: Chair</h6>
                        <p>This chair is very wellBuild Chair and quality is international type</p>
                        <p>Price: $150</p>
                        <p>Quantity: 5</p>
                        <p>Supplier name: acesporter</p>
                        <button>Stock update</button>
                    </div>
                </div>
                <div className='card-container'>
                    <img src={img} alt="" />
                    <div className='product-details'>
                        <h6>Name: Chair</h6>
                        <p>This chair is very wellBuild Chair and quality is international type</p>
                        <p>Price: $150</p>
                        <p>Quantity: 5</p>
                        <p>Supplier name: acesporter</p>
                        <button>Stock update</button>
                    </div>
                </div>
                <div className='card-container'>
                    <img src={img} alt="" />
                    <div className='product-details'>
                        <h6>Name: Chair</h6>
                        <p>This chair is very wellBuild Chair and quality is international type</p>
                        <p>Price: $150</p>
                        <p>Quantity: 5</p>
                        <p>Supplier name: acesporter</p>
                        <button>Stock update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoredProducts;
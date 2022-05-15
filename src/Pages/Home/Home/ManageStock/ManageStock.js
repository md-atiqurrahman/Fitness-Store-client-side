import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useLoading from '../../../../hooks/useLoading';
import Loading from '../../../Shared/Loading/Loading';
import './ManageStock.css';

const ManageStock = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { imageBig, name, quantity, price, description, supplierName, sold, category } = product;

    const [loading] = useLoading(product);


    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);

    const handleReduceQuantity = () => {
        const reduceQuantity = parseInt(quantity) -1;
        product.quantity = reduceQuantity;
        const reducedProduct = {...product};

        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reducedProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {  
                    setProduct(reducedProduct)
                }
            })
    };


    const handleRestock = event => {
        event.preventDefault();
        const number = parseInt(event.target.number.value);

        const addedQuantity = parseInt(quantity) + number;
        product.quantity = addedQuantity;
        const newProduct = {...product};
    
        const url = `http://localhost:5000/products/${id}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                   setProduct(newProduct)
                   event.target.reset();
                }
            })
    };



    return loading ?
        (
            <Loading></Loading>
        )
        :
        (
            <div className='manage-stock'>
                <div className='item-container'>
                    <div className="image-container">
                        <img src={imageBig} alt="" />
                    </div>
                    <div className="item-details">
                        <h4>{name}</h4>
                        <p>Quantity: <span style={{ color: '#ec3642' }}>{quantity}</span></p>
                        <h4 style={{ color: '#ec3642' }}>${price}</h4>
                        <h5>{description}</h5>
                        <h6>Supplier Name: {supplierName}</h6>
                        <p style={{ marginBottom: '32px', marginTop: '20px' }}>
                            Sold: <span style={{ color: '#ec3642' }}>{sold}</span>
                        </p>
                        <hr />
                        <div className="options">
                            <h5>Available Options</h5>
                            <h6>Color</h6>
                            <div className='color-container'>
                                <div className='color-area'>
                                    <div className="black"></div>
                                </div>
                                <div className='color-area'>
                                    <div className="silver"></div>
                                </div>
                                <div className='color-area'>
                                    <div className="red"></div>
                                </div>
                                <div className='color-area'>
                                    <div className="yellow"></div>
                                </div>
                            </div>
                            <div className="stock-manager">
                                <form onSubmit={handleRestock}>
                                    <input className='stock-btn' type="submit" value="Restock Item" />
                                    <input className='number-field' type="number" name="number" id="" />
                                </form>
                                <button onClick={handleReduceQuantity} className='delivered-btn'>Delivered</button>
                            </div>
                            <div className="compare">
                                <p><small>+Add to Stock</small></p>
                                <p><small>+Compare</small></p>
                            </div>
                            <p style={{ marginBottom: '0px' }}>Category: <span style={{ color: '#ec3642' }}>{category}</span></p>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to='/manage'><button style={{ marginTop: '75px' }} className='manage-btn'> Manage Inventories</button></Link>
                </div>
            </div>
        );
};

export default ManageStock;
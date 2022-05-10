import { useParams } from 'react-router-dom';
import img from '../../../../images/productbig5.png';
import './ManageStock.css';

const ManageStock = () => {
    const { id } = useParams();


    return (
        <div className='item-container'>
            <div className="image-container">
                <img src={img} alt="" />
            </div>
            <div className="item-details">
                <h4>Red Stress Chair</h4>
                <p>Quantity: <span style={{ color: '#ec3642' }}>110</span></p>
                <h4 style={{ color: '#ec3642' }}>$740</h4>
                <h5>Very very useful for stressing and gain exellent back muscle.</h5>
                <h6>Supplier Name: HARMIS PARIS</h6>
                <p style={{ marginBottom: '32px', marginTop: '20px' }}>
                    Sold: <span style={{ color: '#ec3642' }}>Yes.</span>
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
                        <form>
                            <input className='stock-btn' type="submit" value="Restock Item" />
                            <input className='number-field' type="number" name="" id="" />
                        </form>
                        <button className='delivered-btn'>Delivered</button>
                    </div>
                    <div className="compare">
                        <p><small>+Add to Stock</small></p>
                        <p><small>+Compare</small></p>
                    </div>
                    <p style={{marginBottom:'0px'}}>Category: <span style={{ color: '#ec3642' }}>Clothing</span></p>
                </div>
            </div>
        </div>
    );
};

export default ManageStock;
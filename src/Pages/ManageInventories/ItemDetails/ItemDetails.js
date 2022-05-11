import React from 'react';

const ItemDetails = ({ product }) => {
    const { count, price, quantity, name, category, sold } = product;

    return (
        <tr>
            <td>{count}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{sold}</td>
            <td>{category}</td>
            <td style={{ backgroundColor: '#efefef' }}>
                <button style={{ width: '100%', border: 'none',backgroundColor:'white'}}>
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default ItemDetails;
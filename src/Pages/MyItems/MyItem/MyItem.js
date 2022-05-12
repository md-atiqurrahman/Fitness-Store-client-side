import React from 'react';
import './MyItem.css';

const MyItem = () => {
    return (
        <tr>
        <td>1</td>
        <td>Red hand Gloves</td>
        <td>12</td>
        <td style={{ backgroundColor: '#efefef' }}>
            <button style={{ width: '100%', border: 'none', backgroundColor: 'white' }}>
                Delete
            </button>
        </td>
    </tr>
    );
};

export default MyItem;
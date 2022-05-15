import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{ margin: '300px 0' }} className='text-center'>
            <Spinner animation="border" variant="secondary" />
        </div>
    );
};

export default Loading;
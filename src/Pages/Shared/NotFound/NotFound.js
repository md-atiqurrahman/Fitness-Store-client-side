import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='text-container'>
            <FontAwesomeIcon style={{ fontSize: '124px' }} icon={faFaceFrown}></FontAwesomeIcon>
            <h1>404</h1>
            <h4>Page not found</h4>
            <p>The Page you are looking for doesn't exist or an another error occurred.<br/>
                <span>
                    Go back, or head over to FitnessStore.com to choose a new direction.
                </span>
            </p>
        </div>
    );
};

export default NotFound;
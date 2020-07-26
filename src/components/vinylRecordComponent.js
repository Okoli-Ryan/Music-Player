import React from 'react';
import phonograph from '../images/phongraph.png'

const vinylRecordComponent = () => {
    return (
        <div className="current-song">
            <div className='image-container'>
                <img src={phonograph} alt="phonograph image"/>
            </div>
        </div>
    )
};

export default vinylRecordComponent;
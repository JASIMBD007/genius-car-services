import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div className='service'>
            <img src={img} alt="" srcset="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Price:{price}</p>
            <button>Book : {name}</button>
        </div>
    );
};

export default Service;
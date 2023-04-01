import React from 'react';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div>
            <img src={img} alt="" srcset="" />
            <h2>{name}</h2>
            <p>Price:{price}</p>
            <button>Book : {name}</button>
        </div>
    );
};

export default Service;
import React from 'react';
import './Service.css';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Price:{price}</p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'>BOOK : {name}</button>
        </div>
    );
};

export default Service;
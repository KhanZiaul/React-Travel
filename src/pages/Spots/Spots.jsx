import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Spots.css'
import { Link } from 'react-router-dom';

const Spots = ({ data }) => {
    return (
        <div>
            <div>
                <Link to={`/${data.id}`}>
                    <img className='spotsImage' src={data.photoURL} alt="" />
                </Link>
                <h2 className='text-light text-center'>{data.name}</h2>
            </div>
        </div>
    );
};

export default Spots;
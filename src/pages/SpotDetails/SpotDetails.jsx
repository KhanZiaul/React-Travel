import React from 'react';
import Navigation from '../Navigation/Navigation';
import { useLoaderData } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const SpotDetails = () => {
    const spotDetails = useLoaderData()
    return (
        <div className='bgImage'>
            <Navigation></Navigation>
            <Container className='mt-5'>
                <div>
                    <h1 className='text-light'>{spotDetails.name}</h1>
                    <p className='text-light'>{spotDetails.details}</p>
                </div>
            </Container>
        </div>
    );
};

export default SpotDetails;
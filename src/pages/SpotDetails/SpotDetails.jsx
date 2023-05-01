import React from 'react';
import Navigation from '../Navigation/Navigation';
import { Link, useLoaderData } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';

const SpotDetails = () => {
    const spotDetails = useLoaderData()
    return (
        <div className='bgImage'>
            <Navigation></Navigation>
            <Container className='mt-5 d-lg-flex gap-5'>
                <div className='w-auto'>
                    <h1 className='text-light'>{spotDetails.name}</h1>
                    <p className='fw-normal text-light'>{spotDetails.details}</p>
                </div>

                <Form className='bg-light mb-3 p-3 w-auto rounded'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Origion</Form.Label>
                        <Form.Control type="text" placeholder="" className='fw-bold' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Destination</Form.Label>
                        <Form.Control type="text" placeholder="" className='fw-bold' />
                    </Form.Group>
                    <div className='d-lg-flex gap-3 my-3'>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>From</Form.Label>
                            <Form.Control type="date" placeholder="" className='fw-bold'/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>To</Form.Label>
                            <Form.Control type="date" placeholder="" className='fw-bold'/>
                        </Form.Group>
                    </div>
                    <Link to={`/layout/booking/${spotDetails.id}`}>
                        <Button className='w-100 text-light fw-bold' variant="warning" type="submit">
                            Start Booking
                        </Button>
                    </Link>
                </Form>
            </Container>
        </div>
    );
};

export default SpotDetails;
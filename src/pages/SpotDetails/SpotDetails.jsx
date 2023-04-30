import React from 'react';
import Navigation from '../Navigation/Navigation';
import { useLoaderData } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';

const SpotDetails = () => {
    const spotDetails = useLoaderData()
    return (
        <div className='bgImage'>
            <Navigation></Navigation>
            <Container className='mt-5 d-flex gap-5'>
                <div className='w-50'>
                    <h1 className='text-light'>{spotDetails.name}</h1>
                    <p className='text-light'>{spotDetails.details}</p>
                </div>
                {/* <div className='bg-light mb-3 p-3'>
                    <label htmlFor="">
                        Origin
                        <input type="text" placeholder='' />
                    </label>
                    <label htmlFor="">
                        Destination
                        <input type="text" placeholder='' />
                    </label>
                    <div className='d-flex gap-3 my-3'>
                        <label htmlFor="">
                            From
                            <input type="date" placeholder='' />
                        </label>
                        <label htmlFor="">
                            To
                            <input type="date" placeholder='' />
                        </label>
                    </div>
                </div> */}

                <Form className='bg-light mb-3 p-3 w-50 rounded'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Origion</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Destination</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <div className='d-flex gap-3 my-3'>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>From</Form.Label>
                            <Form.Control type="date" placeholder="" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>To</Form.Label>
                            <Form.Control type="date" placeholder="" />
                        </Form.Group>
                    </div>
                    <Button className='w-100 text-light fw-bold' variant="warning" type="submit">
                        Start Booking
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default SpotDetails;
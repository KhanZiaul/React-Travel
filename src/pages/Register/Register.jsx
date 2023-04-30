import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaFacebook, FaFacebookF, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='w-50 mx-auto border p-4 rounded'>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm password" />
                </Form.Group>
                <Button className='w-100 text-light' variant="dark" type="submit">
                    Create an account
                </Button>
                <p className='my-3 text-center'>Already have an account ? <Link className='text-danger' to='/layout/login'>Login</Link></p>
            </Form>

            <div className='mt-3'>
                <ListGroup className='w-50 mx-auto'>
                    <ListGroup.Item className='d-flex align-items-center gap-5 rounded-pill my-3'>
                        <FaFacebookF className='bg-primary text-light rounded-circle' />
                        <span>Continue With Facebook</span>
                    </ListGroup.Item>
                    <ListGroup.Item className='d-flex align-items-center gap-5 rounded-pill my-3'>
                        <FaGoogle className=' rounded-circle ' />
                        <span>Continue With Google</span>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};

export default Register;
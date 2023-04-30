import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaFacebook, FaFacebookF, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { GoogleAuthProvider, updateProfile } from 'firebase/auth';

const Register = () => {
    const { createUser, googleSignIn } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    function formHandler(event) {
        event.preventDefault()
        const Name = event.target.name.value
        const Email = event.target.email.value
        const Password = event.target.password.value
        const ConfirmPassword = event.target.confirmPassword.value
        if (Password !== ConfirmPassword) {
            return
        }
        createUser(Email, Password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateUserProfile(userCredential.user, Name)
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });

        event.target.reset()
    }

    function updateUserProfile(user, name) {
        updateProfile(user, {
            displayName: name
        }).then(() => {

        }).catch((error) => {

        });
    }

    function googleHandler() {

        googleSignIn(googleProvider)
            .then((result) => {
                const user = result.user;

            }).catch((error) => {
                const errorMessage = error.message;
            });
    }

    return (
        <div className='w-50 mx-auto border p-4 rounded'>
            <Form onSubmit={formHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" name='name' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" name='email' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" name='password' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm password" name='confirmPassword' required />
                </Form.Group>
                <Button className='w-100 text-light' variant="dark" type="submit">
                    Create an account
                </Button>
                <p className='my-3 text-center'>Already have an account ? <Link className='text-danger' to='/layout/login'>Login</Link></p>
            </Form>

            <div className='mt-3'>
                <ListGroup className='w-50 mx-auto'>
                    <ListGroup.Item  className='d-flex align-items-center gap-5 rounded-pill my-3 btn btn-dark'>
                        <FaFacebookF className='text-primary rounded-circle' />
                        <span>Continue With Facebook</span>
                    </ListGroup.Item>
                    <ListGroup.Item onClick={googleHandler} className='d-flex align-items-center gap-5 rounded-pill my-3 btn btn-dark'>
                        <FaGoogle className='text-primary rounded-circle ' />
                        <span>Continue With Google</span>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};

export default Register;
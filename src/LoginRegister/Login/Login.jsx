import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaFacebook, FaFacebookF, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth'; 

const Login = () => {
    const { popUpSignIn, signInUser } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    const navigate = useNavigate()
    function formHandler(event) {
        event.preventDefault()
        const Email = event.target.email.value
        const Password = event.target.password.value
        signInUser(Email, Password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate(from , { replace: true })
            })
            .catch((error) => {
                const errorMessage = error.message;
            });

        event.target.reset()
    }

    function googleHandler() {
        popUpSignIn(googleProvider)
            .then((result) => {
                const user = result.user;
                navigate(from , { replace: true })
            }).catch((error) => {
                const errorMessage = error.message;
            });
    }

    function facebookHandler() {
        popUpSignIn(facebookProvider)
            .then((result) => {
                const user = result.user;
                navigate(from , { replace: true })
            }).catch((error) => {
                const errorMessage = error.message;
            });
    }

    return (
        <div className='w-75 mx-auto mt-4 border p-3 rounded'>
            <Form onSubmit={formHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' required />
                </Form.Group>
                <div className='d-lg-flex justify-content-between my-2'>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>
                    <Link className='text-danger' to='/layout/register'>Forgot Password</Link>
                </div>
                <Button className='w-100 text-light' variant="dark" type="submit">
                    Login
                </Button>
                <p className='my-3 text-center'>Don't have an account ? <Link className='text-danger' to='/layout/register'>Create an account</Link></p>
            </Form>

            <div className='mt-3'>
                <ListGroup className='w-auto mx-lg-auto'>
                    <ListGroup.Item onClick={facebookHandler} className='d-lg-flex align-items-center gap-5 rounded-pill my-3 btn btn-dark'>
                        <FaFacebookF className=' text-primary rounded-circle' />
                        <span>Login With Facebook</span>
                    </ListGroup.Item>
                    <ListGroup.Item onClick={googleHandler} className='d-lg-flex align-items-center gap-5 rounded-pill my-3 btn btn-dark'>
                        <FaGoogle className='text-primary rounded-circle ' />
                        <span>Login With Google</span>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};

export default Login;
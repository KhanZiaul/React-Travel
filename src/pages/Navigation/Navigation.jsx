import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/whiteLogo.png'
import './Navigation.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navigation = () => {
    const { user, logOut } = useContext(AuthContext)
    function logOutHandler() {
        logOut().then(() => {

        }).catch((error) => {

        });
    }
    return (
        <Navbar expand="lg">
            <Container >
                <Link to="/">
                    <img className='navLogo' src={logo} alt="" />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto flex align-items-center">
                        <div>
                            <input type="text" placeholder='Search your Destination...' className='px-5 py-2 rounded mx-2 border-light opacity-75' />
                        </div>
                        <div>
                            <Link className='mx-2 fw-2 fw-bold text-light text-decoration-none' to='/'>Destination</Link>
                        </div>
                        <div>
                            <Link className='mx-2 fw-2 fw-bold text-light text-decoration-none' to='/layout/blogs'>Blogs</Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {
                            user ?
                                <div>
                                    <span className='text-light me-3 fw-bold'>{user.displayName
                                    }</span>
                                    <Button className='text-light' variant="dark" onClick={logOutHandler}>Logout</Button>
                                </div>
                                :
                                <Link to='/layout/login' > <Button className='text-light' variant="dark">Login</Button></Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Navigation;
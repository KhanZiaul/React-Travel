import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo.png'
import './SharedNav.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SharedNav = () => {
    const { user, logOut } = useContext(AuthContext)
    function logOutHandler() {
        logOut().then(() => {

        }).catch((error) => {

        });
    }
    return (
        <Navbar expand="lg">
            <Container>
                <Link to='/'>
                    <img className='navLogo light' src={logo} alt="" />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto flex align-items-center">
                        <Link className='mx-4 fw-2 fw-bold text-black text-decoration-none' to='/'>Destination</Link>
                        <Link to='/layout/blogs' className='mx-4 text-black fw-2 fw-bold text-decoration-none' >Blogs</Link>
                        <Link className='mx-4 text-decoration-none text-black fw-2 fw-bold' to=''>Contact</Link>
                        {
                            user ?
                                <div>
                                    <span className=' me-3 fw-bold'>{user.displayName
                                    }</span>
                                    <Button className='text-light' variant="dark" onClick={logOutHandler}>Logout</Button>
                                </div>
                                :
                                <Link to='/layout/login' > <Button className='text-light' variant="dark">Login</Button></Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default SharedNav;
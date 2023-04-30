import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <Spinner animation="border" variant="danger" />
    }

    if (user) {
        return children
    }
    return <Navigate state={{ from: location }} to='/layout/login' replace></Navigate>
};

export default PrivateRouter;
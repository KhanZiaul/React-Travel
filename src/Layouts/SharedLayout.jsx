import React from 'react';
import SharedNav from '../shared/SharedNav/SharedNav';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
    return (
        <div>
            <SharedNav></SharedNav>
            <Outlet></Outlet>
        </div>
    );
};

export default SharedLayout;
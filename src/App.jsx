import React from 'react';
import Home from './pages/Home/Home';
import { Outlet } from 'react-router-dom';
import Navigation from './pages/Navigation/Navigation';

const App = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default App;
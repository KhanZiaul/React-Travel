import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Home.css'
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const datas = useLoaderData()
    console.log(datas)
    return (
        <div className='bgImage'>
            <Navigation></Navigation>
            <h2>ahbduiasd</h2>
        </div>

    );
};

export default Home;
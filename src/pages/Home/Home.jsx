import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Spots from '../Spots/Spots';

const Home = () => {
    const datas = useLoaderData()
    console.log(datas)
    return (
        <div className='bgImage'>
            <Navigation></Navigation>
            <Spots></Spots>
        </div>

    );
};

export default Home;
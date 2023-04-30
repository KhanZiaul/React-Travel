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
            <div className='d-flex gap-5 my-5 mx-auto'>
                {
                    datas.map(data => <Spots data={data} key={data.id}></Spots>)
                }
            </div>
        </div>

    );
};

export default Home;
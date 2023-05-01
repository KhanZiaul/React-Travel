import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Booking = () => {
    const hotelDatas = useLoaderData()
    console.log(hotelDatas)
    return (
        <div>

            <div>
                <div>
                    <h2>Booking Now</h2>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Booking;
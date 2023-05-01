import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Booking.css'
import { Container } from 'react-bootstrap';

const Booking = () => {
    const hotelDatas = useLoaderData()
    console.log(hotelDatas)

    return (
        <Container className='my-5'>
            {hotelDatas.map(hotelData =>
                <div key={hotelData.key}>
                    <div>

                    </div>
                    <div className='d-flex gap-4'>
                        <div className='mb-2'>
                            <img className='hotelImg mb-2' src={hotelData?.image} alt="" />
                        </div>
                        <div  className='mb-2'>
                            <p className='fw-bold fs-6'>{hotelData?.hotel_name}</p>
                            <div className='d-flex gap-2'>
                                <p>{hotelData?.guests} guests</p>
                                <p>{hotelData?.bedrooms} bedrooms</p>
                                <p>{hotelData?.beds} beds</p>
                                <p>{hotelData?.baths} baths</p>
                            </div>
                            <div className='d-flex gap-2 mb-2'>
                                    {
                                        hotelData?.Room_features.map((feature , index)=> <p key={index}>{feature}</p> 
                                        )
                                    }
                            </div>
                            <div className='d-flex gap-2 mb-2'>
                                    {
                                        hotelData?.Property_amenities.map((amenities , index) => <p key={index}>{amenities}</p> 
                                        )
                                    }
                            </div>
                            <div>
                                <div>
                                    <p>{hotelData?.rating}  ({hotelData?.given_rating})</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Container>
    );
};

export default Booking;
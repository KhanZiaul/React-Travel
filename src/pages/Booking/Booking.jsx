import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Booking.css'
import { Container } from 'react-bootstrap';
import ReactStarsRating from 'react-awesome-stars-rating';

const Booking = () => {
    const hotelDatas = useLoaderData()
    return (
        <Container >
            <div className='my-5'>
                <div>
                    {hotelDatas.map(hotelData =>
                        <div key={hotelData.key}>
                            <h2 className='fw-bold my-3'>{hotelData?.name ? hotelData?.name : ''}</h2>

                            <div className='d-lg-flex gap-4'>
                                <div className='mb-2'>
                                    <img className='hotelImg mb-2' src={hotelData?.image} alt="" />
                                </div>
                                <div className='mb-2'>
                                    <p className='fw-bold fs-6'>{hotelData?.hotel_name}</p>
                                    <div className='d-flex gap-2'>
                                        <p>{hotelData?.guests} guests</p>
                                        <p>{hotelData?.bedrooms} bedrooms</p>
                                        <p>{hotelData?.beds} beds</p>
                                        <p>{hotelData?.baths} baths</p>
                                    </div>
                                    <div className='d-flex gap-1 mb-2'>
                                        {
                                            hotelData?.Room_features.map((feature, index) => <p key={index}>{feature}</p>
                                            )
                                        }
                                    </div>
                                    <div className='d-flex gap-1 mb-2'>
                                        {
                                            hotelData?.Property_amenities.map((amenities, index) => <p key={index}>{amenities}</p>
                                            )
                                        }
                                    </div>
                                    <div className='d-flex align-items-center mb-2 gap-5'>
                                        <div className='d-flex align-items-center gap-2'>
                                            <ReactStarsRating value={hotelData?.rating} size={15} />
                                            <span>{hotelData?.rating}  ({hotelData?.given_rating})</span>
                                        </div>
                                        <div>
                                            <span className='fw-normal'>{hotelData?.cost}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Container>
    );
};

export default Booking;
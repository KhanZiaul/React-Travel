import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Spots.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { Link } from "react-router-dom";

export default function Spots() {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        fetch('http://localhost:8000/spots')
            .then(res => res.json())
            .then(allDatas => setDatas(allDatas))
    }, [])
    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    datas?.map(data => {
                        return (
                            <SwiperSlide>
                                <div className="p-3">
                                    <div>
                                        <h2 className='text-light mb-2'>{data.name}</h2>
                                        <p className='text-light'>{data.details.slice(0, 150) + '....'}</p>
                                    </div>
                                    <div>
                                        <Link to={`/${data.id}`}>
                                            <img className='spotsImage' src={data.photoURL} alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </>
    );
}
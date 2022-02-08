import "./Carousel.css";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import { CarouselData } from "./CarouselData";

const Carousel =()=>{
    return(
        <>
            <section className="p-container">
                <div className="p-heading-container">
                    <h2>What people say about us</h2>
                </div>
                <div className="p-list-container">
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={30}
                        slidesPerGroup={3}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >

                        {CarouselData.map((data,index)=>{
                            return(
                                <SwiperSlide key={index}>
                                    <div className="logos-container" onClick={data.link}>
                                        <img src={data.path} alt="logo"/>
                                    </div>
                                </SwiperSlide>
                            )
                        })}

                    </Swiper>

                </div>
                <div className="p-join-button">
                    <button>Join</button>
                </div>
            </section>
        </>
    )
}

export default Carousel;
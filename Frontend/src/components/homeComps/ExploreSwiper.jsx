import React, { useCallback, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";
import 'swiper/css/bundle'

// import required modules
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper";
import { Box, Flex, Image } from "@chakra-ui/react";
import Right from '../../Resources/right.png'
import ProductCard from "../Products/card/ProductCard";
import DisplayProduct from "../Cards/DisplayProduct";

const ExploreSwiper = ({products}) => {
    const sliderRef = useRef();
    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);
    
    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);
    return (
    <Flex w='80%' m='auto' justifyContent='space-between' alignItems='center'>
        <Box
            zIndex='1'
            boxShadow='#046a5a 0px 20px 20px -12px inset, #046a5a 0px 30px 36px -18px inset'
            h='150px'
            w='80px'
            bg='#01816d'
            borderRadius='0 150px 150px 0'
            >
            <Image src={Right} className='left' onClick={() => handlePrev()}/>
        </Box>
        <Swiper
            ref={sliderRef}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            slidesPerGroup={1}
            // navigation={true}
            breakpoints={{
                330:{
                    slidesPerView:1,
                    spaceBetween:10
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            loop={true}
            loopFillGroupWithBlank={false}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
            }}
            pagination={{
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">'  + "</span>";
                }
            }}
            modules={[Autoplay,EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
            >
            {
                products?.slice(3,8).map((item) => (
                    <SwiperSlide key={item._id}>
                        {/* {console.log(item,'item')} */}
                        <DisplayProduct {...item}/>
                    </SwiperSlide>
                ))
            }

        </Swiper>
        <Box
            zIndex='1'
            boxShadow='#046a5a 0px 20px 20px -12px inset, #046a5a 0px 30px 36px -18px inset'
            h='150px'
            w='80px'
            bg='#01816d'
            borderRadius='150px 0 0 150px'
        >
            <Image src={Right} className='right' onClick={() => handleNext()}/>
        </Box>
    </Flex>
  )
}

export default ExploreSwiper

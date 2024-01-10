import React, { useEffect } from 'react';
import mainGridImg from 'assist/img/supportGrid.png';
import mainGridImg2 from 'assist/img/test.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation,Pagination   } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'assist/css/customSwiper.css';

const MainGrid = (props) => {

  return (

    <div className="w-full h-screen flex items-center justify-center">
      <Swiper navigation={true} modules={[Navigation, Autoplay,Pagination]} loop={true} pagination={{ clickable: true, style: { backgroundColor: '#ff0000' } }} autoplay={{ delay: 2000, disableOnInteraction: false }}  className="mySwiper text-white h-5/6 w-3/4">
      <SwiperSlide className="flex items-center justify-center ">
        <img src={mainGridImg2} className="w-full h-full object-contain" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center ">
        <img src={mainGridImg} className="w-full h-full object-contain" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center ">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          Slide 4
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default MainGrid;

import React, { useEffect } from 'react';
import mainGridImg from 'assist/img/supportGrid.png';
import mainGridImg1 from 'assist/img/maingrid1.png';
import mainGridImg2 from 'assist/img/maingrid2.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation,Pagination   } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'assist/css/customSwiper.css';

const MainGrid = (props) => {

  return (

    <div className="w-full h-screen flex items-center justify-center font-semibold font-NanumSquare">
      <Swiper navigation={true} modules={[Navigation, Autoplay,Pagination]} loop={true} pagination={{ clickable: true, style: { backgroundColor: '#ff0000' } }} autoplay={{ delay: 2000, disableOnInteraction: false }}  className="mySwiper text-white h-5/6 w-3/4">
      <SwiperSlide className="flex items-center justify-center ">
        일정 관리
        <img src={mainGridImg1} className="w-full h-full object-contain" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center ">
        사이트 관리
        <img src={mainGridImg2} className="w-full h-full object-contain" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center ">
        보고서 관리
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
        이력 관리
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default MainGrid;

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import caveira from "../assets/caveira.png"
import coracao from "../assets/coracao.png"
import meditar from "../assets/meditacao.png"
import espada from "../assets/espada.png"
import biblia from "../assets/biblia.png"
import unicornio from "../assets/unicornio.png"

// import required modules
import { FreeMode, Pagination } from "swiper";

export default function App() {
  return (
    <div className="w-[100%] flex items-center justify-center">
      <Swiper className="hidden lg:flex pt-5 w-[75%] h-[20vh] items-center justify-center"
        slidesPerView={5}
        spaceBetween={12}
        width={12}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        
      >
        <div className="flex items-center justify-center">
          <SwiperSlide className=" rounded-full bg-black h-[13vh] w-[120px]  md:space-x-48 flex items-center justify-center flex-col m-0">
            <img src={caveira} alt=""/>
          <h1 className="text-[12px] text-white m-0">TERROR</h1>
          </SwiperSlide>
        </div>
        <SwiperSlide className="rounded-full bg-[#D3004C] h-[13vh] w-[120px] flex items-center justify-center"><img src={coracao} alt="" /></SwiperSlide>
        <SwiperSlide className="rounded-full bg-[#FFE68C] h-[13vh] w-[120px] flex items-center justify-center"><img className="w-[20vw]" src={meditar} alt="" /></SwiperSlide>
        <SwiperSlide className="rounded-full bg-[#69AEDF] h-[13vh] w-[120px] flex items-center justify-center"><img className="w-[20vw]" src={biblia} alt="" /></SwiperSlide>
        <SwiperSlide className="rounded-full bg-[#00CC6A] h-[13vh] w-[120px] flex items-center justify-center"><img className="w-[20vw]" src={espada} alt="" /></SwiperSlide>
        <SwiperSlide className="rounded-full bg-[#E167FF] h-[13vh] w-[120px] flex items-center justify-center"><img src={unicornio} alt="" /></SwiperSlide>
        <SwiperSlide className="rounded-full bg-[#D3004C] h-[13vh] w-[120px] flex items-center justify-center"><img src={coracao} alt="" /></SwiperSlide>
        <SwiperSlide className="rounded-full bg-[#FFE68C] h-[13vh] w-[120px] flex items-center justify-center"><img className="w-[20vw]" src={meditar} alt="" /></SwiperSlide>
        <SwiperSlide className="rounded-full bg-[#69AEDF] h-[13vh] w-[120px] flex items-center justify-center"><img className="w-[20vw]" src={biblia} alt="" /></SwiperSlide>
        <SwiperSlide className="rounded-full bg-[#00CC6A] h-[13vh] w-[120px] flex items-center justify-center"><img className="w-[20vw]" src={espada} alt="" /></SwiperSlide>
        <SwiperSlide className="rounded-full bg-[#E167FF] h-[13vh] w-[120px] flex items-center justify-center"><img src={unicornio} alt="" /></SwiperSlide>
      </Swiper>
     
      <Swiper className="flex lg:hidden pt-5 h-[20vh] items-center justify-center"
        slidesPerView={4}
        spaceBetween={8}
        width={5}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        
      >
        <div className="flex items-center justify-center">
          <SwiperSlide className=" rounded-full bg-black h-[13vh] w-[120px] flex items-center justify-center flex-col m-0">
            <img src={caveira} alt=""/>
          <h1 className="text-[12px] text-white m-0">TERROR</h1>
          </SwiperSlide>
        </div>
        <SwiperSlide className="rounded-full bg-[#D3004C] h-[13vh] w-[120px] flex items-center justify-center"><img src={coracao} alt="" /></SwiperSlide>
        <SwiperSlide className="rounded-full bg-[#FFE68C] h-[13vh] w-[120px] flex items-center justify-center"><img className="w-[20vw]" src={meditar} alt="" /></SwiperSlide>
        <SwiperSlide className="rounded-full bg-[#69AEDF] h-[13vh] w-[120px] flex items-center justify-center"><img className="w-[20vw]" src={biblia} alt="" /></SwiperSlide>
        <SwiperSlide className="rounded-full bg-[#00CC6A] h-[13vh] w-[120px] flex items-center justify-center"><img className="w-[20vw]" src={espada} alt="" /></SwiperSlide>
        <SwiperSlide className="rounded-full bg-[#E167FF] h-[13vh] w-[120px] flex items-center justify-center"><img src={unicornio} alt="" /></SwiperSlide>
      </Swiper>
    </div>
    
  );
}

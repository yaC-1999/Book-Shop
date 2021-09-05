import React, { useRef, useState , StrictMode} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"

import "../../asset/css/productDetail/galleryPic.css"
import ProductData from '../../asset/api/productData.json'


// import Swiper core and required modules
import SwiperCore, {
  Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation]);



function GallaryPicturs() {
  var temp = window.location.pathname;
  temp = parseInt(temp.match(/\d/g).join(''), 10) - 1;


  return (
    <StrictMode className="gallery">
      <Swiper navigation={true} className="gallery" loop={true}>
        <SwiperSlide><img src={ProductData[temp].gallery[0]} /></SwiperSlide>
        <SwiperSlide><img src={ProductData[temp].gallery[1]} /></SwiperSlide>
      </Swiper>
    </StrictMode>

  )
}

export default GallaryPicturs;

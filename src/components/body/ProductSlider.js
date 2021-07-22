
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import AddIcon from '@material-ui/icons/Add';
import ProductData from './productData.json';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "./ProductSlider.css";


// import Swiper core and required modules
import SwiperCore, {
    Pagination, Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);


export default function ProductSlider() {



    // const [swiperRef, setSwiperRef] = useState(null);


    const slider = ProductData.map(({ imageURL, name, price, currency }) => {
        return (
            <SwiperSlide>
                <a href="">
                    <div className="product-card">
                        <img src={imageURL} className="image-card" />
                        <div>
                            <h3>{name}</h3>
                            <span>{price}</span>
                            <span>{currency}</span>
                            
                        </div>
                    </div>
                </a>
            </SwiperSlide>
        )
    });
    return (
        <>
            <div className="titel">
                <h2>پر فروش ها</h2>
            </div>
            <Swiper slidesPerView={3} spaceBetween={30} slidesPerGroup={1} loop={false} loopFillGroupWithBlank={true} pagination={{
                "clickable": true
            }} navigation={true} className="mySwiper">
                {slider}
                <SwiperSlide>
                    <button className="add-icon">
                        <AddIcon style={{ fontSize: 100 }} />
                    </button>
                </SwiperSlide>

            </Swiper>
        </>
    )
}






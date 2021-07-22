
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import AddIcon from '@material-ui/icons/Add';
import ProductData from '../../asset/api/productData.json';
import '../../asset/css/home/ProductSlider.css';
import { BrowserRouter as Router, Link } from "react-router-dom";
// import Card from 'src/pages/Card.js';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"




// import Swiper core and required modules
import SwiperCore, {
    Pagination, Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);


export default function ProductSlider() {



    // const [swiperRef, setSwiperRef] = useState(null);


    const slider = ProductData.map(({ id, imageURL, name, price, currency }) => {

        return (

            <SwiperSlide>
                <Router>
                    <Link to={`/product/${id}`}>
                        <div className="product-card">
                            <img src={imageURL} className="image-card" />
                            <div>
                                <h3>{name}</h3>
                                <span>{price}</span>
                                <span>{currency}</span>

                            </div>
                        </div>
                        {/* <Route path="/product/:id">
                            <JustOneProduct/>
                        </Route> */}
                    </Link>
                </Router>
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
                    <Router>
                        <Link to={`/productList`}>
                        <button className="add-icon">
                        <AddIcon style={{ fontSize: 100 }} />
                    </button>
                        </Link>
                    </Router>
                    
                </SwiperSlide>

            </Swiper>
        </>
    )
}






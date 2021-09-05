
import react from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import AddIcon from '@material-ui/icons/Add';
import ProductData from '../../asset/api/productData.json';
import '../../asset/css/home/ProductSlider.css';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';






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

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function ProductSlider() {



    // const [swiperRef, setSwiperRef] = useState(null);


    const slider = ProductData.map(({ id, gallery, name, price, currency, discount }) => {

        return (

            <SwiperSlide>

                <Link to={`/product/${id}`}>
                    <div className="product-card">
                        <img src={gallery[0]} className="image-card" />
                        <div>
                            <h3>{name}</h3>
                            <div style={{ textDecoration: 'line-through gray' }}>
                                <span style={{ color: 'gray' }}>{price}تومان</span>

                            </div>
                            <span>{discount}تومان</span>

                        </div>
                    </div>
                </Link>

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
            }} navigation={true} className="product">
                {slider}
                <SwiperSlide>

                    <Link to={`/productList`}>
                        <button className="add-icon">
                            <AddIcon style={{ fontSize: 100 }} />
                        </button>
                    </Link>


                </SwiperSlide>

            </Swiper>
        </>
    )
}






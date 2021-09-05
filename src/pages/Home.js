import React, { StrictMode } from 'react'
import ImageSlider from '../components/home/ImageSlider'
import ProductSlider from '../components/home/ProductSlider'

function Home() {
    return (
        <div>
            <ImageSlider />
            <StrictMode>
                <ProductSlider />
            </StrictMode>
        </div>
    )
}

export default Home;

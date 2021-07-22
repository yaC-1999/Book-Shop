import React, { StrictMode } from 'react';
import Header from '../layout/Header';
import ImageSlider from './home/ImageSlider.js'
import ProductSlider from './home/ProductSlider';
import Footer from '../layout/Footer';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />

                <ImageSlider />

                <StrictMode>
                    <ProductSlider />
                </StrictMode>

                <Footer />
            </div>

        )
    }
};


export default App;
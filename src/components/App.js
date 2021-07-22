import React, { StrictMode } from 'react';
import Header from './header/Header';
import ImageSlider from './body/ImageSlider';
import ProductSlider from './body/ProductSlider';
import Footer from './footer/Footer';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />

                <ImageSlider />

                <StrictMode>
                    <ProductSlider />
                </StrictMode>

                <Footer/>
            </div>

        )
    }
};


export default App;
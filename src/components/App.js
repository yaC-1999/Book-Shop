import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Routes from './Routes';
import { Router } from 'workbox-routing';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />

               <Routes/>

                <Footer />
            </div>

        )
    }
};


export default App;
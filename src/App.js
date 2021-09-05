import React from 'react';
import Header from './layout/Header'
import Footer from './layout/Footer';
import Routes from './Routes';
import { BrowserRouter as Router } from "react-router-dom";



class App extends React.Component {
    render() {
        return (
            <div>
                <Router >
                    <Header />
                    <Routes />
                    <Footer />
                </Router>
            </div>
            // </CssBase>

        )
    }
};


export default App;
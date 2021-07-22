import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import ProductList from "../pages/ProductList";


export default class Routes extends Component {
    render() {
        return (
            <Router >
                <Switch >
                    <Route path="/" exact={true} component={Home} />
                    <Route path="/product/:id" component={ProductDetails}/> 
                    <Route path="/productList" component={ProductList}/>
                    {/* <Route path="/About" component={About} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/Products" component={Products} /> */}
                </Switch>
            </Router>
        )
    }
}
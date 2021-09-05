import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductCart from "./pages/ProductCart";
import ProductDetails from "./pages/ProductDetails";
import ProductList from "./pages/ProductList";
import ProductCartTable from "./components/productCart/productCartTable";



export default class Routes extends Component {
    render() {
        return (

            <Switch >
                <Route path="/" exact={true} component={Home} />
                <Route path="/product/:id" component={ProductDetails} />
                <Route path="/productList" exact component={ProductList} />
                <Route path="/myCart" component={ProductCart} />
            </Switch>

        )
    }
}
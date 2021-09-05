import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductData from '../../asset/api/productData.json';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

function CenterGrid() {

    const { id } = useParams();
    const [currentProduct, setCurrentProduct] = useState(null);

    useEffect(() => {
        const product = ProductData.find(p => p.id.toString() === id);
        setCurrentProduct(product);

    }, [id]);



    function getvalue() {
        var products = JSON.parse(localStorage.getItem('products')) || [];
        const temp = products.findIndex(prod => prod.id.toString() === id);
        if (temp !== -1) {
            products[temp].qty += 1;

        } else {
            const tempProduct = ProductData.find(p => p.id.toString() === id);
            
            const newProduct = { ...tempProduct, qty: 1, gallery: tempProduct.gallery[0] }

            products.push(newProduct);
        }

        localStorage.setItem('products', JSON.stringify(products));

    }

    return (
        <div style={{ fontFamily: 'Samim' }}>
            <h1 style={{ textAlign: 'center', fontFamily: 'Samim' }}>
                {currentProduct?.name}

            </h1>
            <h3 style={{ fontFamily: 'Samim' }}> نویسنده: {currentProduct?.specification.writer}</h3>
            <h3 style={{ fontFamily: 'Samim' }}> ترجم: {currentProduct?.specification.translator}</h3>
            <br />
            <br />
            <div >
                <h4 style={{ textDecoration: 'line-through', color: 'gray', marginBottom: '0', fontFamily: 'Samim' }}>{currentProduct?.price}</h4>
                <h2 style={{ color: 'red', marginTop: '0', fontFamily: 'Samim' }}>{currentProduct?.price - (currentProduct?.price * 20) / 100} تومان</h2>
            </div>
            <br />
            <br />
            <div>
            </div>
            <div style={{ width: '80%', textAlign: 'center', fontFamily: 'Samim' }}>

                <Button variant="contained" onClick={getvalue} color="secondary" style={{ width: '80%', height: '50px' }}>
                    <AddShoppingCartIcon />
                    &nbsp;
                    افزودن به سبد خرید
                </Button>

            </div>

        </div>
    )
}

export default CenterGrid;

import React from 'react';
import '../asset/css/header/header.css'
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Header = () => {
    return (
        <div >
            <div className="full">
                <div className="logo">
                    <i aria-hidden="true" className="book big circular inverted icon  red"></i>
                    <span> بوکا</span>
                </div>
                <form className="example searchButton" action="action_page.php">
                    <div className="search">
                        <input className="text" placeholder=" جستجو..." name="search" />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </div>
                </form>
                <div className="shopAndLogIn">
                    <PersonIcon style={{ fontSize: 40 }} />
                    <h1>|</h1>
                    <ShoppingCartIcon style={{ fontSize: 40 }} />

                </div>
            </div>
         
        </div>
    )
}

export default Header;





import React from 'react';
import '../asset/css/header/header.css'
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

const Header = () => {
    return (
        <div >
            <div className="full">
                <div className="logo">
                    <i aria-hidden="true" className="book big circular inverted icon  red"></i>
                    <span> بوکا</span>
                </div>
                <form className="example searchButton" >
                    <div className="search">
                        <input className="text" placeholder=" جستجو..." name="search" />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </div>
                </form>
                <div className="shopAndLogIn">

                    <Button>
                        <PersonIcon style={{ fontSize: 40, color: 'rgb(196, 0, 0' }} />
                    </Button>

                    {/* <PersonIcon style={{ fontSize: 40 }} /> */}

                    <Link to='/myCart'>
                        <Button>
                            <ShoppingCartIcon style={{ fontSize: 40, color: 'rgb(196, 0, 0' }} />
                        </Button>
                    </Link>



                </div>
            </div>

        </div>
    )
}

export default Header;





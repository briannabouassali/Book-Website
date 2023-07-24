import React from 'react';
import "../App";
import {Link} from 'react-router-dom';
import logoImg from "../images/logo.png"; 


const Navbar = () => {
    return(
        <div className="navbar">
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logoImg} alt="Site logo" style={{ width: '70px',height:'60px', marginRight: '10px',}} /> 
            <h1>Read With Us</h1>
            </div>
            <div>
                <Link to="/home">
                <h3>Home</h3>
                </Link>
            </div>
            <div>
                <Link to="/favorites">
                <h3>Your Favorites</h3>
                </Link>
            </div>

        </div>
    );
};

export default Navbar;

//                    <img src = {logoImg} alt = "site logo" />

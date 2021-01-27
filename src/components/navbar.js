import React from 'react';
import '../CSS/navbar.css';

// File Imports
import my_logo from '../images/anjali.png';

const Navbar = () => {
    return (
        <navbar className = "navbar">
            <div className = "container">
                <div className = "navbar__container">
                    <ul className = "navbar__left">
                        <div className = "navbar__left-logo">
                            <img src= {my_logo} alt="logo" />
                        </div>
                    </ul>
                    <ul className = "navbar__right">
                        <li> <a href = "" >Home</a></li>
                        <li> <a href = "" >About</a></li>
                        <li> <a href = "" >Skills</a></li>
                        <li> <a href = "" >Projects</a></li>
                        <li> <a href = "" >Blog</a></li>
                        <li> <a href = "" >Contact</a></li>
                    </ul>

                    <div className = "space"></div>
                </div>
            </div>
        </navbar>
    )
}

export default Navbar
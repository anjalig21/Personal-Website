import React from 'react';
import {FaGithub, FaLinkedin, FaLightbulb, FaBlog} from "react-icons/fa";
import {BsFillPersonFill} from "react-icons/bs"

// File Imports
import my_photo from '../images/me.png';


const Banner = () => {
    const [state] = React.useState({title: "Anjali Gupta", text1:"Hello! \
    My name is,", text2: "And I love to code!"})
    return (
        <header className = "header">
            <div className = "container">
                <div className = "row">
                    <div className="col-1">
                        <div className="header__content">
                            <div className="header__section">
                                <ul className="header__ul">
                                    <li>
                                        <FaGithub />
                                    </li>
                                    <li>
                                        <FaLinkedin />
                                    </li>
                                    <li>
                                        <BsFillPersonFill />
                                    </li>
                                    <li>
                                        <FaLightbulb />
                                    </li>
                                    <li>
                                        <FaBlog />
                                    </li>
                                </ul>
                                <p className = "para1"> {state.text1} </p>
                                <h1 className = "head1"> {state.title} </h1>
                                <p className = "para2"> {state.text2} </p>
                                <div className = "header__buttons">
                                    <a href = "" className = "btn btn-portfolio"> 
                                        My Portfolio 
                                    </a> 
                                    &nbsp;&nbsp;&nbsp;
                                    <a href = "" className = "btn btn-contact">
                                        Contact Me
                                    </a> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "col-1">
                        <div className = "banner__img">
                            <img src = {my_photo} alt = "photo of me" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Banner

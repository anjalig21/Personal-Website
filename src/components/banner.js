import React from 'react';
import '../CSS/banner.css';
import { FaGithub, FaLinkedin, FaLightbulb, FaBlog } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs"
import Typewriter from 'typewriter-effect';

// File Imports
import my_photo from '../images/me.png';

const Banner = () => {
    const [state] = React.useState({
        title: "Anjali Gupta", text1: "Hello! My name is,", text2: "And I am a"})

    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-1">
                        <div className="header__content">
                            <div className="header__section">
                                <ul className="header__ul">
                                    <li className = "Button">
                                        <FaGithub />
                                    </li>
                                    <li className = "Button">
                                        <FaLinkedin />
                                    </li>
                                    <li className = "Button">
                                        <BsFillPersonFill />
                                    </li>
                                    <li className = "Button">
                                        <FaLightbulb />
                                    </li>
                                    <li className = "Button">
                                        <FaBlog />
                                    </li>
                                </ul>
                                <p className="para1"> {state.text1} </p>
                                <h1 className="head1"> {state.title} </h1>
                                <div className="information">
                                    <p className="para2"> {state.text2}&nbsp;</p>
                                    <div className="typewriter">
                                        <Typewriter
                                            options={{
                                                strings: ['Developer', 'Technology Enthusiast', 'Designer'],
                                                autoStart: true,
                                                loop: true,
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="header__buttons">
                                    <a href="" className="btn btn-portfolio">
                                        My Portfolio
                                    </a>
                                    &nbsp;&nbsp;&nbsp;
                                    <a href="" className="btn btn-contact">
                                        Contact Me
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="banner__img">
                            <img src={my_photo} alt="photo of me" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Banner

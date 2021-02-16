import React from 'react';
import '../CSS/banner.css';
import { FaGithub, FaLinkedin, FaLightbulb, FaBlog } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs"
import Typewriter from 'typewriter-effect';

// File Imports
import my_photo from '../images/me.png';
import { Grid } from '@material-ui/core';

const Banner = () => {
    const [state] = React.useState({
        title: "Anjali Gupta", text1: "Hello! My name is,", text2: "And I am a"
    })

    return (
        <Grid container className="header">
            <Grid item xs={1}></Grid>
            <Grid item xs={12} sm={5}>
                <br />
                <div className="header__content">
                    <div className="header__section">
                    <br></br>
                        <ul className="header__ul">
                            <li className="Button">
                                <FaGithub />
                            </li>
                            <li className="Button">
                                <FaLinkedin />
                            </li>
                            <li className="Button">
                                <BsFillPersonFill />
                            </li>
                            <li className="Button">
                                <FaLightbulb />
                            </li>
                            <li className="Button">
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
            </Grid>
            <Grid item xs={0} sm={6}>
                <br /><br /><br /><br /><br /><br />
                <div className="banner__img">
                    <img src={my_photo} alt="photo of me" />
                </div>
            </Grid>
        </Grid>
    )
}

export default Banner

import React from 'react';
import '../CSS/banner.css';
import { FaGithub, FaLinkedin, FaLightbulb, FaBlog } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs"
import Typewriter from 'typewriter-effect';

// File Imports
import my_photo from '../images/me.png';
import { Grid, useMediaQuery } from '@material-ui/core';

const Banner = () => {
    const [state] = React.useState({
        title: "Anjali Gupta", text1: "Hello! My name is,", text2: "And I am a"
    })

    const desktop = useMediaQuery('(min-width: 960px)');

    return (
        <Grid id="home" container className="header">
            <Grid item xs={1}></Grid>
            <Grid item xs={11} sm={5}>
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
                                        strings: ['Developer', 'Leader', 'Designer'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </div>
                        </div>
                        <div className="header__buttons">
                            <a href="" className="btn">
                                My Portfolio
                                    </a>
                                    &nbsp;&nbsp;&nbsp;
                                    <a href="" className="btn">
                                Contact Me
                                    </a>
                        </div>
                    </div>
                </div>
            </Grid>
            {desktop && <>
                <Grid item sm={6}>
                    <br /><br /><br /><br /><br /><br />
                        <img className="banner__img" src={my_photo} alt="photo of me" />
                </Grid>
            </>}
        </Grid>
    )
}

export default Banner

import React from 'react';
import '../CSS/banner.css';
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll';
import Resume from '../images/resume.pdf'

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
            <Grid item xs={11} md={5}>
                <br />
                <div className="header__content">
                    <div className="header__section">
                        <br></br>
                        <ul className="header__ul">
                            <li>
                                <a smooth={true} duration={1000} className="Button" rel="noreferrer" href="https://github.com/anjalig21" target="_blank">
                                    <FaGithub />
                                </a>
                            </li>
                            <li>
                                <a smooth={true} duration={1000} className="Button" rel="noreferrer" href="https://www.linkedin.com/in/anjali-gupta21/" target="_blank">
                                    <FaLinkedin />
                                </a>
                            </li>
                            <li>
                                <a smooth={true} duration={1000} className="Button" rel="noreferrer" href="https://www.youtube.com/channel/UC4D7JjZ4xrp-OWjl3h05Q6A" target="_blank">
                                    <FaYoutube />
                                </a>
                            </li>
                            <li>
                                <a smooth={true} duration={1000} className="Button" rel="noreferrer" href={Resume} target="_blank">
                                    <IoDocumentText />
                                </a>
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
                            <Link offset={-58} smooth={true} duration={1000} className="btn" to="portfolio">My Portfolio</Link>
                                    &nbsp;&nbsp;&nbsp;
                            <Link offset={-62} smooth={true} duration={1000} className="btn" to="contact">Contact Me</Link>
                        </div>
                    </div>
                </div>
            </Grid>
            {desktop && <>
                <Grid item sm={6}>
                    <br /><br /><br /><br /><br /><br />
                    <img className="banner__img" src={my_photo} alt="anjali gupta" />
                </Grid>
            </>}
        </Grid>
    )
}

export default Banner

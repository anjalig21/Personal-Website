import React from 'react';
import '../CSS/about.css';
import { Grid } from '@material-ui/core';
import photoMe from '../images/me_again.png';

const About = () => {
    return (
        <Grid className="about" container>
            <Grid item xs={12}>
                &nbsp;
                <h1 className="mainHeaderProjectsAbout">About Me</h1>
                <p className="mainContentProjectsAbout">- Get To Know Me! -</p>
                &nbsp;
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
                <img className="photoMe"
                    src={photoMe} />
            </Grid>
            <Grid item xs={5}>
                <br></br>
                <span className="textAboutMe1"> I'm Anjali Gupta and I am a </span>
                <span className="textAboutMe2">web & software developer.</span>
                <p className="detailsAboutMe"> I am a first year Computer Science student at the University of Waterloo. 
                Currently, I am working on several projects which include programming an A.I. Simulator for Flappy Bird
                and building e-commerce websites for various businesses. These projects showcase my love of coding and
                design. Previously, I have worked on various web development projects and
                tutored many kids on computer science and math. Some on my hobbies are playing sports,
                Graphic Designing and exploring various AI and ML algorithms. I also help out in the community
                by volunteering and knitting blankets for animal shelters! Currently, I am seeking
                internships for Fall 2021.
                </p>
                <div className = "format"></div>
                <a href="" className="btn-resume">
                    Resume
                </a>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={12}>
                <br></br>
                <br></br>
                <br></br>
            </Grid>
        </Grid>
    )
}

export default About;
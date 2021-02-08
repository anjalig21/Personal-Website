import React from 'react';
import '../CSS/about.css';
import { Grid } from '@material-ui/core';
import photoMe from '../images/me_again.png';

const About = () => {
    return (
        <Grid className="about" container direction={'row'}>
            <Grid item xs={12}>
                &nbsp;
                <h1 className="mainHeaderProjects">About Me</h1>
                <p className="mainContentProjects">- Get To Know Me! -</p>
                <div className="commonBorderProjects"></div>
                &nbsp;
            </Grid>
            <Grid item xs={5}>
                    <img className="photoMe" src={photoMe}/>
            </Grid>
        </Grid>
    )
}

export default About;
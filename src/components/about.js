import React from 'react';
import '../CSS/about.css';
import { Grid } from '@material-ui/core';
import ImageContentHover from 'react-image-hover';
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
            <Grid className="photoMe" item xs={5}>
                <ImageContentHover
                    tileWidth="350px"
                    tileHeight="350px"
                    image={photoMe}
                    content={{
                        title: 'Image Title',
                        body: 'Image content viewer'
                    }}
                    effect="fadeIn" />
            </Grid>
        </Grid>
    )
}

export default About;
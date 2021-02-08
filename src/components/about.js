import React from 'react';
import '../CSS/about.css';
import { Grid} from '@material-ui/core';

const About = () => {
    return (
        <Grid className="about" container direction={'row'} spacing={1}>
            <Grid item xs={12}>
                &nbsp;
                <h1 className="mainHeaderProjects">About Me</h1>
                <p className="mainContentProjects">- Get To Know Me! -</p>
                <div className="commonBorderProjects"></div>
                &nbsp;
            </Grid>
        </Grid>
    )
}

export default About;
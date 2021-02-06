import React from 'react'
import { Grid } from '@material-ui/core';
import { useStyles } from './styles.js'
import '../CSS/projects.css';

const Projects = () => {
    const classes = useStyles();
    return (
        <Grid className="projects" container direction={'row'} spacing={1}>
            <Grid item xs={12}>
                &nbsp;
                <h1 className="mainHeaderProjects">My Projects</h1>
                <p className="mainContentProjects">- Featured Projects -</p>
                <div className="commonBorderProjects"></div>
                    &nbsp;
                </Grid>
        </Grid>
    )
}

export default Projects;

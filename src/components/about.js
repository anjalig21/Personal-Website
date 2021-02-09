import React from 'react';
import '../CSS/about.css';
import { Grid } from '@material-ui/core';
import photoMe from '../images/me_again.png';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles.js'

const About = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <Grid className="about" container direction={'row'}>
            <Grid item xs={12}>
                &nbsp;
                <h1 className="mainHeaderProjectsAbout">About Me</h1>
                <p className="mainContentProjectsAbout">- Get To Know Me! -</p>
                <div className="commonBorderProjectsAbout"></div>
                &nbsp;
            </Grid>
            <Grid item xs={5}>
                <img className="photoMe"
                    aria-owns={open ? 'mouse-over-popover' : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                    src={photoMe} />
                <Popover
                    id="mouse-over-popover"
                    className={classes.popover}
                    classes={{
                        paper: classes.paper,
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                >
                    <Typography>Hey there! Check out my resume below!</Typography>
                </Popover>
            </Grid>
            <Grid item xs={6}>
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
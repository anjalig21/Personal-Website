import React from 'react';
import '../CSS/about.css';
import { Grid } from '@material-ui/core';
import photoMe from '../images/me_again.png';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import {useStyles} from './styles.js'

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
                <h1 className="mainHeaderProjects">About Me</h1>
                <p className="mainContentProjects">- Get To Know Me! -</p>
                <div className="commonBorderProjects"></div>
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
        </Grid>
    )
}

export default About;
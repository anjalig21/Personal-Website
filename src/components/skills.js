import React from 'react';
import { Grid, Typography, Card, CardContent } from '@material-ui/core';
import '../CSS/skills.css';
import { GoGear } from 'react-icons/go';
import { FaDatabase } from 'react-icons/fa';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
import SkillBar from 'react-skillbars';
import { useMediaQuery } from '@material-ui/core';
import { useStyles, skills, colors } from './styles.js'

const Skillsgrid = () => {
    const classes = useStyles();

    const mobile = useMediaQuery('(max-width: 960px)');
    const desktop = useMediaQuery('(min-width: 960px)');

    return (
        <Grid className="mainGrid" container spacing={6}>
            <Grid item xs={12}>
                &nbsp;
                <h1 className="mainHeader">My Skills</h1>
                <p className="mainContent">- Technical & Design -</p>
            </Grid>
            {desktop && <Grid item xs={1}></Grid>}
            <Grid container item xs={12} md={5} spacing={1}>
                {mobile && <Grid item xs={3} md={0}></Grid>}
                <Grid item xs={6} md={6}>
                    <Card variant="outlined" className={classes.container}>
                        <CardContent>
                            <GoGear className={classes.icon} />
                            <Typography className={classes.header} gutterBottom>
                                Technologies
                        </Typography>
                            <Typography className={classes.body}>
                                I am proficient with using TensorFlow, NumPy, Django, Node.js, React.js, and SQLite!
                        </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {mobile && <Grid item xs={3} md={0}></Grid>}
                {mobile && <Grid item xs={3} md={0}></Grid>}
                <Grid item xs={6} md={6}>
                    <Card variant="outlined" className={classes.container}>
                        <CardContent>
                            <FaDatabase className={classes.icon} />
                            <Typography className={classes.header} gutterBottom>
                                Tools
                        </Typography>
                            <Typography className={classes.body}>
                                I am fluent with using VS Code, Socket.io, Material-UI, GitHub, Git, PythonAnywhere and Netlify!
                        </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {mobile && <Grid item xs={3} md={0}></Grid>}
                {mobile && <Grid item xs={12}></Grid>}
                {mobile && <Grid item xs={3} md={0}></Grid>}
                <Grid item xs={6} md={6}>
                    <Card variant="outlined" className={classes.container2}>
                        <CardContent>
                            <AiOutlineAntDesign className={classes.icon} />
                            <Typography className={classes.header} gutterBottom>
                                Design
                        </Typography>
                            <Typography className={classes.body}>
                                I am comfortable with using Photoshop, ProCreate, Apple Pages, and Microsoft Office!
                        </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {mobile && <Grid item xs={3} md={0}></Grid>}
                {mobile && <Grid item xs={3} md={0}></Grid>}
                <Grid item xs={6} md={6}>
                    <Card variant="outlined" className={classes.container2}>
                        <CardContent>
                            <GiSkills className={classes.icon} />
                            <Typography className={classes.header} gutterBottom>
                                Professional
                        </Typography>
                            <Typography className={classes.body}>
                                I am a great public speaker, a fast learner, a critical thinker and a team-player!
                        </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {mobile && <Grid item xs={3} md={0}></Grid>}
            </Grid>
            {mobile && <Grid item xs={1} md={0}></Grid>}
            <Grid item xs={10} md={5}>
                <SkillBar skills={skills} colors={colors} />
            </Grid>
            {mobile && <Grid item xs={1} md={0}></Grid>}
            <Grid item xs={1}></Grid>
            <Grid item xs={12}></Grid>
        </Grid>
    )
}
export default Skillsgrid

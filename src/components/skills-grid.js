import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid, Typography, Card, CardContent} from '@material-ui/core';
import '../CSS/skills.css';
import { GoGear } from 'react-icons/go';
import { FaDatabase } from 'react-icons/fa';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
import SkillBar from 'react-skillbars';

    const skills = [
        { type: "Python", level: 95 },
        { type: "HTML", level: 95 },
        { type: "CSS", level: 90 },
        { type: "Javascript", level: 90 },
        { type: "SQL", level: 85 },
        { type: "C", level: 85 },
        { type: "C++", level: 80 },
        { type: "Racket", level: 80 }
    ];
    const colors = {
        "bar": "#3498db",
        "title": {
            "text": "#fff",
            "background": "#2980b9"
        }
    }

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: "#2573A6",
    },
    header: {
        fontFamily: "Poppins",
        fontSize: "115%",
        color: "white",
        fontWeight: "501"
    },
    body: {
        fontFamily: "Poppins",
        color: "white",
        fontSize: "85%"
    },
    icon: {
        color: "white",
        fontSize: "200%"
    },
    padding: {
        paddingLeft: "5%"
    }
}));

const Skillsgrid = () => {
    const classes = useStyles();
    return (
        <Grid container direction={'row'} spacing={1}>
            <Grid item xs={12}>
                &nbsp;
                <h1 className="mainHeader">My Skills</h1>
                <p className="mainContent">- Technical & Design -</p>
                <div className="commonBorder"></div>
                &nbsp;
            </Grid>
            <div className={classes.padding} />
            <Grid container item xs={6} spacing={1}>
                <Grid item xs={5}>
                    <Card variant="outlined" className={classes.container}>
                        <CardContent>
                            <GoGear className={classes.icon} />
                            <Typography className={classes.header} gutterBottom>
                                Libraries & Frameworks
                        </Typography>
                            <Typography className={classes.body}>
                                I am fluent with using TensorFlow, NumPy, Django, Node.js, React.js, and SQLite!
                        </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={5}>
                    <Card variant="outlined" className={classes.container}>
                        <CardContent>
                            <FaDatabase className={classes.icon} />
                            <Typography className={classes.header} gutterBottom>
                                Tools & Technologies
                        </Typography>
                            <Typography className={classes.body}>
                                I am proficient with using VS Code, Socket.io, Material-UI, GitHub, Git, and Netlify!
                        </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <div className={classes.padding} />
                <Grid item xs={5}>
                    <Card variant="outlined" className={classes.container}>
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
                <Grid item xs={5}>
                    <Card variant="outlined" className={classes.container}>
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
            </Grid>
            <Grid item xs={5}>
                <SkillBar skills={skills} colors={colors} />
            </Grid>
        </Grid>
    )
}
export default Skillsgrid

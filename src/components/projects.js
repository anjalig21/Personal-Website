import React from 'react'
import { Grid, IconButton } from '@material-ui/core';
import '../CSS/projects.css';
import ImgMediaCard from "./carousels.js"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import webcamPainter from "../images/webcam_painter.gif";
import photoBot from "../images/photobot.gif";
import climateBots from "../images/climatebots.gif";
import shapeDetect from "../images/shapes.gif";

const Projects = () => {
    const [state, setState] = React.useState(0);
    var counter = 0;
    const changeStateLeft = (event, newValue) => {
        setState((state - 1) % 3);
    }
    const changeStateRight = (event, newValue) => {
        setState((state + 1) % 3);
    }
    return (
        <Grid className="projects" container direction={'row'} spacing={1}>
            <Grid item xs={12}>
                &nbsp;
                <h1 className="mainHeaderProjects">My Projects</h1>
                <p className="mainContentProjects">- Featured Projects -</p>
                <div className="commonBorderProjects"></div>
                &nbsp;
            </Grid>
            <Grid item container xs={12}>
                <Grid item container xs={1} direction={'column'}>
                    <Grid item xs={5}></Grid>
                    <Grid item xs={2}>
                        <IconButton id="1" onClick={changeStateLeft} className="buttonArrow" color="primary" aria-label="arrow left">
                            <BsChevronLeft />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid item container xs={10} spacing={0}>
                    <Grid item xs={4}>
                        {state == 0 &&
                            <ImgMediaCard
                                demo={climateBots}
                                demoTitle={"Climate Bots"}
                                demoDetails={"Made a web application with Django."}
                            />
                        }
                        {state == 1 &&
                            <ImgMediaCard
                                demo={shapeDetect}
                                demoTitle={"Shape Detection"}
                                demoDetails={"Made with OpenCV."}
                            />
                        }
                        {state == 2 &&
                            <ImgMediaCard
                                demo={webcamPainter}
                                demoTitle={"Webcam Painter"}
                                demoDetails={"Made with OpenCV."}
                            />
                        }
                    </Grid>
                    <Grid item xs={4}>
                        {state == 0 &&
                            <ImgMediaCard
                                demo={photoBot}
                                demoTitle={"Photo Bot"}
                                demoDetails={"Made with Node.js."}
                            />
                        }
                        {state == 1 &&
                            <ImgMediaCard
                                demo={webcamPainter}
                                demoTitle={"Webcam Painter"}
                                demoDetails={"Made with OpenCV."}
                            />
                        }
                        {state == 2 &&
                            <ImgMediaCard
                                demo={webcamPainter}
                                demoTitle={"Webcam Painter"}
                                demoDetails={"Made with OpenCV."}
                            />
                        }
                    </Grid>
                    <Grid item xs={4}>
                        {state == 0 &&
                            <ImgMediaCard
                                demo={webcamPainter}
                                demoTitle={"Webcam Painter"}
                                demoDetails={"Made with OpenCV."}
                            />
                        }
                        {state == 1 &&
                            <ImgMediaCard
                                demo={webcamPainter}
                                demoTitle={"Webcam Painter"}
                                demoDetails={"Made with OpenCV."}
                            />
                        }
                        {state == 2 &&
                            <ImgMediaCard
                                demo={webcamPainter}
                                demoTitle={"Webcam Painter"}
                                demoDetails={"Made with OpenCV."}
                            />
                        }
                    </Grid>
                </Grid>
                <Grid item container xs={1} direction={'column'}>
                    <Grid item xs={5}></Grid>
                    <Grid item xs={2}>
                        <IconButton onClick={changeStateRight} className="buttonArrow" color="primary" aria-label="arrow right">
                            <BsChevronRight />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default Projects;

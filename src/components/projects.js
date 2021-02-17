import React from 'react'
import { Grid, IconButton, Grow, useMediaQuery } from '@material-ui/core';
import '../CSS/projects.css';
import ImgMediaCard from "./carousels.js"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import webcamPainter from "../images/webcam_painter.gif";
import photoBot from "../images/photobot.gif";
import climateBots from "../images/climatebots.gif";
import shapeDetect from "../images/shapes.gif";
import tictactoe from "../images/tic-tac-toe.gif";

const Projects = () => {

    const desktop = useMediaQuery('(min-width: 1200px)');
    const mobile = useMediaQuery('(max-width: 1200px)');

    const [state, setState] = React.useState(0);
    const [grow, setGrow] = React.useState(true);
    const changeStateLeft = (event, newValue) => {
        const negativeChange = (((state - 1) % 3) + 3) % 3;
        setGrow(false);
        setTimeout(() => {
            setState(negativeChange);
            setGrow(true);
        }, 500);
    }
    const changeStateRight = (event, newValue) => {
        setGrow(false);
        setTimeout(() => {
            setState((state + 1) % 3);
            setGrow(true);
        }, 500);
    }
    const changeStateLeft2 = (event, newValue) => {
        const negativeChange = (((state - 1) % 6) + 6) % 6;
        setGrow(false);
        setTimeout(() => {
            setState(negativeChange);
            setGrow(true);
        }, 500);
    }
    const changeStateRight2 = (event, newValue) => {
        setGrow(false);
        setTimeout(() => {
            setState((state + 1) % 6);
            setGrow(true);
        }, 500);
    }
    return (
        <Grid id="portfolio" className="projects" container direction={'row'} spacing={1}>
            <Grid item xs={12}>
                &nbsp;
                <h1 className="mainHeaderProjects">My Projects</h1>
                <p className="mainContentProjects">- Featured Projects -</p>
                &nbsp;
            </Grid>
            <Grid item xs={1}></Grid>
            {desktop && <>
                <Grid item container xs={1} direction={'column'}>
                    <Grid item xs={5}></Grid>
                    <Grid item xs={2}>
                        <IconButton onClick={changeStateLeft} className="buttonArrow" color="primary" aria-label="arrow left">
                            <BsChevronLeft />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid item container xs={8} spacing={0}>
                    <Grow in={grow}>
                        <Grid item xs={4}>
                            {state === 0 &&
                                <ImgMediaCard
                                    demo={tictactoe}
                                    demoTitle={"Tic Tac Toe"}
                                    demoDetails={"An unbeatable tic tac toe game created with the minimax algorithm."}
                                    gitHub={"https://github.com/anjalig21/Unbeatable-Tic-Tac-Toe"}
                                />
                            }
                            {state === 1 &&
                                <ImgMediaCard
                                    demo={shapeDetect}
                                    demoTitle={"Shape Detection"}
                                    demoDetails={"Developed an application that can detect and identify shapes from an image."}
                                    gitHub={"https://github.com/anjalig21/Shape-Detection"}
                                />
                            }
                            {state === 2 &&
                                <ImgMediaCard
                                    demo={webcamPainter}
                                    demoTitle={"Webcam Painter"}
                                    demoDetails={"Made with OpenCV."}
                                    gitHub={"https://github.com/anjalig21/Webcam-Painter"}
                                />
                            }
                        </Grid>
                    </Grow>
                    <Grow in={grow}>
                        <Grid item xs={4}>
                            {state === 0 &&
                                <ImgMediaCard
                                    demo={photoBot}
                                    demoTitle={"Photo Bot"}
                                    demoDetails={"A multi-purpose Discord Bot curated towards gaming communities."}
                                    gitHub={"https://github.com/anjalig21/Photo-Bot"}
                                />
                            }
                            {state === 1 &&
                                <ImgMediaCard
                                    demo={climateBots}
                                    demoTitle={"Climate Bots"}
                                    demoDetails={"A social networking platform for individuals to discuss climate change."}
                                    gitHub={"https://github.com/anjalig21/Climate-Bots"}
                                />
                            }
                            {state === 2 &&
                                <ImgMediaCard
                                    demo={webcamPainter}
                                    demoTitle={"Webcam Painter"}
                                    demoDetails={"Made with OpenCV."}
                                    gitHub={"https://github.com/anjalig21/Webcam-Painter"}
                                />
                            }
                        </Grid>
                    </Grow>
                    <Grow in={grow}>
                        <Grid item xs={4}>
                            {state === 0 &&
                                <ImgMediaCard
                                    demo={webcamPainter}
                                    demoTitle={"Webcam Painter"}
                                    demoDetails={"An application that allows users to draw infront a webcam while they wave certain colour objects."}
                                    gitHub={"https://github.com/anjalig21/Webcam-Painter"}
                                />
                            }
                            {state === 1 &&
                                <ImgMediaCard
                                    demo={webcamPainter}
                                    demoTitle={"Webcam Painter"}
                                    demoDetails={"Made with OpenCV."}
                                    gitHub={"https://github.com/anjalig21/Webcam-Painter"}
                                />
                            }
                            {state === 2 &&
                                <ImgMediaCard
                                    demo={webcamPainter}
                                    demoTitle={"Webcam Painter"}
                                    demoDetails={"Made with OpenCV."}
                                    gitHub={"https://github.com/anjalig21/Webcam-Painter"}
                                />
                            }
                        </Grid>
                    </Grow>
                </Grid>
                <Grid item container xs={1} direction={'column'}>
                    <Grid item xs={5}></Grid>
                    <Grid item xs={2}>
                        <IconButton onClick={changeStateRight} className="buttonArrow" color="primary" aria-label="arrow right">
                            <BsChevronRight />
                        </IconButton>
                    </Grid>
                </Grid>
            </>}

            {mobile && <>
                <Grid item container xs={1} direction={'column'}>
                    <Grid item xs={5}></Grid>
                    <Grid item xs={2}>
                        <IconButton onClick={changeStateLeft2} className="buttonArrow" color="primary" aria-label="arrow left">
                            <BsChevronLeft />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid className = "cardsProjects" item container xs={8} spacing={0}>
                    <Grid item xs={2}></Grid>
                    <Grow in={grow}>
                        <Grid item container xs={8}>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={10}>
                            {state === 0 &&
                                <ImgMediaCard
                                    demo={tictactoe}
                                    demoTitle={"Tic Tac Toe"}
                                    demoDetails={"An unbeatable tic tac toe game created with the minimax algorithm."}
                                    gitHub={"https://github.com/anjalig21/Unbeatable-Tic-Tac-Toe"}
                                />
                            }
                            {state === 1 &&
                                <ImgMediaCard
                                    demo={photoBot}
                                    demoTitle={"Photo Bot"}
                                    demoDetails={"A multi-purpose Discord Bot curated towards gaming communities."}
                                    gitHub={"https://github.com/anjalig21/Photo-Bot"}
                                />
                            }
                            {state === 2 &&
                                <ImgMediaCard
                                    demo={webcamPainter}
                                    demoTitle={"Webcam Painter"}
                                    demoDetails={"An application that allows users to draw infront a webcam while they wave certain colour objects."}
                                    gitHub={"https://github.com/anjalig21/Webcam-Painter"}
                                />
                            }
                            {state === 3 &&
                                <ImgMediaCard
                                    demo={shapeDetect}
                                    demoTitle={"Shape Detection"}
                                    demoDetails={"Developed an application that can detect and identify shapes from an image."}
                                    gitHub={"https://github.com/anjalig21/Shape-Detection"}
                                />
                            }
                            {state === 4 &&
                                <ImgMediaCard
                                    demo={climateBots}
                                    demoTitle={"Climate Bots"}
                                    demoDetails={"A social networking platform for individuals to discuss climate change."}
                                    gitHub={"https://github.com/anjalig21/Climate-Bots"}
                                />
                            }
                            {state === 5 &&
                                <ImgMediaCard
                                    demo={webcamPainter}
                                    demoTitle={"Webcam Painter"}
                                    demoDetails={"An application that allows users to draw infront a webcam while they wave certain colour objects."}
                                    gitHub={"https://github.com/anjalig21/Webcam-Painter"}
                                />
                            }
                            </Grid>
                            <Grid item xs={2}></Grid>
                        </Grid>
                    </Grow>
                    <Grid item xs={2}></Grid>
                </Grid>
                <Grid item container xs={1} direction={'column'}>
                    <Grid item xs={5}></Grid>
                    <Grid item xs={2}>
                        <IconButton onClick={changeStateRight2} className="buttonArrow" color="primary" aria-label="arrow right">
                            <BsChevronRight />
                        </IconButton>
                    </Grid>
                </Grid>
            </>}




            <Grid item xs={12}>
                <br></br>
                <br></br>
                <br></br>
            </Grid>
        </Grid>
    )
}
export default Projects;

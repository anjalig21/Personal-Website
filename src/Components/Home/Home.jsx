// dependancies
import React from 'react'
import { Typography, Grid, IconButton, Button, useMediaQuery, Link } from '@material-ui/core'
import Typewriter from "typewriter-effect"
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import photoMe from "./anj.png";
import Resume from "./resume.pdf";

// file imports
import HomeStyles from './HomeStyles'

const Home = () => {
	// css import
	const classes = HomeStyles();
	const desktop = useMediaQuery('(min-width: 960px)');
	const mobile = useMediaQuery('(min-width: 380px)');

	return (
		<div id="home" className={classes.size}>
			<Grid container xs={12}>
				<Grid item xs={1} />
				<Grid item xs={5}>
					<div className={classes.title}>
						<div>
							<a rel="noreferrer" href="https://github.com/anjalig21" target="_blank">
								<IconButton className={classes.iconButtonBorder} aria-label="github">
									<FaGithub className={classes.iconButton} />
								</IconButton>
							</a>
							<a rel="noreferrer" href="https://www.linkedin.com/in/anjali-gupta21/" target="_blank">
								<IconButton className={classes.iconButtonBorder} aria-label="github">
									<FaLinkedin className={classes.iconButton} />
								</IconButton>
							</a>
							<a rel="noreferrer" href="https://www.youtube.com/channel/UC4D7JjZ4xrp-OWjl3h05Q6A" target="_blank">
								<IconButton className={classes.iconButtonBorder} aria-label="github">
									<FaYoutube className={classes.iconButton} />
								</IconButton>
							</a>
							<a rel="noreferrer" href={Resume} target="_blank">
								<IconButton className={classes.iconButtonBorder} aria-label="github">
									<IoDocumentText className={classes.iconButton} />
								</IconButton>
							</a>
							<br />
							<br />
							<div style={{ paddingBottom: "2%" }} />
							<Typography className={classes.titleText} variant="h3"><b>Hello there! My name is</b></Typography>
							<br />
							<Typography className={classes.titleText} variant="h1">Anjali Gupta</Typography>
							<div className={classes.inline}>
								{mobile && <p style={{ display: "inline-block" }}><b>And I am a</b>&nbsp;</p>}
								{mobile &&
									<div style={{ display: "inline-block" }}>
										<b>
											<Typewriter
												options={{
													strings: ['Developer', 'Leader', 'Designer'],
													autoStart: true,
													loop: true,
												}}
											/>
										</b>
									</div>
								}
								<br />
								<Link style={{textDecoration:"none"}} smooth="true" duration={1000} offset={-30} to="projects">
									<Button className={classes.ovalButton} variant="outlined">Portfolio</Button>
								</Link>
								<Link style={{textDecoration:"none"}} smooth="true" duration={1000} offset={-30} to="contact">
									<Button className={classes.ovalButton} variant="outlined">Contact</Button>
								</Link>
							</div>
						</div>
					</div>
				</Grid>
				<Grid className={classes.photoContainer} item xs={5}>
					{desktop && <img src={photoMe} className={classes.photoMe} alt="anjali gupta" />}
				</Grid>
				<Grid item xs={1} />
			</Grid>
		</div>
	)
}

export default Home;
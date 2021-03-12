// dependancies
import React from 'react'
import { Grid, Typography, Divider, Button, useMediaQuery } from '@material-ui/core'
import profile from "./me_again.png"
import Resume from "../Home/resume.pdf"

// icons
import { FaRegFilePdf } from 'react-icons/fa'

// file imports
import AboutStyles from './AboutStyles'

const About = () => {
	// classes and queries
	const classes = AboutStyles();
	const md = useMediaQuery('(max-width: 960px)');

	return (
		<Grid id="about" container>
			{/* Title */}
			<Grid className={classes.title} item xs={12}>
				<br />
				<Typography variant="h2">About Me</Typography>
				<Typography variant="h4">- Who am I? -</Typography>
				<br /><br />
			</Grid>
			<Grid item xs={1}></Grid>
			{md && <Grid item xs={1}></Grid>}
			<Grid item xs={10} md={5}>
				<div className={classes.picSpacing}>
					<img alt="Display" src={profile} className={classes.profilePic}></img>
				</div>
				<br /><br /><br />
			</Grid>
			{md && <Grid item xs={1}></Grid>}

			{/* Text */}
			<Grid item xs={10} md={5}>
				<br />
				<Typography variant="h6" className={classes.subTitle} display="inline">My name is Anjali Gupta and I am a</Typography>
				<Typography variant="h6" style={{ color: "#175fca" }} className={classes.subTitle} display="inline"> Software Developer</Typography>
				<div style={{ paddingBottom: "2%" }} />
				<Typography variant="body1">
				Currently, I am working on several projects which include programming a Sign-Language Detector
                    and building e-commerce websites for various businesses. These projects showcase my love of coding and
                    design. Previously, I have worked on various web development projects and
                    tutored many kids on computer science and math. Some on my hobbies are playing sports,
                    Graphic Designing and exploring various AI and ML algorithms. I also help out in the community
                    by volunteering and knitting blankets for animal shelters! <b> Currently, I am seeking
                    internships for Fall 2021.</b>
				</Typography>
				<br />
				<Divider />
				<br />

				{/* Buttons */}
				<a rel="noreferrer" target="_blank" href={Resume} className={classes.links}>
					<div>
						<Button variant="contained" size="large" className={classes.button} startIcon={<FaRegFilePdf />}>
							Resume
      					</Button>
					</div>
				</a>
			</Grid>
			{md && <Grid item xs={1}></Grid>}

			{/* Bottom */}
			<Grid item xs={12}>
				<div style={{ paddingBottom: "7%" }} />
			</Grid>
		</Grid>
	)
}

export default About;
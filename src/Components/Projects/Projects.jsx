import React from 'react'
import { Grid, Typography, IconButton, useMediaQuery, Slide } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import ProjectsStyles from './ProjectsStyles'
import ProjectsCard from './ProjectsCard/ProjectsCards'
import { cardContents, firstSectionCards, secondSectionCards, thirdSectionCards, firstSmallSectionCards, secondSmallSectionCards } from './cardContents'

const Projects = () => {
	const classes = ProjectsStyles();

	const lg = useMediaQuery('(min-width: 1280px)');
	const md = useMediaQuery('(max-width: 1279px)');
	const sm = useMediaQuery('(min-width: 870px)');
	const sm2 = useMediaQuery('(min-width: 600px)');
	const xs = useMediaQuery('(max-width: 869px)');

	const [state, setState] = React.useState(0);
	const [slide, setSlide] = React.useState(true);
	const [dir, setDir] = React.useState("right");

	const changeStateLeft = (cards) => {
		let divisor;
		if (cards === 3) {
			divisor = firstSectionCards.length;
		} else if (cards === 2) {
			divisor = firstSmallSectionCards.length;
		} else {
			divisor = cardContents.length
		}
		const negativeChange = (((state - 1) % divisor) + divisor) % divisor;
		setDir("left");
		setSlide(false);
		setTimeout(() => {
			setState(negativeChange);
			setDir("right");
			setSlide(true);
		}, 300);
	}

	const changeStateRight = (cards) => {
		let divisor;
		if (cards === 3) {
			divisor = firstSectionCards.length;
		} else if (cards === 2) {
			divisor = firstSmallSectionCards.length;
		} else {
			divisor = cardContents.length
		}
		setDir("right");
		setSlide(false);
		setTimeout(() => {
			setState((state + 1) % divisor);
			setDir("left");
			setSlide(true);
		}, 300);
	}

	return (
		<Grid id="projects" className={classes.root} container>
			<Grid className={classes.title} item xs={12}>
				<br />
				<Typography variant="h2">My Projects</Typography>
				<Typography variant="h4">- What have I been working on? -</Typography>
			</Grid>

			{sm2 && <Grid item xs={1}></Grid>}

			{lg && <>
				<Grid item xs={1}>
					<div className={classes.align}>
						<IconButton onClick={() => changeStateLeft(3)} aria-label="arrow-left">
							<ArrowBackIcon />
						</IconButton>
					</div>
				</Grid>
				<Grid item container spacing={1} xs={8}>
					<Slide in={slide} direction={dir}>
						<Grid item xs={4}>
							<div className={classes.align}>
								{firstSectionCards.map((firstSectionCard, index) => {
									return (
										state === index &&
										<ProjectsCard
											key={firstSectionCard.title}
											header={firstSectionCard.header}
											title={firstSectionCard.title}
											details={firstSectionCard.details}
											source={firstSectionCard.source}
											website={firstSectionCard.website}
										/>
									);
								})}
							</div>
						</Grid>
					</Slide>
					<Slide in={slide} direction={dir}>
						<Grid item xs={4}>
							<div className={classes.align}>
								{secondSectionCards.map((secondSectionCard, index) => {
									return (
										state === index &&
										<ProjectsCard
											key={secondSectionCard.title}
											header={secondSectionCard.header}
											title={secondSectionCard.title}
											details={secondSectionCard.details}
											source={secondSectionCard.source}
											website={secondSectionCard.website}
										/>
									);
								})}
							</div>
						</Grid>
					</Slide>
					<Slide in={slide} direction={dir}>
						<Grid item xs={4}>
							<div className={classes.align}>
								{thirdSectionCards.map((thirdSectionCard, index) => {
									return (
										state === index &&
										<ProjectsCard
											key={thirdSectionCard.title}
											header={thirdSectionCard.header}
											title={thirdSectionCard.title}
											details={thirdSectionCard.details}
											source={thirdSectionCard.source}
											website={thirdSectionCard.website}
										/>
									);
								})}
							</div>
						</Grid>
					</Slide>
				</Grid>
				<Grid item xs={1}>
					<div className={classes.align}>
						<IconButton onClick={() => changeStateRight(3)} aria-label="arrow-right">
							<ArrowForwardIcon />
						</IconButton>
					</div>
				</Grid>
			</>}

			{md &&
				sm && <>
					<Grid item xs={1}>
						<div className={classes.align}>
							<IconButton onClick={() => changeStateLeft(2)} aria-label="arrow-left">
								<ArrowBackIcon />
							</IconButton>
						</div>
					</Grid>
					<Grid item container spacing={1} xs={8}>
						<Slide in={slide} direction={dir}>
							<Grid item xs={6}>
								<div className={classes.align}>
									{firstSmallSectionCards.map((firstSmallSectionCard, index) => {
										return (
											state === index &&
											<ProjectsCard
												key={firstSmallSectionCard.title}
												header={firstSmallSectionCard.header}
												title={firstSmallSectionCard.title}
												details={firstSmallSectionCard.details}
												source={firstSmallSectionCard.source}
												website={firstSmallSectionCard.website}
											/>
										);
									})}
								</div>
							</Grid>
						</Slide>
						<Slide in={slide} direction={dir}>
							<Grid item xs={6}>
								<div className={classes.align}>
									{secondSmallSectionCards.map((secondSmallSectionCard, index) => {
										return (
											state === index &&
											<ProjectsCard
												key={secondSmallSectionCard.title}
												header={secondSmallSectionCard.header}
												title={secondSmallSectionCard.title}
												details={secondSmallSectionCard.details}
												source={secondSmallSectionCard.source}
												website={secondSmallSectionCard.website}
											/>
										);
									})}
								</div>
							</Grid>
						</Slide>
					</Grid>
					<Grid item xs={1}>
						<div className={classes.align}>
							<IconButton onClick={() => changeStateRight(2)} aria-label="arrow-right">
								<ArrowForwardIcon />
							</IconButton>
						</div>
					</Grid>
				</>}

			{xs && <>
				<Grid item xs={2} sm={1}>
					<div className={classes.align}>
						<IconButton onClick={() => changeStateLeft(1)} aria-label="arrow-left">
							<ArrowBackIcon />
						</IconButton>
					</div>
				</Grid>
				<Grid item xs={8}>
					<Slide in={slide} direction={dir}>
						<div className={classes.align}>
							{cardContents.map((cardContent, index) => {
								return (
									state === index &&
									<ProjectsCard
										key={cardContent.title}
										header={cardContent.header}
										title={cardContent.title}
										details={cardContent.details}
										source={cardContent.source}
										website={cardContent.website}
									/>
								);
							})}
						</div>
					</Slide>
				</Grid>
				<Grid item xs={2} sm={1}>
					<div className={classes.align}>
						<IconButton onClick={() => changeStateRight(1)} aria-label="arrow-right">
							<ArrowForwardIcon />
						</IconButton>
					</div>
				</Grid>
			</>}
		</Grid>
	)
}

export default Projects;
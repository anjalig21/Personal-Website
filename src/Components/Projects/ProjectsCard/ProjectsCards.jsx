import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import ProjectsCardStyles from './ProjectsCardsStyles'

const ProjectsCards = (props) => {
	const { header, title, details, source, website } = props;

	const classes = ProjectsCardStyles()

	const [link, setLink] = React.useState('linkTextBlack')

	const handleHover = (hover) => {
		if (hover) {
			setLink('linkTextWhite');
		} else {
			setLink('linkTextBlack');
		}
	}

	return (
		<Card onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)} className={classes.root}>
			<CardMedia
				component="img"
				alt="Image"
				height="210"
				image={header}
				title="Image"
			/>
			<CardContent>
				<Typography variant="h4">
					<b>{title}</b><br /><br />
				</Typography>
				<Typography variant="body2" component="p">
					{details}<br /><br />
				</Typography>

				<div className={classes.linkContainer}>
					<div className={classes.linkSpacing}>
						{source && <>
							<a rel="noreferrer" target="_blank" href={source} style={{textDecoration: "none"}}>
								<Typography className={classes[link]} display="inline">See Source Code&nbsp;</Typography>
							</a>
						</>}
						{(source && website) && <>
							<Typography style={{ fontSize: "0.85rem" }} display="inline">|&nbsp;</Typography>
						</>}
						{website && <>
							<a rel="noreferrer" target="_blank" href={website} style={{textDecoration: "none"}}>
								<Typography className={classes[link]} display="inline">See Live Website&nbsp;</Typography>
							</a>
						</>}
					</div>
				</div>
			</CardContent>
		</Card>

	);
}

export default ProjectsCards;
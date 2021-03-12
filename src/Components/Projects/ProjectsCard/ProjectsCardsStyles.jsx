import { makeStyles } from '@material-ui/styles';

const ProjectsCardStyles = makeStyles((theme) => ({
	root: {
		width: 300,
		color: "#000000",
		"&:hover": {
			transition: "0.3s",
			backgroundColor: theme.palette.secondary.dark,
			color: "white"
		}
	},
	linkContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	},
	linkSpacing: {
		display: "inline-block",
		textAlign: "center",
	},
	linkTextBlack: {
		transition: "0.3s",
		fontSize: "0.85rem",
		color: "#000000",
		"&:hover": {
			transition: "0.3s",
			color: "#b5befa",
		}
	},
	linkTextWhite: {
		transition: "0.3s",
		fontSize: "0.85rem",
		color: "#ffffff",
		"&:hover": {
			transition: "0.3s",
			color: "#b5befa",
		}
	}
}))

export default ProjectsCardStyles;
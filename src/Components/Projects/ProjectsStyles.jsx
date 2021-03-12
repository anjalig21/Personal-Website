import { makeStyles } from '@material-ui/styles';

const ProjectsStyles = makeStyles((theme) => ({
	root: {
		background: theme.palette.primary.dark
	},
	title: {
		textAlign: "center",
		color: theme.palette.secondary.dark
	},
	align: {
		height: "80vh",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	}
}))

export default ProjectsStyles;
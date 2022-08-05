import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    title: {
		textAlign: "center",
		color: theme.palette.secondary.dark
	},
    background: {
        backgroundColor: "white"
    },
    cards:{
        paddingRight: "2%"
    },
    container: {
        backgroundColor: "#2573A6",
        width: "100%",
        height: "95%",
        backgroundSize: '200%',
        transition: '0.6s',
        backgroundImage: 'linear-gradient(45deg, #2573A6, #2573A6, #0644A3)',
        '&:hover': {
            backgroundPosition: 'right'
        },
    },
    container2: {
        backgroundColor: "#2573A6",
        marginTop: "-3%",
        width: "100%",
        height: "95%",
        backgroundSize: '200%',
        transition: '0.6s',
        backgroundImage: 'linear-gradient(45deg, #2573A6, #2573A6, #0644A3)',
        '&:hover': {
            backgroundPosition: 'right'
        },
    },
    header: {
        fontSize: "115%",
        color: "white",
        fontWeight: "501"
    },
    body: {
        color: "white",
        fontSize: "85%"
    },
    icon: {
        color: "white",
        fontSize: "200%"
    },
}));

export const skills = [
    { type: "Python", level: 95 },
    { type: "C++", level:  95 },
    { type: "JavaScript", level: 90 },
    { type: "TypeScript", level: 90 },
    { type: "Dart", level: 85 },
    { type: "SQL", level: 85 },
    { type: "HTML", level: 80 },
    { type: "CSS", level: 80 }
];

export const colors = {
    "title": {
        "text": "#fff",
        "background": "#2980b9"
    },
    "bar": {
        "hue": 201,
        "saturation": 70,
        "level": {
            "minimum": 50,
            "maximum": 90
        },
    },
};
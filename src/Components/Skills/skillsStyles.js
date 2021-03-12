import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    title: {
		textAlign: "center",
		color: theme.palette.secondary.dark
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
    { type: "Javascript", level: 95 },
    { type: "HTML", level: 95 },
    { type: "CSS", level: 90 },
    { type: "Python", level: 90 },
    { type: "SQL", level: 85 },
    { type: "C", level: 85 },
    { type: "C#", level: 80 },
    { type: "Racket", level: 80 }
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
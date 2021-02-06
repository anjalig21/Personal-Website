import React from 'react';
import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: "#2573A6",
        width: "100%",
        height: "95%",
    },

    container2: {
        backgroundColor: "#2573A6",
        width: "100%",
        height: "95%",
        marginTop: "-1%"
    },

    header: {
        fontFamily: "Poppins",
        fontSize: "115%",
        color: "white",
        fontWeight: "501"
    },
    body: {
        fontFamily: "Poppins",
        color: "white",
        fontSize: "85%"
    },
    icon: {
        color: "white",
        fontSize: "200%"
    },
    padding: {
        paddingLeft: "5%"
    }
}));

export const skills = [
    { type: "Python", level: 95 },
    { type: "HTML", level: 95 },
    { type: "CSS", level: 90 },
    { type: "Javascript", level: 90 },
    { type: "SQL", level: 85 },
    { type: "C", level: 85 },
    { type: "C++", level: 80 },
    { type: "Racket", level: 80 }
];

export const colors = {
    "bar": "#3498db",
    "title": {
        "text": "#fff",
        "background": "#2980b9"
    }
}
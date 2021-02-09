import React from 'react'
import "../CSS/contact.css"
import { Grid } from '@material-ui/core';

const Contact = () => {
    return (
        <Grid className="contact" container direction={'row'}>
            <Grid item xs={12}>
                &nbsp;
            <h1 className="mainHeaderProjectsContact">Contact Me</h1>
                <p className="mainContentProjectsContact">- Let's Connect! -</p>
                &nbsp;
            </Grid>
        </Grid>
    )
}

export default Contact

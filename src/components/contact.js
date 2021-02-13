import React from 'react'
import "../CSS/contact.css"
import { Grid } from '@material-ui/core';
import { db } from "../firebase/firebaseConfig";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillFileWord } from "react-icons/ai";

const Contact = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    const submitHander = (e) => {
        e.preventDefault();
        db.collection('contacts').add({
            name: name,
            email: email,
            message: message
        })
            .then(() => {
                alert('Message has been submitted');
            })
            .catch((err) => {
                alert(err.message);
            });

        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <Grid className="contact" container direction={'row'}>
            <Grid item xs={12}>
                &nbsp;
            <h1 className="mainHeaderProjectsContact">Contact Me</h1>
                <p className="mainContentProjectsContact">- Let's Connect! -</p>
                &nbsp;
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={7}>
                <form className="form" onSubmit={submitHander}>
                    <label>Name</label>
                    <br />
                    <input
                        placeholder='Your Name Here'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br />

                    <label>Email</label>
                    <br />
                    <input
                        placeholder='Your Email Here'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />

                    <label>Message</label>
                    <br />
                    <textarea
                        placeholder='Your Message Here'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <br />
                    <button type="submit">Submit</button>
                </form>
                <br></br>
            </Grid>
        </Grid>
    )
}

export default Contact
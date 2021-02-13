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
            <Grid item xs={6}>
                <h2 className="contact-heading"> Get in Touch</h2>
                <h4 className="contact-heading2"> I am currently seeking web developement and
                software engineering internship/co-op opportunities for Fall 2021.
                Feel free to contact me whenever with the form on the right or my Linkedin! </h4>
                <br></br>
                <h2 className="contact-heading"> Check Out My Work</h2>
                <ul className="header_list">
                    <li className="Button">
                        <FaGithub />
                    </li>
                    <br/>
                    <li className="Button">
                        <FaLinkedin />

                    </li>
                    <br/>
                    <li className="Button">
                        <AiFillFileWord/>
                    </li>
                </ul>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
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

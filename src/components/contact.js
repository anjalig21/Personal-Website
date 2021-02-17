import React from 'react'
import "../CSS/contact.css"
import { useMediaQuery, Grid } from '@material-ui/core';
import { db } from "../firebase/firebaseConfig";

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
        <Grid id="contact" className="contact" container direction={'row'}>
            <Grid item xs={12}>
                &nbsp;
                <h1 className="mainHeaderProjectsContact">Contact Me</h1>
                <p className="mainContentProjectsContact">- Let's Connect -</p>
                &nbsp;
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
                <form className="form" onSubmit={submitHander}>
                    <label>Name</label>
                    <br />
                    <input
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br />

                    <label>Email</label>
                    <br />
                    <input
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />

                    <label>Message</label>
                    <br />
                    <textarea
                        placeholder='Message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <br />
                    <div className="spacing">
                        <button className="button" type="submit">Submit</button>
                    </div>
                </form>
                <br></br>
            </Grid>
        </Grid >
    )
}

export default Contact

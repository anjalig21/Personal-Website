// dependancies
import React from 'react'
import { Grid, Typography, TextField, Button, Divider, useMediaQuery } from '@material-ui/core'
import emailjs from 'emailjs-com'

// icons
import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

// file imports
import { db } from "../../firebaseConfig";
import ContactStyles from './ContactStyles'

const Contact = () => {
	// classes and queries
	const classes = ContactStyles();
	const md = useMediaQuery('(max-width: 960px)');
	const lg = useMediaQuery('(min-width: 960px)');

	// state declaration
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [message, setMessage] = React.useState("");
	const [errorName, setErrorName] = React.useState(false);
	const [errorEmail, setErrorEmail] = React.useState(false);
	const [errorMessage, setErrorMessage] = React.useState(false);

	// event handler
	const submitHander = (e) => {
		e.preventDefault(); // prevents screen refresh
		// uses regex to verify email
		const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		setErrorName(false);
		setErrorEmail(false);
		setErrorMessage(false);

		// if a field is invalid, ensure that email is not submitted and error is thrown
		if (name === "" || !emailRegex.test(email) || message === "") {
			if (name === "") {
				setErrorName(true);
			}

			if (!emailRegex.test(email)) {
				setErrorEmail(true);
			}

			if (message === "") {
				setErrorMessage(true);
			}
		} else {
			const emailObject = { // object to be sent to firebase and email
				name: name,
				email: email,
				message: message
			}

			// send to firebase
			db.collection('contacts').add(emailObject)
				.then(() => {
					console.log('submitted to Firebase');
				})
				.catch((err) => {
					console.log(err.message);
				});

			// send to email
			emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, emailObject, process.env.REACT_APP_USER_ID)
				.then((result) => {
					console.log(result.text);
					alert('Message has been submitted 🚀');
				}, (err) => {
					console.log(err.text);
				});

			setName('');
			setEmail('');
			setMessage('');
			setErrorName(false);
			setErrorEmail(false);
			setErrorMessage(false);
		}
	}

	return (
		<Grid container className={classes.root} id="contact">
			{/* Title */}
			<Grid className={classes.title} item xs={12}>
				<br />
				<Typography variant="h2">Contact Me</Typography>
				<Typography variant="h4">- Can't Wait to Connect! -</Typography>
			</Grid>

			{/* Contact Text */}
			{lg && <>
				<Grid item xs={1}></Grid>
			<Grid item xs={10} md={5}>
				<br /><br />
				<Typography variant="h5"><b>Get in Touch!</b></Typography>
				<Divider></Divider>
				<br />
				<MdEmail />&nbsp;
				<Typography display="inline"><b> Email:</b></Typography>
				<a rel="noreferrer" target="_blank" className={classes.contact} href="mailto:anjaligta@outlook.com">
					<Typography display="inline"> anjaligta@outlook.com</Typography>
				</a>
				<div /><br />
				<FaPhone />&nbsp;
				<Typography display="inline"><b> Phone:</b></Typography>
				<a rel="noreferrer" target="_blank" className={classes.contact} href="647-544-0781">
					<Typography className={classes.contact}  display="inline"> 647-544-0781</Typography>
				</a>
				<div /><br />
				<FaGithub />&nbsp;
				<Typography display="inline"><b> Github:</b></Typography>
				<a rel="noreferrer" target="_blank" className={classes.contact} href="https://github.com/anjalig21">
					<Typography  display="inline"> github.com/AnjaliGupta</Typography>
				</a>
				<div /><br />
				<FaLinkedin />&nbsp;
				<Typography display="inline"><b> LinkedIn:</b></Typography>
				<a rel="noreferrer" target="_blank" className={classes.contact} href="https://www.linkedin.com/in/anjali-gupta21/">
					<Typography  display="inline"> linkedin.com/in/AnjaliGupta</Typography>
				</a>
				<br /><br /><br />
			</Grid>
			<Grid item xs={1}></Grid>
			</>}

			{/* Contact Form */}
			{md && <Grid item xs={1}></Grid>}
			<Grid item xs={10} md={4}>
				<div className={classes.formContainer}>
					<form onSubmit={submitHander} className={classes.form}>
						<TextField
							className={classes.input}
							value={name}
							onChange={(e) => setName(e.target.value)}
							label="Name"
							variant="outlined"
							error={errorName}
							helperText={errorName ? "Please enter a name." : ""}
						/>
						<br /><br />
						<TextField
							className={classes.input}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							label="Email"
							variant="outlined"
							error={errorEmail}
							helperText={errorEmail ? "Please enter a correct email." : ""}
						/>
						<br /><br />
						<TextField
							className={classes.input}
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							label="Message"
							multiline
							rows={10}
							variant="outlined"
							error={errorMessage}
							helperText={errorMessage ? "Please enter a message." : ""}
						/>
						<br /><br />
						<div className={classes.center}>
							<Button type="submit" variant="contained" size="large" className={classes.button}>
								Submit
      				</Button>
						</div>
					</form>
				</div>
			</Grid>
			<Grid item xs={1}></Grid>
		</Grid>
	)
}

export default Contact;

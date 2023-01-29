// dependancies
import React from "react";
import {
  Grid,
  Typography,
  Divider,
  Button,
  useMediaQuery,
} from "@material-ui/core";
import profile from "./me_again.png";
import Resume from "../Home/resume.pdf";

// icons
import { FaRegFilePdf } from "react-icons/fa";

// file imports
import AboutStyles from "./AboutStyles";

const About = () => {
  // classes and queries
  const classes = AboutStyles();
  const md = useMediaQuery("(max-width: 960px)");
  const lg = useMediaQuery("(min-width: 960px)");

  return (
	<div className={classes.background}>
    <Grid id="about" container>
        {/* Title */}
        <Grid className={classes.title} item xs={12}>
          <br />
          <Typography variant="h2">About Me</Typography>
          <Typography variant="h4">- Get To Know Me -</Typography>
          <br />
          <br />
        </Grid>
        <Grid item xs={1}></Grid>
        {md && <Grid item xs={1}></Grid>}
        <Grid item xs={10} md={5}>
          <div className={classes.picSpacing}>
            <img
              alt="Display"
              src={profile}
              className={classes.profilePic}
            ></img>
          </div>
          <br />
          <br />
          <br />
        </Grid>
        {md && <Grid item xs={1}></Grid>}

        {/* Text */}
        <Grid item xs={10} md={5}>
          <br />
          <Typography
            variant="h6"
            className={classes.subTitle}
            display="inline"
          >
            My name is Anjali Gupta and I am a
          </Typography>
          <Typography
            variant="h6"
            style={{ color: "#175fca" }}
            className={classes.subTitle}
            display="inline"
          >
            {" "}
            Software Developer
          </Typography>
          <div style={{ paddingBottom: "2%" }} />
          <Typography variant="body1">
            To date, my software-related experience includes two internships and a 
            contract part-time position, where I had the opportunity to learn many
            different tech stacks. For more information on my experiences, see my
            resume below! I also enjoy working on several projects in my
            spare time. Currently, I am working on programming a Sign-Language Detector 
            and building e-commerce websites for various businesses. Some on my hobbies are 
            playing sports, learning foreign languages, exploring various AI and ML 
            algorithms, and of course eating sushi! I also help out in the
            community by volunteering and knitting blankets for animal shelters!{" "}
            <b> Currently, I am seeking internships for Summer 2024.</b>
          </Typography>
          <br />
          <Divider />
          <br />

          {/* Buttons */}
          {lg && (
            <a
              rel="noreferrer"
              target="_blank"
              href={Resume}
              className={classes.links}
            >
              <div>
                <Button
                  variant="contained"
                  size="large"
                  className={classes.button}
                  startIcon={<FaRegFilePdf />}
                >
                  Resume
                </Button>
              </div>
            </a>
          )}
          {md && (
            <a
              rel="noreferrer"
              target="_blank"
              href={Resume}
              className={classes.links}
            >
              <div>
                <Button
                  variant="contained"
                  size="large"
                  className={classes.buttonMobile}
                  startIcon={<FaRegFilePdf />}
                >
                  Resume
                </Button>
              </div>
            </a>
          )}
        </Grid>
        {md && <Grid item xs={1}></Grid>}

        {/* Bottom */}
        <Grid item xs={12}>
          <div style={{ paddingBottom: "7%" }} />
        </Grid>
    </Grid>
	</div>
  );
};

export default About;

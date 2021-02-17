import React from 'react';
import '../CSS/navbar.css';
import { HiMenu } from "react-icons/hi"
import { useMediaQuery, IconButton, Drawer, List, Tab, Tabs } from '@material-ui/core';
import { useStyles } from '../components/styles';
import { Link } from 'react-scroll';

// File Imports
import my_logo from '../images/anjali.png';

const Navbar = () => {

    const classes = useStyles();

    const desktop = useMediaQuery('(min-width: 1100px)');
    const mobile = useMediaQuery('(max-width: 1100px)');

    const [state, setState] = React.useState({ 'left': true });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    }

    return (
        <navbar className="navbar">
            <div className="container">
                <div className="navbar__container">
                    <ul className="navbar__left">
                        <div className="navbar__left-logo">
                            &nbsp;
                                <Link smooth={true} duration={1000} className="headings" to="home">
                                    <img className="my_logo" src={my_logo} alt="logo" />
                                </Link>
                        </div>
                    </ul>
                    {desktop &&
                        <ul className="navbar__right">
                            <li> <Link smooth={true} duration={1000} className="headings" to="home">Home</Link></li>
                            <li> <Link offset={-50} smooth={true} duration={1000} className="headings" to="skills">Skills</Link></li>
                            <li> <Link offset={-60} smooth={true} duration={1000} className="headings" to="portfolio">Projects</Link></li>
                            <li> <Link offset={-60} smooth={true} duration={1000} className="headings" to="about">About</Link></li>
                            <li> <Link offset={-62} smooth={true} duration={1000} className="headings" to="contact">Contact</Link></li>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </ul>
                    }
                    {mobile && <>
                        <IconButton onClick={toggleDrawer('left', true)} aria-label="menu">
                            <HiMenu className="menu" />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </IconButton>
                        <Drawer
                            variant='temporary'
                            anchor='left'
                            open={state['left']}
                            onClose={toggleDrawer('left', false)}
                        >
                            <div
                                role="presentation"
                                onClick={toggleDrawer("left", false)}
                                onKeyDown={toggleDrawer("left", false)}
                            >
                                <List>
                                    <Tabs textColor="primary" orientation="vertical">
                                        <Tab className={classes.tabs} label="Home" />
                                        <Tab className={classes.tabs} label="Skills" />
                                        <Tab className={classes.tabs} label="Portfolio" />
                                        <Tab className={classes.tabs} label="Contact" />
                                    </Tabs>
                                </List>
                            </div>
                        </Drawer>
                    </>
                    }
                </div>
            </div>
        </navbar>
    )
}

export default Navbar
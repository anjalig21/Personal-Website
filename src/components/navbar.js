import React from 'react';
import '../CSS/navbar.css';
import { HiMenu } from "react-icons/hi"
import { useMediaQuery, IconButton, Drawer, List, Tab, Tabs } from '@material-ui/core';
import { useStyles } from '../components/styles';

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
                            <img src={my_logo} alt="logo" />
                        </div>
                    </ul>
                    {desktop &&
                        <ul className="navbar__right">
                            <li> <a className="headings" href="" >Home</a></li>
                            <li> <a className="headings" href="" >Skills</a></li>
                            <li> <a className="headings" href="" >Projects</a></li>
                            <li> <a className="headings" href="" >About</a></li>
                            <li> <a className="headings" href="" >Contact</a></li>
                        </ul>
                    }
                    {mobile && <>
                        <IconButton onClick={toggleDrawer('left', true)} aria-label="menu">
                            <HiMenu className="menu" />
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
                                        <Tab className = {classes.tabs} label="Home" />
                                        <Tab className = {classes.tabs} label="Skills" />
                                        <Tab className = {classes.tabs} label="Portfolio" />
                                        <Tab className = {classes.tabs} label="Contact" />
                                    </Tabs>
                                </List>
                            </div>
                        </Drawer>
                    </>
                    }

                    <div className="space"></div>
                </div>
            </div>
        </navbar>
    )
}

export default Navbar
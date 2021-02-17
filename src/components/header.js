//React/Material UI Libraries
import React from 'react';
import { useMediaQuery, AppBar, Toolbar, Typography, Tab, Tabs, IconButton, List, Drawer } from '@material-ui/core';
import { HiMenu } from "react-icons/hi";
import my_logo from '../images/anjali.png';

//header section of website
const Header = () => {

    const desktop = useMediaQuery('(min-width: 900px)');
    const mobile = useMediaQuery('(max-width: 900px)');

    const [state, setState] = React.useState({left: false});

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    return (
        <AppBar position="static"> {/*Static ensures header is always visible*/}
            <Toolbar>
                <img src={my_logo} alt="logo" />
                <div className="spacing"></div>
                {desktop && <>
                    <Tabs textColor="primary" aria-label="tabs">
                        <Tab label="Home" />
                        <Tab label="Projects" />
                        <Tab label="Resume" />
                        <Tab label="Contact" />
                    </Tabs>
                </>}
                {mobile && <>
                    <IconButton onClick={toggleDrawer("left", true)} aria-label="menu">
                        <HiMenu />
                    </IconButton>
                    <Drawer variant='temporary' anchor='left' open={state['left']} onClose={toggleDrawer('left', false)}>
                        <div
                        role="presentation"
                        onClick={toggleDrawer("left", false)}
                        onKeyDown={toggleDrawer("left", false)}
                        >
                            <List>
                                <Tabs textColor="primary" orientation="vertical">
                                    <Tab label="Home" />
                                    <Tab label="Projects" />
                                    <Tab label="Resume" />
                                    <Tab label="Contact" />
                                </Tabs>
                            </List>
                        </div>
                    </Drawer>
                </>}

            </Toolbar>
        </AppBar>
    );
};

export default Header;
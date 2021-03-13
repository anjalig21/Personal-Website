//React/Material UI Libraries
import React from 'react';
import { useMediaQuery, AppBar, Toolbar, Tab, Tabs, IconButton, Drawer } from '@material-ui/core';
import { Link } from 'react-scroll'
import MenuIcon from '@material-ui/icons/Menu';


//File Imports
import NavbarStyles from "./NavbarStyles";
import logo from "./AnjaliLogo.png"

//header section of website
const Navbar = () => {
    // queries and classes
    const classes = NavbarStyles();
    const desktop = useMediaQuery('(min-width: 900px)');
    const mobile = useMediaQuery('(max-width: 900px)');

    // state setup
    const [state, setState] = React.useState({ left: false });
    const [background, setBackground] = React.useState('navbarTransparent');

    // event handler
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) { // detects if it was accidentally triggered
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    // ref setup
    const navRef = React.useRef();
    navRef.current = background;

    // detects where the screen is, if it is above 0.1, switch to transparent background
    React.useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 0.1;
            if (show) {
                setBackground('navbarSolid');
            } else {
                setBackground('navbarTransparent');
            }
        }
        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div>
            <AppBar elevation={0} className={classes[navRef.current]}>
                <Toolbar>
                    {/* Initials */}
                    <div style={{ marginRight: "1%" }} />
                    <Link smooth="true" duration={1000} to="home">
                        <img alt="logo" className={classes.logo} src={logo}></img>
                    </Link>
                    <div className={classes.space} />

                    {/* Desktop Tabs */}
                    {desktop && <>
                        <Tabs aria-label="tabs">
                            <Link smooth="true" duration={1000} to="home">
                                <Tab className={classes.tabs} label="Home" />
                            </Link>
                            <Link smooth="true" duration={1000} offset={-50} to="skills">
                                <Tab className={classes.tabs} label="Skills" />
                            </Link>
                            <Link smooth="true" duration={1000} offset={-70} to="projects">
                                <Tab className={classes.tabs} label="Projects" />
                            </Link>
                            <Link smooth="true" duration={1000} offset={-70} to="about">
                                <Tab className={classes.tabs} label="About" />
                            </Link>
                            <Link smooth="true" duration={1000} offset={-70} to="contact">
                                <Tab className={classes.tabs} label="Contact" />
                            </Link>
                        </Tabs>
                    </>}

                    {/* Mobile Tabs */}
                    {mobile && <>
                        <IconButton onClick={toggleDrawer("left", true)} aria-label="menu">
                            <MenuIcon className={classes.icon} />
                        </IconButton>
                        <Drawer variant='temporary' anchor='left' open={state['left']} onClose={toggleDrawer('left', false)}>
                            <div
                                role="presentation"
                                onClick={toggleDrawer("left", false)}
                                onKeyDown={toggleDrawer("left", false)}
                            >
                                <Tabs orientation="vertical">
                                    <Link smooth="true" duration={1000} to="home">
                                        <div className={classes.drawerTabSpacing}>
                                            <Tab onClick={toggleDrawer("left", false)} className={classes.tabs} label="Home" />
                                        </div>
                                    </Link>
                                    <Link smooth="true" duration={1000} offset={-30} to="skills">
                                        <div className={classes.drawerTabSpacing}>
                                            <Tab onClick={toggleDrawer("left", false)} className={classes.tabs} label="Skills" />
                                        </div>
                                    </Link>
                                    <Link smooth="true" duration={1000} offset={-60} to="projects">
                                        <div className={classes.drawerTabSpacing}>
                                            <Tab onClick={toggleDrawer("left", false)} className={classes.tabs} label="Projects" />
                                        </div>
                                    </Link>
                                    <Link smooth="true" duration={1000} offset={-60} to="about">
                                        <div className={classes.drawerTabSpacing}>
                                            <Tab onClick={toggleDrawer("left", false)} className={classes.tabs} label="About" />
                                        </div>
                                    </Link>
                                    <Link smooth="true" duration={1000} offset={-60} to="contact">
                                        <div className={classes.drawerTabSpacing}>
                                            <Tab onClick={toggleDrawer("left", false)} className={classes.tabs} label="Contact" />
                                        </div>
                                    </Link>
                                </Tabs>
                            </div>
                        </Drawer>
                    </>}

                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;



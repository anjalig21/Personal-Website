//Styling for header content
import { makeStyles } from '@material-ui/styles';

const NavbarStyles = makeStyles((theme) => ({
    navbarSolid: {
        transition: "0.5s",
        background: "#1F1F1F",
    },
    navbarTransparent: {
        transition: "0.5s",
        paddingTop: "1%",
        background: "transparent",
    },
    logo: {
        transition: "0.3s",
        paddingTop: "1.5vh",
        paddingBottom: "1vh",
        width: "7.5vh",
        height: "auto",
        cursor: "pointer",
        "&:hover": {
            transition: "0.3s",
            width: "10vh"
        }
    },
    space: {
        flexGrow: 1
    },
    tabs: {
        minWidth: 110,
        fontFamily: "Poppins",
        fontSize: "110%",
        fontWeight: "500",
        color: "#ffffff",
        '&:hover': {
            transition: "0.5s",
            color: "#99bbff"
        }
    },
    drawerTabSpacing: {
        display: "flex",
        justifyContent: "center",
    },
    icon: {
        color: "#ffffff",
        fontSize: "115%"
    }
}))

export default NavbarStyles;
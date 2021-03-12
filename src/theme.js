import { createMuiTheme } from '@material-ui/core/styles';

//Theme setup for UI
const theme = createMuiTheme({
  typography: {
    fontFamily: "Poppins, Roboto, Arial, sans-serif",
    h1: {
      fontSize: "4.5rem",
      fontWeight: "550"
    },
    h2: {
      fontSize: "3rem",
      fontWeight: "550"
    },
    h3: {
      fontSize: "1.6rem"
    },
    h4: {
      fontSize: "1rem"
    }
  },

  palette: {
    primary: {
      main: "#ffffff",
      dark: "#EDF1FA"
    },
    secondary: {
      main: "#ffffff",
      dark: "#0644A3"
    }
  },

  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: "#1f1f1f"
      }
    },
    MuiTab: {
      root: {
        textTransform: "none",
      }
    },
  }
});

export default theme;
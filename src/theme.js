import { createMuiTheme } from '@material-ui/core/styles';

//Theme setup for UI
const theme = createMuiTheme({
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: "#000000"
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
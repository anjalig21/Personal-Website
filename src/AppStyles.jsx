//Styling for App.js
import { makeStyles } from '@material-ui/styles';

const AppStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main  //changes background of whole site to grey
  },
}))

export default AppStyles;
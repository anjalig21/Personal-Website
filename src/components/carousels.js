import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 250,
    },
});

const ImgMediaCard = (props) => {
    const classes = useStyles();
    const {demo, demoTitle, demoDetails, gitHub} = props;
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Image"
                    height="190"
                    image={demo}
                    title="Image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {demoTitle}
                        </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {demoDetails}
                        </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
            <a className = "gitHub" rel="noreferrer" target="_blank" href={gitHub}>
                <Button size="small" color="primary">View Source Code</Button>
            </a>
            </CardActions>
        </Card>

    );
}

export default ImgMediaCard;
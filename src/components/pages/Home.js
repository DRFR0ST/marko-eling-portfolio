import React from "react"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
      background: theme.palette.background
  }
}));

const Home = () => {
    const classes = useStyles();

    return <div className={classes.root}>Chuj pizda ciota</div>
}

export default Home;
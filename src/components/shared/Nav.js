import React from "react"
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.background,
        width: "100%",
        position: "relative",
        height: "42px",
        marginBottom: theme.spacing,
    },
    container: {
        display: "flex",
        justifyContent:"space-between",
        padding: `0 32px`,
        height: "100%",
        alignItems: "center",
        "& h3": {
            margin: 0,
            padding: 0,
        }
    }
  }));

const Nav = () => {
    const classes = useStyles();

    return <div className={classes.root}><div className={classes.container}><h3>Marko Eling</h3></div></div>
}

export default Nav;
import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    position: "relative",
    height: "64px"
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    padding: `0 32px`,
    height: "100%",
    alignItems: "center",
    "& h2": {
      margin: 0,
      padding: 0
    },
    "@media (max-width: 767px)": {
        justifyContent: "center"
    }
  },
  menu: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      "& p": {
          margin: `0px ${theme.spacing()*2}px`,
          opacity: 0.6,
          cursor: "pointer",
          transition: "opacity 155ms ease",
          "&:hover": {
            opacity: 1
          }
      },
      "@media (max-width: 767px)": {
          display: "none"
      }
  }
}));

const Nav = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h2 className="logo">Marko Eling</h2>
        <div className={classes.menu}>
            <p>Home</p>
            <p>About</p>
            <p>Skills</p>
            <p>Contact</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;

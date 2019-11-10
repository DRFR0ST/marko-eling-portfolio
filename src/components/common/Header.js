import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import illustration from "assets/header_illustration.svg";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    "justify-content": "space-around",
    "max-width": "1210px",
    margin: "0 auto",
    width: "100%",
    height: "calc(100vh - 64px)",
    "& img": {
      maxWidth: "45%"
    },
    "@media (max-width: 767px)": {
        flexDirection: "column",
        "& img": {
            maxWidth: "90%",
        }
    }
  },
  slogan: {
      "& h1": {
          color: theme.palette.text.main,
          fontSize: 68,
          fontWeight: "bold",
          marginTop: 0,
          marginBottom: theme.spacing()/2,
          "&:last-child": {
              color: theme.palette.primary.main
          }
      }
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div className={classes.slogan}>
          <h1>Clouds.</h1>
          <h1>Pipelines.</h1>
          <h1>Networks.</h1>
        </div>
        <img src={illustration} alt="header" />
    </div>
  );
};

export default Header;

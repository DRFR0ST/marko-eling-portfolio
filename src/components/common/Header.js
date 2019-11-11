import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import illustration from "assets/header_illustration.svg";
import { IconButton, Icon } from "@material-ui/core";

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
        justifyContent: "center",
        "& img": {
          display: "none",
          maxWidth: "65%",
        }
    }
  },
  downIcon: {
    justifySelf: "flex-end",
    height: "15%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    "& p":{
      marginBottom: theme.spacing()
    },
    "@media (min-width: 767px)": {
      display: "none",
    }
  },
  slogan: {
    margin: "auto",
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
        <div className={classes.downIcon}>
            <p style={{textAlign: "center"}}>Learn more</p>
            <IconButton><Icon>keyboard_arrow_down</Icon></IconButton>
        </div>
        <img src={illustration} alt="header" />
    </div>
  );
};

export default Header;

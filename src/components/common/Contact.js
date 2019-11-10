import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "25vh 0",
  }
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        Contact
    </div>
  );
};

export default Contact;

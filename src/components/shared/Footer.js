import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    borderTop: `1px solid ${theme.palette.border}`,
    marginTop: "2vh"
  },
  content: {
    display: "flex",
    alignItems: "center",
    "justify-content": "space-between",
    padding: `${theme.spacing()*2}px ${theme.spacing()*3}px`,
    "& p": {
        margin: 0,
        fontSize: "12px"
    }
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
          <p>Copyright (c) 2019, Marko Eling</p>
      </div>
    </div>
  );
};

export default Header;

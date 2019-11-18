import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useLittera } from "react-littera";

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
  langSwitch: {
    display: "flex",
    justifyContent: "flex-around",
    alignItems: "center",
    "& p": {
      cursor: "pointer",
      marginBottom: 0,
      marginTop: 0,
      marginLeft: theme.spacing(),
      transition: "opacity 155ms ease",
      "&:hover": {
        opacity: 0.7
      }
    }
  }
}));

const Footer = () => {
  const [_translated, language, setLanguage] = useLittera({});
  const classes = useStyles();

  const langLinks = ["en_US", "de_DE", "pl_PL"].map(l => <p key={l} style={l === language ? {textDecoration: "underline"} : {}} onClick={() => setLanguage(l)}>{l.split("_")[1]}</p>)

  return (
    <div className={classes.root}>
      <div className={classes.content}>
          <p>Copyright (c) 2019, Marko Eling</p>
          <div className={classes.langSwitch}>
            {langLinks}
          </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "8vh 0",
    maxWidth: "760px",
    margin: "0 auto",
    "@media (max-width: 767px)": {
        maxWidth: "100%",
    }
  },
  list: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        "& img": {
            margin: theme.spacing(),
            width: "500px",
            maxWidth: "100%",
            height: "auto",
            padding: `${theme.spacing()*2}px 0`,
            "&:not(:last-child)": {
                borderBottom: `1px dashed ${theme.palette.border}`,
            }
        }
  }
}));

const Hire = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <h1 style={{textAlign: "center", padding: "0 15vw"}}>Worked with</h1>
        <br />
        <br />
        <br />
        <div className={classes.list}>
            <img src="https://www.gebit.de/files/gebit_theme/design/logo_gebit_solutions_01.png" alt="Gebit" />
            <img src="https://i.imgur.com/JQS0irl.png" alt="VirtualIT" />
        </div>
    </div>
  );
};

export default Hire;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
  root: {
    padding: "7vh 0",
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  content: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    maxWidth: "1201px",
    minHeight: "300px",
    width: "75%",
    border: `1px solid ${theme.palette.border}`,
    background: theme.palette.background.dark,
    padding: "1.5vh 1.5vw 0.5vh",
    borderRadius: 14,
    "@media (max-width: 982px)": {
      flexDirection: "column-reverse",
      width: "90%",
      padding: "1vh 0",
    }
  },
  infoContainer: {
    width: "30%",
    background: theme.palette.background.dark,
    padding: theme.spacing()*3,
    "@media (max-width: 982px)": {
      position: "relative",
      top: "-5%"
    },
    "& div": {
      marginLeft: theme.spacing()
    }
  },
  formContainer: {
    position: "relative",
    padding: theme.spacing()*3,
    width: "65%",
    border: `1px solid ${theme.palette.border}`,
    background: theme.palette.background.main,
    borderRadius: 14,
    //boxShadow: "-15px 15px 25px rgba(0, 0, 0, 0.05)",
    right: "-10%",
    top: "-15%",
    "@media (max-width: 982px)": {
      right: "initial",
      left: "50%",
      width: "90%",
      transform: "translateX(-50%)",
      top: "-10%"
    }
  },
  doubleField:{
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
  },
  label: {
    color: theme.palette.text.main,
  },
  infoItem: {
    display: "flex",
    alignItems: "center",
    "& p": {
      marginLeft: theme.spacing()*2
    }
  },
  "@media (prefers-color-scheme: dark)": {
    inputRoot: {
      background: "rgba(255, 255, 255, 0.08)",
      "&:hover": {
        background: "rgba(255, 255, 255, 0.12)",
        ".MuiFilledInput-underline:hover:before": {
            background: "rgba(255, 255, 255, 0.14)",
        }
      },
    },
    underline: {
      "&:before": {
        borderColor: "rgba(255, 255, 255, 0.12)",
      }
    }
  }
}));

const Contact = () => {
  const classes = useStyles();

  const handleSubmit = e => {
    e.preventDefault();
  }

  const textFieldProps = {
      InputProps: {
        classes: {root: classes.inputRoot, underline: classes.underline}
      },
      InputLabelProps: {
        classes: {root: classes.label}
      }
  }

  const contactInfo = [
    {icon: "mail", value: "marko.eling@gmail.com"},
    {icon: "phone", value: "+49 XXX-XXX-XXX"},
    {icon: "home", value: "Berlin, Germany"},
  ]

  return (
    <div className={classes.root}>
        <div className={classes.content}>
          <div className={classes.infoContainer}>
            <h1 style={{opacity: 0.8}}>Contact</h1>
            {
              contactInfo.map(e => <div className={classes.infoItem}><Icon>{e.icon}</Icon> <p className="mono" >{e.value}</p></div>)
            }
          </div>
          <div className={classes.formContainer}>
            <h2 style={{opacity: 0.75}}>Contact me</h2>
            <form onSubmit={handleSubmit}>
              <div className={classes.doubleField}>
                <TextField {...textFieldProps} label="Name" variant="filled" />
                <TextField {...textFieldProps} label="Email" variant="filled" style={{marginLeft: "6px"}} type="email" />
              </div>
              <br />
              <TextField {...textFieldProps} multiline label="Message" style={{width: "100%", marginBottom: "10px"}} variant="filled" />
              <br />
              <br />
              <Button variant="outlined" size="large" align="right" style={{float: "right"}}>Submit</Button>
              <div style={{clear: "both"}} />
            </form>
          </div>
        </div>
    </div>
  );
};

export default Contact;

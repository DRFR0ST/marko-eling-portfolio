import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, IconButton, Tooltip } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import emailjs from "emailjs-com";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "7vh 0",
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: "center"
  },
  content: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    maxWidth: "1201px",
    minHeight: "300px",
    width: "75%",
    border: `1px solid ${theme.palette.border}`,
    background: theme.palette.background.main,
    padding: "1.5vh 1.5vw 0.5vh",
    borderRadius: 14,
    "@media (max-width: 982px)": {
      flexDirection: "column-reverse",
      width: "90%",
      padding: "1vh 0"
    }
  },
  infoContainer: {
    width: "30%",
    padding: theme.spacing() * 3,
    "@media (max-width: 982px)": {
      position: "relative",
      top: "-5%"
    },
    "& span": {
      "@media (prefers-color-scheme: dark)": {
        color: theme.palette.text.main
      }
    },
    "& div": {
      marginLeft: theme.spacing()
    }
  },
  formContainer: {
    position: "relative",
    padding: theme.spacing() * 3,
    width: "65%",
    //border: `1px solid ${theme.palette.border}`,
    background: theme.palette.background.main,
    borderRadius: 14,
    boxShadow: "-15px 15px 20px rgba(0, 0, 0, 0.085)",
    right: "-10%",
    top: "-15%",
    "@media (max-width: 982px)": {
      right: "initial",
      left: "50%",
      width: "90%",
      transform: "translateX(-50%)",
      top: "-10%",
      boxShadow: "0px 15px 20px rgba(0, 0, 0, 0.085)"
    }
  },
  doubleField: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%"
  },
  label: {
    color: theme.palette.text.main
  },
  infoItem: {
    display: "flex",
    alignItems: "center",
    "& p": {
      marginLeft: theme.spacing() * 2,
      borderBottom: `5px solid ${theme.palette.primary.main}`
    }
  },
  "@media (prefers-color-scheme: dark)": {
    inputRoot: {
      background: "rgba(255, 255, 255, 0.08)",
      "&:hover, &:focus": {
        background: "rgba(255, 255, 255, 0.12)",
        ".MuiFilledInput-underline:hover:before": {
          background: "rgba(255, 255, 255, 0.14)"
        }
      },
      buttonRoot: {
        borderColor: theme.palette.text.main,
        color: theme.palette.text.main
      }
    },
    underline: {
      "&:before": {
        borderColor: "rgba(255, 255, 255, 0.12)"
      }
    }
  },
  errorInfo: {
    color: "red"
  }
}));

const Contact = () => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  // const theme = useTheme();
  const classes = useStyles();

  const handleSubmit = e => {
    const templateId = "template_IYsB7SbI";

    if(nameValue && emailValue && messageValue)
      sendFeedback(templateId, {
        message_html: messageValue,
        from_name: nameValue,
        reply_to: emailValue
      });
    else {
      if(!nameValue) setNameError("Can't be empty");
      if(!emailValue) setEmailError("Can't be empty");
      if(!messageValue) setMessageError("Can't be empty");
    }
    e.preventDefault();
  };

  const sendFeedback = (templateId, variables) => {
    try {
      emailjs
        .send("gmail", templateId, variables, process.env.REACT_APP_EMAILJS_ID)
        .then(res => {
          setSuccess(true);
        })
        // Handle errors here however you like, or use a React error boundary
        .catch(err => setError(err.message));
    } catch(err) {
      setError(err.message || err)
    }
  };

  const textFieldProps = {
    InputProps: {
      classes: { root: classes.inputRoot }
    },
    InputLabelProps: {
      classes: { root: classes.label }
    }
  };

  const handleChange = (v, fn) => {
    fn && fn(v);
    setError(null);
  };

  const contactInfo = [
    { icon: "mail", value: "marko.eling@gmail.com" },
    { icon: "phone", value: "+49 XXX-XXX-XXX" },
    { icon: "home", value: "Berlin, Germany" }
  ];

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.infoContainer}>
          <h1 style={{ opacity: 0.8 }}>Contact</h1>
          {contactInfo.map(e => (
            <div key={e.value} className={classes.infoItem}>
              <Icon>{e.icon}</Icon> <p className="mono">{e.value}</p>
            </div>
          ))}
          <Tooltip title="Download CV" aria-label="download cv">
            <IconButton
              style={{ float: "right" }}
              href="http://www.africau.edu/images/default/sample.pdf"
              target="_blank"
            >
              <Icon>file_copy</Icon>
            </IconButton>
          </Tooltip>
        </div>
        <div className={classes.formContainer}>
          {!success && (
            <React.Fragment>
              <h2 style={{ opacity: 0.75 }}>Contact me</h2>
              <form onSubmit={() => null}>
                <div className={classes.doubleField}>
                  <TextField
                    error={nameError}
                    {...textFieldProps}
                    value={nameValue}
                    onChange={e => handleChange(e.target.value, setNameValue)}
                    label="Name"
                    variant="outlined"
                  />
                  <TextField
                    error={emailError || validateEmail(emailValue) ? false : "Invalid format"}
                    {...textFieldProps}
                    value={emailValue}
                    onChange={e => handleChange(e.target.value, setEmailValue)}
                    label="Email"
                    variant="outlined"
                    style={{ marginLeft: "6px" }}
                    type="email"
                  />
                </div>
                <br />
                <TextField
                  {...textFieldProps}
                  value={messageValue}
                  error={messageError}
                  onChange={e => handleChange(e.target.value, setMessageValue)}
                  multiline
                  label="Message"
                  style={{ width: "100%", marginBottom: "10px" }}
                  variant="outlined"
                />
                <br />
                {error && (
                  <p className={classes.errorInfo}>
                    <Icon style={{ marginRigth: "10px" }}>warning</Icon> {error}
                  </p>
                )}
                <br />
                <Button
                  type="button"
                  variant="contained"
                  classes={{ root: classes.buttonRoot }}
                  size="large"
                  align="right"
                  color="primary"
                  onClick={handleSubmit}
                  style={{ float: "right", color: "#fff" }}
                >
                  Submit{" "}
                  <Icon style={{ marginLeft: "10px", fontSize: "18px" }}>
                    send
                  </Icon>
                </Button>
                <div style={{ clear: "both" }} />
              </form>
            </React.Fragment>
          )}
          {success && (
            <React.Fragment>
              <h1>Success!</h1>
              <p>(gonna add a illustration here soon..)</p>
              {/* <Undraw name="Astronaut" height="300px" primaryColor={theme.palette.primary.main} /> */}
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;

function validateEmail(email) {
  if(email.length === 0) return true;
  var re = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
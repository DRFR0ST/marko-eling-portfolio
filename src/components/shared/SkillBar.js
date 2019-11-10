import React from "react";
import { makeStyles } from "@material-ui/styles";

const progressHeight = 30;

const useStyles = makeStyles(theme => ({
    root: {
        position: "relative",
        width: "100%",
        margin: `${theme.spacing()*4}px ${theme.spacing()}px`,
        "@media (min-width: 767px)": {
            width: `40%`,
            margin: `${theme.spacing()*2}px ${theme.spacing()}px`,
        }
    },
    progressBorder: {
        position: "relative",
        width: "97%",
        borderRadius: progressHeight,
        height: progressHeight,
        border: "1px solid rgba(21, 21, 21, 0.15)",
        marginLeft: "2%",
    },
    progress: {
        position: "absolute",
        left: "0",
        width: "99%",
        height: "75%",
        top: "50%",
        transform: "translateY(-50%)",
        borderRadius: progressHeight,
        background: theme.palette.primary.main
    },
    icon: {
        zIndex:2,
        position: "absolute",
        width: "auto",
        height: progressHeight + 30,
        top: "50%",
        left: "-10px",
        transform: "translateY(-50%)"
    }
}));

const SkillBar = ({image, name, value, color}) => {
    const classes = useStyles();
    return <div className={classes.root}>
        <div className={classes.progressBorder}>
            <img className={classes.icon} alt="icon" src={image} />
            <div className={classes.progress} style={{width: `${value}%`, background: color}} />
        </div>
        <p className="mono" style={{textAlign: "right", marginRight: "10px"}}>{name}</p>
    </div>
}

export default SkillBar
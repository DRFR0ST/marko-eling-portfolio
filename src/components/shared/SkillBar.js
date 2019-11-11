import React from "react";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core";

const progressHeight = 30;

const useStyles = makeStyles(theme => ({
    root: {
        position: "relative",
        border: `1px solid ${theme.palette.border}`,
        width: "92%",
        borderRadius: theme.borderRadius,
        paddingBottom: 0,
        display: "flex",
        flexDirection: "column",
        margin: `${theme.spacing()*4}px auto`,
        "@media (min-width: 769px)": {
            width: `40%`,
            margin: `${theme.spacing()*2}px ${theme.spacing()}px`,
        }
    },
    content: {
        padding: `${theme.spacing()*3}px ${theme.spacing()}px ${theme.spacing()*2}px`,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    brand: {
        display: "flex",
        flexDirection: "column",
        width: "20%",
    },
    description: {
        width: "50%",
    },
    icon: {
        maxWidth: "100%",
        height: "auto",
        maxHeight: "125px",
        margin: "0 auto"
    },
    progress: {
        position: "relative",
        background: "#BD0000",
        height: "8px",
        borderBottomLeftRadius: theme.borderRadius,
        justifySelf: "flex-end",
        margin: "auto 0 0 0"
    }
}));

const SkillBar = ({image, name, description, value, color}) => {
    const classes = useStyles();
    const theme = useTheme();

    const progressStyle = React.useMemo(() => {
        let s = {};

        s.width = `${value}%`;
        s.background = color;

        if(value === 100) s.borderBottomRightRadius = theme.borderRadius;

        return s;
    }, [value, color])

    return <div className={classes.root}>
        <div className={classes.content}>
            <div className={classes.brand}>
                <img className={classes.icon} alt="icon" src={image} />
            </div>
            <div className={classes.description}>
                <h4 style={{textAlign: "left"}}>{name}</h4>
                <p className="mono">{description}</p>
            </div>
        </div>
        <div className={classes.progress} style={progressStyle}></div>
    </div>
}

export default SkillBar
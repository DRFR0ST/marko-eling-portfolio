import React from "react"
import { makeStyles } from "@material-ui/styles"
import {useLittera} from "react-littera";
import {TAbout} from "translations/"

const useStyle = makeStyles(theme => ({
    root: {
        padding: "25px 50px 5vh 50px",
        margin: `${theme.spacing()*3}px auto`,
        maxWidth: "1210px",
        "@media (max-width: 767px)": {
            width: "90%",
            padding: "25px 25px 2.5vh 25px"
        }
    },
    card: {
        position: "relative",
        padding: theme.spacing()*3,
        background: theme.palette.background.main,
        "width": "800px",
        maxWidth: "100%",
        "margin": "auto",
        "& h1": {
            marginTop: 0
        },
        "&:before": {
            content: "''",
            position: "absolute",
            top: "-24px",
            zIndex: -1,
            left: "-40px",
            width: "300px",
            maxWidth: "90%",
            height: "68%",
            "background-image":`radial-gradient(${theme.palette.border} 20%, transparent 20%)`,
            "background-color": theme.palette.background.main,
            "background-position": "0 0, 5px 5px",
            "background-size": "10px 10px",
        },
        "&:after": {
            content: "''",
            position: "absolute",
            bottom: "-40px",
            right: "-25px",
            maxWidth: "90%",
            zIndex: -1,
            width: "400px",
            height: "60%",
            "background-image":`radial-gradient(${theme.palette.border} 20%, transparent 20%)`,
            "background-color": theme.palette.background.main,
            "background-position": "0 0, 5px 5px",
            "background-size": "10px 10px",
        },
        "@media (max-width: 767px)": {
            margin: "0",
            "width": "auto",
            padding: "none"
        }
    },
    block: {
        // width: "80px",
        // height: "10px",
        // position: "relative",
        // background: theme.palette.primary.main,
        // left: "90%"

        left: "calc(98% - 80px)",
        width: "80px",
        marginTop: theme.spacing(),
        height: "10px",
        position: "relative",
        background: theme.palette.primary.main,
    }
}));

const About = () => {
    console.log(TAbout);
    const [translations] = useLittera(TAbout);
    console.log(translations);
    const classes = useStyle();

    return <div className={classes.root}>
        <div className={classes.card}>
            <h1>{translations.title}</h1>
            {translations.description}
            <p className="mono"></p>
            <div className={classes.block} />
            <div style={{clear: "both"}} />
        </div>
    </div>
}

export default About;
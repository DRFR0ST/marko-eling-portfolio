import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import { SkillBar } from "../shared";

const useStyles = makeStyles(theme => ({
  root: {
      padding: "5vh 0",
      maxWidth: "1210px",
      margin: "15vh auto",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flexWrap: "wrap",
      width: "100%",
      "@media (max-width: 767px)": {
          flexDirection: "column",
          margin: "5vh auto"
      }
  }
}));

const Skills = () => {
    const classes = useStyles();

    return <div className={classes.root}>
        <SkillBar image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Ubuntu_logoib.svg/2127px-Ubuntu_logoib.svg.png" name="Linux" value={99} color="#dd4814" />
        <SkillBar image="https://www.docker.com/sites/default/files/d8/2019-07/Moby-logo.png" name="Docker" value={75} color="#2496ed" />
        <SkillBar image="https://d2vqpl3tx84ay5.cloudfront.net/tumblr_lsus01g1ik1qies3uo1_400.png" name="JavaScript" value={35} color="#f7df1e" />
        <SkillBar image="https://wiki.jenkins.io/download/attachments/2916393/logo.png?version=1&modificationDate=1302753947000&api=v2" name="Jenkins" value={90} color="#D33833" />
        <SkillBar image="https://www.stickpng.com/assets/images/5847f40ecef1014c0b5e488a.png" name="Firebase" value={45} color="#FDA612" />
        <SkillBar image="https://pngriver.com/wp-content/uploads/2018/04/Download-WordPress-Logo-Free-PNG-Image.png" name="Wordpress" value={99} color="#464442" />
    </div>
}

export default Skills;
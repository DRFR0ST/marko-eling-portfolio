import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SkillBar } from "../shared";
import {TSkills} from "translations/"

const useStyles = makeStyles(theme => ({
  root: {
    padding: "5vh 0",
    maxWidth: "1210px",
    margin: "15vh auto",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    width: "85%",
    "@media (max-width: 480px)": {
        width: "98%",
    },
    "@media (max-width: 769px)": {
      flexDirection: "column",
      margin: "5vh auto",
      maxWidth: "700px",
    }
  }
}));

const Skills = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SkillBar
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Ubuntu_logoib.svg/2127px-Ubuntu_logoib.svg.png"
        value={100}
        color="#dd4814"
        translation={TSkills.tile01}
      />
      <SkillBar
        image="https://www.docker.com/sites/default/files/d8/2019-07/Moby-logo.png"
        value={75}
        color="#2496ed"
        translation={TSkills.tile02}
      />
      <SkillBar
        image="https://d2vqpl3tx84ay5.cloudfront.net/tumblr_lsus01g1ik1qies3uo1_400.png"
        value={35}
        color="#f7df1e"
        translation={TSkills.tile03}
      />
      <SkillBar
        image="https://wiki.jenkins.io/download/attachments/2916393/logo.png?version=1&modificationDate=1302753947000&api=v2"
        value={90}
        color="#D33833"
        translation={TSkills.tile04}
      />
      <SkillBar
        image="https://www.stickpng.com/assets/images/5847f40ecef1014c0b5e488a.png"
        value={45}
        color="#FDA612"
        translation={TSkills.tile05}
      />
      <SkillBar
        image="https://pngriver.com/wp-content/uploads/2018/04/Download-WordPress-Logo-Free-PNG-Image.png"
        value={100}
        color="#464442"
        translation={TSkills.tile06}
      />
    </div>
  );
};

export default Skills;

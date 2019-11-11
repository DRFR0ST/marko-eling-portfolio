import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SkillBar } from "../shared";

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
        name="Linux"
        value={100}
        color="#dd4814"
        description="Incididunt do culpa officia tempor labore cillum."
      />
      <SkillBar
        image="https://www.docker.com/sites/default/files/d8/2019-07/Moby-logo.png"
        name="Docker"
        value={75}
        color="#2496ed"
        description="Mollit officia elit officia excepteur irure voluptate dolor occaecat in non."
      />
      <SkillBar
        image="https://d2vqpl3tx84ay5.cloudfront.net/tumblr_lsus01g1ik1qies3uo1_400.png"
        name="JavaScript"
        value={35}
        color="#f7df1e"
        description="Esse laborum consequat Lorem veniam sit aliqua incididunt reprehenderit consequat dolore incididunt."
      />
      <SkillBar
        image="https://wiki.jenkins.io/download/attachments/2916393/logo.png?version=1&modificationDate=1302753947000&api=v2"
        name="Jenkins"
        value={90}
        color="#D33833"
        description="Cupidatat aliqua nostrud quis incididunt incididunt consectetur quis ullamco pariatur eiusmod elit ipsum."
      />
      <SkillBar
        image="https://www.stickpng.com/assets/images/5847f40ecef1014c0b5e488a.png"
        name="Firebase"
        value={45}
        color="#FDA612"
        description="Occaecat et consectetur ea amet in minim officia et ad."
      />
      <SkillBar
        image="https://pngriver.com/wp-content/uploads/2018/04/Download-WordPress-Logo-Free-PNG-Image.png"
        name="Wordpress"
        value={100}
        color="#464442"
        description="Proident do laborum aliquip in laboris commodo magna nisi pariatur sit culpa cillum."
      />
    </div>
  );
};

export default Skills;

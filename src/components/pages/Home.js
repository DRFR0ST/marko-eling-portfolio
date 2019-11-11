import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import { Header, About, Skills, Contact, Hire } from "../common";

const useStyles = makeStyles(theme => ({
  root: {
      
  }
}));

const Home = () => {
    const classes = useStyles();

    return <div className={classes.root}>
      <Header />
      <About />
      <Skills />
      {/* <Hire /> */}
      <Contact />
    </div>
}

export default Home;
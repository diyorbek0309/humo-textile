import React from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import SectionTitle from "../extra/SectionTitle";
import classes from "./Landing.css";

const AboutSection = (props) => {
  return (
    <Container maxWidth="lg" className={classes.AboutSection}>
      <Grid container justify="left" spacing={3}>
        <Grid item lg={6} className={classes.AboutSectionLeft}>
          <SectionTitle title={props.data.title} />
        </Grid>
        <Grid item lg={6} className={classes.AboutSectionRight}>
          <Paper variant="outlined">
            <img src="../../assets/img/about.jpg" alt="Jamoaviy Surat" />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutSection;

import React from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import SectionTitle from "../extra/SectionTitle";
import classes from "./Landing.css";
import aboutImage from "../../assets/img/about.jpg";

const AboutSection = ({ title, text1, text2, text3 }) => {
  return (
    <Container maxWidth="lg" className={classes.AboutSectionContainer}>
      <Grid container spacing={3}>
        <Grid item lg={6} className={classes.AboutSectionLeft}>
          <SectionTitle title={title} />
          <h4 className={classes.AboutText}>
            {text1}
            <br />
            <br />
            {text2}
            <br />
            <br />
            {text3}
          </h4>
        </Grid>
        <Grid item lg={6} className={classes.AboutSectionRight}>
          <Paper variant="outlined" style={{ marginTop: "70px" }}>
            <img
              src={aboutImage}
              alt="Jamoaviy Surat"
              className={classes.AboutImage}
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutSection;

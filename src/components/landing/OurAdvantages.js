import React from "react";
import classes from "./Landing.css";
import { Container } from "@material-ui/core";
import SectionTitle from "../extra/SectionTitle";

const OurAdvantages = ({ advantage, advantageTitle }) => {
  return (
    <Container maxWidth="lg" className={classes.OurAdvantagesContainer}>
      <SectionTitle title={advantageTitle} />
      <div className={classes.OurAdvantagesRow}>
        {advantage.map((adv, index) => (
          <div className={classes.IconBox} key={index}>
            <div className={classes.IconWrap}>{adv.icon}</div>
            <h4 className={classes.title}>{adv.title}</h4>
            <p className={classes.description}>{adv.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default OurAdvantages;

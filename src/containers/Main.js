import React from "react";
import { useSelector } from "react-redux";
import classes from "../components/landing/Landing.css";
import { Typography } from "@material-ui/core";
import AboutSection from "../components/landing/AboutSection";
import OurAdvanatages from "../components/landing/OurAdvantages";
import Counter from "../components/landing/Counter";
import { mainDataUz, mainDataRu } from "../data";
import SliderProducts from "../components/landing/SliderProducts";

function Main() {
  let lang = useSelector((state) => state.language);

  let mainData;
  if (lang === "uz") {
    mainData = { ...mainDataUz };
  } else {
    mainData = { ...mainDataRu };
  }

  return (
    <div className={classes.LandingContainer}>
      <div className={classes.HeaderWrap}>
        <Typography variant="h2" gutterBottom className={classes.HeaderTitle}>
          {mainData.carousel.title}
        </Typography>
        <Typography variant="h5" gutterBottom className={classes.HeaderText}>
          {mainData.carousel.text}
        </Typography>
      </div>
      <AboutSection
        title={mainData.about.title}
        text1={mainData.about.text1}
        text2={mainData.about.text2}
      />
      <OurAdvanatages
        advantage={mainData.advantage}
        advantageTitle={mainData.advantageTitle}
      />
      <div className={classes.CounterWrap}>
        {mainData.counter.map((counter, index) => (
          <Counter key={index} label={counter.label} number={counter.number} />
        ))}
      </div>
      <SliderProducts />
    </div>
  );
}

export default Main;

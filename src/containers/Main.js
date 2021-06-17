import React from "react";
import { useSelector } from "react-redux";
import classes from "../components/landing/Landing.css";
import { Typography } from "@material-ui/core";
import AboutSection from "../components/landing/AboutSection";
import OurAdvanatages from "../components/landing/OurAdvantages";
import Counter from "../components/landing/Counter";
import { mainDataUz, mainDataRu } from "../data";
import { sliderProductsDataRu, sliderProductsDataUz } from "../productData";
import SliderProducts from "../components/landing/SliderProducts";

function Main() {
  let lang = useSelector((state) => state.language);

  let mainData;
  let sliderProductsData;
  if (lang === "uz") {
    mainData = { ...mainDataUz };
    sliderProductsData = { ...sliderProductsDataUz };
  } else {
    mainData = { ...mainDataRu };
    sliderProductsData = { ...sliderProductsDataRu };
  }

  return (
    <div className={classes.LandingContainer}>
      <div style={{ padding: "10px", backgroundColor: "#fff" }}>
        <div className={classes.HeaderWrap}></div>
      </div>
      <AboutSection
        title={mainData.about.title}
        text1={mainData.about.text1}
        text2={mainData.about.text2}
        text3={mainData.about.text3}
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
      <SliderProducts data={sliderProductsData} />
    </div>
  );
}

export default Main;

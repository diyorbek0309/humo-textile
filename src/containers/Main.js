import React from "react";
import { useSelector } from "react-redux";
import classes from "../components/landing/Landing.css";
import { Typography } from "@material-ui/core";
import AboutSection from "../components/landing/AboutSection";

function Main() {
  let lang = useSelector((state) => state.language);

  let mainData;
  if (lang === "uz") {
    mainData = {
      carousel: {
        title: "Humo - tekstil LTD",
        text: `Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua
enim minim estudiat veniam siad venumus dolore`,
      },
      about: {
        title: "Kompaniyamiz haqida",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sed distinctio provident officia animi similique unde amet voluptatem ipsa sapiente, quasi itaque reprehenderit nostrum ratione blanditiis laborum quidem. Deleniti, distinctio.",
      },
    };
  } else {
    mainData = {
      carousel: {
        title: "Humo - tekstil LTD",
        text: `Рус Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua
enim minim estudiat veniam siad venumus dolore`,
      },
      about: {
        title: "Kompaniyamiz haqida",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sed distinctio provident officia animi similique unde amet voluptatem ipsa sapiente, quasi itaque reprehenderit nostrum ratione blanditiis laborum quidem. Deleniti, distinctio.",
      },
    };
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
      <AboutSection data={mainData.about} />
    </div>
  );
}

export default Main;

import React from "react";
import { useSelector } from "react-redux";
import classes from "../components/landing/Landing.css";

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
    };
  } else {
    mainData = {
      carousel: {
        title: "Humo - tekstil LTD",
        text: `Рус Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua
enim minim estudiat veniam siad venumus dolore`,
      },
    };
  }

  return (
    <div className={classes.LandingContainer}>
      <h2>{mainData.carousel.title}</h2>
    </div>
  );
}

export default Main;

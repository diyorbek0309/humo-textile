import React from "react";
import { useSelector } from "react-redux";

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
    <div style={{ marginTop: "200px" }}>
      <h1>{mainData.carousel.title}</h1>
      <h4>{mainData.carousel.text}</h4>
    </div>
  );
}

export default Main;

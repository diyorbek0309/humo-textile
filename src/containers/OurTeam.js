import React from "react";
import { useSelector } from "react-redux";

function OurTeam() {
  let lang = useSelector((state) => state.language);

  let ourTeamData;
  if (lang === "uz") {
    ourTeamData = {
      header: {
        title: "Humo - tekstil LTD",
        text: `Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua
enim minim estudiat veniam siad venumus dolore`,
      },
    };
  } else {
    ourTeamData = {
      header: {
        title: "Humo - tekstil LTD",
        text: `Рус Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua
enim minim estudiat veniam siad venumus dolore`,
      },
    };
  }

  return (
    <div style={{ marginTop: "180px" }}>
      <h2>{ourTeamData.header.text}</h2>
    </div>
  );
}

export default OurTeam;

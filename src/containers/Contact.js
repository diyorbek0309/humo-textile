import React from "react";
import { useSelector } from "react-redux";

function Contact() {
  let lang = useSelector((state) => state.language);

  let contactData;
  if (lang === "uz") {
    contactData = {
      header: {
        title: "Humo - tekstil LTD",
        text: `Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua
enim minim estudiat veniam siad venumus dolore`,
      },
    };
  } else {
    contactData = {
      header: {
        title: "Humo - tekstil LTD",
        text: `Рус Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua
enim minim estudiat veniam siad venumus dolore`,
      },
    };
  }

  return (
    <div style={{ marginTop: "200px" }}>
      <h2>{contactData.header.text}ferfgerf</h2>
    </div>
  );
}

export default Contact;

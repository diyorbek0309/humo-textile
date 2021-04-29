import React from "react";
import { useSelector } from "react-redux";

function Products() {
  let lang = useSelector((state) => state.language);

  let productsData;
  if (lang === "uz") {
    productsData = {
      header: {
        title: "Humo - tekstil LTD",
        text: `Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua
enim minim estudiat veniam siad venumus dolore`,
      },
    };
  } else {
    productsData = {
      header: {
        title: "Humo - tekstil LTD",
        text: `Рус Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua
enim minim estudiat veniam siad venumus dolore`,
      },
    };
  }

  return (
    <div style={{ marginTop: "200px" }}>
      <h2>{productsData.header.text}</h2>
    </div>
  );
}

export default Products;

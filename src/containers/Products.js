import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/extra/Header";
import classes from "../components/products/Products.css";

function Products() {
  let lang = useSelector((state) => state.language);

  let productsData;
  if (lang === "uz") {
    productsData = {
      header: {
        title: "Bizning mahsulotlarimiz",
        text: `Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua
enim minim estudiat veniam siad venumus dolore`,
      },
    };
  } else {
    productsData = {
      header: {
        title: "Наши продукты",
        text: `Рус Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua
enim minim estudiat veniam siad venumus dolore`,
      },
    };
  }

  return (
    <div className={classes.ProductContainer}>
      <Header header={productsData.header} />
    </div>
  );
}

export default Products;

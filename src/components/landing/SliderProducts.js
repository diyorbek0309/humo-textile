import React from "react";
import Slider from "react-slick";
import { Container, Typography } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import SectionTitle from "../extra/SectionTitle";
import classes from "./Landing.css";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#400ccc",
        borderRadius: "50%",
        right: "-18px",
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#400ccc",
        borderRadius: "50%",
        left: "-18px",
      }}
      onClick={onClick}
    />
  );
};

export default function SliderProducts({ data }) {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    adaptiveHeight: true,
    initialSlide: 0,
    lazyLoad: "progressive",
    nextArrow: <SampleNextArrow className={classes.NextArrow} />,
    prevArrow: <SamplePrevArrow className={classes.PrevArrow} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container maxWidth="lg" className={classes.SliderProducts}>
      <SectionTitle title="Eng xaridorgir mahsulotlarimiz" />
      <Slider {...settings}>
        {data.products.map((product) => (
          <div className={classes.ProductItemWrap} key={product.image}>
            <img src={product.image} alt="Mahsulot" width="300" />
            <div className={classes.ProductDescription}>
              <Typography variant="h5" component="h2" align="center">
                {product.name}{" "}
                {product.isAvailable ? (
                  <CheckCircleIcon className={classes.Checkmark} />
                ) : (
                  <CancelIcon className={classes.Cancel} />
                )}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.ProductInfo}
              >
                <p>
                  {data.sizeName} <strong>{product.size}</strong>
                </p>
                <p>
                  {data.priceName} <strong>{product.price}</strong>
                </p>
              </Typography>
            </div>
          </div>
        ))}
      </Slider>
    </Container>
  );
}

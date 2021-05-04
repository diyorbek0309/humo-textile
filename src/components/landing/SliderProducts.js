import React, { Component } from "react";
import Slider from "react-slick";
import { Container } from "@material-ui/core";
import SectionTitle from "../extra/SectionTitle";
import classes from "./Landing.css";
import mens2 from "../../assets/img/products/mens/mens2.JPG";
import mens3 from "../../assets/img/products/mens/mens3.JPG";
import mens4 from "../../assets/img/products/mens/mens4.JPG";
import mens5 from "../../assets/img/products/mens/mens5.JPG";
import mens7 from "../../assets/img/products/mens/mens7.JPG";
import mens8 from "../../assets/img/products/mens/mens8.JPG";
import mens9 from "../../assets/img/products/mens/mens9.JPG";
import socks5 from "../../assets/img/products/mens/socks5.JPG";

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
      }}
      onClick={onClick}
    />
  );
};

export default class SliderProducts extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      adaptiveHeight: true,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
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
          <div>
            <img src={mens2} alt="Mahsulot" width="300" />
          </div>
          <div>
            <img src={mens3} alt="Mahsulot" width="300" />
          </div>
          <div>
            <img src={mens4} alt="Mahsulot" width="300" />
          </div>
          <div>
            <img src={mens5} alt="Mahsulot" width="300" />
          </div>
          <div>
            <img src={mens7} alt="Mahsulot" width="300" />
          </div>
          <div>
            <img src={socks5} alt="Mahsulot" width="300" />
          </div>
          <div>
            <img src={mens8} alt="Mahsulot" width="300" />
          </div>
          <div>
            <img src={mens9} alt="Mahsulot" width="300" />
          </div>
        </Slider>
      </Container>
    );
  }
}

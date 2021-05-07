import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import mens1 from "../../assets/img/webp/mens/mens1.webp";
import mens2 from "../../assets/img/webp/mens/mens2.webp";
import mens3 from "../../assets/img/webp/mens/mens3.webp";
import mens4 from "../../assets/img/webp/mens/mens4.webp";
import mens5 from "../../assets/img/webp/mens/mens5.webp";

const OurTeamGallery = () => {
  const images = [
    {
      original: mens1,
      thumbnail: mens1,
    },
    {
      original: mens2,
      thumbnail: mens2,
    },
    {
      original: mens3,
      thumbnail: mens3,
    },
    {
      original: mens4,
      thumbnail: mens4,
    },
    {
      original: mens5,
      thumbnail: mens5,
    },
  ];

  return images ? <ImageGallery items={images} /> : null;
};

export default OurTeamGallery;

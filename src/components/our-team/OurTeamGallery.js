import React from "react";
import axios from "axios";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import mens1 from "../../assets/img/products/mens/mens1.JPG";
import mens2 from "../../assets/img/products/mens/mens2.JPG";
import mens3 from "../../assets/img/products/mens/mens3.JPG";
import mens4 from "../../assets/img/products/mens/mens4.JPG";
import mens5 from "../../assets/img/products/mens/mens5.JPG";

const OurTeamGallery = () => {
  // const [images, setImages] = React.useState(null);

  // React.useEffect(() => {
  //   let shouldCancel = false;

  //   const call = async () => {
  //     const response = await axios.get(
  //       "https://google-photos-album-demo2.glitch.me/4eXXxxG3rYwQVf948"
  //     );
  //     if (!shouldCancel && response.data && response.data.length > 0) {
  //       setImages(
  //         response.data.map((url) => ({
  //           original: `${url}=w1024`,
  //           thumbnail: `${url}=w100`,
  //         }))
  //       );
  //     }
  //   };
  //   call();
  //   return () => (shouldCancel = true);
  // }, []);
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

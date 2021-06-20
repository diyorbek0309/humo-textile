import React, { useRef, useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";
import classes from "./Products.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";

export default function ProductItem({
  priceName,
  sizeName,
  image,
  name,
  size,
  price,
  isAvailable,
}) {
  const [visible, setVisible] = useState(false);
  const placeholderRef = useRef(null);
  useEffect(() => {
    if (!visible && placeholderRef.current) {
      const observer = new IntersectionObserver(([{ intersectionRatio }]) => {
        if (intersectionRatio > 0) {
          setTimeout(() => {
            setVisible(true);
          }, 1000);
        }
      });
      observer.observe(placeholderRef.current);
      return () => observer.disconnect();
    }
  }, [visible, placeholderRef]);

  return (
    <Zoom in={true}>
      <Card className={classes.ProductItemWrap}>
        <CardActionArea
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {visible ? (
            <CardMedia
              component="img"
              src={image}
              alt="Mahsulot"
              title="Mahsulot"
              className={classes.ProductItemImage}
            />
          ) : (
            <div
              style={{
                height: "420px",
                width: "100%",
                backgroundColor: "#EEE",
              }}
              aria-label="Mahsulot"
              ref={placeholderRef}
            >
              <CircularProgress color="secondary" className={classes.Spinner} />
            </div>
          )}
          <CardContent className={classes.ProductInfo}>
            <Typography variant="h5" component="h2" align="center">
              {name}{" "}
              {isAvailable ? (
                <CheckCircleIcon className={classes.Checkmark} />
              ) : (
                <CancelIcon className={classes.Cancel} />
              )}
            </Typography>
            <div style={{ marginLeft: "-20px" }}>
              <p>
                {sizeName} <strong>{size}</strong>
              </p>
              <p>
                {priceName} <strong>{price} so'm</strong>
              </p>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Zoom>
  );
}

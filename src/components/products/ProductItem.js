import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";
import classes from "./Products.css";

export default function ProductItem({
  priceName,
  sizeName,
  image,
  name,
  size,
  price,
}) {
  return (
    <Zoom in="true">
      <Card className={classes.ProductItemWrap}>
        <CardActionArea>
          <CardMedia
            className={classes.ProductItemImage}
            image={image}
            title="Mahsulot"
          />
          <CardContent>
            <Typography variant="h5" component="h2" align="center">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <p>
                {sizeName} <strong>{size}</strong>
              </p>
              <p>
                {priceName} <strong>{price}</strong>
              </p>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Zoom>
  );
}

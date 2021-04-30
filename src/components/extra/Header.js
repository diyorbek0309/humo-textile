import React from "react";
import { Typography } from "@material-ui/core";
import classes from "./Extra.css";

const Header = ({ header }) => {
  return (
    <div className={classes.HeaderWrap}>
      <Typography variant="h2" gutterBottom className={classes.HeaderTitle}>
        {header.title}
      </Typography>
      <Typography variant="h5" gutterBottom className={classes.HeaderText}>
        {header.text}
      </Typography>
    </div>
  );
};

export default Header;

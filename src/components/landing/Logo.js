import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

function Logo() {
  const useStyles = makeStyles(() => ({
    logo: {
      fontFamily: "Work Sans, sans-serif",
      fontWeight: 600,
      color: "#FFFEFE",
      textAlign: "left",
    },
  }));

  const { logo } = useStyles();

  return (
    <Typography variant="h6" component="h1" className={logo}>
      Humo - tekstil
    </Typography>
  );
}

export default Logo;

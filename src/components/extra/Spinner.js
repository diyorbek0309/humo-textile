import React from "react";
import classes from "./Extra.css";
import SpinnerGif from "../../assets/img/spinner.gif";

const Spinner = ({ width }) => {
  return (
    <div className={classes.Spinner}>
      <img src={SpinnerGif} alt="Spinner" width={width} />
    </div>
  );
};

export default Spinner;

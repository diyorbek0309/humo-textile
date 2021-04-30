import { Typography } from "@material-ui/core";
import classes from "../landing/Landing.css";

const SectionTitle = (props) => (
  <Typography variant="h3" color="primary" className={classes.SectionTitle}>
    {props.title}
  </Typography>
);

export default SectionTitle;

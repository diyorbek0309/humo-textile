import { Typography } from "@material-ui/core";
import classes from "./Extra.css";

const SectionTitle = (props) => (
  <Typography variant="h3" color="primary" className={classes.SectionTitle}>
    {props.title}
  </Typography>
);

export default SectionTitle;

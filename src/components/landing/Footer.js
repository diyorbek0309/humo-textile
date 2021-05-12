import React, { useState } from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  makeStyles,
} from "@material-ui/core";
import {
  Home,
  ShoppingCart,
  Person,
  ContactSupport,
  ExpandLess,
  ExpandMore,
  ChildCare,
  Group,
  Phone,
  Email,
  Telegram,
} from "@material-ui/icons";
import { useSelector } from "react-redux";
import { footerDataUz, footerDataRu } from "../../data";
import { Link } from "react-router-dom";
import classes from "../landing/Landing.css";

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
    paddingTop: 0,
    paddingBottom: theme.spacing(0),
  },
}));

const Footer = () => {
  const [open, setOpen] = useState(false);
  const styles = useStyles();

  const handleClick = () => {
    setOpen(!open);
  };

  let lang = useSelector((state) => state.language);

  let footerData;
  if (lang === "uz") {
    footerData = { ...footerDataUz };
  } else {
    footerData = { ...footerDataRu };
  }

  return (
    <div className={classes.FooterContainer}>
      <Grid container>
        <Grid item lg={4} className={classes.FooterLeft}>
          <h1 style={{ color: "#fff", fontFamily: "'Open Sans', sans-serif" }}>
            {footerData.titleLeft}
          </h1>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.FooterList}
          >
            <Link to="/">
              <ListItem button>
                <ListItemIcon>
                  <Home style={{ color: "#fff" }} />
                </ListItemIcon>
                <ListItemText primary={footerData.link[0]} />
              </ListItem>
            </Link>
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <ShoppingCart style={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText primary={footerData.link[1]} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link to="/products">
                  <ListItem button className={styles.nested}>
                    <ListItemIcon>
                      <Person style={{ color: "#fff" }} />
                    </ListItemIcon>
                    <ListItemText primary={footerData.nestedLinks[0]} />
                  </ListItem>
                </Link>
                <Link to="/products">
                  <ListItem button className={styles.nested}>
                    <ListItemIcon>
                      <Person style={{ color: "#fff" }} />
                    </ListItemIcon>
                    <ListItemText primary={footerData.nestedLinks[1]} />
                  </ListItem>
                </Link>
                <Link to="/products">
                  <ListItem button className={styles.nested}>
                    <ListItemIcon>
                      <ChildCare style={{ color: "#fff" }} />
                    </ListItemIcon>
                    <ListItemText primary={footerData.nestedLinks[2]} />
                  </ListItem>
                </Link>
              </List>
            </Collapse>
            <Link to="/">
              <ListItem button>
                <ListItemIcon>
                  <Group style={{ color: "#fff" }} />
                </ListItemIcon>
                <ListItemText primary={footerData.link[2]} />
              </ListItem>
            </Link>
            <Link to="/">
              <ListItem button>
                <ListItemIcon>
                  <ContactSupport style={{ color: "#fff" }} />
                </ListItemIcon>
                <ListItemText primary={footerData.link[3]} />
              </ListItem>
            </Link>
          </List>
        </Grid>
        <Grid item lg={4} className={classes.FooterMiddle}>
          <h1 style={{ color: "#fff", fontFamily: "'Open Sans', sans-serif" }}>
            {footerData.titleRight}
          </h1>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.FooterList}
          >
            <Link to="/">
              <ListItem button>
                <ListItemIcon>
                  <Phone style={{ color: "#fff" }} />
                </ListItemIcon>
                <ListItemText primary={footerData.tel[0]} />
              </ListItem>
            </Link>
            <Link to="/">
              <ListItem button>
                <ListItemIcon>
                  <Phone style={{ color: "#fff" }} />
                </ListItemIcon>
                <ListItemText primary={footerData.tel[1]} />
              </ListItem>
            </Link>
            <Link to="/">
              <ListItem button>
                <ListItemIcon>
                  <Email style={{ color: "#fff" }} />
                </ListItemIcon>
                <ListItemText primary="humo.textile@gmail.com" />
              </ListItem>
            </Link>
            <Link to="/">
              <ListItem button>
                <ListItemIcon>
                  <Telegram style={{ color: "#fff" }} />
                </ListItemIcon>
                <ListItemText primary="Telegram" />
              </ListItem>
            </Link>
          </List>
        </Grid>
        <Grid item lg={4} className={classes.FooterRight}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.FooterList}
          >
            <ListItem style={{ display: "flex", flexDirection: "column" }}>
              <h2
                style={{
                  color: "#fff",
                  fontFamily: "'Open Sans', sans-serif",
                  margin: "0",
                }}
              >
                {footerData.adresTitle}
              </h2>
              <h3
                style={{
                  color: "#fff",
                  fontFamily: "'Open Sans', sans-serif",
                  fontStyle: "italic",
                }}
              >
                {footerData.adres}
              </h3>
            </ListItem>
            <ListItem className={classes.Author}>
              <p>
                Created by{" "}
                <em>
                  <Link to="/">Diyorbek Olimov</Link>
                </em>
              </p>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;

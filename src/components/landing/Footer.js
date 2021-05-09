import React, { useState } from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
  makeStyles,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import GroupIcon from "@material-ui/icons/Group";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import PhoneIcon from "@material-ui/icons/Phone";
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
    footerData = {
      titleLeft: "Sayt xaritasi",
      link: ["Bosh sahifa", "Mahsulotlarimiz", "Bizning jamoa", "Aloqa"],
      nestedLinks: ["Erkaklar", "Ayollar", "Bolalar"],
      nestedUrls: ["/products", "/products", "/products"],
      url: ["/", "/products", "/our-team", "/contact"],
      titleRight: "Biz bilan bog'laning",
      tel: ["+99897 517 2808", "+99899 999 9999"],
      adresTitle: "Bizning manzil:",
      adres: "Xorazm viloyati Xonqa tumani Shiroq ko'chasi 60 - uy",
    };
  } else {
    footerData = {
      titleLeft: "Sayt xaritasi",
      link: ["Bosh sahifa", "Mahsulotlarimiz", "Bizning jamoa", "Контакть"],
      url: ["/", "/products", "/our-team", "/contact"],
      titleRight: "Biz bilan bog'laning",
      tel: ["+99897 517 2808", "+99899 999 9999"],
      adresTitle: "Bizning manzil:",
      adres: "Xorazm viloyati Xonqa tumani Shiroq ko'chasi 60 - uy",
      nestedLinks: ["Erkaklar", "Ayollar", "Bolalar"],
      nestedUrls: ["/products", "/products", "/products"],
    };
  }

  return (
    <div className={classes.FooterContainer}>
      <Grid container>
        <Grid item lg={6} className={classes.FooterLeft}>
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
                  <HomeIcon style={{ color: "#fff" }} />
                </ListItemIcon>
                <ListItemText primary={footerData.link[0]} />
              </ListItem>
            </Link>
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <ShoppingCartIcon style={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText primary={footerData.link[1]} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link to="/products">
                  <ListItem button className={styles.nested}>
                    <ListItemIcon>
                      <PersonIcon style={{ color: "#fff" }} />
                    </ListItemIcon>
                    <ListItemText primary={footerData.nestedLinks[0]} />
                  </ListItem>
                </Link>
                <Link to="/products">
                  <ListItem button className={styles.nested}>
                    <ListItemIcon>
                      <PersonIcon style={{ color: "#fff" }} />
                    </ListItemIcon>
                    <ListItemText primary={footerData.nestedLinks[1]} />
                  </ListItem>
                </Link>
                <Link to="/products">
                  <ListItem button className={styles.nested}>
                    <ListItemIcon>
                      <ChildCareIcon style={{ color: "#fff" }} />
                    </ListItemIcon>
                    <ListItemText primary={footerData.nestedLinks[2]} />
                  </ListItem>
                </Link>
              </List>
            </Collapse>
            <Link to="/">
              <ListItem button>
                <ListItemIcon>
                  <GroupIcon style={{ color: "#fff" }} />
                </ListItemIcon>
                <ListItemText primary={footerData.link[2]} />
              </ListItem>
            </Link>
            <Link to="/">
              <ListItem button>
                <ListItemIcon>
                  <ContactSupportIcon style={{ color: "#fff" }} />
                </ListItemIcon>
                <ListItemText primary={footerData.link[3]} />
              </ListItem>
            </Link>
          </List>
        </Grid>
        <Grid item lg={6} className={classes.FooterRight}>
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
                  <PhoneIcon style={{ color: "#fff" }} />
                </ListItemIcon>
                <ListItemText primary={footerData.tel[0]} />
              </ListItem>
            </Link>
            <Link to="/">
              <ListItem button>
                <ListItemIcon>
                  <PhoneIcon style={{ color: "#fff" }} />
                </ListItemIcon>
                <ListItemText primary={footerData.tel[1]} />
              </ListItem>
            </Link>
            <Divider light />
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
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;

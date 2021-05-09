import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import LangSelect from "./LangSelect";
import Logo from "./Logo";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#400CCC",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 1080px)": {
      paddingLeft: 0,
    },
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
    "@media (max-width: 1024px)": {
      marginLeft: "16px",
      size: "17px",
    },
    "@media (max-width: 840px)": {
      marginLeft: "14px",
      size: "14px",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));

export default function Navbar() {
  const { header, menuButton, toolbar, drawerContainer } = useStyles();
  let lang = useSelector((state) => state.language);

  let headersData;

  if (lang === "uz") {
    headersData = [
      {
        label: "Bosh sahifa",
        href: `/`,
      },
      {
        label: "Mahsulotlarimiz",
        href: `/products`,
      },
      {
        label: "Bizning jamoa",
        href: `/our-team`,
      },
      {
        label: "Aloqa",
        href: `/contact`,
      },
    ];
  } else {
    headersData = [
      {
        label: "Главная",
        href: `/`,
      },
      {
        label: "Наши продукты",
        href: `/products`,
      },
      {
        label: "Наша команда",
        href: `/our-team`,
      },
      {
        label: "Контакть",
        href: `/contact`,
      },
    ];
  }

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 768
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        <Logo />
        <div>
          {getMenuButtons()}
          <LangSelect />
        </div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>
            {getDrawerChoices()}
            <LangSelect />
          </div>
        </Drawer>

        <div>
          <Logo />
        </div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none", color: "#400ccc" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <AppBar className={header}>
      {mobileView ? displayMobile() : displayDesktop()}
    </AppBar>
  );
}

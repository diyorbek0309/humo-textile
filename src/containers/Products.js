import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/extra/Header";
import classes from "../components/products/Products.css";
import { Container, makeStyles, AppBar, Tabs, Tab } from "@material-ui/core";
import ProductItem from "../components/products/ProductItem";
import { productsDataUz, productsDataRu } from "../productData";
import PersonIcon from "@material-ui/icons/Person";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import TabPanel from "../components/extra/TabPanel";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 1640,
    backgroundColor: theme.palette.background.paper,
  },
  AppBar: {
    backgroundColor: "#0ca5cc",
  },
  tab: {
    maxWidth: 540,
    fontSize: 12,
    padding: 3,
    [theme.breakpoints.down("sm")]: {
      fontSize: 9,
      padding: 2,
    },
  },
}));

const Products = () => {
  const styles = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let lang = useSelector((state) => state.language);

  let productsData;
  if (lang === "uz") {
    productsData = { ...productsDataUz };
  } else {
    productsData = { ...productsDataRu };
  }

  return (
    <>
      <div className={classes.ProductContainer}>
        <Header header={productsData.header} />
        <Container
          maxWidth="lg"
          className={classes.ProductsWrap}
          style={{ display: "flex" }}
        >
          <div className={styles.root}>
            <AppBar position="static" color="inherit" className={styles.AppBar}>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                className={classes.Tab}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Tab
                  label={productsData.tabTitle[0]}
                  icon={<PersonIcon />}
                  {...a11yProps(0)}
                  style={{ width: "33%", color: "#fff" }}
                  className={styles.tab}
                />
                <Tab
                  label={productsData.tabTitle[1]}
                  icon={<PersonIcon />}
                  {...a11yProps(1)}
                  style={{ width: "33%", color: "#fff" }}
                  className={styles.tab}
                />
                <Tab
                  label={productsData.tabTitle[2]}
                  icon={<ChildCareIcon />}
                  {...a11yProps(2)}
                  style={{ width: "33%", color: "#fff" }}
                  className={styles.tab}
                />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              {productsData.men.map((man, index) => (
                <ProductItem
                  key={index}
                  priceName={productsData.priceName}
                  sizeName={productsData.sizeName}
                  image={man.image}
                  name={man.name}
                  size={man.size}
                  price={man.price}
                  isAvailable={man.isAvailable}
                />
              ))}
            </TabPanel>
            <TabPanel value={value} index={1}>
              {productsData.woman.map((woman, index) => (
                <ProductItem
                  key={index}
                  priceName={productsData.priceName}
                  sizeName={productsData.sizeName}
                  image={woman.image}
                  name={woman.name}
                  size={woman.size}
                  price={woman.price}
                  isAvailable={woman.isAvailable}
                />
              ))}
            </TabPanel>
            <TabPanel value={value} index={2}>
              {productsData.child.map((child, index) => (
                <ProductItem
                  key={index}
                  priceName={productsData.priceName}
                  sizeName={productsData.sizeName}
                  image={child.image}
                  name={child.name}
                  size={child.size}
                  price={child.price}
                  isAvailable={child.isAvailable}
                />
              ))}
            </TabPanel>
            <div className={classes.Information}>
              <p>
                Hozirda savdoda mavjud bo'lgan mahsulotlar -{" "}
                <CheckCircleIcon className={classes.Checkmark} />
              </p>
              <p>
                Hozirda savdoda mavjud bo'lmagan mahsulotlar -{" "}
                <CancelIcon className={classes.Cancel} />
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Products;

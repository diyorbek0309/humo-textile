import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/landing/Navbar";
import Main from "./containers/Main";
import Contact from "./containers/Contact";
import Products from "./containers/Products";
import Footer from "./components/landing/Footer";
import OurTeam from "./containers/OurTeam";
import Spinner from "./components/extra/Spinner";

const App = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);

  return (
    <Router>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Navbar />
          <Route exact path="/" component={Main} />
          <Switch>
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/our-team" component={OurTeam} />
          </Switch>
          <Footer />
        </>
      )}
    </Router>
  );
};

export default App;

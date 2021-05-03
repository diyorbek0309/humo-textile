import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/landing/Navbar";
import Main from "./containers/Main";
import Contact from "./containers/Contact";
import Products from "./containers/Products";
import Footer from "./components/landing/Footer";
import OurTeam from "./containers/OurTeam";
// import NotFound from "./components/landing/NotFound";

const App = () => {
  // const [loading, setloading] = useState(false);

  // useEffect(() => {
  //   setloading(true);
  // }, []);

  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Main} />
      <Switch>
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/our-team" component={OurTeam} />
        {/* <Route path="*" component={NotFound} /> */}
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;

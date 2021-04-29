import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/landing/Navbar";
import Main from "./containers/Main";
import Contact from "./containers/Contact";
import Products from "./containers/Products";
import "./App.css";
import OurTeam from "./containers/OurTeam";
import NotFound from "./components/landing/NotFound";

const App = () => {
  // const [loading, setloading] = useState(false);

  // useEffect(() => {
  //   setloading(true);
  // }, []);

  return (
    <Router>
      {/* {loading ? <Redirect to={"/" + lang} /> : null} */}
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/our-team" component={OurTeam} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;

import React from "react";
import Header from "./components/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Club from "./pages/Club";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contacts from "./pages/Contacts";
import Reg from "./pages/Registration";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/reg" component={Reg} />
      </Switch>
      <Club /> 
    </Router>
  );
}

export default App;

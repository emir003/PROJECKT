import React from "react";
import Header from "./components/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import Club from "./components/Club";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="page-container">
      <div className="content-wrapp">
        <Router>
         
          <Header />
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route path="/club/:club_id" component={Club} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;

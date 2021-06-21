import React, { Component } from "react";
import { Navbar,Nav,FormControl, Container,Form,Button } from "react-bootstrap";
import { BrowserRouter as Router,Switch,Route,NavLink,Link} from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import Contacts from "../Pages/Contacts";
import Reg from "../Pages/Registration"


export default class Header extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <header>
            <Container>
              <Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    <NavLink to="/Home">Home</NavLink>
                    <NavLink to="/about">About us</NavLink>
                    <NavLink to="/contacts">Contacts</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                  </Nav>
                  <Form inline>
                    <FormControl
                      type="tex"
                      placeholder="Search"
                      className="mr-sm-2"
                    />
                    <Button variant="outline-info">Search</Button>
                  </Form>
                </Navbar.Collapse>
              </Navbar.Brand>
              <NavLink to="/reg">
              <div>reg</div>
              </NavLink>
            </Container>
            </header>
          </Navbar>

          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/reg" component={Reg} />
          </Switch>
        </Router>
      </>
    );
  }
}

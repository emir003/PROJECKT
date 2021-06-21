import React, { Component } from "react";
import {
  Navbar,
  Nav,
  FormControl,
  Container,
  Form,
  Button,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <header>
            <Container>
              <Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    <NavLink to="/">Home</NavLink>
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
      </>
    );
  }
}

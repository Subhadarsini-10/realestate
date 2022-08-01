import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavbarComp.css";

export default class NavbarComp extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand className="h3" href="#" style={{ color: "white" }}>
              🏬 Estatery
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "120px" }}
                navbarScroll
              >
                <Nav.Link
                  href="#action1"
                  className="nav-item active"
                  style={{ color: "white" }}
                >
                  Rent
                </Nav.Link>
                <Nav.Link href="#action1" class="h2" style={{ color: "white" }}>
                  Buy
                </Nav.Link>
                <Nav.Link href="#action1" class="h2" style={{ color: "white" }}>
                  Sell
                </Nav.Link>
                <NavDropdown
                  title="Manage Property"
                  id="navbarScrollingDropdown"
                  style={{ color: "white" }}
                >
                  <NavDropdown.Item href="#action3">
                    Action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Resources" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Button variant="outline-success mx-3">Login</Button>
                <Button variant="btn btn-success">Signup</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <br />
      </div>
    );
  }
}

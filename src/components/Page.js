import React, { useState } from "react";
import Menu from "./Menu";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import "./Page.css";

export const Page = () => {
  const [items, setItems] = useState(Menu);

  const filterItem = (categItem) => {
    const updatedItem = Menu.filter((curElem) => {
      return curElem.category === categItem;
    });
    setItems(updatedItem);
  };

  return (
    <>
      <h1 class="h1">
        Find your next <Badge bg="secondary">PERFECT</Badge> place with ease.
      </h1>

      <Navbar bg="dark" expand="lg my-2">
        <Container>
          <Navbar.Brand class="h2">
            <Badge bg="secondary">Search Properties to Rent</Badge>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Navbar down menu*/}

      <Container className="container"></Container>

      <div className="menu-tabs container fluid ">
        <div className="menu-tab d-flex justify-content-around my-5">
          <button
            className="btn btn-success"
            onClick={() => filterItem("rent")}
          >
            Rent property
          </button>
          <button className="btn btn-success" onClick={() => filterItem("buy")}>
            Buy property
          </button>
          <button
            className="btn btn-success"
            onClick={() => filterItem("sell")}
          >
            Sell property
          </button>
          <button
            className="btn btn-success"
            onClick={() => filterItem("rent")}
          >
            Manage Property
          </button>
          <button className="btn btn-success" onClick={() => setItems(Menu)}>
            All Items
          </button>
        </div>
      </div>
      <hr></hr>

      {/* main items section */}

      <div className="menu-items container-fluid mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-0">
              {items.map((elem) => {
                const { p, name, image, price, description } = elem;

                return (
                  <div className="item1 col-12 col-md-8 col-lg-6 col-xl-4 my-3 mx-2">
                    <div className="row Item-inside">
                      {/* for images */}
                      <div className="col-12 col-md-12 col-lg-4 img-div">
                        <img src={image} alt={name} className="img-fluid" />
                      </div>
                      {/** menu item description */}
                      <div className="col-12 col-md-12 col-lg-8">
                        <div className="main-title pt-4 pb3">
                          <h1>{name}</h1>
                          <p>{p}</p>
                        </div>
                        <div className="menu-price-book">
                          <div className="price-book-divide d-flex justify-content-between">
                            <h2>{price}</h2>
                            <button className="btn btn-success">
                              |コ Popular
                            </button>
                          </div>
                          <p>{description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <footer>@All copyrights Reserved 2022</footer>
    </>
  );
};

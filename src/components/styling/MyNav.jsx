import React, { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useRouteMatch } from "react-router-dom";

import Signout from "../Signout";

const MyNav = () => {
  let { url } = useRouteMatch();
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link className="navbar-brand" to="/">
          Uberishi
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to={`${url}/trips`}>
              Trips
            </Link>
            <Link className="nav-link" to={`${url}/yourtrips`}>
              Reservations
            </Link>
          </Nav>
          <Nav>
            <Link className="nav-link" to={`${url}/profile`}>
              Profile
            </Link>
            <Signout>Log out</Signout>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MyNav;

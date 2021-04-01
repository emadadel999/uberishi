import React, { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useRouteMatch } from "react-router-dom";

import Signout from "../Signout";

const MyNav = () => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };
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
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item> */}

              <NavDropdown.Item href="#action/3.2">
                <Link to={`${url}/profile`}>
                  Profile
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Signout>Log out</Signout>

          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* <Link className="nav-link" to={`${url}/profile`}>
        Profile
      </Link>

      <Signout>Log out</Signout> */}
    </>
  );
};

export default MyNav;

import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Signout from "../Signout";

const MyNav = () => {
  const { currentUser } = useSelector((state) => state.userReducer);
  const role = currentUser ? currentUser.idRole : 0;
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link className="navbar-brand" to="/">
          Uberishi
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to='/trips'>
              Trips
            </Link>
            <Link className="nav-link" to='/yourtrips'>
              {role === 1 && "Create Trip"}
              {role === 2 && "Reservation"}
            </Link>
          </Nav>
          <Nav>
            <Link className="nav-link" to='/'>
              {currentUser.email}
            </Link>
            <Signout>Log out</Signout>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MyNav;

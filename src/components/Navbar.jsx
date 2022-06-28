import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Navbar,
  Container,
  Breadcrumb
} from 'react-bootstrap'

const Header = ({planetName, residentsList, residentName }) => {

  let setActive = (crumbs) => {
    let active = true;
    if (crumbs === 'allPlanets') {
      if (planetName) {
        active = false;
      }
    } else if (crumbs === 'planetResidents') {
      if (residentName) {
        active = false;
      }
    }
    return active;
  }

  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <img
            src="logo.png"
            width="100"
            className="d-inline-block align-center"
            alt="Logo"
          />
        </Navbar.Brand>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={NavLink} linkProps={{ to: "/" }} active={setActive('allPlanets')}>
              All Planets
            </Breadcrumb.Item>
            {planetName ?
            <Breadcrumb.Item  linkAs={NavLink} linkProps={{ to: "/planet-residents", state: {residentsList, planetName} }} active={setActive('planetResidents')}>
              {planetName}
            </Breadcrumb.Item>
            : null}
            {residentName ?
            <Breadcrumb.Item active>
              {residentName}
            </Breadcrumb.Item>
            : null}
          </Breadcrumb>
      </Container>
    </Navbar>
  );
};

export default Header;
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #f7b731;
  padding: 1rem;
`;

const NavItem = styled(Link)`
  background-color: white;
`;

export default () => (
  <header>
    <Nav>
      <div>
        <NavItem to="/">Redux Form</NavItem>
      </div>
      <div>
        <NavItem to="/todos">Offers</NavItem>
        <NavItem to="/">Short Form</NavItem>
        <NavItem to="/">Long Form</NavItem>
      </div>
    </Nav>
  </header>
);

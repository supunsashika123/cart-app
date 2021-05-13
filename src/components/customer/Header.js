import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" style={{ paddingLeft: 20, paddingRight: 20 }}>
        <NavbarBrand href="/">Food Court!</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavbarText style={{ color: 'red', marginRight: 20 }}>Welcome! Supun</NavbarText>
            <NavItem>
              <NavLink href="/">Food Items</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/cart">My Cart</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/orders">My Orders</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}


export default Header

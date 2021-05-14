import React, { useState, useContext } from 'react';
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
import { AppContext } from '../../store';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { state, setState } = useContext(AppContext)

  const toggle = () => setIsOpen(!isOpen);

  const logout = () => {
    localStorage.clear()
    window.location.replace("/login")
  }


  return (
    <div>
      <Navbar color="light" light expand="md" style={{ paddingLeft: 20, paddingRight: 20 }}>
        <NavbarBrand href="/">Food Court!</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavbarText style={{ color: 'red', marginRight: 20 }}>Welcome! {state.user.name}</NavbarText>
            <NavItem>
              <NavLink href="/">Food Items</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/cart">My Cart</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/orders">My Orders</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => logout()}>Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}


export default Header

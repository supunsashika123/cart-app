import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';
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
  const history = useHistory()

  const toggle = () => setIsOpen(!isOpen);

  const logout = () => {
    localStorage.clear()
    window.location.replace("/login")
  }

  const gotoRoute = (nextRoute) => {
    history.push(nextRoute)
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
              <NavLink onClick={() => gotoRoute("/")}>Food Items</NavLink>
            </NavItem>
            {Object.keys(state.cart).length > 1 && <NavItem>
              <NavLink onClick={() => gotoRoute("/cart")}>My Cart</NavLink>
            </NavItem>}
            <NavItem>
              <NavLink onClick={() => gotoRoute("/orders")}>My Orders</NavLink>
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
